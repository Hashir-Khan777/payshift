import React from 'react'

const AutopayCard = () => {
  return (
    <div className="bg-[#f4f9ff] shadow p-6">
      <h2 className="bg-[#0B1F4B] text-white text-center py-2 mb-6 font-semibold rounded-sm">
        Autopay
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2 flex items-center space-x-2 mb-6">
          <input type="checkbox" className="accent-blue-600" />
          <label className="text-sm">Enable Autoplay</label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Installment Amount</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Monthly On</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">No of Payments</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">First Payment</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

      </form>
    </div>
  )
}

export default AutopayCard
