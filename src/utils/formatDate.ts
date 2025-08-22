export const formatDate = (datetime: string) => {
    if (!datetime) return ''
    const d = new Date(datetime)
    return d.toLocaleDateString('ru-RU')
}
