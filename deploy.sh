#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 打包
yarn build

# 移動至到打包後的dist目錄 
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init # 因為 dist 資料夾預設是被 ignore 的，因此在進入 dist 資料夾後初始化 git
git add -A
git commit -m 'Deploy to GitHub Pages'

# 部署到 GitHub 分支為 gh-pages
git push -f git@github.com:Parker-ygfert/path-to-nowhere.git master:gh-pages
# 將 dist 資料夾中的內容推送至 gh-pages 分支中

cd -
