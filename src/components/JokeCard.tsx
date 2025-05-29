
import React from 'react';
import { Card } from '@/components/ui/card';
import { Laugh } from 'lucide-react';

interface JokeCardProps {
  joke: string;
}

const JokeCard = ({ joke }: JokeCardProps) => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl animate-scale-in">
      <div className="p-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Laugh className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              {joke}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </Card>
  );
};

export default JokeCard;
