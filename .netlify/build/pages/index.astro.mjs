import { c as createComponent, m as maybeRenderHead, e as addAttribute, i as renderComponent, j as renderTransition, r as renderTemplate, f as createAstro } from '../chunks/astro/server_BADOvTkr.mjs';
import 'piccolore';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/CardPlayButton_CcxKEb-f.mjs';
/* empty css                                 */
import { p as playlists } from '../chunks/data_44rWXhHv.mjs';
import { e as escape_html } from '../chunks/_@astro-renderers_DNRs4uLE.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DNRs4uLE.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$PlayListItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300"> <div${addAttribute(`absolute right-4 bottom-20 translate-y-4
    transition-all duration-500 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10`, "class")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/astro-projects/spotify-clone/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="text-white text-sm"${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-gray-400"${addAttribute(renderTransition($$result, "b2lel7vz", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> </article>`;
}, "D:/astro-projects/spotify-clone/src/components/PlayListItemCard.astro", "self");

function Greeting($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const currentTime = new Date();
		const currentHour = currentTime.getHours();
		let greeting = "";

		if (currentHour < 12) {
			greeting = "Buenos días";
		} else if (currentHour < 18) {
			greeting = "Buenas tardes";
		} else {
			greeting = "Buenas noches";
		}

		$$renderer.push(`<h1 class="text-3xl font-bold">${escape_html(greeting)}</h1>`);
	});
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <!-- <PageHeader /> --> <div class="relative z-10 px-6 pt-10"> ${renderComponent($$result2, "Greeting", Greeting, {})} <div class="flex flex-wrap mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div> </div>  </div> ` })}`;
}, "D:/astro-projects/spotify-clone/src/pages/index.astro", void 0);

const $$file = "D:/astro-projects/spotify-clone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
