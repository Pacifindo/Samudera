import React, { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Shield, Truck, Heart, Search, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SamuderapDark() {
  const [activeTab, setActiveTab] = useState('home');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const categories = [
    { icon: '💧', label: 'Water Pump', value: 'pump' },
    { icon: '🔧', label: 'Tools', value: 'tools' },
    { icon: '⚡', label: 'Electrical', value: 'electrical' },
    { icon: '🔩', label: 'Plumbing', value: 'plumbing' },
    { icon: '🛠️', label: 'Hardware', value: 'hardware' },
    { icon: '🏠', label: 'Home Improvement', value: 'home' },
    { icon: '🦺', label: 'Safety', value: 'safety' },
    { icon: '🎨', label: 'Paint & Accessories', value: 'paint' }
  ];

  const banners = [
    {
      title: 'SOLUSI LENGKAP',
      subtitle: 'UNTUK KEBUTUHAN RUMAH & PROYEK ANDA',
      image: 'https://via.placeholder.com/900x300?text=Leo+Pump+Solution',
      features: ['Produk berkualitas', 'Harga bersaing', 'Pengiriman cepat']
    },
    {
      title: 'LEO PUMP',
      subtitle: 'TERPERCAYA UNTUK KELUARGA INDONESIA',
      image: 'https://via.placeholder.com/900x300?text=Leo+Water+Pump',
      features: ['Garansi resmi', 'Harga terbaik', 'Support 24/7']
    }
  ];

  const products = [
    {
      id: 1,
      brand: 'LEO',
      name: 'Leo 125W Pump',
      price: 430000,
      image: 'https://via.placeholder.com/200x200?text=Leo+125W',
      rating: 4.8,
      sold: 856,
      original: true
    },
    {
      id: 2,
      brand: 'SHIMIZU',
      name: 'Shimizu Pompa Air PS-128',
      price: 675000,
      image: 'https://via.placeholder.com/200x200?text=Shimizu+Pump',
      rating: 4.9,
      sold: 1200,
      original: true
    },
    {
      id: 3,
      brand: 'BOSCH',
      name: 'Bosch Cordless Drill GSR 120-LI',
      price: 1250000,
      image: 'https://via.placeholder.com/200x200?text=Bosch+Drill',
      rating: 4.9,
      sold: 620,
      original: true
    },
    {
      id: 4,
      brand: 'MAKITA',
      name: 'Makita Angle Grinder M9513B',
      price: 585000,
      image: 'https://via.placeholder.com/200x200?text=Makita+Grinder',
      rating: 4.8,
      sold: 470,
      original: true
    },
    {
      id: 5,
      brand: 'LEO',
      name: 'Leo 250W Pump',
      price: 680000,
      image: 'https://via.placeholder.com/200x200?text=Leo+250W',
      rating: 4.8,
      sold: 650,
      original: true
    },
    {
      id: 6,
      brand: 'LEO',
      name: 'Leo Fittings Set',
      price: 85000,
      image: 'https://via.placeholder.com/200x200?text=Leo+Fittings',
      rating: 4.7,
      sold: 2100,
      original: true
    }
  ];

  const features = [
    { icon: <Truck size={24} />, title: 'Pengiriman Cepat', desc: 'Ke seluruh Indonesia' },
    { icon: <Shield size={24} />, title: 'Garansi Resmi', desc: 'Produk original' },
    { icon: <ChevronLeft size={24} />, title: '7 Hari Retur', desc: 'Syarat & ketentuan berlaku' },
    { icon: <Phone size={24} />, title: 'Customer Service', desc: 'Siap membantu Anda' }
  ];

  const formatRp = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  const nextBanner = () => {
    setCarouselIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCarouselIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="bg-blue-950 border-b border-blue-900">
        {/* Top Bar */}
        <div className="bg-blue-900 px-6 py-2 text-center text-sm text-gray-300">
          Selamat datang di SAMUDERA - Trusted Hardware. Honest Prices.
        </div>

        {/* Main Header */}
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div>
              <h1 className="text-xl font-bold">SAMUDERA</h1>
              <p className="text-xs text-gray-400">Trusted Hardware. Honest Prices.</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8 flex">
            <input
              type="text"
              placeholder="Cari produk, kategori, atau merek..."
              className="flex-1 bg-gray-100 text-black px-4 py-2 rounded-l"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r font-bold">
              <Search size={20} />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 ml-8">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Phone size={20} />
              <span className="text-sm">Bantuan</span>
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              <MapPin size={20} />
              <span className="text-sm">Lacak Pesanan</span>
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              <ShoppingCart size={20} />
              <span className="text-sm">Keranjang</span>
              {cart.length > 0 && (
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center px-6 py-3 border-t border-blue-900 gap-8 overflow-x-auto">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Menu size={20} />
            SEMUA KATEGORI
          </button>
          <button className="text-orange-500 font-bold pb-2 border-b-2 border-orange-500">
            Home
          </button>
          <button className="text-gray-400 hover:text-white">Water Pump</button>
          <button className="text-gray-400 hover:text-white">Tools</button>
          <button className="text-gray-400 hover:text-white">Electrical</button>
          <button className="text-gray-400 hover:text-white">Plumbing</button>
          <button className="text-gray-400 hover:text-white">Hardware</button>
          <button className="text-gray-400 hover:text-white">Home Improvement</button>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-12 px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-4">
                {banners[carouselIndex].title}
              </h2>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">
                {banners[carouselIndex].subtitle}
              </h3>
              <div className="flex gap-6 mb-8">
                {banners[carouselIndex].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    {idx === 0 && <Shield size={20} className="text-orange-500" />}
                    {idx === 1 && <Truck size={20} className="text-orange-500" />}
                    {idx === 2 && <ChevronRight size={20} className="text-orange-500" />}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img src={banners[carouselIndex].image} alt="Hero" className="rounded-lg" />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevBanner}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-blue-700 hover:bg-blue-600 p-3 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextBanner}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-blue-700 hover:bg-blue-600 p-3 rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {banners.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === carouselIndex ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <div className="bg-gray-900 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-8 gap-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-3 hover:opacity-80 transition"
            >
              <div className="text-4xl">{cat.icon}</div>
              <span className="text-sm text-center text-gray-300">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-black px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-gray-900 p-6 rounded">
              <div className="text-blue-500">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-black px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">PRODUK TERLARIS</h2>
            <button className="text-orange-500 hover:text-orange-400 flex items-center gap-2">
              Lihat semua <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 rounded overflow-hidden hover:shadow-lg transition hover:bg-gray-800"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  {product.original && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      ORIGINAL
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
                  <h3 className="text-sm font-bold mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs">{product.rating}</span>
                    <span className="text-xs text-gray-500">Terjual {product.sold}</span>
                  </div>

                  <p className="text-orange-500 font-bold text-lg mb-3">
                    {formatRp(product.price)}
                  </p>

                  <button
                    onClick={() => setCart([...cart, product])}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm font-bold"
                  >
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Sections */}
      <div className="bg-black px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">PENGIRIMAN CEPAT</h3>
              <p className="text-sm text-gray-300 mb-4">Ke seluruh Indonesia Bersama ekspedisi terpercaya</p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-bold">
                Lihat Selengkapnya
              </button>
            </div>
            <Truck size={64} className="text-blue-400" />
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-8 rounded flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">PRODUK ORIGINAL</h3>
              <p className="text-sm text-gray-100 mb-4">Jaminan 100% produk original Diegaransi resmi pabrik</p>
              <button className="bg-white hover:bg-gray-100 text-orange-600 px-4 py-2 rounded text-sm font-bold">
                Belanja Sekarang
              </button>
            </div>
            <Shield size={64} className="text-white" />
          </div>

          <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-8 rounded flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">LACAK PESANAN</h3>
              <p className="text-sm text-gray-300 mb-4">Pantau pesanan Anda secara real-time</p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-bold">
                Lacak Sekarang
              </button>
            </div>
            <MapPin size={64} className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">INFORMASI</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>About Us</p>
              <p>Cara Belanja</p>
              <p>Pembayaran</p>
              <p>Pengiriman</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">LAYANAN PELANGGAN</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Bantuan</p>
              <p>Lacak Pesanan</p>
              <p>Kebijakan Privasi</p>
              <p>Hubungi Kami</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">METODE PEMBAYARAN</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <p>BCA</p>
              <p>Mandiri</p>
              <p>Transfer Bank & QRIS</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">EKSPEDISI</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <p>JNE</p>
              <p>J&T Express</p>
              <p>SiCepat</p>
              <p>GrobExpress</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">FOLLOW KAMI</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2024 SAMUDERA. All Rights Reserved. | Made with ❤️ in Indonesia
        </div>
      </footer>
    </div>
  );
        }
