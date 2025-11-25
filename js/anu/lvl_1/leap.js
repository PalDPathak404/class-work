function isLeap(year){
    console.log((year % 100 != 0 ) ? ((year % 4 == 0) ? ("isLeap") : ("notLeap")) : ((year % 400 == 0) ? ("isLeap") : ("notLeap")));
}
isLeap(2020);
isLeap(2021);
isLeap(1300);
isLeap(2000);