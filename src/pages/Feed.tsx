
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Calendar, Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import FeedHeader from '../components/Organism/FeedHeader';

const Feed: React.FC = () => {
  return (
    <MainLayout hideNav={true} hideFooter={false}>
      <FeedHeader pageTitle="Career" showBackButton={true} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>CW</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold mb-1">Cameron Williamson</h2>
                <p className="text-gray-500 mb-4">Innovator</p>
                
                <div className="flex justify-between w-full mb-6">
                  <div className="text-center">
                    <div className="font-bold">30</div>
                    <div className="text-xs text-gray-500">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">840</div>
                    <div className="text-xs text-gray-500">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">510</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                </div>
                
                <div className="mb-4 w-full">
                  <h3 className="font-semibold mb-2">About Me</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Helping build a better ecosystem of like-minded professionals and support my industry. Looking for my next opportunity to make an impact.
                  </p>
                  <Button variant="yellow" className="w-full">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle - Feed */}
          <div className="lg:col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>CW</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-full py-2 px-4 flex-1 text-gray-500">
                  Write something...
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="yellow">Post</Button>
              </div>
            </div>
            
            {/* Posts */}
            <div className="space-y-6">
              {/* Post 1 */}
              <Card>
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="Cody Fisher" />
                          <AvatarFallback>CF</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">Cody Fisher</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <button>
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                    
                    <p className="mb-4">
                      If it has to help real #innovators 🙌<br />
                      Check out! I'm home and a dozen of meetings in the devastating fires of Los Angeles.
                      <br />
                      <span className="text-blue-500">#hivewireinc #innovationfactor #support#LA #communitygrows #hivewirehelps</span>
                    </p>
                    
                    <img 
                      src="/lovable-uploads/9ddec282-acbb-4d83-89c4-595de147f59c.png" 
                      alt="Post image" 
                      className="w-full rounded-lg mb-4"
                    />
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>24 Likes</span>
                      </div>
                      <div>•</div>
                      <div>12 Comments</div>
                    </div>
                    
                    <div className="border-t border-b py-2 my-2">
                      <div className="flex justify-between">
                        <button className="flex items-center gap-1 text-gray-500">
                          <Heart className="h-4 w-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500">
                          <Share2 className="h-4 w-4" />
                          <span>Repost</span>
                        </button>
                      </div>
                    </div>
                    
                    <Button variant="yellow" className="w-full mt-2">Connect Now</Button>
                    
                    {/* Comments */}
                    <div className="mt-4">
                      <h3 className="font-bold mb-3">Comments</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" alt="Robert Fox" />
                            <AvatarFallback>RF</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Robert Fox</span>
                              <span className="text-xs text-gray-500">1 week ago</span>
                            </div>
                            <p className="text-sm">
                              Such an honor about your work Cody. Seeking management support your way.
                            </p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <div>20 Likes</div>
                              <button>Reply</button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" alt="Annette Black" />
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Annette Black</span>
                              <span className="text-xs text-gray-500">1 week ago</span>
                            </div>
                            <p className="text-sm">
                              This is truly inspiring. Great job through! Standing all together!
                            </p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <div>20 Likes</div>
                              <button>Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Profile" />
                          <AvatarFallback>CW</AvatarFallback>
                        </Avatar>
                        <div className="relative flex-1">
                          <input 
                            type="text" 
                            placeholder="Write Comment..." 
                            className="w-full py-2 px-4 pr-10 rounded-full bg-gray-100 text-sm"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-hivewire-yellow rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Post 2 */}
              <Card>
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="Jacob Bell" />
                          <AvatarFallback>JB</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">Jacob Bell</div>
                          <div className="text-xs text-gray-500">4 hours ago</div>
                        </div>
                      </div>
                      <button>
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                    
                    <p className="mb-4">
                      Navigating success - Our mentorship journey and where we'll be headed next. Looking to connect with professionals who share my vision for community growth and collaboration.
                    </p>
                    
                    <img 
                      src="/lovable-uploads/6a08752b-eda9-41ee-a6df-ab82859b7c98.png" 
                      alt="Career path" 
                      className="w-full rounded-lg mb-4"
                    />
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>18 Likes</span>
                      </div>
                      <div>•</div>
                      <div>8 Comments</div>
                    </div>
                    
                    <div className="border-t border-b py-2 my-2">
                      <div className="flex justify-between">
                        <button className="flex items-center gap-1 text-gray-500">
                          <Heart className="h-4 w-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500">
                          <Share2 className="h-4 w-4" />
                          <span>Repost</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Right Sidebar - Events */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">January</h3>
                  <div className="flex gap-2">
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between text-center text-xs mb-4">
                  <div>M</div>
                  <div>T</div>
                  <div className="bg-hivewire-blue rounded-full w-6 h-6 flex items-center justify-center font-semibold">W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                  <div>S</div>
                </div>
                
                <h3 className="font-semibold mb-2">Current Events</h3>
                
                <ScrollArea className="h-64 pr-4">
                  <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="bg-hivewire-blue h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-hivewire-dark" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">HiveWire Live Now</div>
                          <div className="text-xs text-gray-500">9 events online</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Feed;
