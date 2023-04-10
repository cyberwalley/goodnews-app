export function handleize(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function capitalize(text: string) {
  return text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export function cropText(text: string, count: number) {
  return text?.slice(0, count) + '...';
}

export function formatDateRemoveTime(text: string | undefined) {
  return text?.split('T')[0];
}

export function formatDateTime(date: string | undefined) {
  return date?.toLocaleString();
}
