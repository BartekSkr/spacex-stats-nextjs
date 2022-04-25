export interface ItemDetailsProps {
  launches: boolean; // launches & rockets
  name: string; // launches & rockets
  successActive: boolean; // launches & rockets
  startDate: string; // launches & rockets
  details: string; // launches & rockets
  launchBadge?: string; // launches
  launchFailures?: any; // launches
  rocketHeight?: number; // rockets
  rocketMass?: number; // rockets
  launchRocketName?: string; // launches
}
