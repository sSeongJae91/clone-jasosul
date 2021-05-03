import React from 'react';

function Recruit() {

    const date = {
        curDate : new Date(),
        dayList: ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'],
        curMonth: new Date().getMonth(),
        getFirstDay: (yy, mm) => new Date(yy, mm, 1),
        getLastDay: (yy, mm) => new Date(yy, mm+1, 0),
        nextMonth: function() {
            this.curDate = new Date(this.curDate.getFullYear, this.curDate.getMonth+1);

            return this.curDate;
        },
        prevMonth: function() {
            this.curDate = new Date(this.curDate.getFullYear, this.curDate.getMonth-1);
            
            return this.curDate;
        },
        getCalBody: function() {
            let trtd = '';
            let countDay = 0;

            const year = this.curDate.getFullYear();
            const month = this.curDate.getMonth();

            for(let i=0; i<6; i++) {
                trtd += '<tr>';
                for(let j=0; j<7; j++) {
                    const prevMonLastDay = this.getLastDay(year, month-1, 0);
                    const lastDay = this.getLastDay(year, month, 0);

                    trtd += '<td>';

                    if(countDay === 0 && j <= prevMonLastDay.getDay()) {
                        trtd += prevMonLastDay.getDate() - prevMonLastDay.getDay() + j;
                    }else if(lastDay.getDate() <= countDay) {
                        trtd += j - lastDay.getDay();
                    }else {
                        countDay += 1;
                        trtd += countDay;
                    }

                    trtd += '</td>';
                }
                trtd += '</tr>';
            }

            return <tbody dangerouslySetInnerHTML={{__html: trtd}}></tbody>;
        }
    }

    

    return (
        <>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>{date.dayList[0]}</th>
                        <th>{date.dayList[1]}</th>
                        <th>{date.dayList[2]}</th>
                        <th>{date.dayList[3]}</th>
                        <th>{date.dayList[4]}</th>
                        <th>{date.dayList[5]}</th>
                        <th>{date.dayList[6]}</th>
                    </tr>
                </thead>
                {date.getCalBody()}
            </table>
        </div>
        </>
    )
}

export default Recruit;