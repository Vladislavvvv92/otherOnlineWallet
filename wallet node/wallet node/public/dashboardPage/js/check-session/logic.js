function setUser() {
    setUserXhttp.open("GET","/getUser.js",true);
    setUserXhttp.send();
    setUserXhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            user = JSON.parse(setUserXhttp.response);
            console.log(user)
            setInfo();
        }

        if (checkXhttp.status == 404) {
            alert('file or resourse not found');
        }
    };
}
function setInfo() {
    info[0].innerHTML = `${user['name']} ${user['surname']}`;

}