import { expect } from 'chai';
import { AirportService } from '../../../src/services/airport.service';

describe('AirportGap API Tests', () => {
  it('should return exactly 30 airports', async () => {
    const res = await AirportService.getAirports();

    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array').with.lengthOf(30);
  });

  it('should contain specific airport names', async () => {
    const expectedAirports = [
      'Akureyri Airport',
      'St. Anthony Airport',
      'CFB Bagotville',
    ];

    const res = await AirportService.getAirports();
    const airportNames = res.body.data.map((a: any) => a.attributes.name);

    expectedAirports.forEach((name) =>
      expect(airportNames).to.include(name)
    );
  });

  it('should calculate distance between KIX and NRT > 400 km', async () => {
    const res = await AirportService.getDistance('KIX', 'NRT');
    const distance = res.body.data.attributes.kilometers;

    expect(res.status).to.equal(200);
    expect(distance).to.be.a('number').and.to.be.greaterThan(400);
  });
});