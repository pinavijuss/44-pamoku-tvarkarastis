class Schedule {
    constructor() {

        this.lessonsStartignTime = [9, 0]
        this.lessonsDuration = [0, 45]
        this.breaks = []
    }

    intro() {
        const h = this.lessonsStartignTime[0];
        const m = this.lessonsStartignTime[1];
        console.log(`Lessons begins at ${this.formatTime(h, m)}`);

    }

    formatTime(hours, minutes) {

        // if (minutes < 10) {
        //     return (`${hours}: 0${minutes}`)
        // }

        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    setNewLessonsBegins(newTime) {

        this.lessonsStartignTime = newTime;
        console.log(this.lessonsStartignTime);

    }

    setNewLessonsDuration(newDuration) {
        this.lessonsDuration = newDuration;

    }

    addBreak(breakTime) {
        this.breaks.push(breakTime);
        console.log(`${this.breaks.length}. Break time! Break is ${breakTime} minutes long.`)
    }

    printSchedule() {
        let lessonNumber = 0;
        const h = this.lessonsStartignTime[0];
        const m = this.lessonsStartignTime[1];
        const firstEndTime = this.calcTimeSum(this.lessonsStartignTime, this.lessonsDuration);
        const firstLessonFormatedTimeStart = this.formatTime(h, m)
        const firstLessonFormatedTimeEnds = this.formatTime(...firstEndTime);

        let lastTime = firstEndTime;
        console.log(`Lessons schedule:`)
        console.log(`=================`);
        console.log(`${++lessonNumber}. ${firstLessonFormatedTimeStart} - ${firstLessonFormatedTimeEnds}`)


        for (const breakTime of this.breaks) {
            const lessonStart = this.calcTimeSum(lastTime, [0, breakTime]);
            const lessonEnd = this.calcTimeSum(lessonStart, this.lessonsDuration);
            const formatedLessonStart = this.formatTime(...lessonStart)
            const firstLessonEnd = this.formatTime(...lessonEnd)
            console.log(`${++lessonNumber}. ${formatedLessonStart} - ${firstLessonEnd}`)
            lastTime = lessonEnd;
        }

    }

    calcTimeSum(firstTime, secondTime) {
        //[10, 0]
        //[0, 45]

        const totalMinutes = firstTime[1] + secondTime[1];
        const h = firstTime[0] + secondTime[0] + (totalMinutes > 59 ? 1 : 0);
        const m = totalMinutes % 60

        return [h, m];
    }


}

module.exports = Schedule;