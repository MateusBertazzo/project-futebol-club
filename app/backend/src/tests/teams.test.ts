import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando Teams', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
  afterEach(() => {
    sinon.restore();
  });

  it('Testando Rota getAll',async () => {
    const teamsMock = [
      {
        "id": 1,
        "teamName": "Avaí/Kindermann"
      },
      {
        "id": 2,
        "teamName": "Bahia"
      },
    ] 
    sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);

    const res: Response = await chai.request(app).get('/teams').send(); 

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(teamsMock);
    expect(res.body.length).to.be.equal(2);
  });

  it('Testando Rota getById',async () => {
    const teamMock = {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }
    sinon.stub(Team, 'findByPk').resolves(teamMock as Team);

    const res: Response = await chai.request(app).get('/teams/1').send(); 

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(teamMock);
  });
});
