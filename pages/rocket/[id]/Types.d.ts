export interface RocketsProps {
  rocket: {
    active: boolean;
    description: string;
    first_flight: string;
    height: {
      feet: number;
      meters: number;
    };
    id: string;
    name: string;
    mass: {
      kg: number;
      lb: number;
    };
  };
}

export interface RocketInterface {
  description: string;
  first_flight: string;
  height: {
    feet: number;
    meters: number;
  };
  id: string;
  name: string;
  mass: {
    kg: number;
    lb: number;
  };
}
