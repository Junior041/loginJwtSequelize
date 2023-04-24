//responsavel por chamar o repository, e fazer regras de negocio
import loginRepository from "../repository/login.repository.js";
import bcrypt from "../utils/bcrypt.js";
import jwt from "../utils/jwt.js";

async function criarTabela() {
  return await loginRepository.criarTabela();
}

async function criarUsuario(dados) {
  if (!await loginRepository.buscaEmail(dados.email)) {
    return {sucess : true, message: 'Erro ao criar'}
  }
  if (await loginRepository.criarUsuario(dados)) {
    return {sucess : true, message: 'Criado com sucesso'}
  }else{
    return {sucess : false, message: 'Erro ao criar'}
  }
}

async function buscarUsuario(dados) {
  const usuario = await loginRepository.buscarUsuario(dados.email)
  if (await bcrypt.compareBcryptsFunction(dados.senha, usuario[0].senha)) {
    return {sucess : true, message: await jwt.geraToken(usuario[0])}
  }else{
    return {sucess : false, message: 'usuario/Senha incorretos'}
  }
}

export default {
  criarTabela,
  criarUsuario,
  buscarUsuario,
};
