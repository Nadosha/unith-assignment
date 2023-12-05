export const urlify = (item: string) => {
    return item.replace(/\s/g, "_").toLowerCase();
}