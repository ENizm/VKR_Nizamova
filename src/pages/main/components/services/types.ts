export type Division = {
    icon: "analitic" | "ci:cd" | "develop" | "qa";
    title: string;
    text: string;
    labels: string[];
}
export const division: Division[] = [{
    icon: "analitic",
    title: "АНАЛИТИКА",
    text: "Проанализируем контекст и предложим вектор развития продукта с учетом бизнес-метрик",
    labels: ["API Managment", "PIM/PXM", "Проектирование архитектуры"],
}, {
    icon: "develop",
    title: "РАЗРАБОТКА",
    text: "Осуществляем гибкую разработку продуктов под особенности вашего бизнеса",
    labels: ["Mobile", "Low Code", "Super App"],
}, {
    icon: "ci:cd",
    title: "CI/CD",
    text: "Автоматизируем и обеспечим непрерывную поставку готового продукта",
    labels: ["DevOps", "Автоматизация", "Интеграционные решения"],
}, {
    icon: "qa",
    title: "ПОВЫШЕНИЕ КАЧЕСТВА",
    text: "В процессе разработки постоянно улучшаем ваш продукт",
    labels: ["QA", "Бесперебойная работа"]
}]
