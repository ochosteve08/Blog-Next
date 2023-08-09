import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

 

  const content = (
    <section>
      <Link href="/">Back to Home Page</Link>
      <br />
      {users.map((user) => {
        return (
          <>
            <Link href={`/users/${user.id}`}>
              <p key={user.id}>{user.name}</p>
            </Link>
          </>
        );
      })}
    </section>
  );

  return <div className="text-center">{content}</div>;
};

export default UsersPage;
