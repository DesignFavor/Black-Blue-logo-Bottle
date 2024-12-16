// /api/assets.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://pfannenstielhof-weingut.webflow.io'); // Allow only your Webflow domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type headers

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Redirect the request to the static asset in the public folder
  const filePath = '/assets/index-Bqfa1y6w.js'; // This is the path relative to the public directory
  res.status(200).redirect(filePath);
}
