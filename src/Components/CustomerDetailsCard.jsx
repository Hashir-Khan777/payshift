import React from 'react'

const CustomerDetailsCard  = () => {
  return (
    <div>
        <div className="bg-[#f4f9ff] shadow p-6">
          <h2 className="bg-[#0B1F4B] text-white text-center py-2 mb-6 font-semibold rounded-sm">
            Customer Details
          </h2>

          {/* Grid Layout for Form Fields */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Emirates ID*</label>
              <input type="text" className="w-full shadow px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Name*</label>
              <input type="text" className="w-full shadow px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input type="email" className="w-full shadow px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mobile*</label>
              <input type="tel" className="w-full shadow px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Customer Type</label>
              <select className="w-full shadow px-3 py-2">
                <option>Individual</option>
                <option>Corporate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Customer Reference No.</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default CustomerDetailsCard
