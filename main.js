"use static";
// gh-stars
(function(){var h=document.getElementsByTagName('head')[0],id='callback_'+Math.random().toString(36).substr(2,16),el=document.createElement('script'),ghs=document.getElementById('ghstars');window[id]=function(obj){ghs.innerHTML=obj.data.watchers||0;ghs.style.display='inline-block'};el.src='https://api.github.com/repos/js-org/js.org?callback='+id;h.insertBefore(el,h.firstChild)})();
//hermes
(function(){function e(e,t,n){void 0==n&&(n={}),this.options={write_speed:250,write_acceleration:1,write_random:.2,write_pause:3e3,clear_speed:62.5,clear_acceleration:1,clear_random:.2,clear_pause:500};var e="string"==typeof e||e instanceof String?document.getElementById(e):e;if(!("innerHTML"in e))throw"no element";for(var i in n)this.options[i]=n[i];n=this.options,t=[].concat(t);var r=e.innerHTML,a=r.length,c=-1,o=function(){a-->0?(e.className="active",e.innerHTML=r.slice(0,a),setTimeout(o,n.clear_speed+n.clear_speed*a/r.length*n.clear_acceleration+n.clear_speed*n.clear_random*Math.random())):(r=""+t[c=(c+1)%t.length],setTimeout(s,n.clear_pause))},s=function(){a++<r.length?(e.innerHTML=r.slice(0,a),setTimeout(s,n.write_speed+n.write_speed*-a/r.length*n.write_acceleration+n.write_speed*n.write_random*Math.random())):(e.className="",setTimeout(o,n.write_pause))};s()}; var l = ["your","domain","4free","user","learn","munich"];var s=window.location.search.slice(1,20);if(s){l.unshift(s);document.getElementById("redirect_pizza").style.display="block"};new e("hermes",l)})();

const xhr = new XMLHttpRequest()
const domains = []
xhr.onload = () => {
    if(xhr.status == 200){
        const lines = xhr.response.split('\n')
        lines.forEach(line => {
            const parts = line.split('"')
            if(parts[0] === '  '){
                domains.push(parts[1])
            }        
        })

        document.getElementById('count').innerText = domains.length

        let d = domains[Math.floor(Math.random() * domains.length)]
        document.getElementById('example').innerHTML = '<a href="https://' + d + '.js.org" target="_blank">' + d + '.js.org</a>'

        setInterval(() => {
            const d = domains[Math.floor(Math.random() * domains.length)]
            document.getElementById('example').innerHTML = '<a href="https://' + d + '.js.org" target="_blank">' + d + '.js.org</a>'
        }, 3000)
    }
}
xhr.open('GET', 'https://raw.githubusercontent.com/js-org/js.org/master/cnames_active.js')
xhr.send()