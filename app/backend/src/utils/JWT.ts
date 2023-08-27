// Gerador/verificador de tokens JWT pego do Course e adaptado para o projeto.
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  email: string;
};

export default class JWT {
  static sign(payload: TokenPayload) {
    return jwt.sign(payload, secret);
  }

  static verify(token: string) {
    return jwt.verify(token, secret);
  }
}
