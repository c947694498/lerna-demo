const { echo, exec, exit, cd, mkdir, touch } = require('shelljs')
const { resolve } = require('path')
const isPkgExist = require('./utils/isPkgExist')
const pkgName = process.argv[2] // 拿到 npm run build packName 中的packName

if (!pkgName) {
  echo('缺少pkgName')
  exit(1)
}

const rootPath = process.cwd()
const pkgNamePath = resolve(rootPath, 'packages', pkgName)

if (isPkgExist(pkgName)) {
  echo(`${pkgName} 包已存在`)
  exit(1)
}

const createSh = exec(`lerna create ${pkgName} --description ${pkgName} --yes`)
if (createSh.code !== 0) {
  echo('create fail')
  exit(1)
} else {
  cd(pkgNamePath)
  mkdir(`src`)
  cd('src')
  touch(`index.js`)
  echo(`create ${pkgName} success`)
}