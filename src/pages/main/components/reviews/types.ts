export type ReviewItem = {
    icon: "rolfd" | "medsid" | "leryad";
    text: {
        value: string;
        isAccent?: boolean;
    }[],
    name: string;
    position: string;
    logo: "rolf" | "medsi" | "lerya";
}

export const companyReviews: ReviewItem[] = [
    {
        icon: "medsid",
        text: [
            {
                value: "Работать с TAGES по-настоящему здорово! Вы всегда на связи, приятны в общении, активны, тепрпеливы и внимательны к нашим пожеланиям, а согласования, сметы и брифы - все это вовремя и четко.",
            }
        ],
        name: "Елена Брусилова",
        position: ", президент компании, Медси",
        logo: "medsi",
    },
    {
        icon: "rolfd",
        text: [
            {
                value: "Самое ценное в работе с TAGES - ",
            },
            {
                value: "доверие",
                isAccent: true,
            },
            {
                value: " и ",
            },
            {
                value: "партнерские отношения",
                isAccent: true,
            },
            {
                value: ". Мы ценим гибкость и открытость, с которыми коллеги подходят к абсолютно разным и нетиповым запросам, а также уверенность в том, что мы всегда найдем решение вопросов любой сложности.",
            },
        ],
        name: "Алексей Гуляев",
        position: ", генеральный директор, Рольф",
        logo: "rolf",
    },
    {
        icon: "leryad",
        text: [
            {
                value: "TAGES делают свою работу качественно и в срок. Иногда даже в самый ",
            },
            {
                value: "нереальный",
                isAccent: true,
            },
            {
                value: " срок.",
            },
        ],
        name: "Алексей Гуляев",
        position: ", генеральный директор, Рольф",
        logo: "lerya",
    }
]
