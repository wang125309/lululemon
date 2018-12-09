const initData = () => {
    let selectDateDom = $('#selectDate');
    let showDateDom = $('#showDate');
// 初始化时间
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDate = now.getDate();
    $('#year').html(nowYear + '年')
    $('#month').html(nowMonth + '月')
    $('#date').html(nowDate + '日')
    showDateDom.attr('data-year', nowYear);
    showDateDom.attr('data-month', nowMonth);
    showDateDom.attr('data-date', nowDate);

// 数据初始化
    function formatYear(nowYear) {
        let arr = [];
        for (let i = nowYear - 120; i <= nowYear + 5; i++) {
            arr.push({
                id: i + '',
                value: i + '年'
            });
        }
        return arr;
    }

    function formatMonth() {
        let arr = [];
        for (let i = 1; i <= 12; i++) {
            arr.push({
                id: i + '',
                value: i + '月'
            });
        }
        return arr;
    }

    function formatDate(count) {
        let arr = [];
        for (let i = 1; i <= count; i++) {
            arr.push({
                id: i + '',
                value: i + '日'
            });
        }
        return arr;
    }

    let yearData = function (callback) {
        callback(formatYear(nowYear))
    }
    let monthData = function (year, callback) {
        callback(formatMonth());
    };
    let dateData = function (year, month, callback) {
        if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(31));
        }
        else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(30));
        }
        else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                callback(formatDate(29));
            }
            else {
                callback(formatDate(28));
            }
        }
        else {
            throw new Error('month is illegal');
        }
    };
    let hourData = function (one, two, three, callback) {
        let hours = [];
        for (let i = 0, len = 24; i < len; i++) {
            hours.push({
                id: i,
                value: i + '时'
            });
        }
        callback(hours);
    };
    let minuteData = function (one, two, three, four, callback) {
        let minutes = [];
        for (let i = 0, len = 60; i < len; i++) {
            minutes.push({
                id: i,
                value: i + '分'
            });
        }
        callback(minutes);
    };
    selectDateDom.on('click', function () {
        let oneLevelId = '1990';
        let twoLevelId = showDateDom.attr('data-month');
        let threeLevelId = showDateDom.attr('data-date');
        let iosSelect = new IosSelect(3,
            [yearData, monthData, dateData],
            {
                title: '生日选择',
                itemHeight: 35,
                itemShowCount: 9,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                    $('#year').html(selectOneObj.value)
                    $('#month').html(selectTwoObj.value)
                    $('#date').html(selectThreeObj.value)
                }
            });
    });
}

export {initData}