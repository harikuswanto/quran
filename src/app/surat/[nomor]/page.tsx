function arrNumb(num:Text){
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return new String(num).replace(/[0123456789]/g, (d:any)=>{return arabicNumbers[d]});
}

async function getData(nomor:Text){
    const res = await fetch("https://equran.id/api/v2/surat/"+nomor);
    const data = await res.json();
    return data;
}

export default async function Surat({params}:any) {
    const {data} = await getData(params.nomor);
    const listAyat = data.ayat.map((x:any)=>
        <li>
        <div className="bacaan">
            <div className="teks-arab">
                {x.teksArab} {arrNumb(x.nomorAyat)}
            </div>
            <div className="teks-latin">{x.teksLatin}</div>
            <div className="divider">Artinya</div>
            <div className="teks-terjemahan">{x.teksIndonesia}</div>
        </div>
        </li>
    );
    return <ul className="daftar-surat">{listAyat}</ul> ;
}