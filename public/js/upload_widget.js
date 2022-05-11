const cloudName = "fotofoto"; // replace with your own cloud name
const uploadPreset = "z0ey96py"; // replace with your own upload preset
console.log("linked");
// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    sources: [
      "local",
      "camera",
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
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme

  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);

      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
    console.log("linked!");
  },
  false
);
const urlHandler = async (event) => {
  // event.preventDefault();
  const response = await fetch("/upload", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log in");
  }
};
