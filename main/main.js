module.exports = function main(){
    var cnt =99;
    var result = "";
    for(;cnt>1;cnt--)
    {
        result += cnt + ' bottles of beer on the wall, '+cnt+' bottles of beer.\n'+'Take one down and pass it around, '+(cnt-1)+' bottles of beer on the wall.\n';
    }
    result += '1 bottle of beer on the wall, 1 bottle of beer.\n'+'Take one down and pass it around, no more bottles of beer on the wall.\n'+'No more bottles of beer on the wall, no more bottles of beer.\n'+'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    return result;
};