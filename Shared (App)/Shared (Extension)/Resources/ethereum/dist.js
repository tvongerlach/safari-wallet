var $9fea6a13c7a82ea1$export$2e2bcd8739ae039 // TODO
 = null;


var $c27f298ffb0f598d$export$2e2bcd8739ae039 // TODO
 = null;


function $4fa0c73a46e81912$var$Ethereum() {
    this.opened = false;
    this.close = ()=>{
        window.postMessage(`cancel`);
        this.overlay.style.opacity = 0;
        this.div.style.transform = `translateY(100%)`;
        this.overlay.remove();
        this.div.remove();
        this.opened = false;
    };
    const styleOverlay = {
        backgroundColor: `#000`,
        height: `100vh`,
        left: `0`,
        opacity: `0`,
        position: `fixed`,
        top: `0`,
        transition: `opacity .2`,
        width: `100vw`,
        willChange: `opacity`,
        zIndex: `9999999`
    };
    this.overlay = document.createElement(`div`);
    Object.assign(this.overlay.style, styleOverlay);
    this.overlay.onclick = ()=>this.close()
    ;
    const styleDiv = {
        alignItems: `center`,
        backgroundColor: `#fff`,
        borderRadius: `8px 8px 0 0`,
        bottom: `0`,
        columnGap: `18px`,
        display: `flex`,
        fontSize: `18px`,
        height: `45px`,
        justifyContent: `center`,
        left: `calc(calc(100vw - 368px) / 2)`,
        position: `fixed`,
        transform: `translateY(100%)`,
        transition: `transform .3s`,
        width: `368px`,
        willChange: `transform`,
        zIndex: `10000000`
    };
    this.div = document.createElement(`div`);
    this.div.innerHTML = `
        <svg width="22px" height="16px" viewBox="0 0 22 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.33333C0 0.597005 0.616262 0 1.37634 0H15.1398C15.8998 0 16.5161 0.597005 16.5161 1.33333V6.23633C17.0205 5.68262 17.7583 5.33333 18.5806 5.33333C20.1008 5.33333 21.3333 6.52734 21.3333 8C21.3333 9.47266 20.1008 10.6667 18.5806 10.6667C17.7583 10.6667 17.0205 10.3174 16.5161 9.76367V14.6667C16.5161 15.403 15.8998 16 15.1398 16H1.37634C0.616262 16 0 15.403 0 14.6667V10.2445C0 9.33333 1.61089 9.26921 2.07089 9.77083C2.57526 10.3203 3.31048 10.6667 4.12903 10.6667C5.64919 10.6667 6.88171 9.47266 6.88171 8C6.88171 6.52734 5.64919 5.33333 4.12903 5.33333C3.31048 5.33333 2.57526 5.67969 2.07089 6.22917C1.61089 6.73079 0 6.66667 0 5.75553V1.33333Z" fill="#3478f6" />
        </svg>
        <p>Open the wallet extension to connect</p>
    `;
    Object.assign(this.div.style, styleDiv);
}
$4fa0c73a46e81912$var$Ethereum.prototype.isConnected = ()=>{
};
$4fa0c73a46e81912$var$Ethereum.prototype.on = (event, callback)=>{
};
$4fa0c73a46e81912$var$Ethereum.prototype.request = (payload)=>{
    return new Promise((resolve, reject)=>{
        let method = typeof payload.method !== `undefined` ? payload.method : null;
        let params = typeof payload.params !== `undefined` ? payload.params : null;
        let from = typeof payload.from !== `undefined` ? payload.from : null;
        const showPrompt = ()=>{
            if (window.ethereum.opened === false) {
                window.ethereum.opened = true;
                document.body.insertBefore(window.ethereum.overlay, document.body.firstChild);
                document.body.insertBefore(window.ethereum.div, document.body.firstChild);
                setTimeout(()=>{
                    window.ethereum.overlay.style.opacity = 0.4;
                    window.ethereum.div.style.transform = `translateY(0)`;
                }, 1);
            }
        };
        switch(method){
            case `eth_requestAccounts`:
                window.postMessage(`eth_requestAccounts`);
                window.addEventListener(`message`, (event)=>{
                    if (typeof event.data === `cancel`) resolve([]);
                    else if (typeof event.data !== `string`) resolve(event.data);
                });
                showPrompt();
                break;
            case `eth_signTypedData_v3`:
                window.postMessage(`eth_signedTypedData_v3`);
                showPrompt();
                resolve(true);
                break;
            default:
                // * Invalid or unimplemented method
                resolve(false);
        }
    });
};
/*
window.addEventListener(`message`, (event) => {
    console.log(event.data);
});
*/ window.ethereum = new $4fa0c73a46e81912$var$Ethereum();


//# sourceMappingURL=dist.js.map
