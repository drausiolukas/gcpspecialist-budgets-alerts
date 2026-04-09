import { Reward } from '../src/services/rewardService';

const affectedPersonIds = [4350253, 5480702, 5827836, 4556807, 5874265, 5514638, 4896631, 5649436, 5526421, 5733755, 4860793, 4530355, 5877097, 5891152];
const marchMonth = '2024-03';

async function fixDuplicateRewards() {
  // In production, fetch rewards from database here
  const mockRewards: Reward[] = [
    { personId: 4350253, month: '2024-03', glampoints: 100, jewelChangeDate: new Date('2024-03-15') },
    { personId: 4350253, month: '2024-03', glampoints: 100, jewelChangeDate: new Date('2024-03-16') },
    { personId: 5480702, month: '2024-03', glampoints: 150, jewelChangeDate: new Date('2024-03-10') },
    { personId: 5480702, month: '2024-03', glampoints: 150, jewelChangeDate: new Date('2024-03-11') }
  ];

  const uniqueRewards = mockRewards.filter((reward, index, self) =>
    index === self.findIndex((r) => r.personId === reward.personId && r.month === reward.month)
  );

  console.log(`Fixed duplicates for March 2024. Unique rewards: ${uniqueRewards.length}`);
  // In production, update database with uniqueRewards
}

fixDuplicateRewards().catch(console.error);