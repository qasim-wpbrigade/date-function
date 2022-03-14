const date = (string) => {
    var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    var daysShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthShort = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec" ];
    var month= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let a = string.split('');
    for(let i = 0; i < a.length; i++) {
        a[i] === 'm' ? a[i] = new Date().getMonth() + 1 : '';
        a[i] === 'd' ? a[i] = new Date().getDate() : '';
        a[i] === 'y' ? a[i] = new Date().getFullYear() : '';
        a[i] === 'D' ? a[i] = daysShort[new Date().getDay()] : '';
        a[i] === 'j' ? a[i] = new Date().getDate() : '';
        a[i] === 'l' ? a[i] = days[new Date().getDay()] : '';
        a[i] === 'N' ? a[i] = new Date().getDay() : '';
    }

    return a.join('');
}

console.log(date(''));