import Link from "next/link";
import { MenuItem, MenuProps } from "./types";

export function Menu({ items }: MenuProps) {
  if (!items || items.length === 0) return null;

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {items.map((item) => (
        <li key={item.url} style={{ marginBottom: "0.5rem" }}>
          <Link href={item.url} style={{ textDecoration: "none", color: "#0070f3" }}>
            {item.text}
          </Link>
          {item.children && item.children.length > 0 && (
            <Menu items={item.children} /> 
          )}
        </li>
      ))}
    </ul>
  );
}
