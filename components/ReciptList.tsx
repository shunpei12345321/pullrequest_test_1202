// 'use client'

// import { useState, useEffect } from 'react'
// import { getReceipts } from '@/app/actions'

// export default function ReceiptList() {
//   const [receipts, setReceipts] = useState([])

//   useEffect(() => {
//     getReceipts().then(setReceipts)
//   }, [])

//   return (
//     <ul className="space-y-4">
//       {receipts.map((receipt) => (
//         <li key={receipt.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">
//               {new Date(receipt.date).toLocaleDateString()}
//             </h3>
//             <p className="mt-1 max-w-2xl text-sm text-gray-500">
//               {receipt.category.name} - ¥{receipt.total.toFixed(2)}
//             </p>
//           </div>
//           <div className="border-t border-gray-200">
//             <dl>
//               {receipt.items.map((item) => (
//                 <div key={item.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                   <dt className="text-sm font-medium text-gray-500">{item.name}</dt>
//                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     ¥{item.price.toFixed(2)} x {item.quantity}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }
