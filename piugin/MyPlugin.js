class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", stats => {
      console.log("MyPlugin: done");
    })

    // compiler.plugin() 함수로 후처리
    compiler.hooks.assetEmitted.tap(
      'MyPlugin',
      (file, { content, source, outputPath, compilation, targetPath }) => {
        console.log(content); // <Buffer 66 6f 6f 62 61 72>
      }
    );
    
  }
}

module.exports = MyPlugin;