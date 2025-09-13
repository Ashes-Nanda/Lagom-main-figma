import { Card, CardDescription, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
// No additional icons needed
import { useState } from "react";
import { BeingLagomFooter } from "../components/ui/footer";
import { merchandiseInterestStorage } from "../lib/merchandiseInterestData";

interface FormData {
  product: string;
  number: string;
  email: string;
  city: string;
  state: string;
  selectedColor?: string;
  selectedSize?: string;
}

export function MerchandisePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string;
  }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>(
    {}
  );
  const [formData, setFormData] = useState<FormData>({
    product: "",
    number: "",
    email: "",
    city: "",
    state: "",
    selectedColor: "",
    selectedSize: "",
  });

  const products = [
    {
      id: 1,
      name: "Being.Lagom Classic T-Shirt",
      description: "Comfortable cotton t-shirt with the Being.Lagom logo. Designed by Dr Natnael Dejene, Ethiopia",
      price: "Rs.1499",
      image: "/merch/1.png",
      category: "Apparel",
      colors: ["Navy", "Cream", "Teal"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Being.Lagom Classic T-Shirt",
      description: "Comfortable cotton t-shirt with the Being.Lagom logo. Designed by Dr Natnael Dejene, Ethiopia",
      price: "Rs.1499",
      image: "/merch/black2.jpg",
      category: "Apparel",
      colors: [],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      name: "Being.Lagom Classic T-Shirt",
      description: "Comfortable cotton t-shirt with the Being.Lagom logo. Designed by Dr Natnael Dejene, Ethiopia",
      price: "Rs.1499",
      image: "/merch/white.jpg",
      category: "Apparel",
      colors: ["Navy", "Cream", "Teal"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 5,
      name: "Being.Lagom Community T-Shirt",
      description: "Premium cotton t-shirt celebrating healthcare community. Designed by Dr Natnael Dejene, Ethiopia",
      price: "Rs.1499",
      image: "/merch/6.png",
      category: "Apparel",
      colors: ["Black", "Forest Green", "Burgundy"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: 6,
      name: "Being.Lagom Sticker Pack",
      description:
        "Set of 12 motivational stickers for laptops and water bottles. Designed by Dr Natnael Dejene, Ethiopia",
      price: "Rs.399",
      image: "/merch/12.png",
      category: "Accessories",
    },
  ];

  const handleIndicateInterest = (productName: string, productId: number) => {
    setFormData((prev) => ({
      ...prev,
      product: productName,
      selectedColor: selectedColors[productId] || "",
      selectedSize: selectedSizes[productId] || "",
    }));
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save to local storage
      merchandiseInterestStorage.add({
        product: formData.product,
        email: formData.email,
        phone: formData.number,
        city: formData.city,
        state: formData.state,
        selectedColor: formData.selectedColor,
        selectedSize: formData.selectedSize,
      });

      console.log("Form submitted and saved:", formData);

      // Close modal and show toast
      setIsModalOpen(false);
      setShowToast(true);

      // Reset form
      setFormData({
        product: "",
        number: "",
        email: "",
        city: "",
        state: "",
        selectedColor: "",
        selectedSize: "",
      });

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("There was an error saving your information. Please try again.");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#fffbf5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20">
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

          {/* Products List */}
          <div className="space-y-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="md:w-48 md:h-48 w-full h-64 bg-white/50 overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between h-full">
                      <div className="flex-1 mb-4 md:mb-0">
                        <Badge variant="outline" className="text-xs mb-2">
                          {product.category}
                        </Badge>
                        <CardTitle className="text-xl mb-2">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {product.description}
                        </CardDescription>
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                      </div>

                      {/* Controls Section */}
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:ml-6">
                        {product.colors && (
                          <div className="min-w-[140px]">
                            <Label className="text-sm font-medium">Color</Label>
                            <Select
                              value={selectedColors[product.id] || ""}
                              onValueChange={(value) =>
                                setSelectedColors((prev) => ({
                                  ...prev,
                                  [product.id]: value,
                                }))
                              }
                            >
                              <SelectTrigger className="w-full mt-1">
                                <SelectValue placeholder="Select color" />
                              </SelectTrigger>
                              <SelectContent>
                                {product.colors.map((color) => (
                                  <SelectItem key={color} value={color}>
                                    {color}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        {product.sizes && (
                          <div className="min-w-[140px]">
                            <Label className="text-sm font-medium">Size</Label>
                            <Select
                              value={selectedSizes[product.id] || ""}
                              onValueChange={(value) =>
                                setSelectedSizes((prev) => ({
                                  ...prev,
                                  [product.id]: value,
                                }))
                              }
                            >
                              <SelectTrigger className="w-full mt-1">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                {product.sizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div className="flex flex-col justify-end h-full">
                          <Button
                            asChild
                            className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[140px]"
                          >
                            <a href="https://forms.gle/nCe5jxhnRAp2J5Z1A" target="_blank" rel="noopener noreferrer">
                              Indicate Interest
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer before footer */}
      <div className="py-12"></div>

      {/* Interest Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Indicate Interest</DialogTitle>
            <DialogDescription>
              Please fill out the form below to show your interest in this
              product.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <Label htmlFor="product">Product</Label>
              <Input
                id="product"
                value={formData.product}
                readOnly
                className="bg-gray-50"
              />
            </div>
            {formData.selectedColor && (
              <div>
                <Label htmlFor="selectedColor">Selected Color</Label>
                <Input
                  id="selectedColor"
                  value={formData.selectedColor}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            )}
            {formData.selectedSize && (
              <div>
                <Label htmlFor="selectedSize">Selected Size</Label>
                <Input
                  id="selectedSize"
                  value={formData.selectedSize}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            )}
            <div>
              <Label htmlFor="number">Phone Number</Label>
              <Input
                id="number"
                type="tel"
                value={formData.number}
                onChange={(e) => handleInputChange("number", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Enter your city"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                placeholder="Enter your state"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Submit Interest
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-in fade-in duration-300">
            <p className="text-center font-medium">
              Thank you for showing interest. You will be notified soon.
            </p>
          </div>
        </div>
      )}

      <div style={{ background: "#0BB8C6", color: "white" }}>
        <BeingLagomFooter />
      </div>
    </div>
  );
}
