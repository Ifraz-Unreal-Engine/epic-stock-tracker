"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Play,
  Pause,
  RotateCcw,
  Search,
  Calendar,
  Globe,
  TrendingUp,
  Bitcoin,
  Sparkles,
  Star,
  Target,
  Coins,
  Activity,
  BarChart3,
  Zap,
  Building2,
  TrendingDown,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  Eye,
  Filter,
  Bell,
  PieChart,
  LineChart,
  CalendarIcon,
  Clock,
  Award,
  CloudLightning as Lightning,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react"

// Comprehensive list of companies with enhanced data
const COMPANIES = [
  // Technology - FAANG/Big Tech
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    color: "from-blue-500 to-purple-600",
    icon: "📱",
    marketCap: 2800000000000,
    peRatio: 28.5,
    description: "Consumer electronics and software company",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    sector: "Technology",
    color: "from-blue-600 to-cyan-500",
    icon: "💻",
    marketCap: 2400000000000,
    peRatio: 32.1,
    description: "Cloud computing and productivity software",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    sector: "Technology",
    color: "from-red-500 to-yellow-500",
    icon: "🔍",
    marketCap: 1600000000000,
    peRatio: 24.8,
    description: "Search engine and digital advertising",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    sector: "Technology",
    color: "from-orange-500 to-yellow-500",
    icon: "📦",
    marketCap: 1400000000000,
    peRatio: 45.2,
    description: "E-commerce and cloud services",
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    sector: "Technology",
    color: "from-blue-500 to-indigo-600",
    icon: "👥",
    marketCap: 800000000000,
    peRatio: 22.7,
    description: "Social media and virtual reality",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    sector: "Technology",
    color: "from-red-500 to-pink-500",
    icon: "🚗",
    marketCap: 700000000000,
    peRatio: 65.3,
    description: "Electric vehicles and energy storage",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    sector: "Technology",
    color: "from-green-500 to-emerald-600",
    icon: "🎮",
    marketCap: 1200000000000,
    peRatio: 58.9,
    description: "Graphics processing and AI chips",
  },
  {
    symbol: "NFLX",
    name: "Netflix Inc.",
    sector: "Technology",
    color: "from-red-600 to-rose-500",
    icon: "🎬",
    marketCap: 180000000000,
    peRatio: 35.4,
    description: "Streaming entertainment service",
  },

  // Technology - Other Major Tech
  {
    symbol: "ORCL",
    name: "Oracle Corporation",
    sector: "Technology",
    color: "from-red-600 to-orange-600",
    icon: "🗄️",
    marketCap: 320000000000,
    peRatio: 28.3,
    description: "Database software and cloud computing",
  },
  {
    symbol: "CRM",
    name: "Salesforce Inc.",
    sector: "Technology",
    color: "from-blue-400 to-cyan-400",
    icon: "☁️",
    marketCap: 220000000000,
    peRatio: 45.7,
    description: "Customer relationship management software",
  },
  {
    symbol: "ADBE",
    name: "Adobe Inc.",
    sector: "Technology",
    color: "from-red-500 to-pink-500",
    icon: "🎨",
    marketCap: 240000000000,
    peRatio: 42.1,
    description: "Creative software and digital marketing",
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    sector: "Technology",
    color: "from-blue-600 to-indigo-600",
    icon: "🔧",
    marketCap: 180000000000,
    peRatio: 15.2,
    description: "Semiconductor chip manufacturing",
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices",
    sector: "Technology",
    color: "from-red-500 to-orange-500",
    icon: "⚡",
    marketCap: 240000000000,
    peRatio: 28.9,
    description: "Computer processors and graphics cards",
  },
  {
    symbol: "CSCO",
    name: "Cisco Systems Inc.",
    sector: "Technology",
    color: "from-blue-500 to-teal-500",
    icon: "🌐",
    marketCap: 200000000000,
    peRatio: 18.4,
    description: "Networking hardware and software",
  },
  {
    symbol: "IBM",
    name: "International Business Machines",
    sector: "Technology",
    color: "from-blue-700 to-indigo-700",
    icon: "🏢",
    marketCap: 130000000000,
    peRatio: 22.6,
    description: "Enterprise software and consulting",
  },
  {
    symbol: "QCOM",
    name: "Qualcomm Inc.",
    sector: "Technology",
    color: "from-blue-500 to-purple-500",
    icon: "📡",
    marketCap: 190000000000,
    peRatio: 16.8,
    description: "Wireless telecommunications technology",
  },
  {
    symbol: "AVGO",
    name: "Broadcom Inc.",
    sector: "Technology",
    color: "from-green-600 to-teal-600",
    icon: "🔌",
    marketCap: 580000000000,
    peRatio: 31.2,
    description: "Semiconductor and infrastructure software",
  },
  {
    symbol: "TXN",
    name: "Texas Instruments Inc.",
    sector: "Technology",
    color: "from-orange-500 to-red-500",
    icon: "🔬",
    marketCap: 170000000000,
    peRatio: 24.7,
    description: "Analog and embedded processing semiconductors",
  },

  // Financial Services - Major Banks
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    sector: "Financial Services",
    color: "from-blue-700 to-blue-900",
    icon: "🏦",
    marketCap: 450000000000,
    peRatio: 12.8,
    description: "Investment banking and financial services",
  },
  {
    symbol: "BAC",
    name: "Bank of America Corp.",
    sector: "Financial Services",
    color: "from-red-600 to-red-800",
    icon: "🏛️",
    marketCap: 280000000000,
    peRatio: 11.5,
    description: "Consumer and commercial banking",
  },
  {
    symbol: "WFC",
    name: "Wells Fargo & Company",
    sector: "Financial Services",
    color: "from-yellow-600 to-orange-600",
    icon: "🐎",
    marketCap: 180000000000,
    peRatio: 10.9,
    description: "Diversified financial services",
  },
  {
    symbol: "C",
    name: "Citigroup Inc.",
    sector: "Financial Services",
    color: "from-blue-600 to-cyan-600",
    icon: "🌍",
    marketCap: 120000000000,
    peRatio: 9.8,
    description: "Global investment banking and services",
  },
  {
    symbol: "GS",
    name: "Goldman Sachs Group Inc.",
    sector: "Financial Services",
    color: "from-blue-800 to-indigo-800",
    icon: "💼",
    marketCap: 140000000000,
    peRatio: 13.2,
    description: "Investment banking and securities",
  },
  {
    symbol: "MS",
    name: "Morgan Stanley",
    sector: "Financial Services",
    color: "from-blue-700 to-purple-700",
    icon: "📈",
    marketCap: 150000000000,
    peRatio: 14.1,
    description: "Investment banking and wealth management",
  },

  // Financial Services - Payment & Fintech
  {
    symbol: "V",
    name: "Visa Inc.",
    sector: "Financial Services",
    color: "from-blue-600 to-purple-600",
    icon: "💎",
    marketCap: 520000000000,
    peRatio: 33.2,
    description: "Payment processing network",
  },
  {
    symbol: "MA",
    name: "Mastercard Inc.",
    sector: "Financial Services",
    color: "from-red-500 to-orange-500",
    icon: "🔴",
    marketCap: 380000000000,
    peRatio: 31.7,
    description: "Global payment technology",
  },
  {
    symbol: "PYPL",
    name: "PayPal Holdings Inc.",
    sector: "Financial Services",
    color: "from-blue-500 to-cyan-500",
    icon: "💳",
    marketCap: 80000000000,
    peRatio: 18.9,
    description: "Digital payments platform",
  },
  {
    symbol: "AXP",
    name: "American Express Company",
    sector: "Financial Services",
    color: "from-green-600 to-teal-600",
    icon: "💰",
    marketCap: 140000000000,
    peRatio: 16.4,
    description: "Credit cards and financial services",
  },

  // Healthcare - Pharmaceuticals
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    sector: "Healthcare",
    color: "from-red-500 to-pink-600",
    icon: "🏥",
    marketCap: 420000000000,
    peRatio: 15.6,
    description: "Pharmaceuticals and medical devices",
  },
  {
    symbol: "PFE",
    name: "Pfizer Inc.",
    sector: "Healthcare",
    color: "from-blue-500 to-cyan-600",
    icon: "💊",
    marketCap: 280000000000,
    peRatio: 13.4,
    description: "Pharmaceutical research and development",
  },
  {
    symbol: "ABBV",
    name: "AbbVie Inc.",
    sector: "Healthcare",
    color: "from-purple-500 to-pink-500",
    icon: "🧬",
    marketCap: 290000000000,
    peRatio: 14.8,
    description: "Biopharmaceutical company",
  },
  {
    symbol: "MRK",
    name: "Merck & Co. Inc.",
    sector: "Healthcare",
    color: "from-blue-600 to-indigo-600",
    icon: "⚗️",
    marketCap: 320000000000,
    peRatio: 16.2,
    description: "Pharmaceutical and vaccine development",
  },
  {
    symbol: "LLY",
    name: "Eli Lilly and Company",
    sector: "Healthcare",
    color: "from-red-600 to-pink-600",
    icon: "🔬",
    marketCap: 580000000000,
    peRatio: 45.3,
    description: "Pharmaceutical research and manufacturing",
  },
  {
    symbol: "BMY",
    name: "Bristol Myers Squibb",
    sector: "Healthcare",
    color: "from-blue-500 to-purple-500",
    icon: "🧪",
    marketCap: 120000000000,
    peRatio: 12.7,
    description: "Biopharmaceutical company",
  },
  {
    symbol: "AMGN",
    name: "Amgen Inc.",
    sector: "Healthcare",
    color: "from-teal-500 to-cyan-500",
    icon: "🧬",
    marketCap: 140000000000,
    peRatio: 13.9,
    description: "Biotechnology and pharmaceuticals",
  },
  {
    symbol: "GILD",
    name: "Gilead Sciences Inc.",
    sector: "Healthcare",
    color: "from-green-500 to-teal-500",
    icon: "💉",
    marketCap: 85000000000,
    peRatio: 11.8,
    description: "Biopharmaceutical company",
  },

  // Consumer Goods - Retail & E-commerce
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    sector: "Consumer Goods",
    color: "from-blue-600 to-yellow-500",
    icon: "🛒",
    marketCap: 480000000000,
    peRatio: 26.3,
    description: "Retail and e-commerce",
  },
  {
    symbol: "HD",
    name: "Home Depot Inc.",
    sector: "Consumer Goods",
    color: "from-orange-500 to-red-500",
    icon: "🔨",
    marketCap: 380000000000,
    peRatio: 22.4,
    description: "Home improvement retail",
  },
  {
    symbol: "LOW",
    name: "Lowe's Companies Inc.",
    sector: "Consumer Goods",
    color: "from-blue-500 to-indigo-500",
    icon: "🏠",
    marketCap: 140000000000,
    peRatio: 18.7,
    description: "Home improvement retail",
  },
  {
    symbol: "TGT",
    name: "Target Corporation",
    sector: "Consumer Goods",
    color: "from-red-500 to-pink-500",
    icon: "🎯",
    marketCap: 70000000000,
    peRatio: 15.2,
    description: "General merchandise retailer",
  },
  {
    symbol: "COST",
    name: "Costco Wholesale Corporation",
    sector: "Consumer Goods",
    color: "from-blue-600 to-cyan-600",
    icon: "🏪",
    marketCap: 320000000000,
    peRatio: 42.1,
    description: "Membership-only warehouse club",
  },

  // Consumer Goods - Food & Beverage
  {
    symbol: "KO",
    name: "Coca-Cola Company",
    sector: "Consumer Goods",
    color: "from-red-500 to-red-700",
    icon: "🥤",
    marketCap: 260000000000,
    peRatio: 25.8,
    description: "Beverage manufacturing and distribution",
  },
  {
    symbol: "PEP",
    name: "PepsiCo Inc.",
    sector: "Consumer Goods",
    color: "from-blue-500 to-red-500",
    icon: "🥤",
    marketCap: 240000000000,
    peRatio: 24.6,
    description: "Food and beverage company",
  },
  {
    symbol: "MCD",
    name: "McDonald's Corporation",
    sector: "Consumer Goods",
    color: "from-yellow-500 to-red-500",
    icon: "🍟",
    marketCap: 220000000000,
    peRatio: 26.1,
    description: "Fast food restaurant chain",
  },
  {
    symbol: "SBUX",
    name: "Starbucks Corporation",
    sector: "Consumer Goods",
    color: "from-green-600 to-teal-600",
    icon: "☕",
    marketCap: 110000000000,
    peRatio: 28.4,
    description: "Coffee company and coffeehouse chain",
  },
  {
    symbol: "NKE",
    name: "Nike Inc.",
    sector: "Consumer Goods",
    color: "from-black to-gray-600",
    icon: "👟",
    marketCap: 180000000000,
    peRatio: 32.7,
    description: "Athletic footwear and apparel",
  },

  // Energy
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    sector: "Energy",
    color: "from-blue-600 to-red-600",
    icon: "⛽",
    marketCap: 420000000000,
    peRatio: 14.2,
    description: "Oil and gas exploration and production",
  },
  {
    symbol: "CVX",
    name: "Chevron Corporation",
    sector: "Energy",
    color: "from-blue-500 to-red-500",
    icon: "🛢️",
    marketCap: 320000000000,
    peRatio: 13.8,
    description: "Integrated oil and gas company",
  },
  {
    symbol: "COP",
    name: "ConocoPhillips",
    sector: "Energy",
    color: "from-red-600 to-orange-600",
    icon: "⚡",
    marketCap: 140000000000,
    peRatio: 12.4,
    description: "Independent oil and gas company",
  },

  // Industrial
  {
    symbol: "BA",
    name: "Boeing Company",
    sector: "Industrial",
    color: "from-blue-600 to-indigo-600",
    icon: "✈️",
    marketCap: 120000000000,
    peRatio: 28.9,
    description: "Aerospace and defense manufacturer",
  },
  {
    symbol: "CAT",
    name: "Caterpillar Inc.",
    sector: "Industrial",
    color: "from-yellow-500 to-orange-500",
    icon: "🚜",
    marketCap: 160000000000,
    peRatio: 16.7,
    description: "Construction and mining equipment",
  },
  {
    symbol: "GE",
    name: "General Electric Company",
    sector: "Industrial",
    color: "from-blue-500 to-cyan-500",
    icon: "⚙️",
    marketCap: 180000000000,
    peRatio: 22.3,
    description: "Industrial conglomerate",
  },
  {
    symbol: "MMM",
    name: "3M Company",
    sector: "Industrial",
    color: "from-red-500 to-pink-500",
    icon: "🔧",
    marketCap: 70000000000,
    peRatio: 18.1,
    description: "Diversified technology company",
  },
  {
    symbol: "HON",
    name: "Honeywell International Inc.",
    sector: "Industrial",
    color: "from-red-600 to-orange-600",
    icon: "🏭",
    marketCap: 140000000000,
    peRatio: 24.8,
    description: "Multinational conglomerate",
  },

  // Telecommunications
  {
    symbol: "VZ",
    name: "Verizon Communications Inc.",
    sector: "Telecommunications",
    color: "from-red-600 to-pink-600",
    icon: "📱",
    marketCap: 170000000000,
    peRatio: 8.9,
    description: "Telecommunications and wireless services",
  },
  {
    symbol: "T",
    name: "AT&T Inc.",
    sector: "Telecommunications",
    color: "from-blue-500 to-cyan-500",
    icon: "📞",
    marketCap: 120000000000,
    peRatio: 7.2,
    description: "Telecommunications and media company",
  },
  {
    symbol: "TMUS",
    name: "T-Mobile US Inc.",
    sector: "Telecommunications",
    color: "from-pink-500 to-purple-500",
    icon: "📶",
    marketCap: 180000000000,
    peRatio: 24.6,
    description: "Wireless network operator",
  },

  // Entertainment & Media
  {
    symbol: "DIS",
    name: "Walt Disney Company",
    sector: "Entertainment",
    color: "from-blue-500 to-purple-500",
    icon: "🏰",
    marketCap: 180000000000,
    peRatio: 38.7,
    description: "Entertainment and media conglomerate",
  },
  {
    symbol: "CMCSA",
    name: "Comcast Corporation",
    sector: "Entertainment",
    color: "from-blue-600 to-indigo-600",
    icon: "📺",
    marketCap: 160000000000,
    peRatio: 11.4,
    description: "Media and telecommunications conglomerate",
  },

  // Automotive
  {
    symbol: "F",
    name: "Ford Motor Company",
    sector: "Automotive",
    color: "from-blue-600 to-indigo-600",
    icon: "🚙",
    marketCap: 50000000000,
    peRatio: 12.8,
    description: "Automotive manufacturer",
  },
  {
    symbol: "GM",
    name: "General Motors Company",
    sector: "Automotive",
    color: "from-blue-500 to-cyan-500",
    icon: "🚗",
    marketCap: 60000000000,
    peRatio: 5.9,
    description: "Automotive manufacturer",
  },

  // Real Estate
  {
    symbol: "AMT",
    name: "American Tower Corporation",
    sector: "Real Estate",
    color: "from-red-500 to-orange-500",
    icon: "🗼",
    marketCap: 100000000000,
    peRatio: 28.4,
    description: "Real estate investment trust",
  },
  {
    symbol: "PLD",
    name: "Prologis Inc.",
    sector: "Real Estate",
    color: "from-blue-500 to-teal-500",
    icon: "🏢",
    marketCap: 120000000000,
    peRatio: 32.1,
    description: "Industrial real estate company",
  },

  // Utilities
  {
    symbol: "NEE",
    name: "NextEra Energy Inc.",
    sector: "Utilities",
    color: "from-green-500 to-teal-500",
    icon: "⚡",
    marketCap: 160000000000,
    peRatio: 22.7,
    description: "Electric utility and clean energy company",
  },
  {
    symbol: "DUK",
    name: "Duke Energy Corporation",
    sector: "Utilities",
    color: "from-blue-500 to-green-500",
    icon: "🔌",
    marketCap: 80000000000,
    peRatio: 18.9,
    description: "Electric power holding company",
  },

  // Additional Major Companies
  {
    symbol: "UNH",
    name: "UnitedHealth Group Inc.",
    sector: "Healthcare",
    color: "from-blue-600 to-cyan-600",
    icon: "🏥",
    marketCap: 520000000000,
    peRatio: 24.8,
    description: "Health insurance and healthcare services",
  },
  {
    symbol: "BRK.B",
    name: "Berkshire Hathaway Inc.",
    sector: "Financial Services",
    color: "from-green-600 to-blue-600",
    icon: "💎",
    marketCap: 780000000000,
    peRatio: 8.9,
    description: "Multinational conglomerate holding company",
  },
  {
    symbol: "SPY",
    name: "SPDR S&P 500 ETF",
    sector: "Financial Services",
    color: "from-blue-500 to-purple-500",
    icon: "📊",
    marketCap: 450000000000,
    peRatio: null,
    description: "Exchange-traded fund tracking S&P 500",
  },
  {
    symbol: "QQQ",
    name: "Invesco QQQ Trust",
    sector: "Financial Services",
    color: "from-green-500 to-blue-500",
    icon: "📈",
    marketCap: 220000000000,
    peRatio: null,
    description: "ETF tracking NASDAQ-100 index",
  },
]

