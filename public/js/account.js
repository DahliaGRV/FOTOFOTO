console.log("update screen");

document.querySelector("#usernameBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#changeUsername").value,
    };
    console.log(userObj);
    fetch("/account", {
        method: "PUT",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res);
        if (res.ok) {
            alert("Your username has been updated");
            location.reload();
        } else {
            alert("trumpet sound");
        }
    });
});

document.querySelector("#emailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const userObj = {
        email: document.querySelector("#changeEmail").value,
    };
    console.log(userObj);
    fetch("/account", {
        method: "PUT",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res);
        if (res.ok) {
            alert("Your email has been updated");
        } else {
            alert("trumpet sound");
        }
    });
});

document.querySelector("#passwordBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const userObj = {
        password: document.querySelector("#changePassword").value,
    };
    console.log(userObj);
    fetch("/account", {
        method: "PUT",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res);
        if (res.ok) {
            alert("Your password has been updated");
        } else {
            alert("trumpet sound");
        }
    });
});