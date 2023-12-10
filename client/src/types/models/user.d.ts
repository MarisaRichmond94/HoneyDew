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
    firstName: string,
    lastName: string,
    avatar: string,
    schedule: Schedule,
  };
};

export {};
