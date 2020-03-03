export interface AssetGroup {
  id: number,
  assets: number,
  links: {
    href: string,
    rel: string,
  }[],
  name: string,
  riskScore: number,
  "type": string,
  vulnerabilities: {
    critical: number,
    moderate: number,
    severe: number,
    total: number
  }
}
