import { RewardService } from '../rewardService';

describe('RewardService', () => {
  let service: RewardService;

  beforeEach(() => {
    service = new RewardService();
  });

  test('should not add duplicate rewards for same personId and month', async () => {
    await service.processJewelChangeReward(123, '2024-03', 100, new Date());
    await service.processJewelChangeReward(123, '2024-03', 100, new Date());
    expect(service.getRewards().length).toBe(1);
  });

  test('should add rewards for different months', async () => {
    await service.processJewelChangeReward(123, '2024-03', 100, new Date());
    await service.processJewelChangeReward(123, '2024-04', 100, new Date());
    expect(service.getRewards().length).toBe(2);
  });

  test('should add rewards for different personIds in same month', async () => {
    await service.processJewelChangeReward(123, '2024-03', 100, new Date());
    await service.processJewelChangeReward(456, '2024-03', 150, new Date());
    expect(service.getRewards().length).toBe(2);
  });
});