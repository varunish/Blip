mainPassword = document.getElementById('mainPassword')
confirmPassword = document.getElementById('confirmPassword')                

mainPassword.addEventListener('keypress', onMainPasswordChange)
confirmPassword.addEventListener('keypress', onConfirmPasswordChange)

mainPasswordChanged = 0
mainPassword.addEventListener('change', onMainPasswordChange)

confirmPasswordChanged = 0
confirmPassword.addEventListener('change', onConfirmPasswordChange)

submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', onPreSubmit)

function onMainPasswordChange()
{
    if (!mainPasswordChanged)
    {
        mainPasswordChangedInteral = setInterval('onMainPasswordChange', 10);
        mainPasswordChanged = 1
    }

    var level = new Array()

    level[0] = "rgb(255, 255, 255)"
    level[1] = "rgb(150, 70, 20)"
    level[2] = "rgb(130, 90, 30)"
    level[3] = "rgb(110, 110, 40)"
    level[4] = "rgb(90, 130, 50)"
    level[5] = "rgb(70, 150, 60)"

    i = 0

    for (; i < scorePassword(mainPassword.value)/20; i++)
    {
        var tempElement = document.getElementById('strength'+i)
        tempElement.style.backgroundColor = level[i+1] 
    }

    for (; i < 5; i++)
    {
        var tempElement = document.getElementById('strength'+i)
        tempElement.style.backgroundColor = level[0]
    }
}

function scorePassword(pass) 
{
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function onConfirmPasswordChange()
{
    if (!confirmPasswordChanged)
    {
        confirmPasswordChangedInteral = setInterval('onConfirmPasswordChange', 1);
        confirmPasswordChanged = 1
    }

	var passwordMatch = document.getElementById('passwordMatch')

	if (confirmPassword.value != mainPassword.value)
	{
		passwordMatch.innerHTML = "<span style='color: red;'>Passwords do not match</span>"
		return 1
	}
	else
	{
		passwordMatch.innerHTML = "<span style='color: green;'>Passwords match!</span>"
		return 0
	}
}

function onPreSubmit(e)
{
	var flag = 0

	var name = document.getElementById('name')
	var emailAddress = document.getElementById('emailAddress')
	var mobileNumber = document.getElementById('mobileNumber')

	if (name.value == '')
		flag = 1

	if (emailAddress.value == '')
		flag = 2

	if ((mobileNumber.value == '') || (parseInt(mobileNumber.value) >= 10000000000))
		flag = 3

	if ((mainPassword.value == '') || (onConfirmPasswordChange()))
		flag = 4

	if (!flag)
	{
		alert("Form has been correctly filled up.")
	}

	e.preventDefault()

	if (flag == 1)
		alert("Please share with us your name.")

	if (flag == 2)
		alert("Give us your e-mail address to keep in touch with you.")

	if (flag == 3)
		alert("Give us your mobile number to contact you.")

	if (flag == 4)
		alert("Invalid entry to the password field.")
}