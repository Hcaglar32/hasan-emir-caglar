import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin, generateToken } from '@/backend/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email ve şifre gereklidir' },
        { status: 400 }
      );
    }

    const isValid = await authenticateAdmin({ email, password });

    if (!isValid) {
      return NextResponse.json(
        { error: 'Geçersiz email veya şifre' },
        { status: 401 }
      );
    }

    const token = generateToken();

    const response = NextResponse.json(
      { success: true, message: 'Giriş başarılı' },
      { status: 200 }
    );

    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
