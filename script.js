<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

    <!-- WELCOME -->
    <div class="heading">Welcome to my site!</div>
    <hr>
    <p>
      This is my personal website where you can find info about myself, project showcases, and documentation I have
      gathered over the years.
    </p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Projects</button>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello World!"'>Certifications</button>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello World!"'>In Progress</button>

</body>
</html>
