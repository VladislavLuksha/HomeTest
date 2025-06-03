export interface AirportAttribute {
    name: string;
    [key: string]: unknown;
}
  
export interface Airport {
    id: string;
    type: string;
    attributes: AirportAttribute;
}
  
export interface AirportsResponse {
    data: Airport[];
}
  
export interface DistanceAttributes {
    kilometers: number;
    miles: number;
}
  
export interface DistanceResponse {
    data: {
      id: string;
      type: string;
      attributes: DistanceAttributes;
    };
}