export default (minutes, date = new Date()) => new Date(date.getTime() + minutes * 60000)
