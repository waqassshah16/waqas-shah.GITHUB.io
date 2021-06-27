$(document).ready(function(){

    //$('#birth_date').val(new Date());

    $("#calculate").click(function(){
        var mdate       = $("#birth_date").val().toString();
        var yearThen    = parseInt(mdate.substring(0, 4), 10);
        var monthThen   = parseInt(mdate.substring(5, 7), 10);
        var dayThen     = parseInt(mdate.substring(8, 10), 10);
        
        var today       = new Date();
        var birthday    = new Date(yearThen, monthThen - 1, dayThen);
        
        var dayswithyear = dateDiff(birthday, today);

        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        var days = Math.round(differenceInMilisecond / (60 * 60 * 24 * 1000));
        
        if(differenceInMilisecond < 0) {
           $('#age_container').css('display' , 'none');
            alert('Birth Date cannot be greater than Current Date');
            return;
        }
        
        var isToday = (today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate());

        if (isToday) {
            alert("\n\nCongratulations, aap abhi paida hue hain.😃😃\n\nCongratulations, You just came in this beautiful World ! \n\nПоздравляю, вы только что попали в этот прекрасный мир\n\nFelicidades, acabas de llegar a este hermoso mundo.\n\nঅভিনন্দন, আপনি সবেমাত্র এই সুন্দর পৃথিবীতে এসেছেন\n\nFélicitations, tu viens juste d'arriver dans ce beau monde\n\n          🎂🎂 Happy B'day 🎂🎂!!!");
        }
        
        var year_age    = dayswithyear.years;
        
        var month_age = dayswithyear.months;
        
        day_age = dayswithyear.days;
        
        if (year_age == 0 && month_age == 0 && day_age == 0) days = 0;
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            $("#exact_age").text("Invalid birthday - Please try again!");
        } else {
            $('#age_container').css('display' , 'inline-block');
            $("#exact_age").html("<div>You are <span id='young'></span></div><div>You are <span id='days'></span></div><div><span id='years'>" + year_age + " Years</span><span id = 'months'> " + month_age + " Months</span><span id = 'day'> " + day_age + " Days</span></div>");
            
            if(isToday) {
                $('#young').html('New Born Baby !');
            } else if(year_age <= 10) {
                $('#young').html('Child !');
            } else if(year_age > 10 && year_age <= 20) {
                $('#young').html('Too Young !');
            } else if(year_age > 20 && year_age <= 40) {
                $('#young').html('Young !');
            } else if(year_age > 40 && year_age <= 60) {
                $('#young').html('Old !');
            } else if(year_age > 60) {
                $('#young').html('Senior Citizen !');
            }
            
            $('#days').html(days + ' days old !');
        }
    });

    $("#birth_date").click(function(){
         $('#age_container').css('display' , 'none');
    });
});

function dateDiff(birthday, today) {
    //resource https://gist.github.com/clecuona/2945438
    /*
     * setup 'empty' return object
     */
    var dayswithyear = {days:0, months:0, years:0};

    /*
     * If the dates are equal, return the 'empty' object
     */
    if (birthday == today) return dayswithyear;

    /*
     * First get the number of full years
     */

    var year1 = birthday.getFullYear();
    var year2 = today.getFullYear();

    var month1 = birthday.getMonth();
    var month2 = today.getMonth();

    var day1 = birthday.getDate();
    var day2 = today.getDate();

    /*
     * Set initial values bearing in mind the months or days may be negative
     */

    dayswithyear['years']    = year2 - year1;
    dayswithyear['months']   = month2 - month1;
    dayswithyear['days']     = day2 - day1;

    /*
     * Now we deal with the negatives
     */

    /*
     * First if the day difference is negative
     * eg dt2 = 13 oct, dt1 = 25 sept
     */
    if (dayswithyear['days'] < 0) {
        /*
         * Use temporary dates to get the number of days remaining in the month
         */
        var dtmp1 = new Date(birthday.getFullYear(), birthday.getMonth() + 1, 1, 0, 0, -1);

        var numDays = dtmp1.getDate();

        dayswithyear['months'] -= 1;
        dayswithyear['days'] += numDays;

    }

    /*
     * Now if the month difference is negative
     */
    if (dayswithyear['months'] < 0) {
        dayswithyear['months'] += 12;
        dayswithyear['years'] -= 1;
    }
    
    dayswithyear['days'] = dayswithyear['days'] + 1;

    return dayswithyear;
}