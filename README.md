# Itunes Search Api

## Running the Application

To run the client and server simultaneously, you can use `concurrently` to execute multiple commands in parallel. Add the following script to your `package.json`:

```json
"dev": "concurrently -n 'server,frontend' \"node index.js\" \"npm run frontend\""

Alternatively, you can start the server and client separately:

- Start the server:
  ```
  npm start
  ```
- Start the frontend:
  ```
  cd frontend
  npm start

## Security Measures

We take the security of our application seriously and have implemented the following measures:

Input Validation: All user inputs are carefully validated on the server-side to prevent injection attacks and malicious data.

Authorization and Authentication: If user accounts and private data are involved, we implement proper authentication and authorization mechanisms to protect user information.

HTTPS: When deployed on a production server, our application uses HTTPS to encrypt data transmission and safeguard against man-in-the-middle attacks.

Rate Limiting: We've implemented rate limiting on API endpoints to prevent abuse and ensure the server isn't overwhelmed by excessive requests.

Securing API Keys: Sensitive information like API keys is securely stored as environment variables on the server-side, rather than being hardcoded in the frontend code.

CORS: Cross-Origin Resource Sharing (CORS) is configured to allow requests only from trusted domains.

Error Handling: Our application has robust error handling to prevent information leakage and provide meaningful error messages without exposing sensitive details.

Regular Updates and Security Audits: We commit to regularly updating dependencies and libraries to patch security vulnerabilities. We also conduct periodic security audits and vulnerability assessments.

## API Endpoints

Our application exposes the following API endpoints for different searches:

Music search:

Endpoint: /music/:query
Example: /music/rock
Video search:

Endpoint: /videos/:query
Example: /videos/movie
Movie search:

Endpoint: /movie/:query
Example: /movie/action
Audiobook search:

Endpoint: /audiobook/:query
Example: /audiobook/mystery

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request.

## Link to the live site

https://mpho-search-api.onrender.com/