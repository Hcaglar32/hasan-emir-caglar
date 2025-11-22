import bcrypt from 'bcryptjs';

// Hashed password for: 170517Bh.
const HASHED_PASSWORD = '$2b$10$I2.8DI66VEHWwuUw74xq8O4w8groHzwsgQPvhzP0PEohxlHb3pfMK';
const ADMIN_EMAIL = 'hcaglar17@caglar.com';

export interface AuthCredentials {
  email: string;
  password: string;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function authenticateAdmin(credentials: AuthCredentials): Promise<boolean> {
  if (credentials.email !== ADMIN_EMAIL) {
    return false;
  }
  
  return verifyPassword(credentials.password, HASHED_PASSWORD);
}

export function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
