export default function Avatar({ user, size = 40, square = false }) {
  const shape = square ? "rounded-2xl" : "rounded-full";
  const style = { width: size, height: size };

  if (user?.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={user.image}
        alt=""
        style={style}
        referrerPolicy="no-referrer"
        className={`shrink-0 object-cover ${shape}`}
      />
    );
  }

  // ছবি না থাকলে নামের প্রথম অক্ষর
  const initial = (user?.name || user?.email || "?").trim().charAt(0).toUpperCase();
  return (
    <span
      aria-hidden
      style={{ ...style, fontSize: size * 0.4 }}
      className={`grid shrink-0 place-items-center bg-brand-soft font-bold text-brand ${shape}`}
    >
      {initial}
    </span>
  );
}
