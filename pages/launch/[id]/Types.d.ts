export interface LaunchProps {
  loading: boolean;
  launch: {
    date_local: string;
    details: string;
    failures?: {
      altitude: number | null;
      time: number;
      reason: string;
    }[];
    flight_number: number;
    id: string;
    links: {
      patch: {
        small: string;
      };
    };
    name: string;
    rocket: {
      id: string;
      name: string;
    };
    success: boolean;
  };
}

export interface LaunchInterface {
  date_local: string;
  details: string;
  failures?: {
    altitude: number | null;
    time: number;
    reason: string;
  }[];
  flight_number: number;
  id: string;
  links: {
    patch: {
      small: string;
    };
  };
  name: string;
  rocket: {
    id: string;
    name: string;
  };
  success: boolean;
}
