import React from 'react';
import { TutorialSection } from '../types';
import {
  MessageSquare,
  AlertTriangle,
  Brain,
  List,
  Target,
  Workflow,
  GitBranch,
  Scale,
  Layers,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Bot,
  MessagesSquare
} from 'lucide-react';

export const tutorialContent: TutorialSection[] = [
  {
    id: 'introduction',
    title: 'The AI in the Tower',
    content: (
      <div className="space-y-8 transition-all duration-500">
        <p className="text-lg text-gray-700 leading-relaxed">
          Imagine an AI as an extremely knowledgeable old man, sitting in a tower,
          locked away from all outsiders. He has no windows, hears no sounds, and
          has no way to see the outside world - except for a single, circular hole
          in the wall through which you can pass him notes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          He is extremely determined to help you. But it is up to you to properly
          write the note. This is prompting, and the note is the prompt.
        </p>
        <p className="text-lg text-gray-600 italic">
          Scroll down to learn the art of crafting perfect prompts...
        </p>
      </div>
    ),
    rightContent: (
      <div className="text-center transition-all duration-500 transform">
        <div className="relative mb-12">
          <div className="w-48 h-48 bg-gray-800 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-24 h-24 text-blue-400" />
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800" />
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">The AI Assistant</h3>
        <p className="text-xl text-gray-600">Waiting for your carefully crafted prompts</p>
      </div>
    ),
  },
  {
    id: 'basic-rules',
    title: 'Basic Rules of Prompting',
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">The Fundamental Rules</h3>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Garbage in, garbage out</strong>
              <p className="text-gray-600 mt-1">Poor prompts yield poor results. Grammar, spelling, and clarity matter significantly.</p>
            </li>
            <li>
              <strong>Order matters</strong>
              <p className="text-gray-600 mt-1">Later parts of the prompt carry more weight. Place the most critical instructions towards the end.</p>
            </li>
            <li>
              <strong>Word efficiency</strong>
              <p className="text-gray-600 mt-1">Focus on meaningful instructions. Words like "please," "thank you," or articles (a, the) don't improve results.</p>
            </li>
            <li>
              <strong>Model specialization</strong>
              <p className="text-gray-600 mt-1">Each AI model has unique strengths. Choose the right tool for your task.</p>
            </li>
            <li>
              <strong>AI attention span</strong>
              <p className="text-gray-600 mt-1">Models can be easily distracted but can self-correct when prompted.</p>
            </li>
            <li>
              <strong>Probability management</strong>
              <p className="text-gray-600 mt-1">Your goal is optimizing the likelihood of desired outcomes through proper context and instructions.</p>
            </li>
            <li>
              <strong>Formatting importance</strong>
              <p className="text-gray-600 mt-1">Proper markdown formatting enhances understanding as models are trained on structured text.</p>
            </li>
            <li>
              <strong>Example balance</strong>
              <p className="text-gray-600 mt-1">Examples help guide the AI but too many can lead to overfitting - mere rewrites of examples.</p>
            </li>
          </ol>
        </div>
      </div>
    ),
    rightContent: (
      <div className="space-y-8 text-center">
        <List className="w-24 h-24 text-green-500 mx-auto" />
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[
            { icon: AlertTriangle, color: 'text-red-500', text: 'Bad Input', desc: 'Unclear, unstructured prompts' },
            { icon: Target, color: 'text-green-500', text: 'Good Output', desc: 'Clear, focused results' },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
              <p className="text-sm font-medium">{item.text}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'effort-levels',
    title: 'Levels of Effort in Prompting',
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          The effectiveness of a prompt often correlates with the effort invested in crafting it.
          Here are the techniques in ascending order of effort and impact:
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">Basic Effort</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Select the right model
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Fix typos and grammar
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Add common context
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">Medium Effort</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
                Add examples
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
                Define AI's role
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
                Add basic formatting
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">High Effort</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                Add rules to follow and avoid
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                Use XML-like structuring
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                Implement self-correction
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <Scale className="w-24 h-24 text-indigo-500 mx-auto mb-6" />
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Effort vs. Impact</h3>
          <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-200">
              <div className="p-2 text-xs">Basic</div>
            </div>
            <div className="absolute bottom-0 left-1/3 w-1/3 h-2/3 bg-blue-200">
              <div className="p-2 text-xs">Medium</div>
            </div>
            <div className="absolute bottom-0 left-2/3 w-1/3 h-full bg-purple-200">
              <div className="p-2 text-xs">High</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Prompting Techniques',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Advanced "Hacks"</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Self-rating and Correction
            </h4>
            <p className="mt-2 text-gray-600">
              Ask the AI to evaluate its own response and make improvements.
              This creates a feedback loop that enhances output quality.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-500" />
              Prompt Library Management
            </h4>
            <p className="mt-2 text-gray-600">
              Maintain a collection of effective prompts for different scenarios.
              Reuse and refine them over time.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-500" />
              Meta-prompting
            </h4>
            <p className="mt-2 text-gray-600">
              Create prompts that help generate better prompts.
              Use AI to refine your prompting strategy.
            </p>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <Workflow className="w-24 h-24 text-purple-500 mx-auto mb-6" />
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Systems</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Bot className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h5 className="font-semibold">Verifier Model</h5>
              <p className="text-sm text-gray-600">
                Secondary AI that validates outputs
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <MessagesSquare className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h5 className="font-semibold">Multi-Agent Discussion</h5>
              <p className="text-sm text-gray-600">
                Multiple AI personas discussing and refining solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'practical-example',
    title: 'Practical Example: Email Writing',
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Poor Prompt:</h3>
        <div className="bg-red-50 p-4 rounded-lg">
          <code>Write ane mail that will invite clinet to a meeting.</code>
          <div className="mt-2 text-sm text-red-600">
            Issues:
            <ul className="list-disc ml-4 mt-1">
              <li>Spelling errors</li>
              <li>No context provided</li>
              <li>Lack of specific details</li>
              <li>No formatting or structure</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6">Better Prompt:</h3>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <code>
            Write an email inviting a client to a meeting.
            <br />
            Context: First-time meeting about web development project
          </code>
          <div className="mt-2 text-sm text-yellow-600">
            Improvements:
            <ul className="list-disc ml-4 mt-1">
              <li>Correct spelling</li>
              <li>Basic context added</li>
              <li>Still lacks specific details</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6">Excellent Prompt:</h3>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="font-mono space-y-2">
            <p>CONTEXT:</p>
            <p className="ml-4">[Previous email correspondence about website redesign]</p>
            <p className="ml-4">Client: John Smith, CEO of TechCorp</p>
            <p className="ml-4">Project: E-commerce website redesign</p>
            <p>TASK:</p>
            <p className="ml-4">Write a formal email inviting the client to discuss project requirements</p>
            <p>REQUIREMENTS:</p>
            <p className="ml-4">- Propose 3 potential meeting times next week</p>
            <p className="ml-4">- Include video call link</p>
            <p className="ml-4">- Mention preliminary project scope</p>
            <p className="ml-4">- Professional but friendly tone</p>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center max-w-md">
        <MessageSquare className="w-24 h-24 text-blue-500 mx-auto mb-6" />
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-700">Poor Result</h4>
            <p className="text-sm text-red-600">Generic, error-prone output</p>
            <div className="mt-2 p-2 bg-white rounded">
              <p className="text-xs text-left">
                Dear Client,<br />
                Let's have a meeting about the project.<br />
                When are you free?<br />
                Thanks
              </p>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-700">Excellent Result</h4>
            <p className="text-sm text-green-600">Contextual, professional output</p>
            <div className="mt-2 p-2 bg-white rounded">
              <p className="text-xs text-left">
                Dear Mr. Smith,<br /><br />
                Following our discussion about TechCorp's e-commerce redesign, I'd like to schedule a comprehensive requirements gathering session...<br /><br />
                Proposed times (EST):<br />
                - Tuesday, 10:00 AM<br />
                - Wednesday, 2:00 PM<br />
                - Thursday, 11:00 AM<br /><br />
                [Meeting link]<br /><br />
                Best regards,<br />
                [Name]
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'complex-systems',
    title: 'Complex Prompting Systems',
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          For tasks requiring higher precision and reliability, consider implementing these advanced systems:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">Verifier System</h4>
            <p className="mt-2 text-gray-600">
              Use a separate AI model to verify and validate the output of the primary model.
              This creates a quality control checkpoint that catches errors and inconsistencies.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">Critique System</h4>
            <p className="mt-2 text-gray-600">
              Implement a "devil's advocate" AI that assumes the output is flawed and actively
              looks for problems. This helps identify potential issues that might be missed.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">Multi-Agent Conversation</h4>
            <p className="mt-2 text-gray-600">
              Create a system where 3-4 AI personalities with different roles discuss the topic:
            </p>
            <ul className="mt-2 ml-4 list-disc text-gray-600">
              <li>Expert in the domain</li>
              <li>Critical reviewer</li>
              <li>User advocate</li>
              <li>Integration specialist</li>
            </ul>
            <p className="mt-2 text-gray-600">
              The human acts as a moderator, providing guidance and feedback when needed.
            </p>
          </div>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <Users className="w-24 h-24 text-indigo-500 mx-auto mb-6" />
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Multi-Agent System</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Bot className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm">Domain Expert</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm">Critic</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm">User Advocate</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <Workflow className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm">Integrator</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];