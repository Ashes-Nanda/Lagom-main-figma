import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Plus, Edit, Trash2, Package, Users, Eye } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
  featured: boolean;
}

interface InterestSubmission {
  id: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Not Interested';
}

const productCategories = [
  'Apparel',
  'Accessories',
  'Stationery',
  'Digital',
  'Books'
];

export function MerchandiseManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Being.Lagom Classic T-Shirt',
      description: 'Comfortable cotton t-shirt with the Being.Lagom logo',
      price: 'TBA',
      image: '/merch/1.png',
      category: 'Apparel',
      colors: ['Navy', 'Cream', 'Teal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: true
    },
    {
      id: '2',
      name: 'Being.Lagom Sticker Pack',
      description: 'Set of 12 motivational stickers for laptops and water bottles',
      price: 'TBA',
      image: '/merch/12.png',
      category: 'Accessories',
      inStock: true,
      featured: false
    }
  ]);

  const [interestSubmissions, setInterestSubmissions] = useState<InterestSubmission[]>([
    {
      id: '1',
      productName: 'Being.Lagom Classic T-Shirt',
      customerName: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1-555-0123',
      city: 'New York',
      state: 'NY',
      submittedAt: '2025-01-10T14:30:00Z',
      status: 'New'
    }
  ]);

  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productFormData, setProductFormData] = useState<Partial<Product>>({});

  const handleAddProduct = () => {
    setEditingProduct(null);
    setProductFormData({});
    setIsProductDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductFormData(product);
    setIsProductDialogOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...productFormData, id: editingProduct.id } as Product
          : p
      ));
    } else {
      const newProduct: Product = {
        ...productFormData,
        id: Date.now().toString(),
      } as Product;
      setProducts([...products, newProduct]);
    }
    
    setIsProductDialogOpen(false);
    setProductFormData({});
  };

  const updateSubmissionStatus = (id: string, status: InterestSubmission['status']) => {
    setInterestSubmissions(submissions =>
      submissions.map(s => s.id === id ? { ...s, status } : s)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Converted': return 'bg-green-100 text-green-800 border-green-200';
      case 'Not Interested': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Merchandise Management</h2>
          <p className="text-gray-600">Manage products and customer interest submissions</p>
        </div>
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="submissions">Interest Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Product Catalog</h3>
            <Button onClick={handleAddProduct}>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEditProduct(product)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  {product.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <Badge className={product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                    <p className="font-bold text-primary">{product.price}</p>
                    
                    {product.colors && (
                      <div className="text-xs text-gray-500">
                        Colors: {product.colors.join(', ')}
                      </div>
                    )}
                    
                    {product.sizes && (
                      <div className="text-xs text-gray-500">
                        Sizes: {product.sizes.join(', ')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Customer Interest Submissions</h3>
            <div className="text-sm text-gray-600">
              {interestSubmissions.length} total submissions
            </div>
          </div>

          <div className="space-y-4">
            {interestSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{submission.customerName}</h4>
                      <p className="text-sm text-gray-600">Interested in: {submission.productName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </Badge>
                      <Select
                        value={submission.status}
                        onValueChange={(value) => updateSubmissionStatus(submission.id, value as InterestSubmission['status'])}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Converted">Converted</SelectItem>
                          <SelectItem value="Not Interested">Not Interested</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Email:</span> {submission.email}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {submission.phone}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> {submission.city}, {submission.state}
                    </div>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-500">
                    Submitted: {new Date(submission.submittedAt).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Product Add/Edit Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Edit Product' : 'Add Product'}
            </DialogTitle>
            <DialogDescription>
              Fill in the product details
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleProductSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  value={productFormData.name || ''}
                  onChange={(e) => setProductFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={productFormData.category || ''}
                  onValueChange={(value) => setProductFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={productFormData.description || ''}
                onChange={(e) => setProductFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  value={productFormData.price || ''}
                  onChange={(e) => setProductFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="e.g., $25 or TBA"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Product Image URL</Label>
                <Input
                  id="image"
                  value={productFormData.image || ''}
                  onChange={(e) => setProductFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/product.jpg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="colors">Available Colors (comma-separated)</Label>
                <Input
                  id="colors"
                  value={productFormData.colors?.join(', ') || ''}
                  onChange={(e) => setProductFormData(prev => ({ 
                    ...prev, 
                    colors: e.target.value.split(',').map(c => c.trim()).filter(c => c)
                  }))}
                  placeholder="Navy, Cream, Teal"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sizes">Available Sizes (comma-separated)</Label>
                <Input
                  id="sizes"
                  value={productFormData.sizes?.join(', ') || ''}
                  onChange={(e) => setProductFormData(prev => ({ 
                    ...prev, 
                    sizes: e.target.value.split(',').map(s => s.trim()).filter(s => s)
                  }))}
                  placeholder="XS, S, M, L, XL, XXL"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="inStock"
                  checked={productFormData.inStock || false}
                  onChange={(e) => setProductFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="inStock">In Stock</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={productFormData.featured || false}
                  onChange={(e) => setProductFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="featured">Featured Product</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingProduct ? 'Update' : 'Add'} Product
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}