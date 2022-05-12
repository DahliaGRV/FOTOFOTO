const cloudName = "fotofoto"; // replace with your own cloud name
const uploadPreset = "z0ey96py"; // replace with your own upload preset
console.log("linked");
// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

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

                // document
                //   .getElementById("uploadedimage")
                //   .setAttribute("src", result.info.secure_url);
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
                // const newImage = result.info.secure_url
            }
        }
    )
    // .then((newImage)=>{
    //   const urlHandler = async (event) => {
    //     // event.preventDefault();
    //     console.log(result.info.secure_url, "this url is visibile");
    //     const response = await fetch("/images", {
    //       method: "POST",
    //       body: JSON.stringify(),
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     const newImage = result.info.secure_url

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Image couldn't be uploaded");
//     }
//   };

// })




document.getElementById("upload_widget").addEventListener(
    "click",
    function() {
        myWidget.open();
        console.log("linked!");
    },
    false
);
const urlHandler = async(event) => {
    // event.preventDefault();
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