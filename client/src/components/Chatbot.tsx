import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with any questions about our e-bikes, accessories, or services. How can I assist you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'What e-bikes do you have?',
    'What are your prices?',
    'Do you offer financing?',
    'What is your return policy?',
    'How do I contact support?'
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return 'Our e-bikes range from $599.99 to $1,299.99. You can view all our bikes and current prices in our Shop section. We also offer bulk pricing for 3, 4, 5, and 8 unit packages.';
    }
    
    if (message.includes('bike') || message.includes('ebike') || message.includes('electric')) {
      return 'We have several e-bike models including the 26" ASKGO (700W), 20" Fat Tire OKONGE, 26" Fat Tire KETELES, and trike options. Check out our Shop page to see all available models with detailed specifications.';
    }
    
    if (message.includes('financing') || message.includes('payment') || message.includes('credit')) {
      return 'We accept all major credit cards and offer flexible payment options. For financing inquiries, please contact us directly at 313-495-2887 or visit our store at 15151 W 8 Mile, Detroit, Michigan.';
    }
    
    if (message.includes('return') || message.includes('refund') || message.includes('exchange')) {
      return 'We offer a 30-day return policy for unused items in original packaging. Please check our Returns page for detailed information about our return process and conditions.';
    }
    
    if (message.includes('shipping') || message.includes('delivery') || message.includes('ship')) {
      return 'We offer shipping throughout the United States. Most orders are processed within 1-2 business days and delivered within 3-5 business days. Check our Shipping Info page for more details.';
    }
    
    if (message.includes('contact') || message.includes('support') || message.includes('help')) {
      return 'You can reach us at:\n• Phone: 313-495-2887\n• Email: info@stonee-bikes.com\n• Store: 15151 W 8 Mile, Detroit, Michigan\n• Hours: Mon-Fri 9AM-7PM, Sat-Sun 9AM-6PM';
    }
    
    if (message.includes('store') || message.includes('location') || message.includes('address')) {
      return 'Our store is located at 15151 W 8 Mile, Detroit, Michigan. We\'re open Monday-Friday 9AM-7PM and Saturday-Sunday 9AM-6PM. Come visit us to test ride our e-bikes!';
    }
    
    if (message.includes('accessories') || message.includes('parts') || message.includes('gear')) {
      return 'We carry a full range of e-bike accessories including helmets, locks, lights, baskets, and more. Check out our Accessories page to see our complete selection.';
    }
    
    if (message.includes('maintenance') || message.includes('repair') || message.includes('service')) {
      return 'We provide maintenance and repair services for all our e-bikes. Our experienced technicians can help with everything from basic tune-ups to complex electrical issues. Contact us to schedule service.';
    }
    
    return 'Thank you for your question! For more detailed information, please visit our website or contact us directly at 313-495-2887. Our team is here to help you find the perfect e-bike for your needs.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent hover:bg-yellow-600 text-black rounded-full w-14 h-14 shadow-lg z-50"
          data-testid="button-chatbot-toggle"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-accent text-black p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <CardTitle className="text-lg">Stone E-Bikes Support</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 h-auto text-black hover:bg-yellow-200"
                data-testid="button-chatbot-close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-accent text-black'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.isUser && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs h-auto py-1 px-2"
                      data-testid={`button-quick-reply-${index}`}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  data-testid="input-chatbot-message"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-accent hover:bg-yellow-600 text-black"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
