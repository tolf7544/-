# 해당 날짜의 달의 날짜를 주차별로 가져오기
실행 기준 날짜를 기준으로 해당 월의 1첫번째 주부터 다음달 1첫번째 주 까지 가져옵니다.

---
## 간단한 설명
- new Date()로 생성된 클래스를 기준으로 해당 달의 첫번째주부터 다음달 첫번째 주 까지의 날짜(ex | 2022.11.12)를 array형태로 가져옴

## 원리 
- 첫번째 주는 1일이 목요일이후이면 해당 주는 포함을 시키지 않은 상태로 다음주부터 1번째 주가 되어 계산됨 ( date.getDay() > 4 )

```javascript

  /*
  변수 설명
  
  FirstWeekDay => 해당 달의 1일이 몇요일인지 확인 ( 3 => 수요일 , 4 => 목요일 , 5 => 금요일 )
  theFirstDay => 해당 달의 1일
  theFirstWeekDay => FirstWeekDay의 값에 따라 값이 다른 해당 달의 첫번째 주의 월요일 날짜 EX => | *29* | 30 | 31 | 1 | 2 | 3 | 4 |...
  theLastDayOfMonth => 해당 달의 마지막 날짜
  weekCount => 해당 달의 주의 갯수
  */
  
if (FirstWeekDay > 4) { /* 첫번째 주에서 4 이후일때 (한주 미포함) */
  var theFirstWeekDay = new Date(theFirstDay.getFullYear(), theFirstDay.getMonth(), 1 - FirstWeekDay + 1);
  const weekCount = Math.round((theLastDayOfMonth.getUTCDate() + FirstWeekDay) / 7);

  for (let i = 0; i < weekCount + 1; i++) {

    for (let j = 0; j < 7; j++) {
      month[i].push(date(theFirstWeekDay))
      theFirstWeekDay.setDate(theFirstWeekDay.getDate() + 1)
    }
  }
}


if (FirstWeekDay <= 4) { /* 첫번째 주에서 4 이전일때 (한주 포함) */
  var theFirstWeekDay = new Date(theFirstDay.getFullYear(), theFirstDay.getMonth(), 1 - FirstWeekDay + 1);
  const weekCount = Math.round((theLastDayOfMonth.getUTCDate() + FirstWeekDay) / 7);

  for (let i = 0; i < weekCount; i++) {
    for (let j = 0; j < 7; j++) {
      month[i].push(date(theFirstWeekDay))
      theFirstWeekDay.setDate(theFirstWeekDay.getDate() + 1)
    }
  }
}
```
```javascript
result |


[
  [
    '20220130',
    '20220131',
    '20220201',
    '20220202',                 //첫번째 주 
    '20220203',
    '20220204',
    '20220205'
  ],
  [
    '20220206',
    '20220207',
    '20220208',
    '20220209',                 //두번째 주               
    '20220210',
    '20220211',
    '20220212'
  ],
  [
    '20220213',
    '20220214',
    '20220215',
    '20220216',                 //세번째 주
    '20220217',
    '20220218',
    '20220219'
  ],
  [
    '20220220',
    '20220221',
    '20220222',
    '20220223',                 //네번째 주
    '20220224',
    '20220225',
    '20220226'
  ],
  [
    '20220227',
    '20220228',
    '20220301',
    '20220302',                 //다섯번째 주  (해당 배열는 날짜를 배열하면서 length가 0 이될수있음)
    '20220303',
    '20220304',
    '20220305'
  ],
  []                            //여섯번째 주(다음달 첫번째 주)  (해당 배열는 해당 달의 1일이 첫번째 주에 해당하지 않을때
                                //...29,30,31,1,2,3... 처럼 다음달의 날짜 배열을 미리 가져음)
]
```
