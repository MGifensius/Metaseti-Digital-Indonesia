

import RelatedServices from "../components/RelatedServices";
import AnimatedMesh from "../components/AnimatedMesh";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Custom ERP Demo Component - STAYS IN ENGLISH
function CustomERPDemo() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Acme Corp", product: "Software License", amount: 5000, status: "Completed" },
    { id: 2, customer: "Tech Solutions", product: "Web Development", amount: 12000, status: "In Progress" },
    { id: 3, customer: "Digital Agency", product: "AI Integration", amount: 8500, status: "Pending" },
    { id: 4, customer: "StartUp Inc", product: "Mobile App", amount: 15000, status: "In Progress" },
  ]);

  const [inventory, _setInventory] = useState([
    { id: 1, item: "Servers", quantity: 25, status: "In Stock" },
    { id: 2, item: "Workstations", quantity: 8, status: "Low Stock" },
    { id: 3, item: "Network Equipment", quantity: 42, status: "In Stock" },
    { id: 4, item: "Software Licenses", quantity: 3, status: "Low Stock" },
  ]);

  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: "",
    product: "",
    amount: "",
  });

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
  const activeOrders = orders.filter(o => o.status === "In Progress").length;
  const completedOrders = orders.filter(o => o.status === "Completed").length;

  const handleAddOrder = () => {
    if (newOrder.customer && newOrder.product && newOrder.amount) {
      const order = {
        id: orders.length + 1,
        customer: newOrder.customer,
        product: newOrder.product,
        amount: parseInt(newOrder.amount),
        status: "Pending",
      };
      setOrders([...orders, order]);
      setNewOrder({ customer: "", product: "", amount: "" });
      setShowAddOrder(false);
    }
  };

  const handleDeleteOrder = (id: number) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  // Calculate data for charts
  const monthlyData = [
    { month: "Jan", value: 42000 },
    { month: "Feb", value: 55000 },
    { month: "Mar", value: 48000 },
    { month: "Apr", value: 68000 },
    { month: "May", value: 52000 },
    { month: "Jun", value: totalRevenue },
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  const categoryData = [
    { name: "Software", value: 35, color: "from-gray-700 to-gray-800" },
    { name: "Development", value: 40, color: "from-gray-600 to-gray-700" },
    { name: "Consulting", value: 25, color: "from-gray-500 to-gray-600" },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="border border-gray-200 p-4 md:p-6 hover:border-gray-300 transition-colors">
          <p className="text-xs text-gray-600 mb-2">Total Revenue</p>
          <p className="text-2xl md:text-3xl font-medium text-black mb-1">
            ${(totalRevenue / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-gray-500">↑ 12% from last month</p>
        </div>
        <div className="border border-gray-200 p-4 md:p-6 hover:border-gray-300 transition-colors">
          <p className="text-xs text-gray-600 mb-2">Active Orders</p>
          <p className="text-2xl md:text-3xl font-medium text-black mb-1">{activeOrders}</p>
          <p className="text-xs text-gray-500">In Progress</p>
        </div>
        <div className="border border-gray-200 p-4 md:p-6 hover:border-gray-300 transition-colors">
          <p className="text-xs text-gray-600 mb-2">Completed</p>
          <p className="text-2xl md:text-3xl font-medium text-black mb-1">{completedOrders}</p>
          <p className="text-xs text-gray-700">This month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Bar Chart */}
        <div className="border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm text-gray-700 mb-4">Monthly Revenue</h3>
          <div className="mb-2">
            <div className="h-40 md:h-48 flex items-end justify-between gap-1 md:gap-2 relative">
              {monthlyData.map((data, i) => {
                const heightPercentage = (data.value / maxValue) * 100;
                return (
                  <div key={i} className="flex-1 h-full flex items-end relative group">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: heightPercentage / 100 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                      className="w-full h-full bg-gradient-to-t from-gray-600 to-gray-800 hover:opacity-80 transition-opacity cursor-pointer origin-bottom"
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-2 py-1 text-xs whitespace-nowrap z-10">
                      ${(data.value / 1000).toFixed(1)}K
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between gap-1">
            {monthlyData.map((data, i) => (
              <span key={i} className="flex-1 text-center text-[10px] md:text-xs text-gray-600">
                {data.month}
              </span>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm text-gray-700 mb-4">Revenue by Category</h3>
          <div className="flex items-center justify-center h-40 md:h-48">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Simplified pie chart using conic-gradient */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 relative">
                <div className="absolute inset-3 md:inset-4 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-medium text-black">100%</p>
                    <p className="text-[10px] md:text-xs text-gray-700">Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat, i) => (
              <div key={i} className="flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <span className="text-gray-700">{cat.name}</span>
                </div>
                <span className="text-black">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders Management */}
      <div className="border border-gray-200 mb-6 md:mb-8">
        <div className="bg-gray-100 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="text-base md:text-lg font-medium text-black">Orders Management</h3>
          <button
            onClick={() => setShowAddOrder(true)}
            className="w-full sm:w-auto px-4 py-2 bg-white text-black text-sm hover:bg-gray-200 transition-all"
          >
            + Add Order
          </button>
        </div>

        {/* Add Order Form */}
        <AnimatePresence>
          {showAddOrder && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-gray-200 bg-gray-100 overflow-hidden"
            >
              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={newOrder.customer}
                  onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
                  className="bg-white/40 border border-gray-200 px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 text-sm"
                />
                <input
                  type="text"
                  placeholder="Product"
                  value={newOrder.product}
                  onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
                  className="bg-white/40 border border-gray-200 px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 text-sm"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={newOrder.amount}
                  onChange={(e) => setNewOrder({ ...newOrder, amount: e.target.value })}
                  className="bg-white/40 border border-gray-200 px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 text-sm"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddOrder}
                    className="flex-1 py-2 bg-white text-black text-sm hover:bg-gray-200 transition-all"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddOrder(false)}
                    className="flex-1 py-2 border border-gray-200 text-black text-sm hover:bg-gray-100 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">ID</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">Customer</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">Product</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">Amount</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">Status</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-700 uppercase whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-700 whitespace-nowrap">#{order.id}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-black whitespace-nowrap">{order.customer}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-700 whitespace-nowrap">{order.product}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-black whitespace-nowrap">${order.amount.toLocaleString()}</td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`px-2 py-1 text-xs bg-white/40 border border-gray-200 ${
                        order.status === "Completed"
                          ? "text-gray-500"
                          : order.status === "In Progress"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-gray-500 hover:text-gray-400 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inventory */}
      <div className="border border-gray-200">
        <div className="bg-gray-100 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-medium text-black">Inventory Status</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6">
          {inventory.map((item) => (
            <div key={item.id} className="border border-gray-200 p-3 md:p-4 hover:border-gray-300 transition-colors">
              <h4 className="text-xs md:text-sm text-black mb-2">{item.item}</h4>
              <p className="text-xl md:text-2xl font-medium text-black mb-2">{item.quantity}</p>
              <span className={`text-[10px] md:text-xs px-2 py-1 ${
                item.status === "In Stock" 
                  ? "bg-gray-200 text-gray-500"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inventory Management System Demo Component
function InventoryManagementDemo() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop - ThinkPad X1",
      category: "Electronics",
      sku: "LAP-001",
      stock: 24,
      price: 15000000,
      lowStockThreshold: 10,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Office Chair - Ergonomic",
      category: "Furniture",
      sku: "FUR-002",
      stock: 8,
      price: 2500000,
      lowStockThreshold: 10,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Wireless Mouse",
      category: "Electronics",
      sku: "ACC-003",
      stock: 156,
      price: 250000,
      lowStockThreshold: 50,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Monitor 27 inch",
      category: "Electronics",
      sku: "MON-004",
      stock: 3,
      price: 3500000,
      lowStockThreshold: 5,
      status: "Critical",
    },
    {
      id: 5,
      name: "Desk Lamp - LED",
      category: "Accessories",
      sku: "ACC-005",
      stock: 45,
      price: 350000,
      lowStockThreshold: 20,
      status: "In Stock",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      category: "Electronics",
      sku: "KEY-006",
      stock: 0,
      price: 1200000,
      lowStockThreshold: 10,
      status: "Out of Stock",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [stockAmount, setStockAmount] = useState(0);

  const totalValue = products.reduce((sum, p) => sum + (p.stock * p.price), 0);
  const lowStockItems = products.filter(p => p.stock > 0 && p.stock <= p.lowStockThreshold).length;
  const outOfStock = products.filter(p => p.stock === 0).length;

  const updateStock = () => {
    if (selectedProduct && stockAmount !== 0) {
      setProducts(products.map(p => {
        if (p.id === selectedProduct.id) {
          const newStock = Math.max(0, p.stock + stockAmount);
          let newStatus = "In Stock";
          if (newStock === 0) newStatus = "Out of Stock";
          else if (newStock <= p.lowStockThreshold) {
            if (newStock <= p.lowStockThreshold / 2) newStatus = "Critical";
            else newStatus = "Low Stock";
          }
          return { ...p, stock: newStock, status: newStatus };
        }
        return p;
      }));
      setStockAmount(0);
      setSelectedProduct(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-gray-900 text-white";
      case "Low Stock": return "bg-gray-600 text-white";
      case "Critical": return "bg-gray-400 text-black";
      case "Out of Stock": return "bg-gray-200 text-gray-900 border border-gray-300";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Format large numbers in millions
  const formatMillions = (amount: number) => {
    return (amount / 1000000).toFixed(1).replace('.', ',');
  };

  // Screen content component that will be used both with and without phone frame
  const ScreenContent = () => (
    <div className="bg-white overflow-y-auto max-h-[800px]">
      {!selectedProduct ? (
        <div className="p-4 md:p-8">
          {/* Header */}
          <div className="mb-4 md:mb-8">
            <h1 className="text-xl md:text-3xl font-medium text-black mb-1 md:mb-2">Inventory System</h1>
            <p className="text-xs md:text-base text-gray-600">Manage your stock efficiently</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
            <div className="bg-gray-900 border border-gray-800  p-2 md:p-6">
              <p className="text-[9px] md:text-sm text-white mb-0.5 md:mb-2 font-medium whitespace-nowrap">Total Value</p>
              <p className="text-[10px] md:text-2xl font-medium text-white leading-tight">
                <span className="hidden md:inline">Rp </span>{formatMillions(totalValue)}M
              </p>
            </div>
            <div className="bg-gray-700 border border-gray-600  p-2 md:p-6">
              <p className="text-[9px] md:text-sm text-white mb-0.5 md:mb-2 font-medium whitespace-nowrap">Low Stock</p>
              <p className="text-base md:text-2xl font-medium text-white">{lowStockItems}</p>
            </div>
            <div className="bg-gray-100 border border-gray-300  p-2 md:p-6">
              <p className="text-[9px] md:text-sm text-gray-700 mb-0.5 md:mb-2 font-medium whitespace-nowrap">Out of Stock</p>
              <p className="text-base md:text-2xl font-medium text-gray-900">{outOfStock}</p>
            </div>
          </div>

          {/* Products List */}
          <div>
            <h2 className="text-lg md:text-xl font-medium text-black mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">{products.map((product) => (
                <motion.div
                  key={product.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-gray-50 border border-gray-200  p-4 cursor-pointer hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-black mb-1">{product.name}</h3>
                      <p className="text-xs text-gray-600">SKU: {product.sku}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Stock: <span className="font-medium text-black">{product.stock}</span></p>
                      <p className="text-xs text-gray-600 mt-0.5">{formatCurrency(product.price)}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 md:p-8">
          {/* Back Button & Header */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <button
              onClick={() => setSelectedProduct(null)}
              className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-all"
            >
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-medium text-black">{selectedProduct.name}</h2>
              <p className="text-xs md:text-sm text-gray-600">SKU: {selectedProduct.sku}</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Status Badge */}
            <div className="bg-gray-50 border border-gray-200  p-4">
              <p className="text-xs text-gray-600 mb-2">Status</p>
              <span className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(selectedProduct.status)}`}>
                {selectedProduct.status}
              </span>
            </div>

            {/* Stock Level */}
            <div className="bg-gray-50 border border-gray-200  p-4">
              <p className="text-xs text-gray-600 mb-2">Current Stock</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-medium text-black">{selectedProduct.stock}</p>
                <p className="text-sm text-gray-600">units</p>
              </div>
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.min((selectedProduct.stock / (selectedProduct.lowStockThreshold * 2)) * 100, 100)}%` 
                  }}
                  className={`h-full ${
                    selectedProduct.stock === 0 ? 'bg-gray-200' :
                    selectedProduct.stock <= selectedProduct.lowStockThreshold / 2 ? 'bg-gray-400' :
                    selectedProduct.stock <= selectedProduct.lowStockThreshold ? 'bg-gray-600' :
                    'bg-gray-900'
                  }`}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">Low stock threshold: {selectedProduct.lowStockThreshold}</p>
            </div>

            {/* Price Info */}
            <div className="bg-gray-50 border border-gray-200  p-4">
              <p className="text-xs text-gray-600 mb-2">Unit Price</p>
              <p className="text-2xl font-medium text-black">{formatCurrency(selectedProduct.price)}</p>
              <p className="text-xs text-gray-600 mt-2">
                Total Value: {formatCurrency(selectedProduct.stock * selectedProduct.price)}
              </p>
            </div>

            {/* Update Stock */}
            <div className="bg-gray-50 border border-gray-200  p-4">
              <p className="text-sm font-medium text-black mb-4">Update Stock</p>
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setStockAmount(Math.max(-selectedProduct.stock, stockAmount - 10))}
                  className="w-12 h-12 bg-white border border-gray-300  text-black hover:bg-gray-100 text-xl flex items-center justify-center"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <input
                    type="number"
                    value={stockAmount}
                    onChange={(e) => setStockAmount(parseInt(e.target.value) || 0)}
                    className="w-full text-center text-2xl font-medium text-black bg-white border border-gray-300  p-2"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    {stockAmount >= 0 ? 'Add' : 'Remove'} {Math.abs(stockAmount)} units
                  </p>
                </div>
                <button
                  onClick={() => setStockAmount(stockAmount + 10)}
                  className="w-12 h-12 bg-white border border-gray-300  text-black hover:bg-gray-100 text-xl flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <button
                onClick={updateStock}
                disabled={stockAmount === 0}
                className="w-full bg-black text-white  py-3 text-sm font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update Stock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 md:p-8">
      {/* Desktop: Full width view without phone frame */}
      <div className="w-full max-w-4xl mx-auto bg-white  overflow-hidden border border-gray-200 shadow-lg">
        <ScreenContent />
      </div>
    </div>
  );
}

export default function CustomDevelopment() {
  const { t, language } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"erp" | "iot">("erp");

  const capabilities = [
    {
      title: t('devService.capability1.title'),
      description: t('devService.capability1.desc'),
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: t('devService.capability2.title'),
      description: t('devService.capability2.desc'),
      icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"
    },
    {
      title: t('devService.capability3.title'),
      description: t('devService.capability3.desc'),
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: t('devService.capability4.title'),
      description: t('devService.capability4.desc'),
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: t('devService.capability5.title'),
      description: t('devService.capability5.desc'),
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    },
    {
      title: t('devService.capability6.title'),
      description: t('devService.capability6.desc'),
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
  ];

  const benefits = [
    t('devService.benefit1'),
    t('devService.benefit2'),
    t('devService.benefit3'),
    t('devService.benefit4'),
    t('devService.benefit5'),
    t('devService.benefit6'),
  ];


  const portfolioImages = [
    "/custom-dev/dev-portfolio-1.png",
    "/custom-dev/dev-portfolio-2.png",
    "/custom-dev/dev-portfolio-3.png",
    "/custom-dev/dev-portfolio-4.png",
  ];

  return (
    <PageTransition>
      <main className="bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            loading="lazy"
                    src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
            {t('devService.subtitle')}
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-8 leading-tight">
            {t('devService.title')}
          </h1>
          
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            {t('devService.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all rounded-md text-center"
            >
              {t('devService.demo')}
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-300 text-black text-sm font-medium hover:bg-gray-100 transition-all rounded-md text-center"
            >
              {t('contact.title')}
            </a>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-[79px] px-6 bg-white border-t border-white/5">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
            {t('devService.capabilities')}
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl">
            {t('devService.capabilitiesDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-4">
                  <svg 
                    className="w-10 h-10 text-black/80 group-hover:text-black transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* 3D Elevated Container */}
          <div className="container-3d p-8 md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
              {t('devService.benefits')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-3d p-6 h-full flex items-start"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-[79px] px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-12">
            {t('devService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("erp")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "erp" ? "text-black" : "text-gray-600"
              }`}
            >
              Custom ERP System
              {activeDemo === "erp" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("iot")}
              className={`pb-4 px-4 md:px-6 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeDemo === "iot" ? "text-black" : "text-gray-600"
              }`}
            >
              Inventory System
              {activeDemo === "iot" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          </div>

          {/* Demo Content */}
          <div className="border border-gray-200 bg-gray-1000 overflow-hidden">
            {activeDemo === "erp" ? <CustomERPDemo /> : <InventoryManagementDemo />}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-[79px] px-6 bg-white">
        <AnimatedMesh />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4">
              {t('devService.portfolio')}
            </h2>
            <p className="text-gray-700 max-w-2xl">
              {t('devService.portfolioDesc')}
            </p>
          </div>
          
          {/* 2 Column Mixed Size Layout - Equal Bottom Alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            {/* Left Column: Two Landscape Images */}
            <div className="flex flex-col gap-8 h-full">
              {/* Top Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[0]?.includes('portfolio-1') ? (
                  <img
                    loading="lazy"
                    src={portfolioImages[0]}
                    alt="Custom Development Project 1"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">Project 1</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[1]?.includes('portfolio-2') ? (
                  <img
                    loading="lazy"
                    src={portfolioImages[1]}
                    alt="Custom Development Project 2"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 2</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column: Two Portrait Images */}
            <div className="flex flex-col gap-8 h-full">
              {/* Top Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[2]?.includes('portfolio-3') ? (
                  <img
                    loading="lazy"
                    src={portfolioImages[2]}
                    alt="Custom Development Project 3"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 3</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative flex-1 min-h-0 overflow-hidden bg-gray-50 rounded-md"
              >
                {portfolioImages[3]?.includes('portfolio-4') ? (
                  <img
                    loading="lazy"
                    src={portfolioImages[3]}
                    alt="Custom Development Project 4"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 4</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/services/custom-development" />

      <Contact />

      <Footer />
    </main>
    </PageTransition>
  );
}
