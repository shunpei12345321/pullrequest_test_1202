"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addReceipt(formData: FormData) {
	const date = new Date(formData.get("date") as string);
	const total = parseFloat(formData.get("total") as string);
	const categoryId = parseInt(formData.get("categoryId") as string);
	const userId = 1; // 仮のユーザーID

	const receipt = await prisma.receipt.create({
		data: {
			date,
			total,
			categoryId,
			userId,
		},
	});

	return receipt;
}

export async function getReceipts() {
	const receipts = await prisma.receipt.findMany({
		include: {
			category: true,
			items: true,
		},
		orderBy: {
			date: "desc",
		},
	});

	return receipts;
}

export async function getCategories() {
	const categories = await prisma.category.findMany();
	return categories;
}
