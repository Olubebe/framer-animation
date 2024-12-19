"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Download,
  X,
  ChevronRight,
  Star,
  Heart,
} from "lucide-react";

const ProductIllustration = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  switch (category) {
    case "design":
      return (
        <svg className={className} viewBox="0 0 300 200">
          <rect
            width="300"
            height="200"
            rx="6"
            fill="#f1f5f9"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <rect x="0" y="0" width="300" height="25" rx="6" fill="#94a3b8" />
          <circle cx="15" cy="12" r="4" fill="#ef4444" />
          <circle cx="30" cy="12" r="4" fill="#fbbf24" />
          <circle cx="45" cy="12" r="4" fill="#22c55e" />
          <rect x="20" y="40" width="80" height="30" rx="4" fill="#3b82f6" />
          <rect x="110" y="40" width="170" height="30" rx="4" fill="#e2e8f0" />
          <rect x="20" y="80" width="260" height="40" rx="4" fill="#e2e8f0" />
          <rect x="20" y="130" width="120" height="50" rx="4" fill="#e2e8f0" />
          <rect x="150" y="130" width="130" height="50" rx="4" fill="#3b82f6" />
        </svg>
      );
    case "templates":
      return (
        <svg className={className} viewBox="0 0 300 200">
          <rect x="30" y="0" width="100" height="180" rx="15" fill="#94a3b8" />
          <rect x="35" y="5" width="90" height="170" rx="12" fill="#f1f5f9" />
          <rect x="45" y="15" width="70" height="70" fill="#e2e8f0" />
          <circle cx="80" cy="50" r="15" fill="#3b82f6" />
          <rect x="45" y="95" width="70" height="10" fill="#e2e8f0" />
          <rect x="45" y="115" width="50" height="10" fill="#e2e8f0" />

          <rect x="170" y="0" width="100" height="180" rx="15" fill="#94a3b8" />
          <rect x="175" y="5" width="90" height="170" rx="12" fill="#f1f5f9" />
          <rect x="185" y="15" width="70" height="70" fill="#e2e8f0" />
          <rect x="185" y="95" width="70" height="10" fill="#e2e8f0" />
          <rect x="185" y="115" width="70" height="10" fill="#e2e8f0" />
          <rect x="185" y="135" width="50" height="10" fill="#e2e8f0" />
        </svg>
      );
    case "productivity":
      return (
        <svg className={className} viewBox="0 0 300 200">
          <rect
            width="300"
            height="200"
            rx="4"
            fill="#f1f5f9"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <rect x="0" y="0" width="300" height="40" rx="4" fill="#3b82f6" />
          <text
            x="150"
            y="25"
            fontFamily="Arial"
            fontSize="14"
            fill="white"
            textAnchor="middle"
          >
            December 2024
          </text>
          <rect x="10" y="50" width="40" height="40" fill="#e2e8f0" />
          <rect x="60" y="50" width="40" height="40" fill="#e2e8f0" />
          <rect x="110" y="50" width="40" height="40" fill="#3b82f6" />
          <rect x="160" y="50" width="40" height="40" fill="#e2e8f0" />
          <rect x="210" y="50" width="40" height="40" fill="#e2e8f0" />
          <rect x="260" y="50" width="40" height="40" fill="#e2e8f0" />
          <rect x="10" y="150" width="280" height="20" fill="#e2e8f0" />
          <rect x="10" y="180" width="280" height="20" fill="#e2e8f0" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 300 200">
          <rect width="300" height="200" fill="#f1f5f9" />
          <g transform="translate(20, 20)">
            <rect width="50" height="50" rx="8" fill="#fff" stroke="#e2e8f0" />
            <path
              d="M15,25 L25,15 L35,25 M20,25 L20,35 L30,35 L30,25"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />

            <g transform="translate(70, 0)">
              <rect
                width="50"
                height="50"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <circle
                cx="25"
                cy="20"
                r="8"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path
                d="M15,40 Q25,30 35,40"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
            </g>

            <g transform="translate(140, 0)">
              <rect
                width="50"
                height="50"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <circle
                cx="25"
                cy="25"
                r="10"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <circle cx="25" cy="25" r="3" fill="#3b82f6" />
            </g>

            <g transform="translate(0, 70)">
              <rect
                width="50"
                height="50"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <path
                d="M15,25 L35,25 M25,15 L25,35"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      );
  }
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  sales: number;
  description: string;
  image: string;
}

const DigitalStore = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products: Product[] = [
    {
      id: 1,
      name: "Premium UI Kit",
      category: "design",
      price: 49,
      rating: 4.8,
      sales: 1234,
      description: "Complete UI kit with 300+ components",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Social Media Templates",
      category: "templates",
      price: 29,
      rating: 4.6,
      sales: 856,
      description: "50 Instagram and Facebook templates",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Productivity Planner",
      category: "productivity",
      price: 19,
      rating: 4.9,
      sales: 2341,
      description: "Digital planner with 12 months of templates",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Icon Pack Pro",
      category: "design",
      price: 39,
      rating: 4.7,
      sales: 1567,
      description: "2000+ customizable vector icons",
      image: "/api/placeholder/400/300",
    },
  ];

  const categories = ["all", "design", "templates", "productivity"];
  interface CartItem {
    product: Product;
    quantity: number;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cartVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    // Animate cart icon
    const cartIcon = document.querySelector("#cartIcon");
    if (cartIcon) {
      cartIcon.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.2)" },
          { transform: "scale(1)" },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
        }
      );
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Digital Market
          </motion.h1>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart id="cartIcon" className="w-5 h-5" />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-600">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <div className="relative p-4">
                  <motion.div
                    className="w-full h-48 rounded-lg overflow-hidden bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProductIllustration
                      category={product.category}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{product.name}</CardTitle>
                    <Badge variant="secondary">${product.price}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    {product.rating} ({product.sales} sales)
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 p-6"
              variants={cartVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Cart</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                  Your cart is empty
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            ${item.price}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>
                        ${cart.reduce((sum, item) => sum + item.price, 0)}
                      </span>
                    </div>
                    <Button className="w-full" size="lg">
                      Checkout <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalStore;
