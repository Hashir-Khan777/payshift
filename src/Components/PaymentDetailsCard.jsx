import React from 'react'

const PaymentDetailsCard = () => {
  return (
    <div className="bg-[#f4f9ff] shadow p-6">
      <h2 className="bg-[#0B1F4B] text-white text-center py-2 mb-6 font-semibold rounded-sm">
        Payment Details
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Account Date</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>


        <div>
          <label className="block text-sm font-medium mb-1">Amount Type</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Variable</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Frequency</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Min. Amount</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Max. Amount</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>


      </form>
    </div>
  )
}

export default PaymentDetailsCard
