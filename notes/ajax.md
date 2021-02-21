# AJAX

* AJAX = Asynchronous JavaScript And XML.

* AJAX is not a programming language; it is a technology.

* AJAX just uses a combination of:

    > A browser built-in **XMLHttpRequest** object (to request data from a web server).

    > JavaScript ans HTML DOM (to display or use the data).

* AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

* How AJAX works 
![ajax](https://www.w3schools.com/js/pic_ajax.gif)


## AJAX - The XMLHttpRequest Object

* ```var xhttp = new XMLHttpRequest(); ```

* Access across domains is not allowed for security reasons.

* Modern Browsers can use **Fetch API** or **Axios** instead of the XMLHttpRequest Object.

[here](https://www.w3schools.com/js/js_ajax_http.asp)

## AJAX - Send a Request To a Server

* The XMLHttpRequest object is used to exchange data with a server.

* The url parameter of the **open()** method, is an address to a file on a server

* GET or POST?? **GET** is simpler and faster than **POST**, and can be used in most cases. However, always use POST requests when:

    > A cached file is not an option (update a file or database on the server).

    > Sending a large amount of data to the server (POST has no size limitations).

    > Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
* Server requests should be sent asynchronously.

[here](https://www.w3schools.com/js/js_ajax_http_send.asp)

## AJAX - Server Response

* The **onreadystatechange** function is called every time the readyState changes.

    > The **onreadystatechange** property defines a function to be executed when the readyState changes.

    > The **readyState** property holds the status of the XMLHttpRequest. **readyState** ranges from 0 to 4.

    > The **status** property and the **statusText** property holds the status of the XMLHttpRequest object. **status** == 200 means "OK".
* Use a Callback Function if you have more than one AJAX task in a website. 

* You can get the response data as JSON data, including a plain text file and XML data. 

[here](https://www.w3schools.com/js/js_ajax_http_response.asp)