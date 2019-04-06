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

// 为实例原型添加修改时间格式的方法
function handle_time(target) {
    target.prototype.handleTime = (timeStamp='0000000000000',sign='-')=> {
        let date = new Date(timeStamp);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let currentDate = year + sign;
        if (month >= 10) {
            currentDate = currentDate + month + sign;
        } else {
            currentDate = currentDate + '0' + month + sign;
        }
        if (day >= 10) {
            currentDate = currentDate + day;

        } else {
            currentDate = currentDate + '0' + day;
        }
        return currentDate;
    }
}

export {inject_unmount , change_time , handle_time}