// Comprehensive list of cryptocurrencies with enhanced data
const CRYPTOCURRENCIES = [
  // Major Cryptocurrencies
  {
    symbol: "BTC",
    name: "Bitcoin",
    category: "Major",
    color: "from-orange-400 to-yellow-500",
    icon: "₿",
    marketCap: 850000000000,
    peRatio: null,
    description: "First and largest cryptocurrency by market cap",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    category: "Major",
    color: "from-blue-400 to-purple-600",
    icon: "Ξ",
    marketCap: 280000000000,
    peRatio: null,
    description: "Smart contract platform and decentralized applications",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    category: "Major",
    color: "from-yellow-400 to-orange-500",
    icon: "🔶",
    marketCap: 85000000000,
    peRatio: null,
    description: "Native token of Binance exchange ecosystem",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    category: "Major",
    color: "from-blue-500 to-cyan-500",
    icon: "💧",
    marketCap: 65000000000,
    peRatio: null,
    description: "Digital payment protocol for financial institutions",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    category: "Major",
    color: "from-blue-600 to-indigo-700",
    icon: "🔷",
    marketCap: 45000000000,
    peRatio: null,
    description: "Proof-of-stake blockchain platform",
  },
  {
    symbol: "SOL",
    name: "Solana",
    category: "Major",
    color: "from-purple-500 to-pink-600",
    icon: "☀️",
    marketCap: 55000000000,
    peRatio: null,
    description: "High-performance blockchain for decentralized apps",
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    category: "Layer 1",
    color: "from-purple-600 to-indigo-600",
    icon: "🔺",
    marketCap: 12000000000,
    peRatio: null,
    description: "Ethereum scaling and infrastructure development",
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    category: "Layer 1",
    color: "from-pink-500 to-red-500",
    icon: "⚫",
    marketCap: 8000000000,
    peRatio: null,
    description: "Multi-chain interoperability protocol",
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    category: "Layer 1",
    color: "from-red-500 to-pink-500",
    icon: "🏔️",
    marketCap: 15000000000,
    peRatio: null,
    description: "High-throughput smart contracts platform",
  },
  {
    symbol: "ATOM",
    name: "Cosmos",
    category: "Layer 1",
    color: "from-blue-500 to-purple-500",
    icon: "⚛️",
    marketCap: 4000000000,
    peRatio: null,
    description: "Internet of blockchains ecosystem",
  },

  // DeFi Tokens
  {
    symbol: "UNI",
    name: "Uniswap",
    category: "DeFi",
    color: "from-pink-500 to-purple-600",
    icon: "🦄",
    marketCap: 8000000000,
    peRatio: null,
    description: "Decentralized exchange protocol",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    category: "DeFi",
    color: "from-blue-500 to-cyan-600",
    icon: "🔗",
    marketCap: 12000000000,
    peRatio: null,
    description: "Decentralized oracle network",
  },
  {
    symbol: "AAVE",
    name: "Aave",
    category: "DeFi",
    color: "from-purple-500 to-pink-500",
    icon: "👻",
    marketCap: 2000000000,
    peRatio: null,
    description: "Decentralized lending protocol",
  },
  {
    symbol: "COMP",
    name: "Compound",
    category: "DeFi",
    color: "from-green-500 to-teal-500",
    icon: "🏛️",
    marketCap: 800000000,
    peRatio: null,
    description: "Algorithmic money market protocol",
  },
  {
    symbol: "MKR",
    name: "Maker",
    category: "DeFi",
    color: "from-teal-500 to-cyan-500",
    icon: "🏗️",
    marketCap: 2500000000,
    peRatio: null,
    description: "Decentralized autonomous organization",
  },
  {
    symbol: "SUSHI",
    name: "SushiSwap",
    category: "DeFi",
    color: "from-red-500 to-pink-500",
    icon: "🍣",
    marketCap: 400000000,
    peRatio: null,
    description: "Decentralized exchange and DeFi platform",
  },

  // Meme Coins
  {
    symbol: "DOGE",
    name: "Dogecoin",
    category: "Meme",
    color: "from-yellow-400 to-orange-500",
    icon: "🐕",
    marketCap: 25000000000,
    peRatio: null,
    description: "Meme-based cryptocurrency with strong community",
  },
  {
    symbol: "SHIB",
    name: "Shiba Inu",
    category: "Meme",
    color: "from-orange-500 to-red-500",
    icon: "🐕‍🦺",
    marketCap: 15000000000,
    peRatio: null,
    description: "Ethereum-based meme token",
  },
  {
    symbol: "PEPE",
    name: "Pepe",
    category: "Meme",
    color: "from-green-400 to-lime-500",
    icon: "🐸",
    marketCap: 3000000000,
    peRatio: null,
    description: "Meme token inspired by Pepe the Frog",
  },
  {
    symbol: "FLOKI",
    name: "Floki Inu",
    category: "Meme",
    color: "from-orange-400 to-yellow-400",
    icon: "🐺",
    marketCap: 1500000000,
    peRatio: null,
    description: "Meme token inspired by Elon Musk's dog",
  },

  // Stablecoins
  {
    symbol: "USDT",
    name: "Tether",
    category: "Stablecoin",
    color: "from-green-500 to-teal-500",
    icon: "💵",
    marketCap: 95000000000,
    peRatio: null,
    description: "USD-pegged stablecoin",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    category: "Stablecoin",
    color: "from-blue-500 to-cyan-500",
    icon: "🪙",
    marketCap: 55000000000,
    peRatio: null,
    description: "Fully reserved dollar digital currency",
  },
  {
    symbol: "BUSD",
    name: "Binance USD",
    category: "Stablecoin",
    color: "from-yellow-500 to-orange-500",
    icon: "💰",
    marketCap: 5000000000,
    peRatio: null,
    description: "Binance-issued USD-backed stablecoin",
  },
  {
    symbol: "DAI",
    name: "Dai",
    category: "Stablecoin",
    color: "from-orange-500 to-yellow-500",
    icon: "🟡",
    marketCap: 8000000000,
    peRatio: null,
    description: "Decentralized stablecoin backed by crypto collateral",
  },

  // Gaming & NFT
  {
    symbol: "AXS",
    name: "Axie Infinity",
    category: "Gaming",
    color: "from-blue-500 to-purple-500",
    icon: "🎮",
    marketCap: 1200000000,
    peRatio: null,
    description: "Play-to-earn gaming ecosystem",
  },
  {
    symbol: "SAND",
    name: "The Sandbox",
    category: "Gaming",
    color: "from-blue-400 to-cyan-400",
    icon: "🏖️",
    marketCap: 800000000,
    peRatio: null,
    description: "Virtual world and gaming platform",
  },
  {
    symbol: "MANA",
    name: "Decentraland",
    category: "Gaming",
    color: "from-orange-500 to-red-500",
    icon: "🌍",
    marketCap: 900000000,
    peRatio: null,
    description: "Virtual reality platform powered by Ethereum",
  },
  {
    symbol: "ENJ",
    name: "Enjin Coin",
    category: "Gaming",
    color: "from-purple-500 to-indigo-500",
    icon: "⚔️",
    marketCap: 400000000,
    peRatio: null,
    description: "Gaming-focused blockchain platform",
  },

  // Exchange Tokens
  {
    symbol: "CRO",
    name: "Cronos",
    category: "Exchange",
    color: "from-blue-600 to-indigo-600",
    icon: "💎",
    marketCap: 3000000000,
    peRatio: null,
    description: "Crypto.com ecosystem token",
  },
  {
    symbol: "FTT",
    name: "FTX Token",
    category: "Exchange",
    color: "from-blue-500 to-cyan-500",
    icon: "🔷",
    marketCap: 500000000,
    peRatio: null,
    description: "FTX exchange utility token",
  },
  {
    symbol: "HT",
    name: "Huobi Token",
    category: "Exchange",
    color: "from-blue-600 to-teal-600",
    icon: "🔶",
    marketCap: 800000000,
    peRatio: null,
    description: "Huobi exchange ecosystem token",
  },

  // Privacy Coins
  {
    symbol: "XMR",
    name: "Monero",
    category: "Privacy",
    color: "from-orange-600 to-red-600",
    icon: "🔒",
    marketCap: 3000000000,
    peRatio: null,
    description: "Privacy-focused cryptocurrency",
  },
  {
    symbol: "ZEC",
    name: "Zcash",
    category: "Privacy",
    color: "from-yellow-500 to-orange-500",
    icon: "🛡️",
    marketCap: 800000000,
    peRatio: null,
    description: "Privacy-preserving digital currency",
  },
]

