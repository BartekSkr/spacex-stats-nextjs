// export interface LaunchesProps {
//   loading: boolean;
//   launches: {
//     date_local: string;
//     details: string;
//     failures?: {
//       altitude: number | null;
//       time: number;
//       reason: string;
//     }[];
//     flight_number: number;
//     id: string;
//     links: {
//       patch: {
//         small: string;
//       };
//     };
//     name: string;
//     rocket: {
//       id: string;
//       name: string;
//     };
//     success: boolean;
//   }[];
// }

export interface LaunchesInterface {
  links: {
    patch: {
      small: string;
    };
  };
  success: boolean;
  name: string;
  id: string;
}

export interface RocketsProps {
  loading: boolean;
  rockets: {
    name: string;
    active: boolean;
    id: string;
    description: string;
    first_flight: string;
    height: {
      feet: number;
      meters: number;
    };
    mass: {
      kg: number;
      lb: number;
    };
  }[];
}

export interface RocketsInterface {
  name: string;
  active: boolean;
  id: string;
}
