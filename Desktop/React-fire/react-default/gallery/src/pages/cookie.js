const getCookie = (name) => {
    console.log("겟쿠키🥯")
    let value = ";" + document.cookie;

    let parts = value.split(`; ${name}=`) // 쿠키정보는 세미콜론으로 나뉘니까 세미콜론으로 짜르고 이름 앞에서 짜르기 e.g. aa=xx /aaa;abbb=ssss;

    // 쿠키 없는 경우버리고(length 2이하), 뒤에 있는 애 버리고(pop) 다시 ; 잘라서 앞부분 버림
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

const setCookie = (name, value, exp = 100000) => {
    let date = new Date();
    date.setTime(date.getTime() + exp);
    // date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

    document.cookie = `${name}=${value};expires=${date.toUTCString}`;

}

const deleteCookie = (name) => {
    let date = new Date("2021-11-04").toUTCString();
    console.log(date);
    document.cookie = name + "=; expires" + date; // ??
}

export { getCookie, setCookie, deleteCookie };