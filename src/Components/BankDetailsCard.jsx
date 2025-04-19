import React from 'react'

const BankDetailsCard = () => {
  return (
    <div className="bg-[#f4f9ff] shadow p-6">
      <h2 className="bg-[#0B1F4B] text-white text-center py-2 mb-6 font-semibold rounded-sm">
        Bank Details
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Payment Type - Full Width */}
        <div className="md:col-span-2">
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentType" className="accent-blue-600" />
              <span>Bank Account</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentType" className="accent-blue-600" />
              <span>Credit Card</span>
            </label>
          </div>
        </div>

        {/* Bank Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Bank Name*</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Bank Name</option>
          </select>
        </div>

        {/* Account Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Account Type*</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Current</option>
            <option>Savings</option>
          </select>
        </div>

        {/* Account Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Account Title*</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        {/* Account No. */}
        <div>
          <label className="block text-sm font-medium mb-1">Account No.*</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        {/* Joint Account - Full Width */}
        <div className="md:col-span-2 flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-600" />
          <label className="text-sm">Joint account?</label>
        </div>
      </form>
    </div>
  )
}

export default BankDetailsCard
