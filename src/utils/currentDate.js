export function getCurrentFormattedDate() {
  const date = new Date();

  const day = date.getDate();
  const year = date.getFullYear();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];

  return `${day} ${month} ${year}`;
}
