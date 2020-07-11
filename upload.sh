###
 # @Description:  
 # @Author: LuckRain7
 # @Date: 2020-04-14 15:35:03
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m 'docs: update'

git push 
git push gitee master

cd -