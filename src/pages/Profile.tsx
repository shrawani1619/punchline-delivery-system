
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Calendar, Heart, Trophy, Settings } from 'lucide-react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    favoriteCategory: 'Dad Jokes',
    jokesViewed: 127,
    favoriteJokes: 23
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a database
    console.log('Profile updated:', userInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
            Your Profile
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Manage your joke preferences and view your stats! 👤
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Info Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-2xl">
                    {userInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Your personal details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="favorite">Favorite Category</Label>
                <Input
                  id="favorite"
                  value={userInfo.favoriteCategory}
                  onChange={(e) => setUserInfo({...userInfo, favoriteCategory: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex gap-2">
                {!isEditing ? (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    className="flex-1"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <>
                    <Button 
                      onClick={handleSave}
                      className="flex-1"
                    >
                      Save Changes
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Your Joke Stats
              </CardTitle>
              <CardDescription>
                See how much you love jokes!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{userInfo.jokesViewed}</div>
                  <div className="text-sm text-gray-600">Jokes Viewed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-pink-100 to-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">{userInfo.favoriteJokes}</div>
                  <div className="text-sm text-gray-600">Favorites</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Member Since</span>
                  </div>
                  <span className="text-sm font-medium">
                    {new Date(userInfo.joinDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Favorite Category</span>
                  </div>
                  <span className="text-sm font-medium">{userInfo.favoriteCategory}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Jokes Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Back to Jokes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
