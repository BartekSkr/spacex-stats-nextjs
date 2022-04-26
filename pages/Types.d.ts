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

export interface RocketsInterface {
  name: string;
  active: boolean;
  id: string;
}
