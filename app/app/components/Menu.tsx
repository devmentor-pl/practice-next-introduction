import Link from "next/link";

type MenuItem = {
  text: string;
  url: string;
  children?: MenuItem[];
};

type MenuProps = {
  items: MenuItem[];
};

export default function Menu({ items }: MenuProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.url}>
          <Link href={item.url}>{item.text}</Link>
          {item.children && item.children.length > 0 && (
            <Menu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}
