
# Become a Software Professional 2023

![Image text](https://github.com/Emanuel-Lamberti/BaSP-M2023/blob/master/Assets/image.png)

During the 15-week journey, this challenge of creating a web platform that adapts to different devices from scratch will be carried out.
The challenge will consist of creating a web page for a gym, whose name is Mega Rocket S.A.

To carry out this challenge, knowledge will be implemented with different tools and languages ​​to carry out this activity.
They are:
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>

## Week 01
During week 01 the landing page was made in Figma, and each of its Screenflows.

## Week 02
A new repository was created, and the website layout began, based on what was previously done in week 01.

## Week 03
Added a new folder with html file and its styles in css. 
In this week, the work was oriented towards giving it the style proposed in the landing of the first week, working on its classes and labels.

## Week 04
In this part of the project, new style files are added to make the web platform responsive designed to be enjoyed on different devices. The main ones to mention would be the following: iPhone, iPad, and MacBook.

## 🔗 Link
[index.html](https://emanuel-lamberti.github.io/BaSP-M2023/Week-04/index.html)

Media queries were applied for the following views:
<ul>
    <li>Mobile view : 930px to 600px.</li>
    <li>Tablet view : 601px to 1023px.</li>
    <li>Desktop view : 1025px onwards.</li>
</ul>

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color Sidebar and span | ![#E3EC39](https://via.placeholder.com/10/E3EC39?text=+) #E3EC39 |
| Color footer paragraph | ![#666666](https://via.placeholder.com/10/666666?text=+) #666666 |
| Color footer mobile and tablet | ![#C4C4C4](https://via.placeholder.com/10/C4C4C4?text=+) #C4C4C4 |
| Color footer desktop | ![#323232](https://via.placeholder.com/10/323232?text=+) #323232 |
| Color inputs, and textarea for form | ![#d1d1d1](https://via.placeholder.com/10/d1d1d1text=+) #d1d1d1 |
| Color text h2 and p | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |

## Font-family

<li>'Roboto', sans-serif</li>

## Week 05

For this week we were entrusted with a series of activities to be carried out with the JavaScript language.
They were divided into the following folders:
<ul>
    <li>01-variables-and-operators</li>
    <li>02-strings</li>
    <li>03-arrays</li>
    <li>04-if-else</li>
    <li>05-for</li>
    <li>06-functions</li>
</ul>

They must be connected by a script tag in the html for their correct operation.

## 🔗 Link
[exercises-js.html](https://emanuel-lamberti.github.io/BaSP-M2023/Week-05/index.html)


## Week 06

For this week, the objective was to continue developing new html files (login and sign up) with their respective css files, and js files to give it new features.

The same views implemented in html had to be responsive.

For js files, the following requirements had to be taken into account:
<ul>
    <li>
        For the login.html, the required fields of Email and password should be incorporated.
    </li>
    <ul>
        <li>
            The email must have a valid format. (For more information review the file of required documents)
        </li>
        <li>
            The password should be made up of letters and numbers. (For more information review the file of required documents)
        </li>
    </ul>
    <li>
        For the registration of members (sign up) the following should be taken into account:
    </li>
    <ul>
        <li>
            The name must have more than 3 letters.
        </li>
        <li>
            The Lastname must have more than 3 letters.
        </li>
        <li>
            The DNI must contain more than 7 numbers.
        </li>
        <li>
            The phone number must contain only 10 numbers.
        </li>
        <li>
            The date of birth must contain the format dd/mm/aaaa.
        </li>
        <li>
            The location must contain alphanumeric text, and more than 3 numbers.
        </li>
        <li>
            The postal code must contain only numbers, and between 4 and 5 numbers.
        </li>
        <li>
            The address must contain 5 characters and more than 3 letters.
        </li>
        <li>
            The email must have a valid format.
        </li>
        <li>
            The password should be made up of letters and numbers. At least 8 characters.
        </li>
    </ul>
</ul>

The same js files had to be connected correctly in the html for it to work correctly.

## 🔗 Link
[landignJS.html](https://emanuel-lamberti.github.io/BaSP-M2023/Week-06/views/index.html)

## Week 07

For this week, the possibility of adding more functionality to the website was raised.

For the Signup form and for the Login form, the following must be done:
In each form an HTTP request must be made using the Javascript Fetch method,
sending all the data loaded in the form. The request should only be executed if they pass
all form validations; if any field does not meet the validations, it should not be
make the request.
In the request, the form data must be sent as query-params, that is, for each
field a value is sent following the format:
<li>../login?name=juan&lastName=lopez&...</li>

After making the HTTP request with the form data, depending on the result of the
same, different alerts should be displayed.

The URL for each form request is:
<ul>
    <li>Login: https://api-rest-server.vercel.app/login</li>
    <li>Signup: https://api-rest-server.vercel.app/signup</li>
</ul>


The only user who can perform a successful login is:
<ul>
    <li>email: rose@radiumrocket.com</li>
    <li>password: BaSProfessional</li>
</ul>

## 🔗 Link
[landignJSW7.html](https://emanuel-lamberti.github.io/BaSP-M2023/Week-07/views/index.html)


## Author
- Emanuel Adrián Lamberti