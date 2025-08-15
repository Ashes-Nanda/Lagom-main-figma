export interface MerchandiseInterest {
  id: string;
  product: string;
  customerName?: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Not Interested';
  selectedColor?: string;
  selectedSize?: string;
}

const STORAGE_KEY = 'merchandise_interest_submissions';

export const merchandiseInterestStorage = {
  // Get all submissions
  getAll: (): MerchandiseInterest[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading merchandise interest data:', error);
      return [];
    }
  },

  // Add new submission
  add: (submission: Omit<MerchandiseInterest, 'id' | 'submittedAt' | 'status'>): MerchandiseInterest => {
    const newSubmission: MerchandiseInterest = {
      ...submission,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    const existing = merchandiseInterestStorage.getAll();
    const updated = [...existing, newSubmission];
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newSubmission;
    } catch (error) {
      console.error('Error saving merchandise interest data:', error);
      throw error;
    }
  },

  // Update submission status
  updateStatus: (id: string, status: MerchandiseInterest['status']): void => {
    const submissions = merchandiseInterestStorage.getAll();
    const updated = submissions.map(submission =>
      submission.id === id ? { ...submission, status } : submission
    );
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error updating merchandise interest status:', error);
      throw error;
    }
  },

  // Delete submission
  delete: (id: string): void => {
    const submissions = merchandiseInterestStorage.getAll();
    const updated = submissions.filter(submission => submission.id !== id);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error deleting merchandise interest:', error);
      throw error;
    }
  },

  // Get submissions by status
  getByStatus: (status: MerchandiseInterest['status']): MerchandiseInterest[] => {
    return merchandiseInterestStorage.getAll().filter(submission => submission.status === status);
  },

  // Get submissions count
  getCount: (): number => {
    return merchandiseInterestStorage.getAll().length;
  }
};