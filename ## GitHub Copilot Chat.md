## GitHub Copilot Chat

- Extension: 0.55.0 (prod)
- VS Code: 1.127.0 (4fe60c8b1cdac1c4c174f2fb180d0d758272d713)
- OS: win32 10.0.26200 x64
- GitHub Account: NikkyBSF

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "telemetry.telemetryLevel": "all",
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.26.156.210 (32 ms)
- DNS ipv6 Lookup: Error (10 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (61 ms)
- Electron fetch (configured): HTTP 200 (17 ms)
- Node.js https: HTTP 200 (87 ms)
- Node.js fetch: HTTP 200 (230 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (12 ms)
- DNS ipv6 Lookup: Error (9 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (5 ms)
- Electron fetch (configured): HTTP 200 (97 ms)
- Node.js https: HTTP 200 (367 ms)
- Node.js fetch: HTTP 200 (292 ms)

Connecting to https://proxy.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 20.199.39.224 (13 ms)
- DNS ipv6 Lookup: Error (11 ms): getaddrinfo ENOTFOUND proxy.individual.githubcopilot.com
- Proxy URL: None (12 ms)
- Electron fetch (configured): HTTP 200 (97 ms)
- Node.js https: HTTP 200 (95 ms)
- Node.js fetch: HTTP 200 (89 ms)

Connecting to https://mobile.events.data.microsoft.com/OneCollector/1.0?cors=true&content-type=application/x-json-stream (Electron fetch): HTTP 200 (357 ms)
Connecting to https://telemetry.individual.githubcopilot.com/telemetry (Node.js https): HTTP 200 (314 ms)
Connecting to https://default.exp-tas.com/vscode/ab (Node.js fetch): HTTP 200 (99 ms)

Number of system certificates: 115

## Notes

- Active fetcher: Electron fetch.
- For corporate networks also see: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).