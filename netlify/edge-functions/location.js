// Import statement may still be necessary depending on your setup, but ensure it's supported in your runtime
// If not needed or unsupported, remove the import line.

export default async (request, context) => {
  // Explanation of what's available in context.geo using comments
  /*
    context.geo includes:
    - city: string (optional)
    - country:
      - code: string (optional)
      - name: string (optional)
    - subdivision:
      - code: string (optional)
      - name: string (optional)
    - latitude: number (optional)
    - longitude: number (optional)
    - timezone: string (optional)
  */

  // Assuming you want to return the JSON response correctly using the Response constructor:
  return new Response(
    JSON.stringify({
      geo: context.geo,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
