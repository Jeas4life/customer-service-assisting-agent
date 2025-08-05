import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            AI Customer Assistant
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative"> for your website</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Enhance your customer service with an intelligent AI assistant that provides 
            instant support, answers questions, and helps convert visitors into customers.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              href="/admin"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            >
              Get Started
            </Link>
            <Link
              href="/widget"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white p-6 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Intelligent Responses
                </h3>
                <p className="text-gray-600">
                  Powered by advanced AI to understand context and provide helpful, 
                  accurate responses to customer inquiries.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white p-6 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Instant Support
                </h3>
                <p className="text-gray-600">
                  Provide 24/7 customer support with instant responses, 
                  reducing wait times and improving satisfaction.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white p-6 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Integration
                </h3>
                <p className="text-gray-600">
                  Simple setup with customizable appearance to match your brand. 
                  Embed with just a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              How it works
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Three simple steps to get started
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    1
                  </div>
                  Configure your assistant
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Set up your AI assistant with custom prompts, styling, and behavior 
                    that matches your brand and business needs.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    2
                  </div>
                  Embed on your website
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Copy and paste a simple script tag into your website. 
                    The chat widget will appear automatically.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    3
                  </div>
                  Monitor and improve
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Track conversations, analyze performance, and continuously 
                    improve your assistant's responses.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
