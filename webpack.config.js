const path = require('path');//Node.jsの標準モジュールで、ファイルやディレクトリのパスを操作するために使う。Webpackの出力先ディレクトリを絶対パスで指定。
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',//本番環境では’production’への切り替えが必須。
  entry: './src/index.tsx',//アプリケーションのエントリーポイント（最初に読み込むファイル）を指定。今回は src/index.tsx からアプリケーションが開始。
  output: {
    path: path.resolve(__dirname, 'dist'),//コンパイル後のファイルを保存するディレクトリ( dist フォルダに出力)を指定。
    filename: 'bundle.js',//出力するJavaScriptファイルの名前を指定。今回は bundle.js という名前で保存。
  },
  module: {//Webpackにファイルの変換方法（ローダー）を設定
    rules: [//ファイルごとに適用するルールを指定
      {
        test: /\.tsx?$/,//ファイル名が .ts または .tsx で終わるファイルを対象にする（正規表現）。
        use: 'ts-loader',//対象のファイルを ts-loader で処理。ts-loader はTypeScriptをJavaScriptにコンパイルする
        exclude: /node_modules/,//node_modules ディレクトリ内のファイルは処理対象から除外（パフォーマンス向上のため）。
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],//モジュールをインポートする際に、どの拡張子のファイルを探すかを指定。
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',//ここでconst HtmlWebpackPlugin = require('html-webpack-plugin');の出力先のhtmlを設定。
    }),
  ],
  devServer: {//Webpackの開発用サーバー（webpack-dev-server）を設定。開発中にリアルタイムで変更を確認できるようする（ホットリロード）。
    static: './dist',//サーバーが提供する静的ファイルのディレクトリを指定。コンパイルされたファイルを dist フォルダから提供
    port: 4000,//サーバーが動作するポート番号を指定。
  },
};
