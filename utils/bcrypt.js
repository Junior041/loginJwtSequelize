import bcrypt from "bcrypt";

async function bcryptsFunction(senha) {
  return await bcrypt.hash(senha, 10);
}

async function compareBcryptsFunction(senhaRequest, senhaBanco) {
  return await bcrypt.compare(senhaRequest, senhaBanco);
}
export default {
  bcryptsFunction,
  compareBcryptsFunction,
};
