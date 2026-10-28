
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    console.log("페이지 로딩...");
  }, []);

  return (
    <div>
      <h2>페이지</h2>
    </div>
  );
}

export default Page;
