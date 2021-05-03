import React from 'react';

function Recruit() {

    const date = {
        today : new Date(),
        dayList: ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'],
        curMonth: new Date().getMonth(),
        getFirstDay: (yy, mm) => new Date(yy, mm, 1),
        getLastDay: (yy, mm) => new Date(yy, mm+1, 0),
        nextMonth: function() {
            let nm = new Date();
            nm.setDate(1);
            nm.setMonth(++curMonth);

            return nm;
        },
        prevMonth: function() {
            let pm = new Date();
            pm.setDate(1);
            pm.setMonth(--curMonth);
            
            return pm;
        },
        getCalBody: function() {
            let trtd = '';
            let countDay = 0;
            for(let i=0; i<6; i++) {
                trtd += '<tr>';
                for(let j=0; j<7; j++) {
                    const year = this.today.getFullYear();
                    const month = this.today.getMonth();

                    const lastDay = this.getLastDay(year, month, 0);

                    getLas

                    trtd += '<td>';

                    if(countDay === 0 && j < lastDay.getDay()) {
                        trtd += lastDay - lastDay.getDay();
                    }else if(j === lastDay.getDay) {
                        countDay = 1;
                        trtd += countDay;
                    }else {
                        
                    }

                    trtd += '</td>';
                }
                trtd += '</tr>';
            }

            return trtd;
        }
    }

    

    return (
        <div>
            <table style="border='1'">
                <thead>
                    <tr>
                        <th>{date.dayList(0)}</th>
                        <th>{date.dayList(1)}</th>
                        <th>{date.dayList(2)}</th>
                        <th>{date.dayList(3)}</th>
                        <th>{date.dayList(4)}</th>
                        <th>{date.dayList(5)}</th>
                        <th>{date.dayList(6)}</th>
                    </tr>
                </thead>
                <tbody className="cal-body">
                    {getCalBody}
                </tbody>
            </table>
        </div>
    )
}

export default Recruit;