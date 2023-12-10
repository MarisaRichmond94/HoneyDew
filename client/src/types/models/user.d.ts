declare global {
  interface GoogleUser {
    email: string,
    firstName: string | undefined,
    lastName: string | undefined,
    picture: string | undefined,
    sub: string | undefined,
    updatedAt: string | undefined,
  };

  interface User {
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    points: number,
    schedule: Schedule,
  };
};

export {};
