import getWikiResult from "@/lib/getWikiResult";
import type { Metadata } from "next";

type Props = {
  params: {
    searchTerm: string;
  };
};

export const generateMetadata = async ({
  params: { searchTerm },
}: Props): Promise<Metadata> => {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", "");
  if (data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
  return {
    title: `${displayTerm}`,
    description: `search results of ${displayTerm}`,
  };
};

const SearchResult = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-400 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <p key={result.pageid}>{result.title}</p>;
        })
      ) : (
        <p>{`${searchTerm} Not Found`}</p>
      )}
    </main>
  );
  console.log(results);
  console.log(content);

  return content;
};

export default SearchResult;
