# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/92_-_A_Cow%27s_Progeny/Solution



Modern Puzzles by Henry Ernest Dudeney: $92$
A Cow's Progeny
"Supposing," said my friend Farmer Hodge, "that cow of mine to have a she-calf at the age of two years,
and supposing she goes on having the like every year,
and supposing every one of her young to have a she-calf at the age of two years,
and afterwards every year likewise, and so on.
Now, how many do you suppose would spring from that cow and all her descendants in the space of twenty-five years?"


Solution
$121 \, 392$.


Proof
After $1$ year there will be $1$ cow.
After $2$ years there will be $2$ cows: the original cow and her first calf.
After $3$ years there will be $3$ cows: the original cow, her first calf and her second calf.
After $4$ years there will be $5$ cows: the original cow, her first calf and her second calf, her third calf and the first calf of her first calf.
This is the Rabbit Problem, but using a cow instead of a pair of rabbits.
By inspection, the total number of cattle after $n$ years is the $n + 1$th Fibonacci number $F_{n + 1}$.
So the total number of cattle after that time is $F_{26}$.
This can be looked up on, for example On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008): A000045, which gives $121 \, 393$.
Because we are asked to count only the cow's descendants, we remove the original cow from the count, leaving $121 \, 392$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $92$. -- A Cow's Progeny
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $175$. A Cow's Progeny




