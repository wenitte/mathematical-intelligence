# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/81_-_Pussy_and_the_Mouse/Solution



Modern Puzzles by Henry Ernest Dudeney: $81$
Pussy and the Mouse
"There's a mouse in one of these barrels," said the dog.
"Which barrel?" asked the cat.
"Why, the five hundredth barrel."
"What do you mean, the five hundredth? There are only five barrels in all."
"It's the five hundredth if you count backwards and forwards this way."
And the dog explained that if you count like this:
 1   2   3   4   5
 9   8   7   6
    10  11  12  13

so that the seventh barrel would be the one marked $3$ and the twelfth barrel the one numbered $4$.
The story goes on laboriously to its inevitable conclusion that the mouse escapes before the cat has finished counting, until:

Now, which was the five hundredth barrel?
Can you find a quick way of arriving at the answer without making the actual count?


Solution
Barrel no. $4$.


Proof
Let $n$ be the count.
Let $m$ be the number of the barrel the mouse is in.

By the method of counting, all we are concerned about here is the value of $n \pmod 8$.
If $n \pmod 8 = 0$, then $m = 2$.
If $1 \le n \pmod 8 \le 5$, then $m = n \pmod 8$.
Otherwise $m = 10 - n \pmod 8$.
Here $n = 500$, and so $n \pmod 8 = 4$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $81$. -- Pussy and the Mouse
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $164$. Pussy and the Mouse




