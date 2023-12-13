declare global {
  interface AssignedChore {
    id: string,
    choreId: string,
    userId: string,
    assignedAt: number,
    isComplete: boolean,
    isArchived: boolean,
  };
};

export {};
