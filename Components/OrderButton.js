import React from 'react'

const OrderButton = () => {
        const phoneNumber = "+923345332323"; // Replace with your number in international format
        const message = "Assalam o Alikum, I would like to place an order!"; // Pre-filled message
      
        const handleWhatsAppClick = () => {
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
        };
  return (
    <div>
      <button onClick={handleWhatsAppClick} className="px-2 w-[90px] py-2 mt-1.5 bg-orange-600 hover:bg-orange-500 rounded-full text-sm text-white font-bold">
              Order Now
            </button>
    </div>
  )
}

export default OrderButton
