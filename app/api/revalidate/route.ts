import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = (await request.json()) as {
    slug?: { current?: string };
  };

  const slug = body.slug?.current;

  revalidateTag("portfolios", "max");
  revalidatePath("/work");

  if (slug) {
    revalidatePath(`/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    slug: slug ?? null,
  });
}
