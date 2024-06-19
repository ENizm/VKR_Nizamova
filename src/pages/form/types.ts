export type socialNetwork = {
    icon: "vk-form" | "tg-form" | "in-form" | "yt-form",
    link: string,
}
export const socialNetworks: socialNetwork[] = [
    {icon: "vk-form", link: "https://vk.com/tagesru"},
    {icon: "tg-form", link: "https://t.me/tagesru"},
    {icon: "in-form", link: "https://vk.com/tagesru"},
    {icon: "yt-form", link: "https://www.youtube.com/channel/UCBK5-lZpfKeu_yjH30DpvSQ"}
]
export const interestedList = ["стартап", "сайт", "приложение", "сервис"]
export const budgetList = ["1K", "<5K", "<10K", ">10K"]