// Timeline Events Data
const TIMELINE_EVENTS = {
  // Financial & Corporate Events
  financial: [
    {
      id: 1,
      date: "2024-01-15",
      type: "earnings",
      title: "Apple Q1 2024 Earnings Beat",
      description: "Apple reported record Q1 revenue of $119.6B, beating estimates by 3.2%",
      impact: "positive",
      symbol: "AAPL",
      icon: "📊",
      category: "Earnings Report",
      details: "EPS: $2.18 vs $2.10 expected, iPhone revenue up 6% YoY",
      reactions: { likes: 1247, dislikes: 89, views: 15420 },
    },
    {
      id: 2,
      date: "2024-02-08",
      type: "dividend",
      title: "Microsoft Increases Dividend",
      description: "Microsoft announced 10% dividend increase to $0.75 per share",
      impact: "positive",
      symbol: "MSFT",
      icon: "💰",
      category: "Dividend Announcement",
      details: "Quarterly dividend raised from $0.68 to $0.75, effective Q2 2024",
      reactions: { likes: 892, dislikes: 23, views: 8750 },
    },
    {
      id: 3,
      date: "2024-03-12",
      type: "product",
      title: "Tesla Cybertruck Production Milestone",
      description: "Tesla reaches 10,000 Cybertruck deliveries, ahead of schedule",
      impact: "positive",
      symbol: "TSLA",
      icon: "🚗",
      category: "Product Launch",
      details: "Production ramping up to 125,000 units annually by end of 2024",
      reactions: { likes: 2156, dislikes: 234, views: 28940 },
    },
    {
      id: 4,
      date: "2024-04-20",
      type: "merger",
      title: "Meta Acquires AI Startup",
      description: "Meta announces $2.8B acquisition of AI research company Anthropic",
      impact: "positive",
      symbol: "META",
      icon: "🤝",
      category: "Merger & Acquisition",
      details: "Deal expected to close Q3 2024, strengthening Meta's AI capabilities",
      reactions: { likes: 1567, dislikes: 445, views: 19230 },
    },
    {
      id: 5,
      date: "2024-05-15",
      type: "split",
      title: "NVIDIA 4-for-1 Stock Split",
      description: "NVIDIA announces 4-for-1 stock split effective June 7, 2024",
      impact: "neutral",
      symbol: "NVDA",
      icon: "✂️",
      category: "Stock Split",
      details: "Split designed to make shares more accessible to retail investors",
      reactions: { likes: 3421, dislikes: 156, views: 45670 },
    },
  ],

  // News & External Factors
  news: [
    {
      id: 6,
      date: "2024-01-25",
      type: "industry",
      title: "AI Chip Shortage Affects Tech Sector",
      description: "Global shortage of AI chips impacts major tech companies' production",
      impact: "negative",
      symbol: "NVDA",
      icon: "🔧",
      category: "Industry News",
      details: "Supply chain disruptions expected to last through Q2 2024",
      reactions: { likes: 567, dislikes: 89, views: 12340 },
    },
    {
      id: 7,
      date: "2024-02-14",
      type: "economic",
      title: "Fed Holds Interest Rates Steady",
      description: "Federal Reserve maintains rates at 5.25-5.50% range",
      impact: "neutral",
      symbol: "ALL",
      icon: "🏛️",
      category: "Economic Indicator",
      details: "Powell signals potential rate cuts in H2 2024 if inflation continues to decline",
      reactions: { likes: 2341, dislikes: 567, views: 34560 },
    },
    {
      id: 8,
      date: "2024-03-08",
      type: "regulatory",
      title: "EU Digital Markets Act Enforcement",
      description: "European Union begins enforcing new digital market regulations",
      impact: "negative",
      symbol: "GOOGL",
      icon: "⚖️",
      category: "Regulatory Change",
      details: "Tech giants face new compliance requirements and potential fines",
      reactions: { likes: 789, dislikes: 234, views: 15670 },
    },
    {
      id: 9,
      date: "2024-04-03",
      type: "leadership",
      title: "Amazon CFO Transition",
      description: "Amazon announces CFO Brian Olsavsky to step down, successor named",
      impact: "neutral",
      symbol: "AMZN",
      icon: "👔",
      category: "Leadership Change",
      details: "Smooth transition planned over 6-month period",
      reactions: { likes: 445, dislikes: 67, views: 8920 },
    },
  ],

  // Global & Market Events
  global: [
    {
      id: 10,
      date: "2024-01-10",
      type: "geopolitical",
      title: "Trade Relations Improve",
      description: "US-China trade talks show positive progress, tariff reductions discussed",
      impact: "positive",
      symbol: "ALL",
      icon: "🌍",
      category: "Geopolitical",
      details: "Potential 15% tariff reduction on tech goods under consideration",
      reactions: { likes: 1890, dislikes: 234, views: 28450 },
    },
    {
      id: 11,
      date: "2024-02-28",
      type: "market",
      title: "Market Volatility Spike",
      description: "VIX surges 40% amid inflation concerns and geopolitical tensions",
      impact: "negative",
      symbol: "ALL",
      icon: "📉",
      category: "Market Event",
      details: "S&P 500 down 3.2% in single session, triggering circuit breakers",
      reactions: { likes: 567, dislikes: 890, views: 45230 },
    },
    {
      id: 12,
      date: "2024-03-20",
      type: "pandemic",
      title: "Supply Chain Recovery",
      description: "Global supply chains show full recovery from pandemic disruptions",
      impact: "positive",
      symbol: "ALL",
      icon: "🚢",
      category: "Global Event",
      details: "Shipping costs normalize, inventory levels stabilize across industries",
      reactions: { likes: 2340, dislikes: 123, views: 31250 },
    },
  ],
}

