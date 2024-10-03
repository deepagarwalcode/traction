import { IProcess } from "@/components/app/Process/ProcessTimeline";

export const processData: IProcess[] = [
    {
        name: "Understand and research your dream customer.",
        description: "You fill out our onboarding form to help us understand your Ideal Customer Persona (ICP_. We perform additional research and discuss this in detail to understand. “When does someone really need your service?”. Our goal? Giving an offer your specific dream customer cannot refuse.",
        // goal: "Putting the right message in front of the right person."
    },
    {
        name: "Email Infrastructure",
        description: "We set up fresh mailboxes and domains which are formed on top of enterprise-grade IPs to ensure we maximise the number of emails which land in the prospect’s inbox. We use multiple vendors as safety mechanisms in the event that anything malfunctions so we are always inboxing.",
        // goal: "Ensuring your emails land outside of SPAM."
    },
    {
        name: "Craft a Personalised Sales Playbook",
        description: "We utilise 100+ different enrichment tools to ensure that we find the most amount of data we can leverage for different messaging angles for your different audiences. We look at specific triggers and signals using a variety of tools (low website ranking, hiring, high amount of traffic, ad spend.) We will form this into a collective sales playbook we will look to validate.",
        // goal: "Reaching the right company at the right time."
    },
    {
        name: "Emails at Scale",
        description: "Once our emails have successfully warmed up and they have passed our deliverability checks, we will test our a number of hypotheses we have made based on the data collected. We will test a number of triggers and offers to see what lands. We will even help you automated the delivery of the offer. ",
        // goal: "Reaching the right company at the right time."

    },
    {
        name: "Close Deals",
        description: "We will flood your inbox with Sales Qualified Leads of the prospects you want to work with, it’s now over to you to ensure you make the most of these leads and maximise the amount of deals closed. We offer some guidance on how we recommend you should sell to these leads. ",
        // goal: "Flooding your calendar with opportunities."
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
            question: "How does pricing work?",
            answer: "Our pricing contains a setup fee along which is followed by a monthly retainer. During setup, we take 2-4 weeks to ensure our email infrastructure is programmed successfully, along with the setup of targeting lists and copy. "
        },
        {
            question: "How do I see what is going on?",
            answer: "We offer you full access to our campaigns so you can see the full process and view every email that is going out. You can see live and real-time reporting when you login to our sending tool. We ensure you are happy with our copy created."
        },
        {
            question: "The offers are hard to deliver and take up time",
            answer: "We intentionally create offers which take time for you deliver to each prospect, why? It increases the amount of leads we get. We help you automate these offers and set them up in a way which is possible."
        },
        {
            question: "My sales team isn’t closing your leads",
            answer: "Usually 50-70% of SQLs become meetings, and clients typically close 10-15% of these SQLs. So if we drove 15 SQLs then you should close 1 deal. We have a unique sales process we like to encourage in our client portfolio, we provide guidance on how you can execute this in the team."
        },

    ];
