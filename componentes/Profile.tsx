import Image from "next/image";

export default function Profile() {
  return (
    <div className="parte-3">
      <Image
        src="/image-avatar.webp"
        alt="Avatar"
        width={64}
        height={65}
      />
      <p>Greg Hooper</p>
    </div>
  );
}
