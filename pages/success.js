function SuccessPage() {
    return (
        <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col min-h-full flex flex-col relative">

            <main
                className="relative z-10 flex-auto flex items-center justify-center text-center text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl sm:text-4.5xl text-gray-800 font-extrabold mb-4">Заказ отправлен, спасибо!</h1>
                    <p className="mb-8 max-w-lg mx-auto">Ожидайте, с Вами скоро свяжутся.</p>
                    <a href="/"
                       className="inline-flex justify-center w-full max-w-[8rem] bg-gray-700 text-gray-200 rounded-md text-sm font-semibold py-3 px-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Главная</a>
                </div>
            </main>

        </div>
    )
}

export default SuccessPage
