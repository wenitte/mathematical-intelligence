# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/7_-_Selling_Eggs/Solution



Modern Puzzles by Henry Ernest Dudeney: $7$
Selling Eggs
A woman took a certain number of eggs to market and sold some of them.
The next day, through the industry of her hens, the number left over had been doubled, and she sold the same number as the previous day.
On the third day the new remainder was trebled, and she sold the same number as before.
On the fourth day the remainder was quadrupled, and her sales the same as before.
On the fifth day what had been left over were quintupled, yet she sold exactly the same as on all the previous occasions, and so disposed of her entire stock.
What is the smallest number of eggs she could have taken to market the first day, and how many did she sell daily?


Solution
She came to market on the first day with $103$ eggs, and sold $60$ every day.


Proof
Let $n$ be the original number of eggs taken to market.
Let $d$ be the number of eggs sold each day.
Let $r_1$, $r_2$, $r_3$ and $r_4$ be the remaining eggs after days $1$, $2$, $3$ and $4$.

On the first day, she sold $d = n - r_1$ eggs.
On the second day, she sold $d = 2 r_1 - r_2$ eggs.
On the third day, she sold $d = 3 r_2 - r_3$ eggs.
On the fourth day, she sold $d = 4 r_3 - r_4$ eggs.
On the fifth day, she sold $d = 5 r_4$ eggs.

So:














\(\ds d\)

\(=\)







\(\ds 5 r_4\)




















\(\ds \)

\(=\)







\(\ds 4 r_3 - r_4\)














\(\ds \leadsto \ \ \)





\(\ds 4 r_3\)

\(=\)







\(\ds 6 r_4\)














\(\ds \leadsto \ \ \)





\(\ds r_4\)

\(=\)







\(\ds \dfrac {2 r_3} 3\)




















\(\ds d\)

\(=\)







\(\ds 3 r_2 - r_3\)




















\(\ds \)

\(=\)







\(\ds 4 r_3 - r_4\)




















\(\ds \)

\(=\)







\(\ds 4 r_3 - \dfrac {2 r_3} 3\)














\(\ds \leadsto \ \ \)





\(\ds 3 r_2\)

\(=\)







\(\ds \dfrac {13 r_3} 3\)














\(\ds \leadsto \ \ \)





\(\ds r_3\)

\(=\)







\(\ds \dfrac {9 r_2} {13}\)




















\(\ds d\)

\(=\)







\(\ds 2 r_1 - r_2\)




















\(\ds \)

\(=\)







\(\ds 3 r_2 - r_3\)




















\(\ds \)

\(=\)







\(\ds 3 r_2 - \dfrac {9 r_2} {13}\)














\(\ds \leadsto \ \ \)





\(\ds 2 r_1\)

\(=\)







\(\ds \dfrac {43 r_2} {13}\)














\(\ds \leadsto \ \ \)





\(\ds r_2\)

\(=\)







\(\ds \dfrac {26 r_1} {43}\)




















\(\ds d\)

\(=\)







\(\ds n - r_1\)




















\(\ds \)

\(=\)







\(\ds 2 r_1 - r_2\)




















\(\ds \)

\(=\)







\(\ds 2 r_1 - \dfrac {26 r_1} {43}\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds \dfrac {103 r_1} {43}\)














\(\ds \leadsto \ \ \)





\(\ds 43 n\)

\(=\)







\(\ds 103 r_1\)










The smallest $n$ and $r_1$ that fit this equation are:














\(\ds n\)

\(=\)







\(\ds 103\)




















\(\ds r_1\)

\(=\)







\(\ds 43\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(=\)







\(\ds 103 - 43\)




















\(\ds \)

\(=\)







\(\ds 60\)










So:

She came to market on the first day with $103$ eggs.
She sold $60$ eggs per day.
At the end of the first day she had $43$ eggs remaining.
On the second day she started with $2 \times 43 = 86$ eggs, sold $60$ and had $26$ remaining.
On the third day she started with $3 \times 26 = 78$ eggs, sold $60$ and had $18$ remaining.
On the fourth day she started with $4 \times 18 = 72$ eggs, sold $60$ and had $12$ remaining.
On the fifth day she started with $5 \times 12 = 60$ eggs and sold them all.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $7$. -- Selling Eggs
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $163$. Selling Eggs




