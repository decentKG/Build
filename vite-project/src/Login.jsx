import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Main App component
const App = () => {
  const navigate = useNavigate();
  // State to manage active tab (Log In or Create New Account)
  const [activeTab, setActiveTab] = useState('login');

  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Path for the uploaded logo image. Using the contentFetchId for direct reference.
  const logoSrc = 'uploaded:Group 1.png-77e07f1c-5577-406f-8c38-4d97ad45665d';

  // Function to handle form submission (currently just logs data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, rememberMe, activeTab });

    if (activeTab === 'login') {
      // Basic validation
      if (username && password) {
        console.log('Logging in...');
        navigate('/Home');
      } else {
        alert('Please enter username and password.');
      }
    } else {
      // Handle create account logic
      console.log('Creating account...');
      // You would typically handle registration logic here
    }
  };

  return (
    <>
      <style>
        {`
          /* Base styles for the entire page */
          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1a202c; /* Equivalent to bg-gray-900 */
            background-size: cover;
            background-position: center;
          }

          /* Overlay to darken background image */
          .overlay {
            position: absolute;
            inset: 0; /* Equivalent to top:0; right:0; bottom:0; left:0; */
            background-color: black;
            opacity: 0.5;
          }

          /* Header styles */
          .header {
            position: absolute;
            top: 0;
            width: 100%;
            padding: 1rem; /* p-4 */
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
          }

          .header-logo-group {
            display: flex;
            align-items: center;
          }

          .header-logo {
            height: 3rem; /* h-12 */
            width: auto;
            margin-right: 0.75rem; /* mr-3 */
            border-radius: 0.375rem; /* rounded-md */
          }

          .header-buttons {
            display: flex;
            gap: 1rem; /* space-x-4 */
          }

          .header-button {
            padding: 0.5rem 1rem; /* px-4 py-2 */
            color: white;
            border: 1px solid transparent;
            border-radius: 0.375rem; /* rounded-md */
            transition: all 0.3s ease-in-out; /* transition duration-300 */
          }
          .header-button:hover {
            border-color: white;
          }

          /* Main content card (login/signup container) */
          .main-card {
            position: relative;
            background-color: rgba(255, 255, 255, 0.9); /* bg-white bg-opacity-90 */
            padding: 2rem; /* p-8 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
            width: 100%;
            max-width: 28rem; /* max-w-md */
            margin-left: 1rem; /* mx-4 */
            margin-right: 1rem; /* mx-4 */
            z-index: 10;
            backdrop-filter: blur(4px); /* backdrop-blur-sm */
            margin-top: 5rem; /* mt-20 */
          }
          @media (min-width: 768px) { /* md:p-12 */
            .main-card {
              padding: 3rem;
            }
          }

          /* Tab selection */
          .tab-selection {
            display: flex;
            margin-bottom: 2rem; /* mb-8 */
            border-bottom: none; /* Removed border-b-2 border-gray-200 */
          }

          .tab-button {
            flex-grow: 1; /* flex-1 */
            text-align: center;
            padding-top: 0.75rem; /* py-3 */
            padding-bottom: 0.75rem; /* py-3 */
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            border-radius: 0; /* Removed rounded-t-lg */
            transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out; /* transition-colors duration-300 */
            color: #a0aec0; /* text-gray-500 */
            border-bottom: none; /* Ensure no residual border */
          }
          .tab-button:hover {
            color: #4a5568; /* hover:text-gray-700 */
          }
          .tab-button.active {
            color: #ffb300; /* text-[#ffb300] */
            border-bottom: 4px solid #ffb300; /* Kept active tab indicator */
          }

          /* Form styles */
          .form-group {
            margin-bottom: 1.5rem; /* Equivalent to space-y-6 */
          }

          .form-label {
            display: block;
            color: #4a5568; /* text-gray-700 */
            font-weight: 500; /* font-medium */
            margin-bottom: 0.5rem; /* mb-2 */
          }

          .form-input {
            width: 100%;
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border: 2px solid transparent; /* Make border transparent */
            border-radius: 15px; /* rounded-[15px] */
            outline: none;
            transition: all 0.2s ease-in-out; /* transition-all duration-200 */
            /* Use multiple backgrounds for gradient border effect */
            background-image: linear-gradient(white, white), linear-gradient(135deg, #ffb300 0%, #ff5e62 100%);
            background-origin: border-box;
            background-clip: padding-box, border-box;
          }
          .form-input:focus {
            /* No specific border-color on focus, as gradient is handled by background */
            box-shadow: none; /* Remove previous box-shadow if it caused a rectangular feel on focus */
          }

          /* Remember Me checkbox */
          .checkbox-group {
            display: flex;
            align-items: center;
          }

          .checkbox-input {
            height: 1rem; /* h-4 */
            width: 1rem; /* w-4 */
            color: #ffb300; /* text-[#ffb300] */
            border-radius: 0.25rem; /* rounded */
            border-color: #cbd5e0; /* border-gray-300 */
            cursor: pointer;
          }
          .checkbox-input:focus {
            box-shadow: 0 0 0 1px #ffb300; /* focus:ring-[#ffb300] */
          }

          .checkbox-label {
            margin-left: 0.5rem; /* ml-2 */
            color: #4a5568; /* text-gray-700 */
          }

          /* Log In button */
          .login-button {
            background-color: black;
            color: white;
            padding: 0.5rem 2rem; /* px-8 py-2 */
            border-radius: 0.375rem; /* rounded-md */
            font-weight: 600; /* font-semibold */
            transition: background-color 0.3s ease-in-out; /* transition-colors duration-300 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
          }
          .login-button:hover {
            background-color: #2d3748; /* hover:bg-gray-800 */
          }

          /* Or Sign Up using section */
          .divider-group {
            position: relative;
            display: flex;
            align-items: center;
            padding-top: 1rem; /* py-4 */
            padding-bottom: 1rem; /* py-4 */
          }

          .divider-line {
            flex-grow: 1;
            border-top: 1px solid #cbd5e0; /* border-t border-gray-300 */
          }

          .divider-text {
            flex-shrink: 0;
            margin-left: 1rem; /* mx-4 */
            margin-right: 1rem; /* mx-4 */
            color: #a0aec0; /* text-gray-500 */
          }

          .divider-line-orange {
            flex-grow: 1;
            border-top: 1px solid #ffb300; /* border-t border-[#ffb300] */
          }

          /* Social media icons */
          .social-icons {
            display: flex;
            justify-content: center;
            gap: 1.5rem; /* space-x-6 */
            font-size: 1.5rem; /* text-2xl (applies to a if no image) */
          }

          .social-icon-link {
            color: #718096; /* text-gray-600 */
            transition: color 0.3s ease-in-out; /* transition-colors duration-300 */
          }
          .social-icon-link:hover {
            color: #ffb300; /* hover:text-[#ffb300] */
          }

          .social-icon-img {
            height: 1.5rem; /* h-6 */
            width: 1.5rem; /* w-6 */
            border-radius: 9999px; /* rounded-full */
          }

          /* Register link */
          .register-text {
            text-align: center;
            color: #718096; /* text-gray-600 */
            margin-top: 1.5rem; /* mt-6 */
          }

          .register-link {
            color: #ffb300; /* text-[#ffb300] */
            font-weight: 600; /* font-semibold */
            text-decoration: none;
          }
          .register-link:hover {
            text-decoration: underline;
          }

          /* Create Account button */
          .create-account-button {
            width: 100%;
            background-color: #ffb300;
            color: white;
            padding-top: 0.75rem; /* py-3 */
            padding-bottom: 0.75rem; /* py-3 */
            border-radius: 0.375rem; /* rounded-md */
            font-weight: 600; /* font-semibold */
            transition: background-color 0.3s ease-in-out; /* transition-colors duration-300 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
          }
          .create-account-button:hover {
            background-color: #ed8936; /* hover:bg-orange-600 */
          }
        `}
      </style>

      <div className="container" style={{ backgroundImage: "url('https://i.pinimg.com/736x/0b/35/aa/0b35aa76eec6b544dab843d86f56c364.jpg')" }}>
        {/* Overlay to darken the background image and ensure text/logo visibility */}
        <div className="overlay"></div>

        {/* Header with Logo and Client/Provider buttons */}
        <header className="header">
          <div className="header-logo-group">
            {/* Logo image, using the provided image file */}
            <img
              src={logoSrc}
              alt="BuildLink Logo"
              className="header-logo"
              // Fallback in case the image fails to load
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x50/ffb300/ffffff?text=LOGO'; }}
            />
          </div>
          <div className="header-buttons">
            <button className="header-button">Client</button>
            <button className="header-button">Provider</button>
          </div>
        </header>

        {/* Main content card for login/signup */}
        <div className="main-card">
          {/* Tab selection for Log In / Create New Account */}
          <div className="tab-selection">
            <button
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
            <button
              className={`tab-button ${activeTab === 'create-account' ? 'active' : ''}`}
              onClick={() => setActiveTab('create-account')}
            >
              Create New Account
            </button>
          </div>

          {/* Form content based on active tab */}
          <form onSubmit={handleSubmit} className="space-y-6"> {/* Reusing space-y-6 conceptually for consistent spacing */}
            {activeTab === 'login' && (
              <>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-input"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="checkbox-input"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe" className="checkbox-label">Remember Me</label>
                </div>
                <button
                  type="submit"
                  className="login-button"
                >
                  Log In
                </button>

                {/* Or Sign Up using section */}
                <div className="divider-group">
                  <div className="divider-line"></div>
                  <span className="divider-text">Or Sign Up using</span>
                  <div className="divider-line-orange"></div>
                </div>

                {/* Social media icons */}
                <div className="social-icons">
                  <a href="#" className="social-icon-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" className="social-icon-img"/>
                  </a>
                  <a href="#" className="social-icon-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon-img"/>
                  </a>
                  <a href="#" className="social-icon-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Instagram" className="social-icon-img"/>
                  </a>
                  <a href="#" className="social-icon-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="Facebook" className="social-icon-img"/>
                  </a>
                </div>

                {/* Register link */}
                <p className="register-text">
                  Don't have an account?{' '}
                  <a href="#" className="register-link">Register.</a>
                </p>
              </>
            )}

            {activeTab === 'create-account' && (
              <>
                <div className="form-group">
                  <label htmlFor="new-username" className="form-label">New Username</label>
                  <input
                    type="text"
                    id="new-username"
                    className="form-input"
                    placeholder="Choose a username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="new-email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="new-email"
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="new-password" className="form-label">New Password</label>
                  <input
                    type="password"
                    id="new-password"
                    className="form-input"
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="form-input"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="create-account-button"
                >
                  Create Account
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
