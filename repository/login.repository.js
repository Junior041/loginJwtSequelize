import UsuarioModels from "./models/usuario.models.js";
async function criarTabela() {
  try {
    const Usuario = UsuarioModels
    await Usuario.sync({force: true})
  } catch (error) {
    return false;
  }
}
async function criarUsuario(dados) {
  try {
    const result = await UsuarioModels.create(dados);
    return result;
  } catch (error) {
    return false;
  }
}
async function buscaEmail(email) {
  try {
    const result = await UsuarioModels.findAll({
      where: {
        email: email,
      },
    });
    if (result.length > 0) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
}
async function buscarUsuario(email) {
  try {
    const result = await UsuarioModels.findAll({
      where: {
        email: email,
      },
    });
    return result
  } catch (error) {
    return false;
  }
}
export default {
  criarTabela,
  criarUsuario,
  buscaEmail,
  buscarUsuario,
};
