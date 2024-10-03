import { IProcess } from "@/components/app/Process/ProcessTimeline";

export const processData: IProcess[] = [
    {
        name: "Ideal Customer Research",
        description: "You fill out our onboarding questionnaire to help us learn about your ICP. We conduct additional research to gain insights into your targets’ motivations and pain points.",
        goal: "Putting the right message in front of the right person."
    },
    {
        name: "Email Infrastructure set-up",
        description: "We set up multiple domains & mailboxes, configure technical records and start warming them up.",
        goal: "Ensuring your emails land outside of SPAM."
    },
    {
        name: "Craft your Email Sequence",
        description: "We write messaging angles for your different customer profiles with relevant buying signals (e.g: surge in hiring, ad spend, opening of new offices, acquisition).",
        goal: "Reaching the right company at the right time."
    },
    {
        name: "build your lead lists",
        description: "We build contextual lead lists by looking at buying signals (e.g: surge in hiring, ad spend, opening of new offices).",
        goal: "Reaching the right company at the right time."

    },
    {
        name: "personalized messages at scale.",
        description: "We leverage AI to tailor our messaging to each prospect. This lets us automate our outreach to potential clients —without compromising message quality.",
        goal: "Flooding your calendar with opportunities."
    },
]

export const testimonials = [
    {
        name: "Tanuj",
        age: 24,
        job: "Software Engineer",
        duration: 12,
        beforeWeight: 125,
        afterWeight: 85,
        beforeImg: "TanujBefore",
        afterImg: "TanujAfter",
        testimonial: "7 day challenge was the best investment I made"
    },
    {
        name: "Srijan",
        age: 24,
        job: "Software Engineer",
        duration: 4,
        beforeWeight: 78,
        afterWeight: 73,
        beforeImg: "SrijanBefore",
        afterImg: "SrijanAfter",
        testimonial: "All it takes is consistent effort and smart work"
    },
    {
        name: "Satyam",
        age: 22,
        job: "College Student",
        duration: 6,
        beforeWeight: 69,
        afterWeight: 76,
        beforeImg: "SatyamBefore",
        afterImg: "SatyamAfter",
        testimonial: "Never imagined getting strong would be so addictive"
    },
    {
        name: "Shraddha",
        duration: 4,
        beforeWeight: 62,
        afterWeight: 52,
        beforeImg: "https://utfs.io/f/W0owopANmI8SbaEbW2SygIQHmtj5Lqz6YAF9PZEfk7dXaD2w",
        afterImg: "https://utfs.io/f/W0owopANmI8SlWzMoEjqOdJMF598bLGPuSoxkW1C6QmhUeNa"
    },
    {
        name: "Mansi",
        duration: 4,
        beforeWeight: 80,
        afterWeight: 64,
        beforeImg: "https://utfs.io/f/W0owopANmI8Ssx1Al2F1M4DzegkT0wYjVnKEyRWG8AOBbLUI",
        afterImg: "https://utfs.io/f/W0owopANmI8SLBNoPSCIKnBJZdNSagCMsT2qDRxkQ7AEUFij"
    },
    {
        name: "Divesh",
        duration: 6,
        beforeWeight: 83,
        afterWeight: 68,
        beforeImg: "https://utfs.io/f/W0owopANmI8S46hnpmXKwi3ThnpaygH5dUJLVoXAlExuqFkS",
        afterImg: "https://utfs.io/f/W0owopANmI8SvlyeEb8VWgIocuynMsBH4OUKJzLY7ekm29Nv"
    },
]

export interface IFaq {
    question: string;
    answer: string;
}


export const FAQs: IFaq[] =
    [
        {
            question: "What is the pricing model like? Do I need to commit for several months at once?",
            answer: "We charge a monthly retainer. At the start of our engagement, we want you to commit to the first three months, as we find this to be a reasonable time period to assess whether campaigns will be successful or not. After that, there is no long-term commitment or lock-in. Our goal is to win your business every month by providing a service you're happy to keep paying for."
        },
        {
            question: "How quickly can you launch a campaign?",
            answer: "From the moment you sign a contract, you should count 2 weeks before seeing your first campaign live. The first weeks are dedicated to building your email infrastructure. We'll set up secondary domains and mailboxes and warm these up. During the warm-up process, we build your lead lists and draft your email (&/or LinkedIn) sequences. This process usually takes 2 weeks – which means that we send our first outreach messages by week 3."
        },
        {
            question: "How do you protect my domain reputation? Will my emails land in spam if we send too many?",
            answer: "We don't use your primary domain to send our outreach emails. If you're doing so, you should stop already, as it can have some disastrous impact on your domain reputation overall. We create secondary domains that redirect to yours. We then create mailboxes to send our emails. Whatever happens with these domains – your main domain reputation is safe. Because we have a handful of different domains, we can scale our sending volume in a safe way."
        },
        {
            question: "What visibility do I have on the process? Do I get to see the messages and who you're reaching out to?",
            answer: "Once our first drafts are ready, we'll send them your way for review. We won't send any messages you're not happy with. Similarly, we send you the list of prospects we plan to contact before doing so. If you're not happy with our targeting criteria, we'll revise and recreate these lead lists."
        },
        {
            question: "How do I see what's going on with my campaign? Is there a way to see the number of emails you sent, the number of replies, and other tracking metrics?",
            answer: "We create a client login in our sending tool. With this, you get a view of every relevant metric, such as: - The number of leads contacted - The number of emails we send - The percentage of leads that opened our emails - The percentage of positive replies. On top of that, we track additional metrics such as your email-to-lead ratio, contact-to-lead ratio and we further enrich results to get a sense of what are your best performing target segments."
        }

    ];
