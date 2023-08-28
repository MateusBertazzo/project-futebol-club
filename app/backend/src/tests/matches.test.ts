import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Matche from '../database/models/Matche';
import matchesMock from './mocks/matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando Matches', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('Testando Rota getAll de matches', async () => {
        sinon.stub(Matche, 'findAll').resolves(matchesMock as Matche[]);

        const res: Response = await chai.request(app).get('/matches');

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(matchesMock);
    });
})