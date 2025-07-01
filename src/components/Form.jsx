import { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';

export default function Form() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError('Please enter a valid phone number in international format (e.g., +14155552671)');
      return;
    }

    setError('');
    console.log('Valid phone:', phone);
    // Optionally send to Web3Forms or your backend here
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg text-[#818080] font-bold">
          We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-8">
        <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          {/* Name Field */}
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Email Field */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          {/* Phone Number Field */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Contact Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+94771234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Description
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 block w-full rounded-md border border-black px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
              required
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#D1A249] px-3.5 py-2.5 text-sm font-semibold text-black hover:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
