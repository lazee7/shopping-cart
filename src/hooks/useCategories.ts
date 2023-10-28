import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/data';

const useCategories = () => {
  const [categories, setCategories] = useState<string[] | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}products/categories`);

      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return categories;
};

export default useCategories;
