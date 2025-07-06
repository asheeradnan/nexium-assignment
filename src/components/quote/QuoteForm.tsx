'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes, Quote } from "@/data/quotes";
import { Search, Sparkles, Quote as QuoteIcon } from "lucide-react";

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    
    setIsLoading(true);
    
    // Add a small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const found = quotes.find((q: Quote) => q.topic.toLowerCase() === topic.toLowerCase());
    setResults(found ? found.quotes : ["No quotes found for this topic."]);
    setIsLoading(false);
  };

  const availableTopics = quotes.map(q => q.topic);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Form Card */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20 p-6 sm:p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search for quotes by topic
            </label>
            <div className="relative">
              <Input
                id="topic"
                value={topic}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}
                placeholder="e.g. motivation, life, success..."
                className="h-12 sm:h-14 text-base sm:text-lg pl-4 pr-12 bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
              />
              <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={!topic.trim() || isLoading}
            className="w-full h-12 sm:h-14 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Get Quotes
              </div>
            )}
          </Button>
        </form>

        {/* Available Topics */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Available topics:</p>
          <div className="flex flex-wrap gap-2">
            {availableTopics.map((availableTopic) => (
              <button
                key={availableTopic}
                onClick={() => setTopic(availableTopic)}
                className="px-3 py-1.5 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 border border-blue-200 dark:border-blue-700 hover:scale-105 transform"
              >
                {availableTopic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <QuoteIcon className="w-6 h-6" />
            Your Quotes
          </h2>
          
          <div className="grid gap-4">
            {results.map((quote, index) => (
              <div 
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl animate-fadeInUp"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <QuoteIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="text-blue-500 text-2xl font-serif">&ldquo;</span>
                      <span className="italic">{quote}</span>
                      <span className="text-blue-500 text-2xl font-serif">&rdquo;</span>
                    </blockquote>
                    {quote !== "No quotes found for this topic." && (
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-500 dark:text-slate-400 capitalize flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Topic: <span className="font-medium">{topic}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Share/Action buttons */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setResults([])}
              className="px-6 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-200"
            >
              Clear Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
