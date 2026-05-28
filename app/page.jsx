<form
  action="https://formspree.io/f/mojbrdav"
  method="POST"
  className="grid gap-5 bg-white p-8 text-[#193318]"
>
  <div className="grid gap-5 md:grid-cols-2">
    <label className="grid gap-2 text-sm font-bold">
      First name
      <input
        name="firstName"
        required
        className="border border-neutral-300 px-4 py-3"
      />
    </label>

    <label className="grid gap-2 text-sm font-bold">
      Last name
      <input
        name="lastName"
        required
        className="border border-neutral-300 px-4 py-3"
      />
    </label>
  </div>

  <label className="grid gap-2 text-sm font-bold">
    Email
    <input
      name="email"
      type="email"
      required
      className="border border-neutral-300 px-4 py-3"
    />
  </label>

  <label className="grid gap-2 text-sm font-bold">
    Phone
    <input
      name="phone"
      className="border border-neutral-300 px-4 py-3"
    />
  </label>

  <label className="grid gap-2 text-sm font-bold">
    Company Name
    <input
      name="company"
      className="border border-neutral-300 px-4 py-3"
    />
  </label>

  <label className="grid gap-2 text-sm font-bold">
    How can we help you?
    <textarea
      name="message"
      rows={5}
      required
      className="border border-neutral-300 px-4 py-3"
    />
  </label>

  <button
    type="submit"
    className="bg-[#2f7d1e] px-6 py-4 font-black uppercase tracking-wider text-white"
  >
    Start the Conversation
  </button>
</form>
