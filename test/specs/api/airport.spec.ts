import { expect } from 'chai';
import { AirportService } from '../../../src/services/airport.service';

describe('AirportGap API Tests', () => {
  it('should return exactly 30 airports', async () => {
    const data = await AirportService.getAirports();

    expect(data.data).to.be.an('array').with.lengthOf(30);
  });

  it('should contain specific airport names', async () => {
    const expectedAirports = [
      'Akureyri Airport',
      'St. Anthony Airport',
      'CFB Bagotville',
    ];

    const data = await AirportService.getAirports();
    const airportNames = data.data.map((a) => a.attributes.name);

    expectedAirports.forEach((name) =>
      expect(airportNames).to.include(name)
    );
  });

  it('should calculate distance between KIX and NRT > 400 km', async () => {
    const data = await AirportService.getDistance('KIX', 'NRT');
    const distance = data.data.attributes.kilometers;

    expect(distance).to.be.a('number').and.to.be.greaterThan(400);
  });
});