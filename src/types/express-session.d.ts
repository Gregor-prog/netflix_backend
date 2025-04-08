import session from "express-session";

declare module "express-session" {
  interface SessionData {
    user?: {
      id: string;
      name: string;
      email: string;
      // Add any other properties your user object has
    };
  }
}
