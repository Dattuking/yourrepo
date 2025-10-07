# Contact Form Application

A simple, responsive contact form web app built with Flask, Bootstrap, and jQuery. Users can submit their contact information and message, which is temporarily stored and displayed on a success page. The app features both client-side and server-side validation, flash messaging, and a clean UI.

## Technologies Used

- **Backend:** Python, Flask
- **Frontend:** Bootstrap 5, jQuery 3, HTML5, CSS
- **Templating:** Jinja2

## Project Structure

```
app.py
README.md
requirements.txt
static/
    CSS/
        style.css
    js/
        script.js
templates/
    base.html
    index.html
    success.html
```

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/contact-form-app.git
   cd contact-form-app
   ```

2. **Create and activate a virtual environment (optional but recommended):**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```sh
   python app.py
   ```
   The app will be available at [http://localhost:5000](http://localhost:5000).

## Demo Steps

1. **Open the home page:**  
   ![Home Page Screenshot](screenshots/home.png)  
   Fill out the contact form with your name, email, and message.

2. **Submit the form:**  
   ![Form Submission Screenshot](screenshots/submit.png)  
   If any field is empty, you’ll see a validation error.

3. **View the success page:**  
   ![Success Page Screenshot](screenshots/success.png)  
   After successful submission, you’ll see a confirmation and a list of all submitted entries.

## Screenshots

> Replace the image links above with your actual screenshots.  
> Save screenshots in a `screenshots/` folder in your project directory.

---

**Ready for further expansion:**  
You can easily add database integration, email notifications, or authentication features as needed.
