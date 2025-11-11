import type { ReactNode } from "react";
import satori from "satori";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

export const getCustomFonts = async () => {
    const font = await fs.readFile(
        path.resolve("./public/fonts/InstrumentSans-Bold.woff")
    );

    return [
        {
            name: "Instrument Sans",
            data: font.buffer,
            weight: 700 as const,
            style: "normal" as const,
        }
    ]
}

export const getBackgroundImageDataUri = async () => {
    const backgroundImage = await fs.readFile(
        path.resolve("./public/img/og-background.png"),
    );
    
    const base64 = backgroundImage.toString('base64');
    return `data:image/png;base64,${base64}`;
};

export const generateOgImage = async (content: ReactNode) => {
    const svg = await satori(content, {
		width: 1200,
		height: 630,
		debug: false,
		fonts: await getCustomFonts(),
	});

	const jpeg = await sharp(Buffer.from(svg))
		.jpeg({
			quality: 60,
		})
		.toBuffer();

	return new Response(jpeg as unknown as BodyInit, {
		headers: {
			"Content-Type": "image/jpeg",
		},
	});
};