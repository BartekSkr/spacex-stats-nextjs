export interface ItemDetailsProps {
  launches: boolean; // launches & rockets
  name: string; // launches & rockets
  successActive: boolean; // launches & rockets
  startDate: string; // launches & rockets
  details: string; // launches & rockets
  launchBadge?: string; // launches
  launchFailures?: {
    time: number;
    altitude: number | null;
    reason: string;
  }[]; // launches
  rocketHeight?: number; // rockets
  rocketMass?: number; // rockets
  launchRocketName?: string; // launches
}
