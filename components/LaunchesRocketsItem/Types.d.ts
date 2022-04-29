export interface ItemProps {
  isLaunches: boolean; //  launches & rockets
  item: {
    name: string; //  launches & rockets
    id: string; //  launches & rockets
    success?: boolean; // launches
    active?: boolean; //  rockets
    links?: {
      patch: {
        small: string; //  launches
      };
    };
  };
}
