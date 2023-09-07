-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "RID" SERIAL NOT NULL,
    "recipeName" VARCHAR(200) NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("RID")
);

-- CreateTable
CREATE TABLE "Step" (
    "stepNum" SERIAL NOT NULL,
    "step" TEXT NOT NULL,
    "subCategory" VARCHAR(200),
    "subCatOrder" INTEGER,
    "recipeID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "ingredientNum" SERIAL NOT NULL,
    "ingredient" VARCHAR(255) NOT NULL,
    "amount" VARCHAR(50) NOT NULL,
    "measurement" VARCHAR(50),
    "recipeID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Note" (
    "note" TEXT NOT NULL,
    "recipeID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Step_stepNum_key" ON "Step"("stepNum");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_ingredientNum_key" ON "Ingredient"("ingredientNum");

-- CreateIndex
CREATE UNIQUE INDEX "Note_note_recipeID_key" ON "Note"("note", "recipeID");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe"("RID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe"("RID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe"("RID") ON DELETE RESTRICT ON UPDATE CASCADE;
