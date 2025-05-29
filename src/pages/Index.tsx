
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import JokeCard from '@/components/JokeCard';
import JokeCategories from '@/components/JokeCategories';
import { Smile, RefreshCw } from 'lucide-react';

const jokes = {
  dad: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I invented a new word: Plagiarism!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I only know 25 letters of the alphabet. I don't know Y.",
    "What do you call a fake noodle? An impasta!"
  ],
  puns: [
    "I wondered why the baseball was getting bigger. Then it hit me.",
    "A cross-eyed teacher lost her job because she couldn't control her pupils.",
    "When you get a bladder infection, urine trouble.",
    "I used to hate facial hair, but then it grew on me.",
    "The graveyard is so crowded, people are dying to get in!"
  ],
  oneliners: [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "My therapist says I have a preoccupation with vengeance. We'll see about that.",
    "I haven't slept for ten days, because that would be too long.",
    "I used to be addicted to soap, but I'm clean now.",
    "A clear conscience is a sign of a fuzzy memory."
  ],
  tech: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the programmer quit his job? He didn't get arrays.",
    "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why do Java developers wear glasses? Because they can't C#!"
  ]
};

const Index = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const getAllJokes = () => {
    return Object.values(jokes).flat();
  };

  const getRandomJoke = () => {
    setIsLoading(true);
    setTimeout(() => {
      const allJokes = selectedCategory === "all" ? getAllJokes() : jokes[selectedCategory as keyof typeof jokes];
      const randomJoke = allJokes[Math.floor(Math.random() * allJokes.length)];
      setCurrentJoke(randomJoke);
      setIsLoading(false);
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentJoke("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smile className="w-12 h-12 text-white animate-bounce" />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              JokeMaster
            </h1>
            <Smile className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-white/90 drop-shadow">
            Get ready to laugh with our collection of hilarious jokes! 😄
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <JokeCategories
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Random Joke Button */}
        <div className="text-center mb-8">
          <Button
            onClick={getRandomJoke}
            disabled={isLoading}
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            {isLoading ? (
              <RefreshCw className="w-6 h-6 mr-2 animate-spin" />
            ) : (
              <Smile className="w-6 h-6 mr-2" />
            )}
            {isLoading ? "Getting a joke..." : "Tell me a joke!"}
          </Button>
        </div>

        {/* Joke Display */}
        {currentJoke && (
          <div className="max-w-2xl mx-auto">
            <JokeCard joke={currentJoke} />
          </div>
        )}

        {/* Welcome Message */}
        {!currentJoke && (
          <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to JokeMaster!
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choose a category and click the button above to get started with some amazing jokes! 
                We have dad jokes, puns, one-liners, and tech humor waiting for you.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
