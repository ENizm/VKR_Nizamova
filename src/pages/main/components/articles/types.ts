export type Article = {
    id: string;
    icon: "article-icon";
    author: "article-author";
    title: string;
    text: string;
    labels: string[];
}

export const ArticlesList: Article[] = [
    {
        id: "article0",
        icon: "article-icon",
        author: "article-author",
        title: "Как не давать пустых обещаний себе, команде и заказчику",
        text: "Жизнь на реальном проекте сложнее приведенных здесь кейсов. Использование этих подходов - это не серебреная пуля, которая навярняка вас убережет от возможного провала.",
        labels: ["#ReleaseManager", "#Хабр"]
    },
    {
        id: "article1",
        icon: "article-icon",
        author: "article-author",
        title: "Как не давать пустых обещаний себе, команде и заказчику",
        text: "Жизнь на реальном проекте сложнее приведенных здесь кейсов. Использование этих подходов - это не серебреная пуля, которая навярняка вас убережет от возможного провала.",
        labels: ["#ReleaseManager", "#Хабр"]
    },
    {
        id: "article2",
        icon: "article-icon",
        author: "article-author",
        title: "Как не давать пустых обещаний себе, команде и заказчику",
        text: "Жизнь на реальном проекте сложнее приведенных здесь кейсов. Использование этих подходов - это не серебреная пуля, которая навярняка вас убережет от возможного провала.",
        labels: ["#ReleaseManager", "#Хабр"]
    }
]
