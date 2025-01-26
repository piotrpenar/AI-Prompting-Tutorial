Imagine an AI as an extermly knowledgable old man.

He is sitting in a tower, locked away from all outsiders. He has no windows, hears no sounds, and has no way to see the outside world.

He has a single window, which is a small, circular hole in the wall. Through this hole, you can pass him a notes.

He is extremly determinated to help you. But it is up to you to properly write the note.

This is prompting, and the note is the prompt.

So, what are the basic rules for writing a good prompt?

1. Garbage in, garbage out. - If you give the AI a bad prompt, you will get a bad result.
2. Order matters - The order of the words in the prompt will affect the result. Last parts of the prompt will have more weight, and will be easier to follow
3. Only some words matter - Depending on what you want to achieve, you must use correct words for rules and instructions. However, saying please, thank you, or sorry, using low-information words (like a, the, etc.) will not help you and will distract the AI from doing what you want.
4. Each model has it's own strengths - Some models are better at certain tasks, and some are better at others.
5. AI has ADHD - Easily distractable, but when the infodump starts, the words go out without much thought. BUT it is easy for AI to retrace his steps and make corrections, when asked.
6. Your task is to manage the propability of the AI doing what you want. - You do it by giving it information, adding contexts to its work, seting rules and instructions. You are playing with maths and statistics, not chatting up a friend.
7. Formatting matters - upper case, lowercase, bold, lists and headers - all this matters for the AI to understand you. Models are trained on markdown files, and will be more likely to understand you if you use markdown formatting.
8. Examples can be helpful but might result in overfitting - If you give the AI an example, it will be more likely to repeat it. However, if you give it too many examples, it will start to overfit and will not be able to generalize - it will instead rewrite the example in a different way.

Additional "hacks"

1. Asking the AI to rate it's own answer and correct it
2. Storing the common prompts in a separate file, and using it as a reference
3. Meta-prompt - create a prompt, that will make the AI give you a proper prompt.
4. Using XML-like tags to structure the prompt
5. Gaslight the AI - if you want the ai to check if the text has any logic error, you might not get valid answer if you simply as it for it.  Instead you should state that the text is wrong, and ask it to point out the errors - this way, AI is pre-determined to find the errors. It will hallucinate some of them, but it is very likely to find all the real ones.
6. Force AI to go from the most general information to the most specific - this way, you will get the most accurate answer. Without loosing the holistic view.

First of all - garbage in, garbage out.

To understand this part, you should read this: 

https://ig.ft.com/generative-ai/

When you make grammar or ortography mistakes, the AI will be confused, and you are decreasing the probability of the AI doing what you want.

Let's start with a simple example:

PROMPT: Write ane mail that will invite clinet to a meeting.

Result of this prompt will not only be extremly generic, but also will be  wrong in ~5% of the times. AI might confuse client with some CLI net (?), it might use wrong format, or wrong tone.

A simplest way to improve this prompt is to add some context.

CONTEXT:

YOUR PASTED EMAILS WITH THE CLIENTS PREVIOUSLY

PROMPT:

Write an email that will invite this client to a meeting.

Now we are talking. The AI will be more likely to use the same format, tone and style as the previous emails. It will also use the same language as the previous emails, and will use proper names. 

But now, let's say we want to generalize - we want a prompt that will be able to work with any client and all the edge cases. 

For this next part let me introduce you to concept of "effort"

It is simply the amount of work you put into the prompt divided by the improvement you get from it.

Now, in ascending order of effort, we have the following techniques to improve our response:

1. Select the right model
2. Fix typos and grammar mistakes
3. Add common context
4. Add examples
5. Add role to the AI
6. Add basic formatting (full cap headers, full cap most important words)
7. Add rules to follow (positive reinforcement)
8. Add rules to avoid (negative reinforcement)
9. Add XML-like tags to structure the prompt
10. Add rating and self-correction
11. Force AI to go from the most general information to the most specific with a predefined structure and plan.

And the following for more complex systems (that require much higher precision)

1. Add veryfier - an separate model that will check the result of the AI and will correct it if it is not correct.
2. Add critiquer - an separate model that will critique the result of the AI and will correct it if it is not correct. This model will always assume that the result is wrong, and will com.
3. Add conversation between personalities - human is only an overseer in this scenario. There are 3-4 AI models, each with unique role and point of view, that discuss the topic, and Human drops in to give his thoughts and feedback on a matter.

When prompt is done really well, it has minimal number of distraction and filler words, maximum information density, and can seem unreadable for humans. Here is an example of a prompt that achieves very high results:


Testing execution demands strict adherence to established verification procedures enforcing explicit separation between component validation and server-side processing. 
Implementation patterns require comprehensive utilization of pre-configured testing infrastructure preventing duplicate utility creation. 
Verification procedures enforce strict boundary isolation between platform-provided functionality and custom implementation validation.

CRITICAL IMPLEMENTATION CONSTRAINTS! Test execution MUST NOT implement browser functionality verification. 
HTML attribute validation procedures PROHIBITED. CSS property testing BANNED. Platform-provided component validation FORBIDDEN. 
Validation file mocking STRICTLY PROHIBITED. Redux implementation testing RESTRICTED to state mutations exclusively. 
Style verification procedures PROHIBITED. Animation testing BANNED. Framework functionality verification FORBIDDEN. 
Browser behavior validation STRICTLY PROHIBITED.

This is only a part of a longer prompt. Notice how there are almost no filler words, sentences are simple, and the most important negative reinforcement rules are all upper caps - this ensures that the AI will respect them.
