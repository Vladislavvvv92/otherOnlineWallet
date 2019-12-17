function checkSession() {
    checkXhttp.open("GET","/checkSession.js",true);
    checkXhttp.send();
    checkXhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            if (checkXhttp.response == 'true') {
                setUser();
            }
            else{
                self.location = '/';
            }
        }

        if (checkXhttp.status == 404) {
            alert('file or resourse not found');
        }
    };
}