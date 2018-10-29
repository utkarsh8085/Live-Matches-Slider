export function formatEventDate(dateTime) {
    const eventDate = new Date(dateTime);  
    const isEventStartToday = new Date().setHours(0,0,0,0) === new Date(dateTime).setHours(0,0,0,0);  
    const dateValue = isEventStartToday ? formatTodayDate(eventDate): formateDate(eventDate);
    return dateValue;

}

function formatTodayDate(eventDate) {
 const hours = eventDate.getHours() < 10 ? `0${eventDate.getHours()}` : eventDate.getHours();
 const minutes = eventDate.getMinutes() < 10 ? `0${eventDate.getMinutes()}` : eventDate.getMinutes();
    return `Today, ${hours}:${minutes}`;
}

function formateDate(eventDate) {
    const year = eventDate.getFullYear();
    const month = eventDate.getMonth()+1 < 10 ? `0${eventDate.getMonth()+1}` : eventDate.getMonth()+1;
    const date = eventDate.getDate() < 10 ? `0${eventDate.getDate()}` : eventDate.getDate();
    return `${year}-${month}-${date}`;
}
