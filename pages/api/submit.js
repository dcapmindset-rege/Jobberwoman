export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, programType, programId, programTitle } = req.body;
    // For MVP, just log to console and return success.
    console.log(`Interest received: ${name} (${email}) for ${programTitle}`);
    // Later, you can send an email or save to Google Sheets.
    res.status(200).json({ message: 'Interest recorded' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
