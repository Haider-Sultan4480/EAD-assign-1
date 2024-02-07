# Web Workers Project

## Description
This project demonstrates the use of web workers to improve the performance of time-consuming operations in web applications.

## How to Run Locally
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Start a local server. You can use Python's built-in HTTP server with the following command:
   ```
   python -m http.server
   ```
4. Open your web browser and go to `http://localhost:8000` (or whichever port your server is running on) to view the project.

## Performance Improvements with Web Workers
Using web workers allows us to offload time-consuming tasks to background threads, thereby preventing them from blocking the main UI thread. This can result in significant performance improvements, especially for tasks like heavy calculations, data processing, or I/O operations.

## Challenges Faced and Solutions
1. **Accessing local files:** Initially encountered a DOMException when trying to construct a worker due to security restrictions when loading the `calculate.js` file from the local file system. Resolved by serving the files through a local server using Python's HTTP server.

## Resources
- [MDN Web Workers Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [Using Web Workers - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/workers/basics/)

---

