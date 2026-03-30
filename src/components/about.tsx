export default function About() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-amber-700/10 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-6 py-10 shadow-sm sm:px-8 lg:px-12">
        <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-amber-900/10 px-4 py-1 text-sm font-medium text-amber-900">
              About 237Recipe App
            </p>
            <div className="space-y-3">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-amber-950 sm:text-5xl">
                A warm kitchen companion for discovering your next favorite meal.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-amber-900/80 sm:text-lg">
                237Recipe App helps food lovers explore recipes quickly, save
                the meals they love, and enjoy a simpler path from craving to
                cooking. The goal is to make recipe discovery feel inspiring,
                personal, and easy to use every day.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/70 bg-white/70 p-5 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800/75">
                Explore
              </p>
              <p className="mt-3 text-2xl font-bold text-amber-950">
                Search meals fast
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-900/75">
                Find dishes by name and browse recipe cards with images,
                categories, and origin details in one place.
              </p>
            </div>

            <div className="rounded-3xl border border-white/70 bg-amber-950 p-5 text-amber-50 shadow-lg">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200/80">
                Save
              </p>
              <p className="mt-3 text-2xl font-bold">
                Keep favorites close
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-100/80">
                Mark the recipes you love most and build a collection worth
                coming back to whenever inspiration runs low.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-amber-700/10 bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-950">What We Built</h2>
          <p className="mt-3 text-sm leading-7 text-amber-900/80">
            This app is designed to make recipe browsing feel clean and
            welcoming, with a focus on search, visual discovery, and a smooth
            mobile-friendly experience.
          </p>
        </article>

        <article className="rounded-3xl border border-amber-700/10 bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-950">Why It Matters</h2>
          <p className="mt-3 text-sm leading-7 text-amber-900/80">
            Cooking gets easier when inspiration is nearby. Whether you are
            planning dinner or just exploring flavors, the app helps turn ideas
            into meals faster.
          </p>
        </article>

        <article className="rounded-3xl border border-amber-700/10 bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-950">The Experience</h2>
          <p className="mt-3 text-sm leading-7 text-amber-900/80">
            Warm colors, simple navigation, responsive layouts, and recipe-first
            content all work together to create an inviting cooking space.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[2rem] border border-amber-700/10 bg-amber-950 px-6 py-10 text-amber-50 shadow-lg sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200/80">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Make recipe discovery feel joyful, visual, and effortless.
          </h2>
          <p className="text-sm leading-7 text-amber-100/80 sm:text-base">
            237Recipe App is here to help people spend less time searching and
            more time cooking. It is a simple way to explore meals, save ideas,
            and enjoy food inspiration from different categories and regions.
          </p>
        </div>
      </section>
    </div>
  );
}
