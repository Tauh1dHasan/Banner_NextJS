"use client";

import { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <main className="wrapper">
        <section className="blog-details pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-5 mb-md-0 ps-md-0">
                <div className="blog-details-inner">
                  <div className="post-content">
                    <h2>List of Users</h2>

                    <ul>
                      {users.map((user) => (
                        <li key={user.id}>{user.name_bn}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
