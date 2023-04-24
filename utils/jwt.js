import Jwt from "jsonwebtoken";
import moment from 'moment'
async function geraToken(user) {
  const token = Jwt.sign(
    {
      nome: user.nome,
      email: user.email,
      tipo: user.tipo,
    },
    process.env.JWTKEY
  );
  return token;
}

async function validaToken(req, res, next) {
  try {
    var token = req.headers["x-access-token"];
    var decoded = Jwt.verify(token, process.env.JWTKEY);
    const issuedAt = moment.unix(decoded.iat);
    const now = moment();
    const diffInSeconds = now.diff(issuedAt, 'seconds');

    //1 hora
    if (diffInSeconds > 3600) {
      return res.status(401).send({ message: "Token expirado" });
    }

    if (decoded.tipo != "Adm") {
      return res.status(400).send({ message: "Somente ADM pode executar essa operação" });
    }
    next();
  } catch (error) {
    return res.status(401).send({ message: "falha na autenticação" });
  }
}

export default {
  geraToken,
  validaToken
};
