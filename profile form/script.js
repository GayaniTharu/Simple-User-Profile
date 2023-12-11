$(document).ready(function () {
    // Image preview functionality
    $("#image").change(function () {
        readURL(this);
    });

    // Delete image functionality
    $("#delete-image").click(function () {
        deleteImage();
    });

    // Form submission
    $("#profile-form").submit(function (event) {
        event.preventDefault();
        validateForm();
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#image-preview").css("background-image", "url(" + e.target.result + ")");
            $("#image-preview").css("background-size", "cover");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function deleteImage() {
    if (confirm("Are you sure you want to delete the image?")) {
        $("#image").val(""); // Clear the file input
        $("#image-preview").css("background-image", "none");
    }
}


    function validateForm() {
        // Get form input values
        const name = $("#name").val();
        const birthday = $("#birthday").val();
        const telephone = $("#telephone").val();
        const nic = $("#nic").val();
        const image = $("#image").val();
    
        // Validate name
        if (!name) {
            alert("Please enter your name.");
            return;
        }
    
        // Validate birthday format (DD/MM/YYYY)
        const birthdayRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!birthdayRegex.test(birthday)) {
            alert("Please enter a valid birthday in the format DD/MM/YYYY.");
            return;
        }
    
        // Validate telephone number format (starts with 0 and has 10 digits)
        const telephoneRegex = /^0\d{9}$/;
        if (!telephoneRegex.test(telephone)) {
            alert("Please enter a valid telephone number starting with 0 and having 10 digits.");
            return;
        }
    
        // Validate NIC format (either 9 digits with V/v or 12 digits without any letters)
        const nicRegex = /^\d{9}[Vv]$|^\d{12}$/;
        if (!nicRegex.test(nic)) {
            alert("Please enter a valid NIC (either 9 digits with V/v or 12 digits without any letters).");
            return;
        }
    
        // Validate image upload
        if (!image) {
            alert("Please upload a profile picture.");
            return;
        }
    
        // If all validations pass, show success message and possibly submit the form to the server
        alert("Profile details submitted successfully!");
    }
    