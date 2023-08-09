
namespace FeedBlit.Cover
{
	/** */
	export async function coverReelsFeedMetadata()
	{
		debugger;
		const metaData = await FeedBlit.getFeedMetaData("https://htmlreels.b-cdn.net/trees/index.txt");
	}
	
	/** */
	export function coverReelsOmniview()
	{
		const hot = setupCover();
		const feed = Cover.generateFeedServer();
		const omniviewElement = FeedBlit.getEmbeddedOmniviewFromFeed(feed);
		
		const style: Hot.Style = {
			textAlign: "center",
			fontSize: "10vw",
			fontWeight: 900,
			lineHeight: "100vh",
		};
		
		document.body.append(
			hot.section(
				{ backgroundColor: "crimson", ...style },
				hot.text("Poster"),
			),
			hot.section(
				{ backgroundColor: "orange", ...style },
				hot.text("Second section."),
			),
			omniviewElement
		);
	}
}
