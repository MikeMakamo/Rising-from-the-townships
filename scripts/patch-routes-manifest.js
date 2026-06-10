const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json');

if (!fs.existsSync(manifestPath)) {
  throw new Error(`Missing routes manifest at ${manifestPath}`);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

if (!Array.isArray(manifest.dataRoutes)) {
  manifest.dataRoutes = [];
}

if (!Array.isArray(manifest.dynamicRoutes)) {
  manifest.dynamicRoutes = [];
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest));

console.log('Patched .next/routes-manifest.json for runtime compatibility.');
