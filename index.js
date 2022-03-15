const date = (string) => {
    Date.prototype.dayOfYear= function(){
        var j1= new Date(this);
        j1.setMonth(0, 0);
        return Math.round((this-j1)/8.64e7) - 1;
    }
    var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    var daysShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthShort = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec" ];
    var month= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let a = string.split('');
    let dt = new Date();
    for(let i = 0; i < a.length; i++) {
        a[i] === 'm' ? a[i] = dt.getMonth() + 1 : '';
        a[i] === 'd' ? a[i] = (`0 + ${dt.getDate()}`).slice(-2) : '';
        a[i] === 'y' ? a[i] = dt.getFullYear() : '';
        a[i] === 'D' ? a[i] = daysShort[dt.getDay()] : '';
        a[i] === 'j' ? a[i] = dt.getDate() : '';
        a[i] === 'l' ? a[i] = days[dt.getDay()] : '';
        a[i] === 'N' ? a[i] = dt.getDay() : '';
        a[i] === 'z' ? a[i] = dt.dayOfYear() : '';
        a[i] === 'S' ? a[i] = (dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th'))) : '';
    }

    return a.join('');
}

console.log(date('z'));