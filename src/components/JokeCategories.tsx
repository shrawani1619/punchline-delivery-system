
import React from 'react';
import { Button } from '@/components/ui/button';

interface JokeCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: '🎯 All Jokes', emoji: '🎯' },
  { id: 'dad', label: '👨 Dad Jokes', emoji: '👨' },
  { id: 'puns', label: '🎪 Puns', emoji: '🎪' },
  { id: 'oneliners', label: '⚡ One-Liners', emoji: '⚡' },
  { id: 'tech', label: '💻 Tech Humor', emoji: '💻' }
];

const JokeCategories = ({ selectedCategory, onCategoryChange }: JokeCategoriesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105
            ${selectedCategory === category.id 
              ? 'bg-white text-purple-600 shadow-lg border-2 border-white' 
              : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 backdrop-blur-sm'
            }
          `}
        >
          <span className="mr-2 text-lg">{category.emoji}</span>
          {category.label.split(' ').slice(1).join(' ')}
        </Button>
      ))}
    </div>
  );
};

export default JokeCategories;
