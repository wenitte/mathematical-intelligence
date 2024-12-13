# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/219_-_A_Calendar_Puzzle/Solution

Modern Puzzles by Henry Ernest Dudeney: $219$
A Calendar Puzzle
I have stated in my book, Amusements in Mathematics, that, under our present calendar rules,
the first day of a century cannot fall on a Sunday or a Wednesday or a Friday.
I am frequently asked the reason why.
Try to explain the mystery in as simple a way as possible.
Note that $1$st January $1901$ was the first day of the $20$th century, not $1900$.


Solution
The Gregorian calendar is such that the pattern of leap years repeats every $400$ years.
So $400$ years contains:

$400 \times 365$ days
plus:

an extra $4 \times 25$ days for the leap years in each century
minus:

$3$ days for the years divisible by $100$ and not $400$ which are not actually in fact leap years.
Thus there are $400 \times 365 + 4 \times 25 - 3 = 146 \, 097$ days in $400$ years.
We have that $146 \, 097 = 7 \times 20 \, 871$.
Hence the first day of the century in a given block of $400$ years is always the same.
We can look up the day on which $1$st January $2001$ falls, and see it is Monday.
Now, between $2001$ and $2100$, $2101$ and $2200$, and $2201$ and $2300$ there are $100 \times 365 + 24$ days, that is, $36 \, 524$ days.
This is congruent to $5$ modulo $7$.
So subsequent first days of the century after $2001$ are:

$2101$: Saturday ($5$ days after Monday)
$2201$: Thursday ($5$ days after Saturday)
$2301$: Tuesday ($5$ days after Thursday)
and then, as we have seen, $2401$ starts on the same day as $2001$.
So the centuries begin on Monday, Saturday, Thursday, Tuesday, Monday, ... and so on.
That is, the century can never begin on Wednesday, Friday or Sunday.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $219$. -- A Calendar Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $516$. A Calendar Puzzle




