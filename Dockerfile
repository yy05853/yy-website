# Node.jsの軽量な公式イメージを使用
FROM node:22-alpine

# bashやcurlを使いたい場合に必要
RUN apk add --no-cache bash curl

# Reactアプリ作成(初回のみ実行すればよいので、コメントアウトしておく)
# RUN npm create vite@latest my-app -- --template react