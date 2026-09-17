# Build Production-Ready Open-Source AI Agents with Vercel eve
This is the repository for the LinkedIn Learning course `Build Production-Ready Open-Source AI Agents with Vercel eve`. The full course is available from [[LinkedIn Learning](https://www.linkedin.com/learning/build-production-ready-open-source-ai-agents-with-vercel-eve)].

![lil-thumbnail-url]

## Course Description
<p>Move beyond simple AI assistants and build an agent that can access data, use tools, follow defined workflows, and interact with users.</p>
<p>In this hands-on course, software developer and instructor Eve Porcello shows you how to build an AI agent with eve, using a neighborhood gear-sharing application as the project. Set up your agent and model, define its identity and behavior with instructions, connect it to application data, and create tools that let it retrieve information. Explore how skills guide multi-step workflows and add human-in-the-loop controls. Then connect your agent to a Next.js web experience and deploy it to Vercel.</p>
<p>Along the way, see how these components fit together to turn an agent from a terminal prototype into an application users can interact with.</p>

## Learning Objectives
- Configure an eve agent and connect it to an AI model.
- Define agent behavior with instructions.
- Build tools that connect agents to application data.
- Create skills for multi-step, human-in-the-loop workflows.
- Integrate an agent with a web app and deploy it to Vercel.

## Build
You have a bike that sits in the garage six days a week. Your neighbor needs a bike on Wednesday. Neither of you knows that. In this course, you build the bot that does.

Using [eve](https://eve.dev), Vercel's open-source, filesystem-first framework for durable AI agents, you build a neighborhood gear-sharing agent from an empty folder to a deployment you can open on your phone. Along the way you learn how eve turns a directory into an agent, how to connect a model through Vercel AI Gateway, how to write instructions that keep a bot honest, how to give it a typed tool over real data, how to package a routine as a skill it loads only when needed, how to put a web chat on top of it, and how to deploy the whole thing to Vercel.

The gear-sharing bot is fictional. Every neighbor, listing, and street in it is made up.

## Instructions
This repository has a folder for each video in the course, named `CHAPTER#_MOVIE#`. As an example, the folder named `01_03` corresponds to the first chapter and the third video in that chapter. Each folder contains the code as it is at the **end** of that video. To follow along with a video, start from the previous video's folder and make the changes yourself; open the video's own folder to check your work or to catch up.

| Folder | Video | Ends with |
| ------ | ----- | --------- |
| `01_01` | How eve builds AI agents from files | The project as `eve init` creates it |
| `01_02` | Configure AI models with AI Gateway | Same code, plus `.env.example` for the model credential |
| `01_03` | Configure agent instructions in eve | `agent/instructions.md` for the Maple Street Gear Share bot |
| `01_04` | Create initial gear database | `agent/lib/gear.ts` with twelve listings |
| `01_05` | Build AI agent tools with TypeScript and schemas | The `searchGear` helper and the `find_gear` tool |
| `01_06` | Build reusable AI agent skills in eve | `agent/skills/borrow-request/SKILL.md` |
| `01_07` | Connect an AI agent to web chat | The Next.js web chat from `eve add channel/web` |
| `01_08` | Deploy and monitor an AI agent on Vercel | The finished project, with the channel opened for a public demo |

Each folder is a standalone eve project with its own `package.json`. Install and run inside the folder you are working in.

## Installing
1. To use these exercise files, you must have the following installed:
	- [Node.js](https://nodejs.org) 24 or newer, which includes npm
	- A [Vercel](https://vercel.com) account
	- An AI Gateway API key, created in the Vercel dashboard under **AI Gateway → API Keys**. The second video walks through this.
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Change into the folder for the video you are on and install its dependencies:

		cd 01_02
		npm install

4. Copy `.env.example` to `.env.local` and paste your AI Gateway key into it (or run `/model` in eve's terminal UI, as in the second video). `.env.local` is ignored by git; never commit it.

		cp .env.example .env.local

5. Run the agent:

		npm run dev

	Folders `01_01` through `01_06` open eve's terminal UI. Folders `01_07` and `01_08` also start the web chat; open the local URL the server prints.

### Deploying

The last folder deploys to Vercel with two commands run inside it:

		npx eve link
		npx eve deploy

The deployed agent authenticates to AI Gateway through the linked project's own credentials, so no API key goes in Vercel.

**The `01_08` channel is open on purpose.** Its `agent/channels/eve.ts` uses eve's `none()` policy so a public demo works without a login. Anyone with the URL can chat, and every chat spends your AI Gateway budget. Set a budget on your key before you deploy, and take the deployment down, or replace `none()` with a real auth check, when you are done. The [eve authentication guide](https://github.com/vercel/eve/blob/main/docs/guides/auth-and-route-protection.md) shows how.

### Versions

The projects were built and tested with eve 0.53.1. eve is under active development; if a newer version changes an API used here, the [eve documentation](https://eve.dev/docs) is the source of truth.

## Instructor

Eve Porcello

Software engineer, instructor, author, and co-founder of Moon Highway.

                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/eve-porcello).


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4D0DAQFNUqHpMDtetA/learning-public-crop_675_1200/B4DaCm7ub4HsAc-/0/1789507069959?e=2147483647&v=beta&t=_LcqxL-B8tMHiBFjjjZqMnXk_IAubOfxB-D8pYsyu-M
