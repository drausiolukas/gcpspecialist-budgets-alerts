export interface Reward {
  personId: number;
  month: string;
  glampoints: number;
  jewelChangeDate: Date;
}

export class RewardService {
  private rewards: Reward[] = [];

  async processJewelChangeReward(personId: number, month: string, glampoints: number, jewelChangeDate: Date): Promise<void> {
    const existingReward = this.rewards.find(
      (r) => r.personId === personId && r.month === month
    );
    if (existingReward) {
      console.warn(`Duplicate reward detected for PersonID ${personId} in ${month}. Skipping.`);
      return;
    }
    this.rewards.push({ personId, month, glampoints, jewelChangeDate });
  }

  getRewards(): Reward[] {
    return this.rewards;
  }
}