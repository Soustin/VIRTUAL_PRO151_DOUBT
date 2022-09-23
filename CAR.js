AFRAME.registerComponent('car', {
    schema:{
        moveY:{type:"number", default:1}
    },
    tick:function(){
        this.data.moveX = this.data.moveX + 50
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        if(pos.x = 200){
            pos.x = pos.x-50
        }
        if(pos.x = -200){
            pos.x = pos.x+50
        }
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})