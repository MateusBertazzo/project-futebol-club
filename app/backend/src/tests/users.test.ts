import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import  User  from '../database/models/User';
import { login, userMock } from './mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando Users', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('Testando Rota de Login caso passados Email and Password corretos', async () => {
        sinon.stub(User, 'findOne').resolves(userMock as User);

        const res: Response = await chai.request(app).post('/login').send(login);

        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('token');
    })

    it('Testando Rota GET de login em caso de token valido', async () => {
        sinon.stub(User, 'findOne').resolves(userMock as User);

        const { body: { token } }: Response = await chai.request(app).post('/login').send(login);

        const res: Response = await chai.request(app).get('/login/role').set({ authorization: token }).send();

        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('role');
        expect(res.body.role).to.be.equal('admin');
    });
});