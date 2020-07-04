import React from 'react'; // her componentta react ı import ederiz,

// class componentı oluşturuşması
class Navbar extends React.PureComponent {

    // render içinde yazan return değeri ekranda gösterilir
    render() {

        return (
            <div>
                Navbar içerisi buraya yazdığım şeyi kaydet ve  browser ı aç !!
            </div>
        )
    }
}

// component ı export ettik ki başka yerde import edip kullanalım
export default Navbar;