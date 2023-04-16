import Link from "next/link";

function arrNumb(num:Text){
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return new String(num).replace(/[0123456789]/g, (d:any)=>{return arabicNumbers[d]});
}

async function getData(){
    const res = await fetch("https://equran.id/api/v2/surat");
    const data = await res.json();
    return data;
}

export default async function ListSurat() {
    const {data} = await getData();
    const listSurat = data.map((x:any)=>
        <li key={x.nomor}>
            <Link href={"/surat/"+x.nomor}>
                <div className="nomor-surat">{arrNumb(x.nomor)}</div>
                <div className="detail-surat">
                    <div className="nama-indo"><strong>{x.namaLatin}</strong> ({x.arti}) </div>
                    <div className="info-surat">
                        {x.tempatTurun==="Mekah"?"Makkiyah":"Madaniyah"} • {x.jumlahAyat} ayat
                    </div>
                </div>
                <div className="nama-arab">{x.nama}</div>
            </Link>
        </li>
        )
    return <ul className="list-surat">{listSurat}</ul>
}