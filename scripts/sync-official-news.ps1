$ErrorActionPreference = 'Stop'
$query = '{ blogs(first: 6) { edges { node { title subTitle meta { firstPublishedAt relativeUrl } featuredImage { alt rendition { fullUrl } } } } } }'
$result = Invoke-RestMethod -Uri 'https://api.spaceappschallenge.org/graphql' -Method Post -ContentType 'application/json' -Body (@{query=$query} | ConvertTo-Json)
if ($result.errors -or !$result.data.blogs.edges) { throw 'Official news feed did not return valid articles.' }
$articles = @($result.data.blogs.edges | ForEach-Object {
  $item = $_.node
  if (!$item.meta.relativeUrl.StartsWith('/blog/')) { throw 'Unexpected article URL' }
  @{title=$item.title; summary=$item.subTitle; publishedAt=$item.meta.firstPublishedAt; url=('https://www.spaceappschallenge.org' + $item.meta.relativeUrl); image=$item.featuredImage.rendition.fullUrl; imageAlt=$item.featuredImage.alt}
})
@{source='https://www.spaceappschallenge.org/blog/'; fetchedAt=[DateTime]::UtcNow.ToString('o'); articles=$articles} | ConvertTo-Json -Depth 8 | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot '../src/content/official-news.json')
Write-Output "Synced $($articles.Count) official news articles. Rebuild the site to publish the update."
