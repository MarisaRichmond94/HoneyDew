declare global {
  interface GoogleUser {
    email: string,
    firstName: string | undefined,
    lastName: string | undefined,
    picture: string | undefined,
    sub: string | undefined,
    updatedAt: string | undefined,
  };

  interface UserDto {
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    points: number,

    assignedChores: AssignedChore[],
    dailyChores: DailyChore[],
    rooms: Room[],
    schedule: Schedule,
  };

  interface User {
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    points: number,
  };
};

export {};
