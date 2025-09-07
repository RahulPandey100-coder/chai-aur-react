import React from 'react'

function card(props) {
  console.log(props.username)
  return (
      <div className="max-w-xs bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
    <img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Card Image" />
    <div className="p-6">
      {/* <h5 class="text-xl font-semibold text-gray-800 mb-2">DevUI Card Example</h5> */}
      <p className="text-gray-600 mb-4">
        This card is visually inspired by DevUI — ready for practice, learning, and easy adaptation.
      </p>
      <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default card
