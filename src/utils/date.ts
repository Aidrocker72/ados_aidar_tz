export function formatSessionDate(start: string, end: string): string {
    const startDate = new Date(start)
    const endDate = new Date(end)
  
    const pad = (n: number) => n.toString().padStart(2, '0')
  
    const day = pad(startDate.getDate())
    const month = pad(startDate.getMonth() + 1)
    const year = startDate.getFullYear()
  
    const startHours = pad(startDate.getHours())
    const startMinutes = pad(startDate.getMinutes())
    const endHours = pad(endDate.getHours())
    const endMinutes = pad(endDate.getMinutes())
  
    return `${day}.${month}.${year}, ${startHours}:${startMinutes} - ${endHours}:${endMinutes}`
}
