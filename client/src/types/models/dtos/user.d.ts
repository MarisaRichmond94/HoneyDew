declare global {
  interface FindOrCreateUserDTO {
    email: string,
    firstName: string,
    lastName: string,
    avatar: string,
    googleId: string,
  };
};

export {};
