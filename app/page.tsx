import ReceiptList from "@components/;
import React from 'react';
import ReceiptForm from "@/components/ReceiptForm";

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">レシートアプリ</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<h2 className="text-xl font-semibold mb-2">新規レシート追加</h2>
					<ReceiptForm />
				</div>
				<div>
					<h2 className="text-xl font-semibold mb-2">レシート一覧</h2>
					<ReceiptList />
				</div>
			</div>
		</div>
	);
}


