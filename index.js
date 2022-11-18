function test() {
	const today = new Date();


	weekCount(today).then((res) => {
		console.log(res)
	});
	
}

function weekCount(dt) {

	return new Promise((resolve, reject) => {

		try {



			var theFirstDay = new Date(dt.getFullYear(),  dt.getUTCMonth()-2, 2);
			var theLastDayOfMonth = new Date(dt.getFullYear(), dt.getUTCMonth()-1, 1);

			var theLastDayOfWeek = new Date(dt.getFullYear(), dt.getMonth() - 1, 1);
			theLastDayOfWeek.setDate(theLastDayOfWeek.getDate() - theLastDayOfWeek.getDay() + 1);

			const date = ((d) => { return (d.toISOString().replace(/T.+/g, ``).replace(/-/g, ``)) });

			const month = [
				[],
				[],
				[],
				[],
				[],
				[]
			]

			const FirstWeekDay = theFirstDay.getUTCDay();


			if (FirstWeekDay > 4) { /* 첫번째 주에서 4 이후일때 (한주 미포함) */
				var theFirstWeekDay = new Date(theFirstDay.getFullYear(), theFirstDay.getMonth(), 1 - FirstWeekDay + 1);

				const weekCount = Math.round((theLastDayOfMonth.getUTCDate() + FirstWeekDay) / 7);

				for (let i = 0; i < weekCount + 1; i++) {

					for (let j = 0; j < 7; j++) {

						month[i].push(date(theFirstWeekDay))

						theFirstWeekDay.setDate(theFirstWeekDay.getDate() + 1)

					}

				}
				resolve(month)
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
				resolve(month)
			}

			reject(null)
		} catch (e) {
			reject(null)
		}
	})
}

test()