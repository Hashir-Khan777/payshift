import React from 'react'

function FormPopUp() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96 transform transition-transform duration-300 ease-in-out translate-y-full animate-popup">
      <h2 className="text-lg font-bold mb-4">Connect</h2>
      <p className="mb-4">
        This is your popup content. Customize as needed.
      </p>
      <button
        onClick={() => setShowPopup(false)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
  )
}

export default FormPopUp
