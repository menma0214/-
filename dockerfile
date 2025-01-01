# ベースイメージを指定
FROM node:lts

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
# RUN npm install
# npmキャッシュをクリアしてクリーンインストールを行う
RUN  npm install

# アプリケーションのソースコードをコピー
COPY . .

# 開発サーバーのポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "start"]
