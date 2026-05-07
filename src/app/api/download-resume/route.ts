import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'Abhinav Sushil Varshney Resume.pdf');
    
    if (!existsSync(filePath)) {
      return new NextResponse("Resume not found", { status: 404 });
    }

    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Abhinav_Varshney_Resume.pdf"',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
