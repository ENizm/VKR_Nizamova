export type WorkItem = {
    icon: "result" | "transparent-develop" | "communication" | "release";
    title: string;
    text: string;
}

export const workList: WorkItem[] = [
    {
        icon: "result",
        title: "Еженедельный результат",
        text: "Проекты в нашей компании ведутся спринтами. Все спринты определяются вместе с вами: задачи, сроки, итерации"
    },
    {
        icon: "transparent-develop",
        title: "Прозрачная разработка",
        text: "Открыто ведем все задачи. Вы можете смотреть на каком этапе мы находимся"
    },
    {
        icon: "communication",
        title: "Всегда на связи",
        text: "Все коммуникации происходят в удобном для вас формате. Поддерживаем связь 24/7"
    },
    {
        icon: "release",
        title: "Цель - релиз",
        text: "Процессы выстроены так, чтобы запуск работающей версии был выпущен как можно раньше"
    }
]
