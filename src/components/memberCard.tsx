import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import MaleAvatar from "/public/assets/avatars/male.svg";
import FemaleAvatar from "/public/assets/avatars/female.svg";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"members">["data"];
  secHeading?: boolean;
}

function MemberCard({ href, frontmatter, secHeading = true }: Props) {
  const { name, bio, role, image, gender } = frontmatter;
  return (
    <li className="flex gap-7 shadow-lg  items-center py-2 px-3">
      <div className="avatar w-12">
        {image ? (
          <img src={image} alt={name} className="w-12 rounded-full" />
        ) : (
          <img
            src={gender == "male" ? MaleAvatar.src : FemaleAvatar.src}
            alt={name}
            className="w-12 rounded-full"
          />
        )}
      </div>
      <div className="text w-full">
        <a
          href={href}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? <h2>{name}</h2> : <h3>{name}</h3>}
        </a>
        <p className="text-skin-base opacity-60">{role}</p>
        {/* <img src={image} alt={name} /> */}
        <p>{bio}</p>
      </div>
    </li>
  );
}

export default MemberCard;
