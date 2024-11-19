<div class="flex flex-col w-full h-full">
    <div class="flex flex-col space-y-4 w-full">
        <h3 class="text-2xl font-medium">Credits</h3>
        <p>Available credits: <strong>100</strong></p>
        <p>
            Generating a CV and cover letter costs 1 credit. Credits can be bought
            individually or if you are submitting lots of job applications you can
            buy unlimited access for 6 months.
        </p>
        <div class="flex space-x-4">
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Buy individual credits</h2>
                    <p>Perfect if you are only applying to a few jobs.</p>
                    <div class="card-actions justify-end">
                        <form action="/api/stripe" method="POST">
                            <input type="hidden" name="priceId" value="price_1QMZkN09LKHGHspG4qYCVlWn" />
                            <button type="submit" id="buy-credits-button" class="btn btn-primary">Buy now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Buy 6 months unlimited access</h2>
                    <p>Perfect if you are on the hunt for a new job. Any individual credit will be waiting for you once your unlimitied access ends.</p>
                    <div class="card-actions justify-end">
                        <form action="/api/stripe" method="POST">
                            <input type="hidden" name="priceId" value="price_1QMyGT09LKHGHspGUPs3shgg" />
                            <button type="submit" id="buy-months-button" class="btn btn-primary">Buy now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>