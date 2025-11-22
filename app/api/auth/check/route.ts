import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token');
    
    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { authenticated: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}
