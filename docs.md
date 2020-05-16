
## To Run locally

## Instructions on how to deploy

1) git push --force. Yes you want to force push because the remote is in host state, not edit state
2) npm run deploy => this will make the remote ready to host. Yes this step comes after you push because it edits the remote directly


## Edit tips
1) Add New Background Images for title page : Go to src/content/titleImages

2) Change Width of columns in post : Go to src/components/PostContent and edit the Post Full Content class padding attribute

3) Title page is src/pages/index  lots to play

4) Navigation is src/components/SiteNavLogo

5) Control formatting of posts, src/templates/post.tsx the actual content formatting is in src/components/PostContent
