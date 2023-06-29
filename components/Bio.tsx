export default function Bio() {
  return (
    <div className="flex flex-col gap-2 justify-center items-centerm mt-5">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center w-full gap-2 mb-5">
          <code className="uppercase font-bold">bio</code>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2003</h3>
          <p>Born in Roxas, Philippines.</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2020</h3>
          <p>Graduated Highschool at Iloilo King of Glory Christian Academy</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2023</h3>
          <p>Pursuing a degree at Northern Iloilo State University</p>
        </div>
      </div>
    </div>
  );
}
