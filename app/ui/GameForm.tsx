"use client";

import { useActionState } from "react";
import { useAccount } from "wagmi";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import { createBet, State } from "@/app/lib/actions";
import HeroImage from "@/app/ui/HeroImage";
import { Button } from "@/app/ui/Button";

const initialState: State = { message: null, errors: {} };

export default function GameForm() {
  const { address } = useAccount();

  const createNewBet = createBet.bind(null, address as string);
  const [state, formAction] = useActionState(createNewBet, initialState);

  if (!address) {
    return (
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <HeroImage />
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Lets play!
      </h1>
      <div className="mb-6">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Bet Amount (ETH)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          step="0.0001"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter ETH amount"
        />
        <div id="amount-error" aria-live="polite" aria-atomic="true">
          {!!state.errors?.amount &&
            state.errors.amount.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <fieldset>
        <legend className="mb-2 block text-sm font-medium">
          Select bet option
        </legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="heads"
                name="selectedOption"
                type="radio"
                value="heads"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="heads"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                Heads <ArrowUpIcon className="h-4 w-4" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="tails"
                name="selectedOption"
                type="radio"
                value="tails"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="tails"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                Tails <ArrowDownIcon className="h-4 w-4" />
              </label>
            </div>
          </div>
        </div>
        <div id="selectedOption-error" aria-live="polite" aria-atomic="true">
          {!!state.errors?.selectedOption &&
            state.errors.selectedOption.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </fieldset>
      <div className="flex gap-4 mt-4 items-center justify-center">
        <Button className="px-6" type="submit">
          Play!
        </Button>
      </div>
      <div id="process-error" aria-live="polite" aria-atomic="true">
        {!!state.errors?.process &&
          state.errors.process.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div id="process-success" aria-live="polite" aria-atomic="true">
        {!state.errors && !!state.message && (
          <p className="mt-2 text-sm text-green-500">{state.message}</p>
        )}
      </div>
    </form>
  );
}