// Analyst Ratings Data
const ANALYST_RATINGS = {
  AAPL: [
    { date: "2024-01-15", rating: "Buy", target: 200, analyst: "Goldman Sachs", confidence: 85 },
    { date: "2024-02-20", rating: "Strong Buy", target: 210, analyst: "Morgan Stanley", confidence: 90 },
    { date: "2024-03-10", rating: "Buy", target: 195, analyst: "JP Morgan", confidence: 80 },
    { date: "2024-04-05", rating: "Hold", target: 185, analyst: "Bank of America", confidence: 70 },
  ],
  MSFT: [
    { date: "2024-01-20", rating: "Strong Buy", target: 420, analyst: "Deutsche Bank", confidence: 88 },
    { date: "2024-02-15", rating: "Buy", target: 410, analyst: "Citigroup", confidence: 82 },
    { date: "2024-03-25", rating: "Buy", target: 425, analyst: "Wells Fargo", confidence: 85 },
  ],
  TSLA: [
    { date: "2024-01-08", rating: "Hold", target: 180, analyst: "UBS", confidence: 65 },
    { date: "2024-02-12", rating: "Buy", target: 220, analyst: "Wedbush", confidence: 78 },
    { date: "2024-03-18", rating: "Strong Buy", target: 250, analyst: "Oppenheimer", confidence: 85 },
  ],
}

// Sector/Category color mapping
const SECTOR_COLORS = {
  Technology: "from-blue-500 to-purple-600",
  "Financial Services": "from-green-500 to-emerald-600",
  Healthcare: "from-red-500 to-pink-600",
  "Consumer Goods": "from-orange-500 to-yellow-600",
  Energy: "from-amber-500 to-orange-600",
  Industrial: "from-gray-600 to-slate-700",
  Telecommunications: "from-indigo-500 to-purple-600",
  Entertainment: "from-pink-500 to-rose-600",
  Automotive: "from-slate-600 to-gray-700",
  "Real Estate": "from-teal-500 to-cyan-600",
  Utilities: "from-lime-500 to-green-600",
  // Crypto categories
  Major: "from-yellow-500 to-orange-600",
  DeFi: "from-purple-500 to-pink-600",
  "Layer 1": "from-blue-500 to-indigo-600",
  Meme: "from-green-400 to-lime-500",
  Stablecoin: "from-gray-500 to-slate-600",
  Gaming: "from-cyan-500 to-blue-600",
  Exchange: "from-teal-500 to-emerald-600",
  Privacy: "from-gray-600 to-slate-700",
}

