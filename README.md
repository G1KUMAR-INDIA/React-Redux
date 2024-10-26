### React Redux 
### Structure of Source Code
src/
├── app/                     # Redux store configuration
│   └── store.js             
├── assets/                  # Static assets like images, fonts, etc.
│   └── product.json         # Initial product data
├── components/              # Reusable components across the app
│   ├── Navbar.js            # Navbar with cart icon and item count
│   ├── CartItem.js          # Displays each cart item with CRUD controls
│   └── Total.js             # Shows total quantity and amount in cart
├── features/                # Feature-specific slices and components
│   └── cart/
│       ├── cartSlice.js     # Cart Redux slice for CRUD actions
│       └── CartPage.js      # Main cart page component displaying all cart items
├── App.js                   # Main app component
└── index.js                 # Entry point of the application
