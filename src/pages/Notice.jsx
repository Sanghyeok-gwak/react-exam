
import { useEffect, useState } from "react";
import axios from "axios";

function Notice() {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        setNotices(response.data);
      } catch (error) {
        console.error("공지사항 조회 실패:", error);
      }
    };

    fetchNotices();
  }, []);

  const filteredNotices = notices.filter((notice) =>
    notice.title.includes(search)
  );

  return (
    <div>
      <h2>공지 사항</h2>

      <input
        className="search"
        type="text"
        placeholder="제목 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>{filteredNotices.length}건</p>

      <ul className="notice-list">
        {filteredNotices.map((notice) => (
          <li key={notice.id}>
            <span className="notice-id">
              {notice.id}.
            </span>
            {notice.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;
