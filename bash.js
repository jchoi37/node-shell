process.stdout.write('prompt > ');

/* process.stdin.on('data',(data)=>{
  const cmd= data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write('\nprompt > ')

})
 */

process.stdin.on('pwd', function(){
  console.log(`Current directory: ${process.cwd()}`); 
})
