import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Recipes (
        RID INT PRIMARY KEY,
        recipeName varchar(255) NOT NULL,
        userID INT,
        FOREIGN KEY (userID) REFERENCES Users(ID)
        ON DELETE CASCADE);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}