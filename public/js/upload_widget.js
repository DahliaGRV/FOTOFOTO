const cloudName = "fotofoto"; 
const uploadPreset = "z0ey96py"; 
console.log("linked");

const myWidget = cloudinary.createUploadWidget({
            cloudName: cloudName,
            uploadPreset: uploadPreset,
            sources: [
                "local",
                "google_drive",
                "dropbox",
            ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: true,
            cropping: true,
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#5D005D",
                    sourceBg: "#3A0A3A",
                    windowBorder: "#AD5BA3",
                    tabIcon: "#ffffcc",
                    inactiveTabIcon: "#FFD1D1",
                    menuIcons: "#FFD1D1",
                    link: "#ffcc33",
                    action: "#ffcc33",
                    inProgress: "#00e6b3",
                    complete: "#a6ff6f",
                    error: "#ff1765",
                    textDark: "#3c0d68",
                    textLight: "#fcfffd"
                },
                fonts: {
                    default: null,
                    "'Kalam', cursive": {
                        url: "https://fonts.googleapis.com/css?family=Kalam",
                        active: true
                    }
                }
            }
        },

        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                console.log(result.info.secure_url, "this is the url");
                fetch("/api/images",{
                    method:"POST",
                    body: JSON.stringify(result.info),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(res=>{
                    if(res.ok){
                       location.reload()
                    } else {
                        alert("trumpet sound")
                    }
                })
            }
        }
    )




document.getElementById("upload_widget").addEventListener(
    "click",
    function() {
        myWidget.open();
        console.log("linked!");
    },
    false
);
const urlHandler = async(event) => {
    console.log(result.info.secure_url, "this url is visible");
    const response = await fetch("/api/images", {
        method: "POST",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Image couldn't be uploaded");
    }
};