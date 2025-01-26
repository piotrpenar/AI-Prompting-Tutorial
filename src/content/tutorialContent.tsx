import React from 'react';
import { TutorialSection } from '../types';
import {
  MessageSquare,
  AlertTriangle,
  Brain,
  Target,
  Workflow,
  Bot,
  MessagesSquare
} from 'lucide-react';

export const tutorialContent: TutorialSection[] = [
  {
    id: 'introduction',
    title: 'The AI in the Tower',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Imagine an AI as an extremely knowledgeable old man, sitting alone in a tall tower...
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            He's locked away from the outside world, with no windows to see through and no sounds to hear. His only connection to the world is a single, small circular hole in the wall.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through this hole, you can pass him notes. And despite his isolation, he's incredibly determined to help you with any task. But there's a catch...
          </p>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-4 text-md">The Challenge:</h4>
            <ul className="space-y-3 text-md text-blue-700">
              <li>• The AI can only work with what you write in your note</li>
              <li>• Every word choice and structure matters</li>
              <li>• The clearer your message, the better the help</li>
              <li>• This note is what we call a "prompt"</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Your journey begins here - learning the art of crafting the perfect note to your AI advisor...
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center transition-all duration-500 transform">
        <div className="relative mb-12">
          <div className="w-56 h-56 bg-gray-800 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-32 h-32 text-blue-400" />
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-10 bg-white rounded-full border-4 border-gray-800" />
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Your AI Advisor</h3>
        <p className="text-lg text-gray-600 mb-4">Infinitely knowledgeable</p>
        <p className="text-md text-gray-500">But can only understand what you write in your note</p>
      </div>
    ),
  },
  {
    id: 'poor-prompt',
    title: 'Garbage In, Garbage Out',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Let's start with a fundamental principle: "Garbage in, garbage out."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you make grammar or spelling mistakes, you're not just being unprofessional - you're actively decreasing the probability of getting what you want.
          </p>
          <div className="bg-red-50 p-6 rounded-xl">
            <h4 className="font-semibold text-red-800 mb-4 text-md">Problems with this prompt:</h4>
            <ul className="space-y-3 text-md text-red-700">
              <li>• Multiple spelling errors ("ane", "clinet")</li>
              <li>• Zero context about the meeting's purpose</li>
              <li>• No information about the client</li>
              <li>• Missing crucial details (time, date, format)</li>
              <li>• Could confuse "client" with "CLI net"</li>
              <li>• No specified tone or formality level</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-orange-800 mb-4 text-md">Consequences:</h4>
            <ul className="space-y-3 text-md text-orange-700">
              <li>• ~5% chance of completely wrong interpretation</li>
              <li>• Likely to produce generic, unusable content</li>
              <li>• May use inappropriate tone or format</li>
              <li>• Could mix different contexts or meanings</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-red-50 rounded-xl">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <div className="font-mono p-6 bg-white rounded-lg shadow-sm">
            <p className="text-left text-md text-red-800 font-semibold mb-2">POOR PROMPT:</p>
            <p className="text-left text-md text-gray-700">
              Write ane mail that will invite clinet to a meeting.
            </p>
          </div>
          <div className="mt-8 p-6 bg-red-100 rounded-lg">
            <p className="text-red-700 text-md font-medium">Expected Response:</p>
            <div className="mt-4 text-left text-gray-700 space-y-2">
              <p>Dear Client,</p>
              <p>Let's have a meeting about the project.</p>
              <p>When are you free?</p>
              <p>Thanks</p>
            </div>
          </div>
          <p className="mt-6 text-red-700 font-medium">A recipe for poor results</p>
        </div>
      </div>
    ),
  },
  {
    id: 'better-prompt',
    title: 'First Steps to Improvement',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Let's improve our prompt with some basic effort - the foundation of better results.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Even small improvements in your prompt can significantly increase the quality of AI's response. Here's what we changed:
          </p>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-4 text-md">Basic Improvements:</h4>
            <ul className="space-y-3 text-md text-yellow-700">
              <li>• Corrected all spelling errors</li>
              <li>• Added basic context about the project</li>
              <li>• Improved sentence structure</li>
              <li>• Specified the type of meeting</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-blue-800 mb-4 text-md">Low-Effort Techniques Used:</h4>
            <ul className="space-y-3 text-md text-blue-700">
              <li>• Grammar and spelling check</li>
              <li>• Basic context addition</li>
              <li>• Simple formatting</li>
              <li>• Clear sentence structure</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            While this is better, we're still missing many elements that could make our prompt truly effective. The next level requires more effort but yields much better results.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-yellow-50 rounded-xl">
          <Target className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <div className="font-mono p-6 bg-white rounded-lg shadow-sm">
            <p className="text-left text-md text-yellow-800 font-semibold mb-2">IMPROVED PROMPT:</p>
            <p className="text-left text-md text-gray-700">
              Write an email inviting a client to a meeting.<br/>
              Context: First-time meeting about web development project.
            </p>
          </div>
          <div className="mt-8 p-6 bg-yellow-100 rounded-lg">
            <p className="text-yellow-700 text-md font-medium">Expected Response:</p>
            <div className="mt-4 text-left text-gray-700 space-y-2">
              <p>Dear [Client Name],</p>
              <p>I would like to schedule a meeting to discuss the web development project.</p>
              <p>Please let me know your availability for next week.</p>
              <p>Best regards,<br/>[Name]</p>
            </div>
          </div>
          <p className="mt-6 text-yellow-700 font-medium">Better, but still needs work</p>
        </div>
      </div>
    ),
  },
  {
    id: 'excellent-prompt',
    title: 'Crafting the Perfect Prompt',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Now, let's create a prompt that maximizes our chances of success through careful structuring and formatting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A perfect prompt combines multiple high-effort techniques to achieve the best possible results:
          </p>
          <div className="bg-green-50 p-6 rounded-xl">
            <h4 className="font-semibold text-green-800 mb-4 text-md">Advanced Techniques Used:</h4>
            <ul className="space-y-3 text-md text-green-700">
              <li>• UPPERCASE for critical sections</li>
              <li>• Clear hierarchical structure</li>
              <li>• Explicit context and requirements</li>
              <li>• Minimal filler words</li>
              <li>• High information density</li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-emerald-800 mb-4 text-md">Why This Works Better:</h4>
            <ul className="space-y-3 text-md text-emerald-700">
              <li>• Models are trained on markdown formatting</li>
              <li>• Last parts carry more weight (requirements at end)</li>
              <li>• Structured sections help prevent confusion</li>
              <li>• Specific details eliminate ambiguity</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Remember: The goal is to manage probabilities. Each improvement increases the likelihood of getting exactly what you want.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-green-50 rounded-xl">
          <MessageSquare className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <div className="font-mono p-6 bg-white rounded-lg shadow-sm text-left space-y-4">
            <p className="font-bold text-green-800">CONTEXT:</p>
            <div className="ml-4 space-y-2">
              <p>• Previous correspondence: Website redesign inquiry</p>
              <p>• Client: John Smith, CEO of TechCorp</p>
              <p>• Project: E-commerce platform overhaul</p>
            </div>
            <p className="font-bold text-green-800 mt-6">TASK:</p>
            <div className="ml-4">
              <p>Schedule initial requirements gathering meeting</p>
            </div>
            <p className="font-bold text-green-800 mt-6">REQUIREMENTS:</p>
            <div className="ml-4 space-y-2">
              <p>• Propose 3 specific meeting times next week</p>
              <p>• Include Zoom video call link</p>
              <p>• Mention preliminary project scope</p>
              <p>• Use professional yet friendly tone</p>
              <p>• Add calendar invite option</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-green-100 rounded-lg">
            <p className="text-green-700 text-md font-medium">Expected Response:</p>
            <div className="mt-4 text-left text-gray-700 space-y-3">
              <p>Dear Mr. Smith,</p>
              <p>Following our discussion about TechCorp's e-commerce platform redesign, I'd like to schedule a comprehensive requirements gathering session.</p>
              <p>Proposed times (EST):<br/>
              • Tuesday, 10:00 AM<br/>
              • Wednesday, 2:00 PM<br/>
              • Thursday, 11:00 AM</p>
              <p>Calendar invites will be sent upon confirmation.</p>
              <p>Best regards,<br/>[Name]</p>
            </div>
          </div>
          <p className="mt-6 text-green-700 font-medium">A prompt engineered for success</p>
        </div>
      </div>
    ),
  },
  {
    id: 'advanced-system',
    title: 'Advanced Prompting Systems',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            For tasks requiring the highest precision and reliability, we can create sophisticated multi-agent systems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Instead of using a single AI, we orchestrate a conversation between multiple AI personalities, each with a specific role:
          </p>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h4 className="font-semibold text-purple-800 mb-4 text-md">The AI Team:</h4>
            <ul className="space-y-3 text-md text-purple-700">
              <li>• Domain Expert: Creates initial content</li>
              <li>• Critical Reviewer: Actively looks for flaws</li>
              <li>• User Advocate: Ensures usability</li>
              <li>• Integration Specialist: Maintains consistency</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-indigo-800 mb-4 text-md">System Benefits:</h4>
            <ul className="space-y-3 text-md text-indigo-700">
              <li>• Cross-validation of outputs</li>
              <li>• Multiple perspectives considered</li>
              <li>• Built-in quality control</li>
              <li>• Continuous improvement loop</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            You, as the human, act as the moderator - providing guidance and feedback when needed, steering the conversation towards the desired outcome.
          </p>
          <div className="bg-violet-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-violet-800 mb-4 text-md">Advanced Techniques:</h4>
            <ul className="space-y-3 text-md text-violet-700">
              <li>• Self-rating and correction loops</li>
              <li>• Prompt library management</li>
              <li>• Meta-prompting strategies</li>
              <li>• Verification systems</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-purple-50 rounded-xl">
          <Workflow className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Bot className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <p className="font-semibold text-md mb-2">Domain Expert</p>
              <p className="text-xs text-gray-600">Creates initial content based on expertise</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <p className="font-semibold text-md mb-2">Critic</p>
              <p className="text-xs text-gray-600">Assumes flaws exist and finds them</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <MessagesSquare className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="font-semibold text-md mb-2">User Advocate</p>
              <p className="text-xs text-gray-600">Ensures practical usability</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Target className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <p className="font-semibold text-md mb-2">Integrator</p>
              <p className="text-xs text-gray-600">Maintains system coherence</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-purple-100 rounded-lg text-left">
            <p className="text-purple-800 font-semibold mb-4">Example Conversation Flow:</p>
            <div className="space-y-3 text-xs text-gray-700">
              <p><span className="text-blue-600 font-medium">Expert:</span> Here's the initial implementation...</p>
              <p><span className="text-red-600 font-medium">Critic:</span> The edge cases aren't handled...</p>
              <p><span className="text-green-600 font-medium">Advocate:</span> Users might struggle with...</p>
              <p><span className="text-purple-600 font-medium">Integrator:</span> Let's combine these insights...</p>
              <p><span className="text-gray-600 font-medium">Human:</span> Good direction, focus more on...</p>
            </div>
          </div>
          <p className="mt-6 text-purple-700 font-medium">A sophisticated system for complex tasks</p>
        </div>
      </div>
    ),
  },
];