// Time period options
const TIME_PERIODS = [
  { value: "1W", label: "1 Week", days: 7 },
  { value: "1M", label: "1 Month", days: 30 },
  { value: "3M", label: "3 Months", days: 90 },
  { value: "6M", label: "6 Months", days: 180 },
  { value: "1Y", label: "1 Year", days: 365 },
  { value: "2Y", label: "2 Years", days: 730 },
  { value: "5Y", label: "5 Years", days: 1825 },
]

// Language options with their locale codes
const LANGUAGES = [
  { code: "en-US", name: "English (US)", flag: "🇺🇸" },
  { code: "en-GB", name: "English (UK)", flag: "🇬🇧" },
  { code: "es-ES", name: "Español", flag: "🇪🇸" },
  { code: "fr-FR", name: "Français", flag: "🇫🇷" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "it-IT", name: "Italiano", flag: "🇮🇹" },
  { code: "pt-BR", name: "Português", flag: "🇧🇷" },
  { code: "ru-RU", name: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", name: "中文 (简体)", flag: "🇨🇳" },
  { code: "ja-JP", name: "日本語", flag: "🇯🇵" },
  { code: "ko-KR", name: "한국어", flag: "🇰🇷" },
]

// Currency options with exchange rates (mock rates for demo)
const CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$", rate: 1.0, flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", rate: 0.85, flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", rate: 0.73, flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", rate: 110.0, flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", rate: 6.45, flag: "🇨🇳" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", rate: 1.25, flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", rate: 1.35, flag: "🇦🇺" },
]

// Generate realistic price data with OHLC
const generatePriceData = (asset: any, timePeriod: (typeof TIME_PERIODS)[0], isCrypto: boolean) => {
  const data = []
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(endDate.getDate() - timePeriod.days)

  // Base price varies by asset type
  let basePrice = 50
  if (isCrypto) {
    if (["BTC"].includes(asset.symbol)) {
      basePrice = Math.random() * 20000 + 30000 // $30k-50k
    } else if (["ETH"].includes(asset.symbol)) {
      basePrice = Math.random() * 1000 + 1500 // $1.5k-2.5k
    } else if (asset.category === "Major") {
      basePrice = Math.random() * 500 + 100 // $100-600
    } else if (asset.category === "Meme") {
      basePrice = Math.random() * 0.01 + 0.001 // Very low prices
    } else {
      basePrice = Math.random() * 50 + 5 // $5-55
    }
  } else {
    if (["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA"].includes(asset.symbol)) {
      basePrice = Math.random() * 200 + 100 // $100-300
    } else if (asset.sector === "Technology") {
      basePrice = Math.random() * 150 + 50 // $50-200
    } else if (asset.sector === "Financial Services") {
      basePrice = Math.random() * 100 + 30 // $30-130
    }
  }

  let currentPrice = basePrice
  const volatility = isCrypto ? 0.08 : asset.sector === "Technology" ? 0.03 : 0.02 // Crypto is more volatile

  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  let openPrice = currentPrice

  for (let i = 0; i <= totalDays; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)

    // Crypto trades 24/7, stocks skip weekends for longer periods
    if (!isCrypto && timePeriod.days > 7 && (date.getDay() === 0 || date.getDay() === 6)) continue

    // Daily open price
    openPrice = currentPrice

    // Generate intraday high and low
    const dailyVolatility = volatility * 0.5
    const highMultiplier = 1 + Math.random() * dailyVolatility
    const lowMultiplier = 1 - Math.random() * dailyVolatility

    const high = Math.max(openPrice * highMultiplier, openPrice)
    const low = Math.min(openPrice * lowMultiplier, openPrice)

    // Simulate realistic price movements for close
    const randomChange = (Math.random() - 0.5) * 2 * volatility
    const closePrice = Math.max(0.0001, currentPrice * (1 + randomChange))

    // Ensure close is within high/low range
    const finalClose = Math.min(Math.max(closePrice, low), high)

    currentPrice = finalClose

    data.push({
      date: date.toISOString().split("T")[0],
      open: Number.parseFloat(openPrice.toFixed(isCrypto && openPrice < 1 ? 6 : 2)),
      high: Number.parseFloat(high.toFixed(isCrypto && high < 1 ? 6 : 2)),
      low: Number.parseFloat(low.toFixed(isCrypto && low < 1 ? 6 : 2)),
      close: Number.parseFloat(finalClose.toFixed(isCrypto && finalClose < 1 ? 6 : 2)),
      price: Number.parseFloat(finalClose.toFixed(isCrypto && finalClose < 1 ? 6 : 2)),
      volume: Math.floor(Math.random() * (isCrypto ? 10000000 : 5000000)) + 500000,
    })
  }

  return data
}

