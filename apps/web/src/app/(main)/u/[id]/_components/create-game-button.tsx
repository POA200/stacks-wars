"use client";
import { Button } from "@/components/ui/button";
import type { User } from "@/lib/definitions";
import { useUser } from "@/lib/stores/user";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";

export default function CreateGameButton({
	userProfile,
}: {
	userProfile: User;
}) {
	const user = useUser();
	return (
		<>
			{user?.id === userProfile.id && (
				<Button
					asChild
					className="rounded-full text-xs sm:text-base h-8 sm:h-12 has-[>svg]:px-3.5 sm:has-[>svg]:px-7"
				>
					<Link href="/create-game">
						<IoAdd className="text-lg sm:text-xl" /> Create Game
					</Link>
				</Button>
			)}
		</>
	);
}
