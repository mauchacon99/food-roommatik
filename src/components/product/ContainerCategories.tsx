import type { ReactNode } from 'react';

export default function ContainerCategories({ children }: { children: ReactNode }) {
	return (
		<div className="flex w-full justify-center items-center space-x-1 py-3 p-2">
			{children}
		</div>
	);
}
