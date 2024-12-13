# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/5_-_Doubling_the_Value/Solution



Modern Puzzles by Henry Ernest Dudeney: $5$
Doubling the Value
It is a curious fact that if you double $\pounds 6 \ 13 \shillings$, you get $\pounds 13 \ 6 \shillings$, which is merely changing the shillings and the pounds.
Can you find another sum of money that has the same peculiarity that, when multiplied by any number you may choose to select, will merely exchange the shillings and the pounds?
There is only one other multiplier and sum of money, besides the case shown, that will work.
What is it?


Solution
$\pounds 2 \ 17 \shillings$
which, when multiplied by $6$, becomes:

$\pounds 17 \ 2 \shillings$


Proof
It is assumed that when Dudeney says number he means natural number

Let $k$ denote the shilling value of the original sum of money.
Recall there are $20$ shillings to the pound.
Let $s$ and pounds $p$ denote the number of shillings and pounds that $k$ consists of such that $s < 20$.
That is:

$k = \pounds p \ s \shillings$
where:

$0 \le s < 20$
and of course trivially $s \ne 0$.

Let $n$ be a number which switches the shillings and pounds when you multiply $k$ by it.

Hence we want to find values for $n$ that will result in:

$k = 20 p + s$
and:

$n k = 20 s + p$
where both $p < 20$ and $s < 20$.

We have:














\(\ds k\)

\(=\)







\(\ds s + 20 p\)





as there are $20$ shillings to the pound








\(\ds \leadsto \ \ \)





\(\ds n k\)

\(=\)







\(\ds p + 20 s\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds n \paren {s + 20 p}\)

\(=\)







\(\ds p + 20 s\)





substituting for $k$








\(\ds \leadsto \ \ \)





\(\ds \paren {20 - n} s\)

\(=\)







\(\ds \paren {20 n - 1} p\)









It remains to substitute values for $n$ and see where that gets us.
Clearly $n < 20$ in order for $\paren {20 - n} s > 0$.

$n = 2$:














\(\ds \paren {20 - 2} s\)

\(=\)







\(\ds \paren {20 \times 2 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 18 s\)

\(=\)







\(\ds 39 p\)














\(\ds \leadsto \ \ \)





\(\ds 6 s\)

\(=\)







\(\ds 13 p\)





dividing by $3$



which is the answer we have been provided.

$n = 3$:














\(\ds \paren {20 - 3} s\)

\(=\)







\(\ds \paren {20 \times 3 - 1} p\)




















\(\ds 17 s\)

\(=\)







\(\ds 59 p\)





not a valid solution as $17$ and $59$ are coprime




$n = 4$:














\(\ds \paren {20 - 4} s\)

\(=\)







\(\ds \paren {20 \times 4 - 1} p\)




















\(\ds 16 s\)

\(=\)







\(\ds 79 p\)





not a valid solution as $16$ and $79$ are coprime




$n = 5$:














\(\ds \paren {20 - 5} s\)

\(=\)







\(\ds \paren {20 \times 5 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 15 s\)

\(=\)







\(\ds 99 p\)














\(\ds \leadsto \ \ \)





\(\ds 5 s\)

\(=\)







\(\ds 33 p\)





not a valid solution as $5$ and $33$ are coprime




$n = 6$:














\(\ds \paren {20 - 6} s\)

\(=\)







\(\ds \paren {20 \times 6 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 14 s\)

\(=\)







\(\ds 119 p\)














\(\ds \leadsto \ \ \)





\(\ds 2 s\)

\(=\)







\(\ds 17 p\)










Hence we have that:

$k = \pounds 2 \ 17 \shillings$
and we check that:














\(\ds 6 \times \paren {\pounds 2 \ 17 \shillings}\)

\(=\)







\(\ds \pounds \paren {6 \times 2} + \paren {6 \times 17} \shillings\)




















\(\ds \)

\(=\)







\(\ds \pounds 12 + 102 \shillings\)




















\(\ds \)

\(=\)







\(\ds \pounds 12 + \paren {\pounds 5 \ 2 \shillings}\)




















\(\ds \)

\(=\)







\(\ds \pounds 17 \ 2 \shillings\)










It remains to be shown that this is the only solution.

$n = 7$:














\(\ds \paren {20 - 7} s\)

\(=\)







\(\ds \paren {20 \times 7 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 13 s\)

\(=\)







\(\ds 139 p\)





not a valid solution as $13$ and $139$ are coprime




$n = 8$:














\(\ds \paren {20 - 8} s\)

\(=\)







\(\ds \paren {20 \times 8 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 12 s\)

\(=\)







\(\ds 159 p\)














\(\ds \leadsto \ \ \)





\(\ds 4 s\)

\(=\)







\(\ds 53 p\)





not a valid solution as $4$ and $53$ are coprime




$n = 9$:














\(\ds \paren {20 - 9} s\)

\(=\)







\(\ds \paren {20 \times 9 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 11 s\)

\(=\)







\(\ds 179 p\)





not a valid solution as $11$ and $179$ are coprime




$n = 10$:














\(\ds \paren {20 - 10} s\)

\(=\)







\(\ds \paren {20 \times 10 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 10 s\)

\(=\)







\(\ds 199 p\)





not a valid solution as $10$ and $199$ are coprime




$n = 10$:














\(\ds \paren {20 - 11} s\)

\(=\)







\(\ds \paren {20 \times 11 - 1} p\)














\(\ds \leadsto \ \ \)





\(\ds 9 s\)

\(=\)







\(\ds 219 p\)





not a valid solution as $9$ and $219$ are coprime




and at this stage $\dfrac p s > 20$ and so there can be no solutions such that $p < 20$.
That exhausts all possibilities for $n$.
$\blacksquare$

It is interesting to see what happens when $n = 1$ is entered:














\(\ds \paren {20 - 1} s\)

\(=\)







\(\ds \paren {20 \times 1 - 1} p\)




















\(\ds 19 s\)

\(=\)







\(\ds 19 p\)









which is of course obvious.


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $5$. -- Doubling the Value




