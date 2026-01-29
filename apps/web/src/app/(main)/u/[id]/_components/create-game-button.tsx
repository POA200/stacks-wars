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
					className="h-8 rounded-full text-xs has-[>svg]:px-3.5 sm:h-12 sm:text-base sm:has-[>svg]:px-7"
				>
					<Link href="/create-game">
						<IoAdd className="text-lg sm:text-xl" /> Create Game
					</Link>
				</Button>
			)}
		</>
	);
}
