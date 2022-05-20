const formatter = Intl.NumberFormat('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY',
}).format

export default function formatMoney(price) {
    return formatter(price)
}