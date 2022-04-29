import { gql } from '@apollo/client';

// schema for all launches
export const LAUNCHES_SCHEMA = gql`
  query Launches {
    launches {
      links {
        patch {
          small
        }
      }
      failures {
        time
        altitude
        reason
      }
      rocket {
        name
        id
      }
      success
      name
      details
      flight_number
      date_local
      id
    }
  }
`;

//  schema for launch searched by id
export const LAUNCH_SCHEMA = gql`
  query Launch($id: String!) {
    launch(id: $id) {
      links {
        patch {
          small
        }
      }
      failures {
        time
        altitude
        reason
      }
      rocket {
        name
        id
      }
      success
      name
      details
      flight_number
      date_local
      id
    }
  }
`;

//  schema for all rockets
export const ROCKETS_SCHEMA = gql`
  query Rockets {
    rockets {
      height {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      name
      active
      first_flight
      description
      id
    }
  }
`;

//  schema for rocket searched by id
export const ROCKET_SCHEMA = gql`
  query Rocket($id: String!) {
    rocket(id: $id) {
      height {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      name
      active
      first_flight
      description
      id
    }
  }
`;
