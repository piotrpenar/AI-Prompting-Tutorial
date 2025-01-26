import React from 'react';
import { TutorialSection } from '../types';
import {
  MessageSquare,
  AlertTriangle,
  Brain,
  Target,
  Workflow,
  Bot,
  MessagesSquare,
  Code,
  Zap,
  Book,
  CheckCircle,
  XCircle,
  ListChecks,
  Edit,
  Maximize,
  Minimize,
  CornerDownRight,
  File,
  Layers,
  Users,
  UserCheck
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
    id: 'rule-garbage',
    title: 'Rule #1: Garbage In, Garbage Out',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            The first rule of prompting is simple: Garbage in, garbage out.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you give the AI a bad prompt, filled with errors and lacking clarity, you will get a bad result.
          </p>
          <div className="bg-red-50 p-6 rounded-xl">
            <h4 className="font-semibold text-red-800 mb-4 text-md">What does "Garbage" mean?</h4>
            <ul className="space-y-3 text-md text-red-700">
              <li>• Spelling and grammar errors</li>
              <li>• Ambiguous language</li>
              <li>• Lack of context</li>
              <li>• Missing information</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like giving unclear instructions to a human - the result will likely be incorrect or incomplete.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-red-50 rounded-xl">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-red-800 mb-6">Garbage In, Garbage Out</h3>
          <p className="text-md text-red-700">A poorly crafted prompt leads to poor results.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-order',
    title: 'Rule #2: Order Matters',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            The order of words in your prompt significantly impacts the AI's response.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The AI gives more weight to the later parts of the prompt, making them easier to follow.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-4 text-md">Why Order Matters:</h4>
            <ul className="space-y-3 text-md text-blue-700">
              <li>• AI prioritizes information presented later in the prompt</li>
              <li>• Structure your prompt to emphasize key instructions at the end</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like a conversation - the last thing you say often has the most impact.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-blue-50 rounded-xl">
          <CornerDownRight className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-blue-800 mb-6">Order Matters</h3>
          <p className="text-md text-blue-700">The end of the prompt carries the most weight.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-words',
    title: 'Rule #3: Only Some Words Matter',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Not all words are created equal in the world of prompting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Focus on using precise words for rules and instructions, avoiding filler words like "please," "thank you," or "a," "the," etc.
          </p>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-4 text-md">Word Choice:</h4>
            <ul className="space-y-3 text-md text-yellow-700">
              <li>• Use clear, concise language directly related to your task</li>
              <li>• Filler words add noise and distract the AI</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like programming - every command must be specific and unambiguous.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-yellow-50 rounded-xl">
          <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-yellow-800 mb-6">Word Choice is Key</h3>
          <p className="text-md text-yellow-700">Be precise and avoid filler words.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-models',
    title: 'Rule #4: Each Model Has Strengths',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Different AI models excel at different tasks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Some models are better at creative writing, while others are better at coding or problem-solving.
          </p>
          <div className="bg-green-50 p-6 rounded-xl">
            <h4 className="font-semibold text-green-800 mb-4 text-md">Model Selection:</h4>
            <ul className="space-y-3 text-md text-green-700">
              <li>• Research and choose the best model for your specific task</li>
              <li>• Experiment with different models to find the optimal one</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like choosing the right tool for a job - a hammer is great for nails, but not for screws.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-green-50 rounded-xl">
          <Layers className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-green-800 mb-6">Choose the Right Model</h3>
          <p className="text-md text-green-700">Different models have different strengths.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-adhd',
    title: 'Rule #5: AI Has ADHD',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            AI models can be easily distracted, like someone with ADHD.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            However, they can also provide detailed information when focused but might lose track easily. The good news is, they can quickly retrace steps and correct errors when asked.
          </p>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h4 className="font-semibold text-purple-800 mb-4 text-md">Managing AI's Focus:</h4>
            <ul className="space-y-3 text-md text-purple-700">
              <li>• Keep your prompts concise and focused</li>
              <li>• Use clear structure to guide the AI</li>
              <li>• Ask for corrections and revisions when needed</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like working with a brilliant but easily distracted colleague - provide clear guidance and frequent check-ins.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-purple-50 rounded-xl">
          <Users className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-purple-800 mb-6">AI Can Be Distracted</h3>
          <p className="text-md text-purple-700">Provide focus and ask for corrections.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-probability',
    title: 'Rule #6: Manage the Probability',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Your task is to manage the probability of the AI doing what you want.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You're not chatting with a friend; you're manipulating probabilities through information, context, rules, and instructions.
          </p>
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h4 className="font-semibold text-indigo-800 mb-4 text-md">How to Manage Probability:</h4>
            <ul className="space-y-3 text-md text-indigo-700">
              <li>• Provide clear context and background information</li>
              <li>• Set specific rules and instructions</li>
              <li>• Use appropriate formatting and structure</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like tuning a complex instrument - each adjustment increases the likelihood of the desired outcome.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-indigo-50 rounded-xl">
          <Maximize className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-indigo-800 mb-6">Manage the Probability</h3>
          <p className="text-md text-indigo-700">Increase your chances of success.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-formatting',
    title: 'Rule #7: Formatting Matters',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Formatting, like uppercase, lowercase, bold, lists, and headers, significantly impacts the AI's understanding.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Models are trained on markdown files, so using markdown formatting increases comprehension.
          </p>
          <div className="bg-pink-50 p-6 rounded-xl">
            <h4 className="font-semibold text-pink-800 mb-4 text-md">Effective Formatting:</h4>
            <ul className="space-y-3 text-md text-pink-700">
              <li>• Use UPPERCASE for emphasis and key instructions</li>
              <li>• Use **bold** for important points</li>
              <li>• Use lists and headers to structure information</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like creating a well-organized document - clear formatting makes it easier to read and understand.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-pink-50 rounded-xl">
          <Edit className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-pink-800 mb-6">Formatting is Crucial</h3>
          <p className="text-md text-pink-700">Use markdown to improve understanding.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rule-examples',
    title: 'Rule #8: Examples Can Overfit',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            While examples can be helpful, they can also lead to overfitting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Too many examples can cause the AI to simply rewrite the examples instead of generalizing and applying the underlying principles.
          </p>
          <div className="bg-orange-50 p-6 rounded-xl">
            <h4 className="font-semibold text-orange-800 mb-4 text-md">Using Examples Wisely:</h4>
            <ul className="space-y-3 text-md text-orange-700">
              <li>• Provide a limited number of diverse examples</li>
              <li>• Focus on demonstrating the desired behavior or pattern</li>
              <li>• Encourage generalization by providing clear instructions alongside examples</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it like teaching a student - provide enough examples to illustrate a concept, but not so many that they simply memorize the examples without understanding the underlying principles.
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-orange-50 rounded-xl">
          <Book className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-orange-800 mb-6">Beware of Overfitting</h3>
          <p className="text-md text-orange-700">Use examples carefully.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'hack-rating',
    title: 'Hack #1: Self-Rating and Correction',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Ask the AI to rate its own answer and then correct it.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This simple technique can significantly improve the quality of the AI's response by forcing it to critically evaluate its own work.
          </p>
          <div className="bg-teal-50 p-6 rounded-xl">
            <h4 className="font-semibold text-teal-800 mb-4 text-md">How to Implement:</h4>
            <ul className="space-y-3 text-md text-teal-700">
              <li>• After receiving the AI's response, ask it to rate its answer on a scale (e.g., 1-10)</li>
              <li>• Then, ask it to identify areas for improvement and provide a corrected version</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-teal-50 rounded-xl">
          <CheckCircle className="w-16 h-16 text-teal-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-teal-800 mb-6">Self-Rating & Correction</h3>
          <p className="text-md text-teal-700">Improve quality through self-evaluation.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'hack-prompt-library',
    title: 'Hack #2: Prompt Library',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Store common prompts in a separate file for easy reference.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This allows you to quickly reuse effective prompts and build upon previous successes, saving time and effort.
          </p>
          <div className="bg-lime-50 p-6 rounded-xl">
            <h4 className="font-semibold text-lime-800 mb-4 text-md">Building Your Library:</h4>
            <ul className="space-y-3 text-md text-lime-700">
              <li>• Create a document or spreadsheet to store your prompts</li>
              <li>• Categorize prompts by task or model</li>
              <li>• Include notes on effectiveness and areas for improvement</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-lime-50 rounded-xl">
          <File className="w-16 h-16 text-lime-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-lime-800 mb-6">Create a Prompt Library</h3>
          <p className="text-md text-lime-700">Save time and reuse effective prompts.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'hack-meta-prompt',
    title: 'Hack #3: Meta-Prompting',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
          Use meta-prompting: create a prompt that instructs the AI to generate a proper prompt for a specific task.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
          This leverages the AI's own capabilities to improve the quality of your prompts.
          </p>
          <div className="bg-cyan-50 p-6 rounded-xl">
            <h4 className="font-semibold text-cyan-800 mb-4 text-md">Example Meta-Prompt:</h4>
            <p className="text-md text-cyan-700">
            "Generate a detailed prompt for writing a marketing email for a new product launch, including context, task, and requirements."
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-cyan-50 rounded-xl">
          <Minimize className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-cyan-800 mb-6">Use Meta-Prompting</h3>
          <p className="text-md text-cyan-700">Let the AI improve your prompts.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'hack-gaslighting',
    title: 'Hack #4: Gaslighting the AI',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            To find logic errors, instead of asking directly, state that the text is wrong and ask the AI to point out the errors.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This pre-determines the AI to find errors, increasing the likelihood of identifying them, even if it hallucinates some in the process.
          </p>
          <div className="bg-rose-50 p-6 rounded-xl">
            <h4 className="font-semibold text-rose-800 mb-4 text-md">Example:</h4>
            <p className="text-md text-rose-700">
              "This text contains several logical errors. Identify and explain each error."
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-rose-50 rounded-xl">
          <AlertTriangle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-rose-800 mb-6">"Gaslight" the AI</h3>
          <p className="text-md text-rose-700">Increase error detection.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'hack-general-to-specific',
    title: 'Hack #5: General to Specific',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            Force the AI to go from the most general information to the most specific.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This approach helps maintain a holistic view while ensuring accuracy and detail.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl">
            <h4 className="font-semibold text-amber-800 mb-4 text-md">Example Structure:</h4>
            <ul className="space-y-3 text-md text-amber-700">
                <li>• Start with a broad overview or context</li>
                <li>• Gradually narrow down to specific details or requirements</li>
                <li>• Use a predefined structure or plan to guide the process</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          </p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="text-center">
        <div className="p-8 bg-amber-50 rounded-xl">
          <ListChecks className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-amber-800 mb-6">General to Specific</h3>
          <p className="text-md text-amber-700">Maintain a holistic view with detail.</p>
        </div>
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
    id: 'effort-concept',
    title: 'The Concept of "Effort"',
    content: (
      <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
        <div className="space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            "Effort" in prompting refers to the amount of work you put into crafting your prompt, relative to the improvement in the AI's response.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It's about finding the sweet spot where your effort yields the greatest return in terms of output quality.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-4 text-md">Effort vs. Improvement:</h4>
            <ul className="space-y-3 text-md text-blue-700">
              <li>• Low effort: Simple changes like fixing typos and adding basic context</li>
              <li>• Medium effort: Structuring, formatting, and adding specific details</li>
              <li>• High effort: Advanced techniques like multi-agent systems and complex prompt engineering</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          The higher the effort, the better the results - but also more time consuming. It is up to you to decide when to use which methods, depending on the task complexity and importance.
          </p>
        </div>
      </div>
    ),
    rightContent: (
        <div className="text-center">
            <div className="p-8 bg-blue-50 rounded-xl">
                <UserCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-blue-800 mb-6">Effort = Improvement</h3>
                <p className="text-md text-blue-700">The more you put in, the more you get out.</p>
            </div>
        </div>
    ),
  },
  {
    id: 'effort-techniques',
    title: 'Effort Techniques: Low to High',
    content: (
        <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
            <div className="space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                Let's explore a range of techniques, from low to high effort, that you can use to improve your prompts:
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-4 text-md">Low-Effort Techniques:</h4>
                    <ul className="space-y-3 text-md text-yellow-700">
                        <li>• Select the right model</li>
                        <li>• Fix typos and grammar mistakes</li>
                        <li>• Add common context</li>
                    </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl mt-8">
                    <h4 className="font-semibold text-orange-800 mb-4 text-md">Medium-Effort Techniques:</h4>
                    <ul className="space-y-3 text-md text-orange-700">
                        <li>• Add examples</li>
                        <li>• Add role to the AI</li>
                        <li>• Add basic formatting (full cap headers, full cap most important words)</li>
                        <li>• Add rules to follow (positive reinforcement)</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl mt-8">
                    <h4 className="font-semibold text-red-800 mb-4 text-md">High-Effort Techniques:</h4>
                    <ul className="space-y-3 text-md text-red-700">
                        <li>• Add rules to avoid (negative reinforcement)</li>
                        <li>• Add XML-like tags to structure the prompt</li>
                        <li>• Add rating and self-correction</li>
                        <li>• Force AI to go from the most general information to the most specific with a predefined structure and plan.</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Mastering these techniques allows you to fine-tune your prompts for optimal results.
                </p>
            </div>
        </div>
    ),
    rightContent: (
        <div className="text-center">
            <div className="p-8 bg-yellow-50 rounded-xl">
                <Target className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-yellow-800 mb-6">Effort Techniques</h3>
                <p className="text-md text-yellow-700">From basic fixes to advanced engineering.</p>
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
              <li>• Domain Expert: Creates initial content based on its expertise</li>
              <li>• Critic: Assumes flaws exist and actively finds them</li>
              <li>• User Advocate: Ensures practical usability for the end-user</li>
              <li>• Integrator: Maintains system coherence and consistency</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-indigo-800 mb-4 text-md">System Benefits:</h4>
            <ul className="space-y-3 text-md text-indigo-700">
              <li>• Cross-validation of outputs from multiple perspectives</li>
              <li>• Multiple perspectives considered for a more holistic view</li>
              <li>• Built-in quality control through critical analysis</li>
              <li>• Continuous improvement loop through iterative feedback</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            You, as the human, act as the moderator - providing guidance and feedback when needed, steering the conversation towards the desired outcome.
          </p>
          <div className="bg-violet-50 p-6 rounded-xl mt-8">
            <h4 className="font-semibold text-violet-800 mb-4 text-md">Advanced Techniques:</h4>
            <ul className="space-y-3 text-md text-violet-700">
              <li>• Self-rating and correction loops for continuous improvement</li>
              <li>• Prompt library management for efficient reuse of effective prompts</li>
              <li>• Meta-prompting strategies to let the AI improve its own prompts</li>
              <li>• Verification systems using separate models to check results</li>
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
  {
    id: 'practical-example',
    title: 'Practical Example: Complex Prompt',
    content: (
        <div className="space-y-8 transition-all duration-500 min-h-[70vh]">
            <div className="space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                Let's examine a real-world example of a highly effective, yet complex, prompt.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                This prompt, used in a testing scenario, demonstrates many of the advanced techniques we've discussed:
                </p>
                <div className="bg-gray-100 p-6 rounded-xl font-mono text-sm">
                    <p>
                    Testing execution demands strict adherence to established verification procedures enforcing explicit separation between component validation and server-side processing.
                    </p>
                    <p className="mt-4">
                    Implementation patterns require comprehensive utilization of pre-configured testing infrastructure preventing duplicate utility creation.
                    </p>
                    <p className="mt-4">
                    Verification procedures enforce strict boundary isolation between platform-provided functionality and custom implementation validation.
                    </p>
                    <p className="mt-4 font-bold text-red-700">
                    CRITICAL IMPLEMENTATION CONSTRAINTS! Test execution MUST NOT implement browser functionality verification.
                    </p>
                    <p className="mt-4 font-bold text-red-700">
                    HTML attribute validation procedures PROHIBITED. CSS property testing BANNED. Platform-provided component validation FORBIDDEN.
                    </p>
                    <p className="mt-4 font-bold text-red-700">
                    Validation file mocking STRICTLY PROHIBITED. Redux implementation testing RESTRICTED to state mutations exclusively.
                    </p>
                    <p className="mt-4 font-bold text-red-700">
                    Style verification procedures PROHIBITED. Animation testing BANNED. Framework functionality verification FORBIDDEN.
                    </p>
                    <p className="mt-4 font-bold text-red-700">
                    Browser behavior validation STRICTLY PROHIBITED.
                    </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl mt-8">
                    <h4 className="font-semibold text-blue-800 mb-4 text-md">Key Observations:</h4>
                    <ul className="space-y-3 text-md text-blue-700">
                        <li>• Minimal filler words for maximum information density</li>
                        <li>• Simple, direct sentences for clarity</li>
                        <li>• UPPERCASE words for emphasis on critical constraints (negative reinforcement)</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-8">
                This prompt might seem unreadable to humans, but it's highly effective for communicating precise instructions to an AI.
                </p>
            </div>
        </div>
    ),
    rightContent: (
        <div className="text-center">
          <div className="p-8 bg-gray-50 rounded-xl">
            <Code className="w-16 h-16 text-gray-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-gray-800 mb-6">Complex Prompt Example</h3>
            <p className="text-md text-gray-700">Precise instructions for an AI, not necessarily for humans.</p>
            <p className="mt-8 text-sm text-gray-500 italic">
             IMAGE: A futuristic control panel with various gauges, buttons, and data streams, representing the complexity of managing AI interactions.
             </p>
          </div>
        </div>
    ),
  },
];