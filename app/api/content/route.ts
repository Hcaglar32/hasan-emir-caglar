import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ContentData } from '@/backend/types';

const dataFilePath = path.join(process.cwd(), 'backend', 'data.json');

function readData(): ContentData {
  try {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading data:', error);
    throw new Error('Veri okunamadı');
  }
}

function writeData(data: ContentData): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data:', error);
    throw new Error('Veri yazılamadı');
  }
}

export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Veri alınamadı' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 401 }
      );
    }

    const body = await request.json();
    writeData(body);

    return NextResponse.json(
      { success: true, message: 'Veri güncellendi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { error: 'Veri güncellenemedi' },
      { status: 500 }
    );
  }
}
