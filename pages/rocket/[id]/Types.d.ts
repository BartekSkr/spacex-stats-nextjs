export interface RocketsProps {
  loading: boolean;
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
