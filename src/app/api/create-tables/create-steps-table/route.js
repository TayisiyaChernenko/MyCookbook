import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Steps (
        step TEXT NOT NULL,
        subCategory varchar(100),
        subCatOrder INT,
        recipeID INT,
        FOREIGN KEY (recipeID) REFERENCES Recipes(RID)
        ON DELETE CASCADE);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}