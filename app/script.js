// Show Home Section
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('camera').style.display = 'none';
    document.getElementById('login').style.display = 'none';
}

// Show Camera Section
function showCamera() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('camera').style.display = 'block';
    document.getElementById('login').style.display = 'none';

    // Initialize Camera Access
    initCamera();
}

// Show Login Section
function showLogin() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('camera').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

// Camera Setup
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

// Initialize Camera
function initCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        }).catch(function(err) {
            console.log('Camera permission denied:', err);
        });
    }
}

// Capture Photo from Camera
function capturePhoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    let photo = canvas.toDataURL('image/png');
    alert('Photo captured. Please check if it is correct.');

    // Here you would add plant analysis logic or AI integration
    let correct = confirm("Is the photo correct?");
    if (correct) {
        analyzePhoto(photo);
    } else {
        alert("Please retake the photo.");
        showCamera(); // Go back to camera page
    }
}

// Analyze the Photo (Dummy function for now)
function analyzePhoto(photo) {
    alert("Analyzing the plant in the photo...");
    // Integrate AI or ML model here for plant disease detection
    // Example AI response:
    let plantDisease = "Powdery Mildew";  // Dummy disease
    let fertilizer = prompt("What fertilizer do you use?");
    let waterFrequency = prompt("How often do you water your plant?");

    // Provide a solution based on inputs (dummy logic here)
    let solution = "For Powdery Mildew, use a fungicide. Water the plant every 3 days.";
    alert("Disease: " + plantDisease + "\nSolution: " + solution);
}

// Open Login Dialog Box
function openLoginDialog() {
    document.getElementById('login-dialog').style.display = 'block';
}

// Close Login Dialog Box
function closeLoginDialog() {
    document.getElementById('login-dialog').style.display = 'none';
}

// Submit Login Details (Dummy)
function submitLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    alert("Logged in as: " + email);
    closeLoginDialog();
}
