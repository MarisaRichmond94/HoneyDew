declare global {
  interface Dew {
    id: string,
    userId: string,
    name: string,
    description: string,
    timeInMinutes: number,
    priority: string,
    coolDownInDays: number,
  };
};

export {};
