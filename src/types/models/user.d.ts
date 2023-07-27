declare global {
  interface User {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    email: string,
    points: number,
  };
};

export {};