export default function Component() {
  const [cryptoMode, setCryptoMode] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState(COMPANIES[0])
  const [selectedAsset2, setSelectedAsset2] = useState(COMPANIES[1])
  const [selectedTimePeriod, setSelectedTimePeriod] = useState(TIME_PERIODS[4]) // Default to 1 Year
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]) // Default to English (US)
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]) // Default to USD
  const [assetData, setAssetData] = useState(() => generatePriceData(COMPANIES[0], TIME_PERIODS[4], false))
  const [assetData2, setAssetData2] = useState(() => generatePriceData(COMPANIES[1], TIME_PERIODS[4], false))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(100)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [compareMode, setCompareMode] = useState(false)
  const [eventFilter, setEventFilter] = useState("all")
  const [selectedTab, setSelectedTab] = useState("overview")

  // Get current asset list based on mode
  const currentAssets = cryptoMode ? CRYPTOCURRENCIES : COMPANIES

  // Filter assets based on search and category/sector
  const filteredAssets = currentAssets.filter((asset) => {
    const matchesSearch =
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    const categoryField = cryptoMode ? "category" : "sector"
    const matchesCategory = selectedCategory === "All" || asset[categoryField] === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get unique categories/sectors
  const categories = ["All", ...Array.from(new Set(currentAssets.map((a) => (cryptoMode ? a.category : a.sector))))]

  const currentData = assetData[currentIndex] || assetData[0]
  const currentData2 = assetData2[currentIndex] || assetData2[0]
  const previousData = currentIndex > 0 ? assetData[currentIndex - 1] : null
  const previousData2 = currentIndex > 0 ? assetData2[currentIndex - 1] : null
  const priceChange = previousData ? currentData.close - previousData.close : 0
  const priceChange2 = previousData2 ? currentData2.close - previousData2.close : 0
  const percentChange = previousData ? (priceChange / previousData.close) * 100 : 0
  const percentChange2 = previousData2 ? (priceChange2 / previousData2.close) * 100 : 0

  // Get relevant timeline events
  const getRelevantEvents = () => {
    const allEvents = [...TIMELINE_EVENTS.financial, ...TIMELINE_EVENTS.news, ...TIMELINE_EVENTS.global]
    return allEvents
      .filter((event) => {
        if (eventFilter === "all") return true
        if (eventFilter === "financial") return TIMELINE_EVENTS.financial.includes(event)
        if (eventFilter === "news") return TIMELINE_EVENTS.news.includes(event)
        if (eventFilter === "global") return TIMELINE_EVENTS.global.includes(event)
        return event.symbol === selectedAsset.symbol || event.symbol === "ALL"
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  // Handle mode switch
  useEffect(() => {
    const newAsset = currentAssets[0]
    const newAsset2 = currentAssets[1] || currentAssets[0]
    setSelectedAsset(newAsset)
    setSelectedAsset2(newAsset2)
    setAssetData(generatePriceData(newAsset, selectedTimePeriod, cryptoMode))
    setAssetData2(generatePriceData(newAsset2, selectedTimePeriod, cryptoMode))
    setCurrentIndex(0)
    setIsPlaying(false)
    setSearchTerm("")
    setSelectedCategory("All")
  }, [cryptoMode])

  // Update asset data when asset or time period changes
  useEffect(() => {
    setAssetData(generatePriceData(selectedAsset, selectedTimePeriod, cryptoMode))
    setCurrentIndex(0)
    setIsPlaying(false)
  }, [selectedAsset, selectedTimePeriod])

  useEffect(() => {
    setAssetData2(generatePriceData(selectedAsset2, selectedTimePeriod, cryptoMode))
    setCurrentIndex(0)
    setIsPlaying(false)
  }, [selectedAsset2, selectedTimePeriod])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxLength = Math.max(assetData.length, assetData2.length)
        if (prev >= maxLength - 1) {
          setIsPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [isPlaying, speed, assetData.length, assetData2.length])

  const handleAssetChange = (assetSymbol: string) => {
    const asset = currentAssets.find((a) => a.symbol === assetSymbol)
    if (asset) {
      setSelectedAsset(asset)
    }
  }

  const handleAsset2Change = (assetSymbol: string) => {
    const asset = currentAssets.find((a) => a.symbol === assetSymbol)
    if (asset) {
      setSelectedAsset2(asset)
    }
  }

  const handleTimePeriodChange = (timePeriodValue: string) => {
    const timePeriod = TIME_PERIODS.find((tp) => tp.value === timePeriodValue)
    if (timePeriod) {
      setSelectedTimePeriod(timePeriod)
    }
  }

  const handleLanguageChange = (languageCode: string) => {
    const language = LANGUAGES.find((l) => l.code === languageCode)
    if (language) {
      setSelectedLanguage(language)
    }
  }

  const handleCurrencyChange = (currencyCode: string) => {
    const currency = CURRENCIES.find((c) => c.code === currencyCode)
    if (currency) {
      setSelectedCurrency(currency)
    }
  }

  const handlePlay = () => {
    const maxLength = Math.max(assetData.length, assetData2.length)
    if (currentIndex >= maxLength - 1) {
      setCurrentIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }

  const handleSliderChange = (value: number[]) => {
    setCurrentIndex(value[0])
    setIsPlaying(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(selectedLanguage.code, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatCurrency = (amount: number) => {
    const convertedAmount = amount * selectedCurrency.rate
    return new Intl.NumberFormat(selectedLanguage.code, {
      style: "currency",
      currency: selectedCurrency.code,
      minimumFractionDigits: cryptoMode && convertedAmount < 1 ? 6 : 2,
      maximumFractionDigits: cryptoMode && convertedAmount < 1 ? 6 : 2,
    }).format(convertedAmount)
  }

  const formatVolume = (volume: number) => {
    if (volume >= 1000000000) {
      return `${(volume / 1000000000).toFixed(1)}B`
    }
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`
    }
    return volume.toString()
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1000000000000) {
      return `${(marketCap / 1000000000000).toFixed(2)}T`
    }
    if (marketCap >= 1000000000) {
      return `${(marketCap / 1000000000).toFixed(1)}B`
    }
    if (marketCap >= 1000000) {
      return `${(marketCap / 1000000).toFixed(1)}M`
    }
    return marketCap.toString()
  }

  const maxLength = Math.max(assetData.length, assetData2.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
        {/* Header Title */}
        <div className="text-center space-y-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10" />
          <div className="flex items-center justify-center gap-4">
            <div
              className={`p-3 rounded-2xl bg-gradient-to-r ${cryptoMode ? "from-orange-500 to-yellow-500" : "from-blue-500 to-purple-600"} shadow-lg`}
            >
              {cryptoMode ? <Bitcoin className="h-8 w-8 text-white" /> : <TrendingUp className="h-8 w-8 text-white" />}
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {cryptoMode ? "Crypto Price Tracker" : "Stock Price Tracker"}
            </h1>
            <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {cryptoMode
              ? "🚀 Track and compare historical cryptocurrency prices with interactive timeline navigation"
              : "📈 Track and compare historical stock prices with interactive timeline navigation"}
          </p>
        </div>

        {/* Mode Switch */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Market Mode</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/50 dark:bg-slate-800/50 p-3 rounded-2xl shadow-inner">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <Label htmlFor="crypto-mode" className="font-semibold text-blue-600">
                    Stocks
                  </Label>
                </div>
                <Switch
                  id="crypto-mode"
                  checked={cryptoMode}
                  onCheckedChange={setCryptoMode}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-500 data-[state=checked]:to-yellow-500"
                />
                <div className="flex items-center gap-2">
                  <Label htmlFor="crypto-mode" className="font-semibold text-orange-600">
                    Crypto
                  </Label>
                  <Bitcoin className="h-5 w-5 text-orange-600" />
                </div>
              </div>
            </CardTitle>
            <CardDescription className="text-lg">
              🎯 Switch between traditional stock market and cryptocurrency tracking
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Settings */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-green-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span>Language & Currency Settings</span>
              <Sparkles className="h-5 w-5 text-yellow-500" />
            </CardTitle>
            <CardDescription className="text-lg">
              🌍 Choose your preferred language and currency for the ultimate experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Language Selection */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <span>🗣️ Language</span>
                </Label>
                <Select value={selectedLanguage.code} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="h-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 border-2 border-blue-200 dark:border-slate-500">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {LANGUAGES.map((language) => (
                      <SelectItem key={language.code} value={language.code}>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium">{language.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Currency Selection */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <span>💰 Currency</span>
                </Label>
                <Select value={selectedCurrency.code} onValueChange={handleCurrencyChange}>
                  <SelectTrigger className="h-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 border-2 border-green-200 dark:border-slate-500">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{currency.flag}</span>
                          <span className="font-medium">
                            {currency.code} - {currency.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {currency.symbol}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Asset Selection */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-2xl">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${cryptoMode ? "from-orange-500 to-red-600" : "from-blue-500 to-purple-600"} shadow-lg`}
                >
                  {cryptoMode ? <Coins className="h-6 w-6 text-white" /> : <BarChart3 className="h-6 w-6 text-white" />}
                </div>
                <span>Select {cryptoMode ? "Cryptocurrency" : "Company"}</span>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-slate-800/50 p-3 rounded-2xl shadow-inner">
                <Label htmlFor="compare-mode" className="font-semibold">
                  Compare Mode
                </Label>
                <Switch
                  id="compare-mode"
                  checked={compareMode}
                  onCheckedChange={setCompareMode}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500"
                />
              </div>
            </CardTitle>
            <CardDescription className="text-lg">
              {cryptoMode
                ? "🪙 Choose from major cryptocurrencies across different categories"
                : "🏢 Choose from major companies across different sectors"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={`🔍 Search ${cryptoMode ? "cryptocurrencies" : "companies"}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 border-2 border-gray-200 dark:border-slate-500"
                />
              </div>

              {/* Category/Sector Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 border-2 border-indigo-200 dark:border-slate-500">
                  <SelectValue placeholder={`📊 Select ${cryptoMode ? "category" : "sector"}`} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${SECTOR_COLORS[category] || "from-gray-400 to-gray-600"}`}
                        />
                        <span className="font-medium">{category}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Time Period Selection */}
              <div className="relative">
                <Calendar className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Select value={selectedTimePeriod.value} onValueChange={handleTimePeriodChange}>
                  <SelectTrigger className="pl-12 h-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 border-2 border-orange-200 dark:border-slate-500">
                    <SelectValue placeholder="📅 Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_PERIODS.map((period) => (
                      <SelectItem key={period.value} value={period.value}>
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4" />
                          <span className="font-medium">{period.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Asset Selection */}
              <Select value={selectedAsset.symbol} onValueChange={handleAssetChange}>
                <SelectTrigger className="h-12 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-slate-700 dark:to-slate-600 border-2 border-pink-200 dark:border-slate-500">
                  <SelectValue placeholder={`✨ Select ${cryptoMode ? "cryptocurrency" : "company"}`} />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {filteredAssets.map((asset) => (
                    <SelectItem key={asset.symbol} value={asset.symbol}>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{asset.icon}</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-lg">{asset.symbol}</span>
                          <span className="text-sm text-muted-foreground">{asset.name}</span>
                        </div>
                        <Badge variant="secondary" className={`bg-gradient-to-r ${asset.color} text-white border-0`}>
                          {cryptoMode ? asset.category : asset.sector}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Second Asset Selection (Compare Mode) */}
            {compareMode && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t-2 border-dashed border-purple-200 dark:border-purple-700">
                <div className="md:col-span-3 flex items-center">
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border-purple-300"
                  >
                    🆚 Compare with:
                  </Badge>
                </div>
                <Select value={selectedAsset2.symbol} onValueChange={handleAsset2Change}>
                  <SelectTrigger className="h-12 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 border-2 border-cyan-200 dark:border-slate-500">
                    <SelectValue placeholder={`🎯 Select second ${cryptoMode ? "cryptocurrency" : "company"}`} />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {filteredAssets.map((asset) => (
                      <SelectItem key={asset.symbol} value={asset.symbol}>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{asset.icon}</span>
                          <div className="flex flex-col">
                            <span className="font-bold text-lg">{asset.symbol}</span>
                            <span className="text-sm text-muted-foreground">{asset.name}</span>
                          </div>
                          <Badge variant="secondary" className={`bg-gradient-to-r ${asset.color} text-white border-0`}>
                            {cryptoMode ? asset.category : asset.sector}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="timeline" className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="analysis" className="text-lg font-semibold flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="controls" className="text-lg font-semibold flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Controls
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Price Tracker */}
            <div className={`grid gap-6 ${compareMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
              {/* First Asset */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-sm overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${selectedAsset.color} opacity-5`} />
                <CardHeader className="relative">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedAsset.color} shadow-lg`}>
                        <span className="text-2xl text-white">{selectedAsset.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">{selectedAsset.symbol}</span>
                          <Badge className={`bg-gradient-to-r ${selectedAsset.color} text-white border-0`}>
                            {cryptoMode ? selectedAsset.category : selectedAsset.sector}
                          </Badge>
                        </div>
                        <span className="text-lg text-muted-foreground">{selectedAsset.name}</span>
                        <span className="text-sm text-muted-foreground">{selectedAsset.description}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">📅 {formatDate(currentData.date)}</div>
                      <Badge variant="outline" className="mt-1">
                        {selectedTimePeriod.label}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  {/* Current Price Display */}
                  <div className="text-center space-y-3 p-6 rounded-2xl bg-gradient-to-r from-white/50 to-blue-50/50 dark:from-slate-700/50 dark:to-slate-600/50 backdrop-blur-sm">
                    <div className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                      {formatCurrency(currentData.close)}
                    </div>
                    {previousData && (
                      <div
                        className={`text-2xl flex items-center justify-center gap-3 font-semibold ${
                          priceChange >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          {priceChange >= 0 ? "📈" : "📉"}
                          {priceChange >= 0 ? "+" : ""}
                          {formatCurrency(priceChange)}
                        </span>
                        <Badge variant={priceChange >= 0 ? "default" : "destructive"} className="text-lg px-3 py-1">
                          {percentChange >= 0 ? "+" : ""}
                          {percentChange.toFixed(2)}%
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* OHLC Data */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        Open
                      </div>
                      <div className="font-bold text-lg">{formatCurrency(currentData.open)}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        High
                      </div>
                      <div className="font-bold text-lg text-green-600">{formatCurrency(currentData.high)}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <TrendingDown className="h-4 w-4" />
                        Low
                      </div>
                      <div className="font-bold text-lg text-red-600">{formatCurrency(currentData.low)}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Volume2 className="h-4 w-4" />
                        Volume
                      </div>
                      <div className="font-bold text-lg">{formatVolume(currentData.volume)}</div>
                    </div>
                  </div>

                  {/* Market Data */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Building2 className="h-4 w-4" />
                        Market Cap
                      </div>
                      <div className="font-bold text-lg">
                        {selectedCurrency.symbol}
                        {formatMarketCap(selectedAsset.marketCap * selectedCurrency.rate)}
                      </div>
                    </div>
                    {!cryptoMode && selectedAsset.peRatio && (
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <PieChart className="h-4 w-4" />
                          P/E Ratio
                        </div>
                        <div className="font-bold text-lg">{selectedAsset.peRatio}</div>
                      </div>
                    )}
                  </div>

                  {/* Mini Chart Preview */}
                  <div className="h-40 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 shadow-inner">
                    <div className="h-full relative">
                      <svg className="w-full h-full" viewBox="0 0 400 120">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="grid" width="40" height="24" patternUnits="userSpaceOnUse">
                            <path
                              d="M 40 0 L 0 0 0 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.5"
                              opacity="0.1"
                            />
                          </pattern>
                        </defs>
                        <rect width="400" height="120" fill="url(#grid)" />

                        {/* Draw price line up to current point */}
                        {assetData.slice(0, currentIndex + 1).map((point, index) => {
                          if (index === 0) return null

                          const prevPoint = assetData[index - 1]
                          const x1 = (index - 1) * (400 / (assetData.length - 1))
                          const y1 =
                            100 -
                            ((prevPoint.close - Math.min(...assetData.map((d) => d.close))) /
                              (Math.max(...assetData.map((d) => d.close)) -
                                Math.min(...assetData.map((d) => d.close)))) *
                              80
                          const x2 = index * (400 / (assetData.length - 1))
                          const y2 =
                            100 -
                            ((point.close - Math.min(...assetData.map((d) => d.close))) /
                              (Math.max(...assetData.map((d) => d.close)) -
                                Math.min(...assetData.map((d) => d.close)))) *
                              80

                          return (
                            <line
                              key={index}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="url(#gradient1)"
                              strokeWidth="3"
                              className="drop-shadow-sm"
                            />
                          )
                        })}

                        {/* Gradient definition */}
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>

                        {/* Current position indicator */}
                        <circle
                          cx={currentIndex * (400 / (assetData.length - 1))}
                          cy={
                            100 -
                            ((currentData.close - Math.min(...assetData.map((d) => d.close))) /
                              (Math.max(...assetData.map((d) => d.close)) -
                                Math.min(...assetData.map((d) => d.close)))) *
                              80
                          }
                          r="6"
                          fill="#3b82f6"
                          className="drop-shadow-lg animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Asset (Compare Mode) */}
              {compareMode && (
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/90 to-red-50/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedAsset2.color} opacity-5`} />
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedAsset2.color} shadow-lg`}>
                          <span className="text-2xl text-white">{selectedAsset2.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{selectedAsset2.symbol}</span>
                            <Badge className={`bg-gradient-to-r ${selectedAsset2.color} text-white border-0`}>
                              {cryptoMode ? selectedAsset2.category : selectedAsset2.sector}
                            </Badge>
                          </div>
                          <span className="text-lg text-muted-foreground">{selectedAsset2.name}</span>
                          <span className="text-sm text-muted-foreground">{selectedAsset2.description}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">📅 {formatDate(currentData2.date)}</div>
                        <Badge variant="outline" className="mt-1">
                          {selectedTimePeriod.label}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    {/* Current Price Display */}
                    <div className="text-center space-y-3 p-6 rounded-2xl bg-gradient-to-r from-white/50 to-red-50/50 dark:from-slate-700/50 dark:to-slate-600/50 backdrop-blur-sm">
                      <div className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-800 dark:from-white dark:to-red-200 bg-clip-text text-transparent">
                        {formatCurrency(currentData2.close)}
                      </div>
                      {previousData2 && (
                        <div
                          className={`text-2xl flex items-center justify-center gap-3 font-semibold ${
                            priceChange2 >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            {priceChange2 >= 0 ? "📈" : "📉"}
                            {priceChange2 >= 0 ? "+" : ""}
                            {formatCurrency(priceChange2)}
                          </span>
                          <Badge variant={priceChange2 >= 0 ? "default" : "destructive"} className="text-lg px-3 py-1">
                            {percentChange2 >= 0 ? "+" : ""}
                            {percentChange2.toFixed(2)}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* OHLC Data */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          Open
                        </div>
                        <div className="font-bold text-lg">{formatCurrency(currentData2.open)}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          High
                        </div>
                        <div className="font-bold text-lg text-green-600">{formatCurrency(currentData2.high)}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <TrendingDown className="h-4 w-4" />
                          Low
                        </div>
                        <div className="font-bold text-lg text-red-600">{formatCurrency(currentData2.low)}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <Volume2 className="h-4 w-4" />
                          Volume
                        </div>
                        <div className="font-bold text-lg">{formatVolume(currentData2.volume)}</div>
                      </div>
                    </div>

                    {/* Market Data */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <Building2 className="h-4 w-4" />
                          Market Cap
                        </div>
                        <div className="font-bold text-lg">
                          {selectedCurrency.symbol}
                          {formatMarketCap(selectedAsset2.marketCap * selectedCurrency.rate)}
                        </div>
                      </div>
                      {!cryptoMode && selectedAsset2.peRatio && (
                        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                          <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                            <PieChart className="h-4 w-4" />
                            P/E Ratio
                          </div>
                          <div className="font-bold text-lg">{selectedAsset2.peRatio}</div>
                        </div>
                      )}
                    </div>

                    {/* Mini Chart Preview */}
                    <div className="h-40 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 shadow-inner">
                      <div className="h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 120">
                          {/* Grid lines */}
                          <rect width="400" height="120" fill="url(#grid)" />

                          {/* Draw price line up to current point */}
                          {assetData2.slice(0, currentIndex + 1).map((point, index) => {
                            if (index === 0) return null

                            const prevPoint = assetData2[index - 1]
                            const x1 = (index - 1) * (400 / (assetData2.length - 1))
                            const y1 =
                              100 -
                              ((prevPoint.close - Math.min(...assetData2.map((d) => d.close))) /
                                (Math.max(...assetData2.map((d) => d.close)) -
                                  Math.min(...assetData2.map((d) => d.close)))) *
                                80
                            const x2 = index * (400 / (assetData2.length - 1))
                            const y2 =
                              100 -
                              ((point.close - Math.min(...assetData2.map((d) => d.close))) /
                                (Math.max(...assetData2.map((d) => d.close)) -
                                  Math.min(...assetData2.map((d) => d.close)))) *
                                80

                            return (
                              <line
                                key={index}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="url(#gradient2)"
                                strokeWidth="3"
                                className="drop-shadow-sm"
                              />
                            )
                          })}

                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ef4444" />
                              <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                          </defs>

                          {/* Current position indicator */}
                          <circle
                            cx={currentIndex * (400 / (assetData2.length - 1))}
                            cy={
                              100 -
                              ((currentData2.close - Math.min(...assetData2.map((d) => d.close))) /
                                (Math.max(...assetData2.map((d) => d.close)) -
                                  Math.min(...assetData2.map((d) => d.close)))) *
                                80
                            }
                            r="6"
                            fill="#ef4444"
                            className="drop-shadow-lg animate-pulse"
                          />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-orange-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <span>Timeline Events</span>
                    <Bell className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Filter className="h-5 w-5 text-muted-foreground" />
                    <Select value={eventFilter} onValueChange={setEventFilter}>
                      <SelectTrigger className="w-48 bg-white/50 dark:bg-slate-800/50">
                        <SelectValue placeholder="Filter events" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Events</SelectItem>
                        <SelectItem value="financial">Financial & Corporate</SelectItem>
                        <SelectItem value="news">News & External</SelectItem>
                        <SelectItem value="global">Global & Market</SelectItem>
                        <SelectItem value={selectedAsset.symbol}>{selectedAsset.symbol} Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg">
                  📰 Historical events that impact {cryptoMode ? "cryptocurrency" : "stock"} prices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-4">
                    {getRelevantEvents().map((event) => (
                      <Card
                        key={event.id}
                        className="border-l-4 border-l-blue-500 bg-gradient-to-r from-white/50 to-blue-50/50 dark:from-slate-700/50 dark:to-slate-600/50"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <div
                                className={`p-2 rounded-lg bg-gradient-to-r ${
                                  event.impact === "positive"
                                    ? "from-green-500 to-emerald-600"
                                    : event.impact === "negative"
                                      ? "from-red-500 to-pink-600"
                                      : "from-gray-500 to-slate-600"
                                } shadow-lg`}
                              >
                                <span className="text-lg text-white">{event.icon}</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-bold text-lg">{event.title}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    {event.category}
                                  </Badge>
                                  {event.symbol !== "ALL" && (
                                    <Badge variant="secondary" className="text-xs">
                                      {event.symbol}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground mb-2">{event.description}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{event.details}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <CalendarIcon className="h-4 w-4" />
                                    {formatDate(event.date)}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    {event.reactions.views.toLocaleString()}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4 text-green-600" />
                                    {event.reactions.likes}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <ThumbsDown className="h-4 w-4 text-red-600" />
                                    {event.reactions.dislikes}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge
                                variant={
                                  event.impact === "positive"
                                    ? "default"
                                    : event.impact === "negative"
                                      ? "destructive"
                                      : "secondary"
                                }
                              >
                                {event.impact === "positive"
                                  ? "📈 Positive"
                                  : event.impact === "negative"
                                    ? "📉 Negative"
                                    : "➡️ Neutral"}
                              </Badge>
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MessageCircle className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Bookmark className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Analyst Ratings */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-green-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <span>Analyst Ratings</span>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </CardTitle>
                  <CardDescription className="text-lg">
                    🎯 Professional analyst recommendations for {selectedAsset.symbol}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64 w-full">
                    <div className="space-y-3">
                      {(ANALYST_RATINGS[selectedAsset.symbol] || []).map((rating, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-white/50 to-green-50/50 dark:from-slate-700/50 dark:to-slate-600/50"
                        >
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={
                                rating.rating.includes("Strong Buy")
                                  ? "default"
                                  : rating.rating.includes("Buy")
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {rating.rating}
                            </Badge>
                            <div>
                              <div className="font-semibold">{rating.analyst}</div>
                              <div className="text-sm text-muted-foreground">{formatDate(rating.date)}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{formatCurrency(rating.target)}</div>
                            <div className="text-sm text-muted-foreground">{rating.confidence}% confidence</div>
                          </div>
                        </div>
                      ))}
                      {(!ANALYST_RATINGS[selectedAsset.symbol] ||
                        ANALYST_RATINGS[selectedAsset.symbol].length === 0) && (
                        <div className="text-center text-muted-foreground py-8">
                          No analyst ratings available for {selectedAsset.symbol}
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Technical Indicators */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                      <LineChart className="h-6 w-6 text-white" />
                    </div>
                    <span>Technical Analysis</span>
                    <Lightning className="h-5 w-5 text-yellow-500" />
                  </CardTitle>
                  <CardDescription className="text-lg">📊 Technical indicators and market sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* RSI */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-white/50 to-purple-50/50 dark:from-slate-700/50 dark:to-slate-600/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">RSI (14)</span>
                        <Badge variant="secondary">65.4</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                          style={{ width: "65.4%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Neutral to Overbought</div>
                    </div>

                    {/* MACD */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-white/50 to-blue-50/50 dark:from-slate-700/50 dark:to-slate-600/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">MACD</span>
                        <Badge variant="default">Bullish</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Signal line crossover indicates upward momentum
                      </div>
                    </div>

                    {/* Moving Averages */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-white/50 to-green-50/50 dark:from-slate-700/50 dark:to-slate-600/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Moving Averages</span>
                        <Badge variant="default">Above 50 & 200 MA</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">Price trading above key moving averages</div>
                    </div>

                    {/* Support & Resistance */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-white/50 to-orange-50/50 dark:from-slate-700/50 dark:to-slate-600/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Support & Resistance</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Support</div>
                          <div className="font-semibold text-green-600">{formatCurrency(currentData.close * 0.95)}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Resistance</div>
                          <div className="font-semibold text-red-600">{formatCurrency(currentData.close * 1.08)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Controls Tab */}
          <TabsContent value="controls" className="space-y-6">
            {/* Controls */}
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-white/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <span>Timeline Controls</span>
                  <Zap className="h-5 w-5 text-yellow-500" />
                </CardTitle>
                <CardDescription className="text-lg">🎮 Control the timeline playback and speed</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Timeline Slider */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-lg font-semibold">📊 Timeline Position</Label>
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {currentIndex + 1} / {maxLength}
                      </Badge>
                    </div>
                    <Slider
                      value={[currentIndex]}
                      onValueChange={handleSliderChange}
                      max={maxLength - 1}
                      step={1}
                      className="w-full h-3"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">🗓️ Start: {formatDate(assetData[0]?.date || "")}</span>
                      <span className="flex items-center gap-1">
                        📅 End: {formatDate(assetData[assetData.length - 1]?.date || "")}
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                      disabled={currentIndex === 0}
                      className="h-14 px-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-600 dark:to-slate-500 border-2 hover:scale-105 transition-transform"
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Reset
                    </Button>

                    <Button
                      onClick={handlePlay}
                      disabled={currentIndex >= maxLength - 1 && !isPlaying}
                      size="lg"
                      className="h-16 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:scale-105 transition-transform"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="h-6 w-6 mr-3" />
                          <span className="text-lg font-semibold">Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-6 w-6 mr-3" />
                          <span className="text-lg font-semibold">Play</span>
                        </>
                      )}
                    </Button>

                    <div className="flex items-center gap-4 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl shadow-inner">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        <Label className="text-lg font-semibold">Speed:</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">Slow</span>
                        <Slider
                          value={[201 - speed]}
                          onValueChange={(value) => setSpeed(201 - value[0])}
                          min={1}
                          max={200}
                          step={1}
                          className="w-24 h-2"
                        />
                        <span className="text-sm text-muted-foreground">Fast</span>
                      </div>
                      <Badge variant="secondary" className="text-sm px-2 py-1">
                        {Math.round((201 - speed) / 2)}x
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Persistent Timeline Controls - Scrolls with Content */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-white/95 to-indigo-50/95 dark:from-slate-800/95 dark:to-slate-700/95 backdrop-blur-sm">
          <CardContent className="p-4">
            {/* Timeline Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Activity className="h-4 w-4 text-indigo-600" />
                  Timeline Position
                </Label>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-sm px-2 py-1 bg-white/80 dark:bg-slate-700/80">
                    Day {currentIndex + 1} of {maxLength}
                  </Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    {((currentIndex / (maxLength - 1)) * 100).toFixed(1)}%
                  </Badge>
                </div>
              </div>

              <div className="relative">
                <Slider
                  value={[currentIndex]}
                  onValueChange={handleSliderChange}
                  max={maxLength - 1}
                  step={1}
                  className="w-full h-3"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">🗓️ {formatDate(assetData[0]?.date || "")}</span>
                  <span className="flex items-center gap-1">📅 {formatDate(currentData?.date || "")}</span>
                  <span className="flex items-center gap-1">
                    🏁 {formatDate(assetData[assetData.length - 1]?.date || "")}
                  </span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-gray-50/80 to-slate-50/80 dark:from-slate-700/80 dark:to-slate-600/80 rounded-xl backdrop-blur-sm">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  disabled={currentIndex === 0}
                  className="h-10 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-600 dark:to-slate-500 border-2 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>

                <Button
                  onClick={handlePlay}
                  disabled={currentIndex >= maxLength - 1 && !isPlaying}
                  size="sm"
                  className="h-12 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:scale-105 transition-all duration-200"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      <span className="text-base font-bold">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      <span className="text-base font-bold">Play</span>
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-3 bg-white/70 dark:bg-slate-800/70 p-3 rounded-xl shadow-inner backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <Label className="text-sm font-semibold">Speed:</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-medium">🐌</span>
                    <Slider
                      value={[201 - speed]}
                      onValueChange={(value) => setSpeed(201 - value[0])}
                      min={1}
                      max={200}
                      step={1}
                      className="w-24 h-2"
                    />
                    <span className="text-xs text-muted-foreground font-medium">🚀</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-sm px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900"
                  >
                    {Math.round((201 - speed) / 2)}x
                  </Badge>
                </div>

                {/* Additional Status Indicators */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    {isPlaying ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    ) : (
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    )}
                    <span className="text-xs font-medium">{isPlaying ? "Playing" : "Paused"}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentIndex >= maxLength - 1 ? "Complete" : `${maxLength - currentIndex - 1} days left`}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <style jsx>{`
          @keyframes animate-pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
          .animate-pulse-slow {
            animation: animate-pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </div>
    </div>
  )
}
