import loginService from "../service/login.service.js";
import bcrypt from "../utils/bcrypt.js";
async function criarTabela(req, res, next) {
  try {
    await loginService.criarTabela();
    return res.status(200).send("Criado");
  } catch (err) {
    return res.status(400).send({ message: "erro" });
  }
}
async function criarUsuario(req, res, next) {
  try {
    if ( !req.body.nome || !req.body.email || !req.body.senha || !req.body.tipo
    ) {
      return res.status(400).send({ message: "erro ao criar" });
    }
    const dados = {
      nome: req.body.nome,
      email: req.body.email,
      senha: await bcrypt.bcryptsFunction(req.body.senha),
      tipo: req.body.tipo,
    };
    const criaUsuario = await loginService.criarUsuario(dados);
    if (criaUsuario.sucess) {
      return res.status(200).send({ message: criaUsuario.message });
    } else {
      return res.status(400).send({ message: criaUsuario.message });
    }
  } catch (err) {
    return res.status(400).send({ message: "erro" });
  }
}
async function buscarUsuario(req, res, next) {
  try {
    if (!req.body.email || !req.body.senha) {
      return res.status(400).send({ message: "erro" });
    }
    const dados = {
      email: req.body.email,
      senha: req.body.senha
    }
    const resonse = await loginService.buscarUsuario(dados)
    if (resonse.sucess) {
      return res.status(200).send({message: resonse.message})
    }else{
      return res.status(400).send({message: resonse.message})
    }
  } catch (err) {
    return res.status(400).send({ message: "Erro" });
  }
}
async function testeLogin(req, res, next){
  try {
    return res.status(200).send({message: 'logado como admin'})
  } catch (error) {
    
  }
}
export default {
  buscarUsuario,
  criarTabela,
  criarUsuario,
  testeLogin,
};
