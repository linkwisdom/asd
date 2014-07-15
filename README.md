asd
===

辅助系统开发 ( assist system development )

## Feature

- 自动生成模块所需文件
- 支持多级目录级联创建
- 按照fcfe最新文档规范
- 支持创建单个符合模块规范的文档
- 使用方便、快捷
- 支持项目一键式创建
- 支持内建命令扩展
- 支持系统级命令
- 支持自定义上下文
- 支持自定义模板目录
- 支持命令扩展
- 支持bcs云端文件备份

## install

> npm install asd -g

## Usage

### 使用系统命令行

- 设置项目基本配置


``` shell
> asd set email liu@liandong.org # author 信息
> asd set username "Liandong Liu"  # author 信息
> asd set module-files "Action Model View monitor template.tpl style.less"
# 指定mvc需要的文件(有默认配置)
```

- 在项目目录中创建指定模块
- 自动会以src/为基准路径配置tpl/less/js中的moduleID, DomId等信息

```shell
> asd set title "看排名"
> asd module src/module/app/coreword ## 创建MVC所需所有文件
```

- 创建单个或多个指定文件

```shell
> asd touch view.js ## 创建单个文件
> asd touch demo/actionConf.js launcher.js 
  #自动补全demo文件夹，并且在demo/中增加多个文件
```

### 使用内建命令行
- 不需要再输入asd前缀

```shell
> asd
> set email liu@liandong.org
> module src/module/app/coreword
> help # 查看所有可用命令
```

### 云端备份

- 要使用云端备份功能，需要先申请bcs存储
- fcfe可提供公用bucket
- 使用bcs暂时只支持以下几个命令，后期将加入更多支持

```shell
> asd push module/app/coreword.patch 
    ## 将在云端路径module/app/中增加 coreword.patch文件
    
> asd pull module/app/coreword.patch ## 下载云端指定路径下的文件
> asd dir # 显示bucket下所有文件
```

- 在使用前需要先设置sckey 和ackey

```shell
> asd set sckey xxxxx
> asd set ackey yyyyy
```

### conser 命令说明

- conser 使用简单的文本输入流作为交互式命令
- conser 切词默认按空格切词
- 如果要指定包含空格的值，使用双引号\"包含，比如

> asd set username "Liandong Liu"


