<script>

function login() {

document.getElementById('sign_up').style.borderBottom='none';
document.getElementById('login').style.borderBottom='1px solid #54687D';

 let html = '';
    html += '<div class="module">';
    html += '   <input type="text" name="user" placeholder="Email or Username"> </input> </br>';
    html += '   <input type="text" name="pass" placeholder="Password"> </input> </br>';
    html += '   <input type="checkbox" name="remember"> <span class="remember">Remember me</span></input> </br>';
	html += '   <input type="submit" value="Login"> </input>';
    html += '</div>';

    document.querySelector('.test-cnt').innerHTML = html;


}

function sign_up() {

document.getElementById('sign_up').style.borderBottom='1px solid #54687D';
document.getElementById('login').style.borderBottom='none';

 let html = '';
    html += '<div class="module">';
    html += '   <input type="text" name="user" placeholder="Email"> </input> </br>';
    html += '   <input type="text" name="pass" placeholder="Password"> </input> </br>';
	html += '   <input type="submit" value="Register"> </input>';
    html += '</div>';

    document.querySelector('.test-cnt').innerHTML = html;
}

</script>
