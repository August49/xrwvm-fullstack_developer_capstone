const logout = async () => {
    let logout_url = window.location.origin + "/djangoapp/logout";
    const res = await fetch(logout_url, {
        method: "GET",
    });

    const json = await res.json();
    if (json) {
        let username = sessionStorage.getItem('username');
        sessionStorage.removeItem('username');
        window.location.href = window.location.origin;
        window.location.reload();
        alert("Logging out " + username + "...")
    }
    else {
        alert("The user could not be logged out.")
    }
};

let checkSession = () => {
    let curr_user = sessionStorage.getItem("username");
    let loginlogout = document.getElementById("loginlogout");

    if (curr_user && curr_user !== "") {
        loginlogout.innerHTML = 
        '<span class="navbar-text mr-2">' + curr_user + '</span>' +
        '<button onclick="logout()" class="btn btn-outline-primary">Logout</button>';
    } else {
        loginlogout.innerHTML = 
        '<a href="/login" class="btn btn-outline-primary mr-2">Login</a>' +
        '<a href="/register" class="btn btn-primary">Register</a>';
    }
}