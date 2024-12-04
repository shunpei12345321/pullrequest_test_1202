// 'use client'

// import { useState, useEffect } from 'react'
// import { addReceipt, getCategories } from '@/app/actions'

// export default function ReceiptForm() {
//   const [categories, setCategories] = useState([])

//   useEffect(() => {
//     getCategories().then(setCategories)
//   }, [])

//   return (
//     <form action={addReceipt} className="space-y-4">
//       <div>
//         <label htmlFor="date" className="block text-sm font-medium text-gray-700">日付</label>
//         <input type="date" id="date" name="date" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//       </div>
//       <div>
//         <label htmlFor="total" className="block text-sm font-medium text-gray-700">合計金額</label>
//         <input type="number" id="total" name="total" step="0.01" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//       </div>
//       <div>
//         <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">カテゴリー</label>
//         <select id="categoryId" name="categoryId" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>{category.name}</option>
//           ))}
//         </select>
//       </div>
//       <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         レシートを追加
//       </button>
//     </form>
//   )
// }

// export Recipt
