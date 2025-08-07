import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ShoppingCart, Star, Heart, Truck, Shield, RefreshCw } from "lucide-react";
import { useState } from "react";
import { BeingLagomFooter } from "../components/ui/footer";

export function MerchandisePage() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const products = [
    {
      id: 1,
      name: "Being.Lagom Logo T-Shirt",
      description: "Comfortable cotton t-shirt with the Being.Lagom logo",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Apparel",
      colors: ["Navy", "Cream", "Teal"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: 4.8,
      reviews: 156,
      bestseller: true
    },
    {
      id: 2,
      name: "Mindfulness Water Bottle",
      description: "Insulated stainless steel bottle with mindfulness quotes",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      category: "Wellness",
      colors: ["Blue", "Green", "White"],
      rating: 4.9,
      reviews: 89,
      bestseller: false
    },
    {
      id: 3,
      name: "Stress Relief Hoodie",
      description: "Cozy hoodie with 'Healing the Healer' message",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "Apparel",
      colors: ["Grey", "Navy", "Cream"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: 4.7,
      reviews: 203,
      bestseller: true
    },
    {
      id: 4,
      name: "Self-Care Journal",
      description: "Guided journal for daily reflection and wellness tracking",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
      category: "Wellness",
      rating: 4.6,
      reviews: 124,
      bestseller: false
    },
    {
      id: 5,
      name: "Being.Lagom Tote Bag",
      description: "Eco-friendly canvas tote with community message",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "Accessories",
      colors: ["Natural", "Navy", "Teal"],
      rating: 4.5,
      reviews: 67,
      bestseller: false
    },
    {
      id: 6,
      name: "Wellness Sticker Pack",
      description: "Set of 12 motivational stickers for laptops and water bottles",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Accessories",
      rating: 4.4,
      reviews: 93,
      bestseller: false
    }
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Being.Lagom Merchandise
            </h1>
            <p className="text-xl text-muted-foreground">
              Wear your support and foster community identity
            </p>
          </div>

          {/* Features Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg">
              <Truck className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm">Free shipping over $50</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm">100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg">
              <RefreshCw className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm">30-day returns</span>
            </div>
          </div>

          {/* Shopping Cart Summary */}
          {getTotalItems() > 0 && (
            <div className="mb-8">
              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ShoppingCart className="w-5 h-5 text-accent mr-2" />
                      <span className="font-medium">
                        {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in cart
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                      Bestseller
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                      Sale
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span>{product.rating}</span>
                      <span className="text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {product.colors && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Color</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent>
                          {product.colors.map((color) => (
                            <SelectItem key={color} value={color.toLowerCase()}>
                              {color}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {product.sizes && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Size</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {product.sizes.map((size) => (
                            <SelectItem key={size} value={size.toLowerCase()}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  {cart[product.id] && (
                    <div className="text-center text-sm text-green-600 font-medium">
                      {cart[product.id]} in cart
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <Card className="mt-16 bg-gradient-to-r from-secondary/20 to-accent/20 border-none">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-accent mr-2" />
                Supporting Our Community
              </CardTitle>
              <CardDescription className="text-base">
                Every purchase supports our mission to provide mental health resources
                for healthcare professionals worldwide
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                25% of all merchandise proceeds go directly to funding free mental health
                resources and crisis support services for healthcare workers in need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-accent mr-2">•</span>
                  <span>Eco-friendly materials</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-accent mr-2">•</span>
                  <span>Ethically sourced products</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-accent mr-2">•</span>
                  <span>Supporting our mission</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Button */}
          {getTotalItems() > 0 && (
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Proceed to Checkout (${getCartTotal().toFixed(2)})
              </Button>
            </div>
          )}
        </div>
      </div>
      <div style={{ background: '#0BB8C6', color: 'white' }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}