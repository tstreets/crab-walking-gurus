"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Link href="/topics/history">
            <img src="https://picsum.photos/200/300" />
            <h4>History</h4>
          </Link>
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
          <h4>Techniques</h4>
        </div>
      </section>
    </main>
  );
}
