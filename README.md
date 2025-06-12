# 🔥 GrillOut – Modern Restaurant Website

GrillOut is a sleek, modern, and fully responsive restaurant website built with Next.js. It features animated sections, a beautiful UI, and seamless user interaction. Customers can directly place orders via WhatsApp, making it ideal for small to mid-sized food businesses.

---

## 🚀 Features

- ✅ Built with **Next.js**
- 💡 Fully **Responsive Design**
- 🎨 Smooth **Animations** for enhanced UX
- 📱 **WhatsApp Ordering Integration**
- 📄 Pages: Home | Menu | About | Events | Contact
- 🌐 SEO-friendly structure

---

## 📸 Preview

![GrillOut Screenshot](./public/preview.PNG)


---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (if used)
- **Deployment:** Vercel

---

## 📦 Getting Started (Development)

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/UmarKhan-codeer/grillout.git

# Navigate to the project directory
cd grillout

# Install dependencies
npm install

# Start the development server
npm run dev
Open your browser at http://localhost:3000

💬 WhatsApp Order Integration
Customers can click the "Order Now" button, which redirects them to WhatsApp with a pre-filled message:

js
Copy
Edit
const phone = "923001234567"; // Replace with your number
const message = "Hello, I’d like to place an order from the GrillOut menu!";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
window.open(url, '_blank');
📤 Deployment
This project is live and hosted on Vercel.

🔗 Live Demo: coming soon
🔗 Repository: https://github.com/UmarKhan-codeer/grillout

🙌 Author
Umer Javed

🔗 LinkedIn

💻 GitHub

🌐 Portfolio: coming soon

📃 License
This project is open-source and available under the MIT License.