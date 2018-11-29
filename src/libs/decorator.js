function inject_unmount (target) {
    // 改装componentWillUnmount，在组件销毁时做记录，给setState用
    let next  = target.prototype.componentWillUnmount;
    target.prototype.componentWillUnmount = function(){
        if(next) next.call(this,...arguments);
        this.unmount = true 
    }
    // 对setState改装，setState查看当前组件是否被销毁，自动执行
    let setState =  target.prototype.setState;
    target.prototype.setState = function(){
        if (this.unmount) return ; 
        setState.call(this,...arguments)
    }
}

function change_time(target){
    target.prototype.changeTime = (str)=> {
        return str.slice(0,4)+'年'+str.slice(4,6)+'月'+ str.slice(6)+'日'
    }
}

export {inject_unmount , change_time}