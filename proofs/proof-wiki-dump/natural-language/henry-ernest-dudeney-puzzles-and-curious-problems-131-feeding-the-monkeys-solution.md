# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/131_-_Feeding_the_Monkeys/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $131$
Feeding the Monkeys
A man went to the zoo with a bag of nuts to feed the monkeys.
He found that if he divided them equally amongst the $11$ monkeys in the first cage he would have $1$ nut over;
if he divided them equally amongst the $13$ monkeys in the second cage there would be $8$ left;
if he divided them amongst the $17$ monkeys in the last cage $3$ nuts would remain.
He also found that if he divided them equally amongst the $41$ monkeys in all $3$ cages,
or amongst the monkeys in any $2$ cages,
there would always be some left over.
What is the smallest number of nuts that the man could have in his bag?


Solution
$2179$ nuts.


Proof
Let $n$ be the number of nuts he had in his bag.
We have the following congruences:




\(\text {(1)}: \quad\)









\(\ds n\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {11}\)



if he divided them equally amongst the $11$ monkeys in the first cage he would have $1$ nut over;




\(\text {(2)}: \quad\)









\(\ds n\)

\(\equiv\)







\(\ds 8\)

\(\ds \pmod {13}\)



if he divided them equally amongst the $13$ monkeys in the second cage there would be $8$ left;




\(\text {(3)}: \quad\)









\(\ds n\)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod {17}\)



if he divided them amongst the $17$ monkeys in the last cage $3$ nuts would remain.




\(\text {(4)}: \quad\)









\(\ds n\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod {41}\)



He also found that if he divided them equally amongst the $41$ monkeys in all $3$ cages,




\(\text {(5)}: \quad\)









\(\ds n\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod {24}\)



or amongst the monkeys in any $2$ cages,




\(\text {(6)}: \quad\)









\(\ds n\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod {28}\)



there would always be some left over.




\(\text {(7)}: \quad\)









\(\ds n\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod {30}\)







From $(1)$, we have that:

$n \in \set {1, 12, 23, 34, 45, 56, \ldots}$
From $(2)$, we have that:

$n \in \set {8, 21, 34, 47, 60, 73, \ldots}$
Thus:

$n \equiv 34 \pmod {11 \times 13}$
that is:

$n \equiv 34 \pmod {143}$

By definition of modulo arithmetic, there is some integer $k$ such that:














\(\ds n\)

\(=\)







\(\ds 34 + 143 k\)




















\(\ds \)

\(\equiv\)







\(\ds 0 + 7 k\)

\(\ds \pmod {17}\)







so we wish to find $k$ such that:

$n \equiv 7 k \equiv 3 \pmod {17}$
Since:

$7 \times 5 = 35 \equiv 1 \pmod {17}$
we have:














\(\ds 5 \times 7 k\)

\(\equiv\)







\(\ds 5 \times 3\)

\(\ds \pmod {17}\)












\(\ds \leadsto \ \ \)





\(\ds k\)

\(\equiv\)







\(\ds 15\)

\(\ds \pmod {17}\)







so the smallest positive integer $k$ that satisfies the equation is $15$.
In other words:

$n \equiv 34 + 143 \times 15 \equiv 2179 \pmod {11 \times 13 \times 17}$
We have:

$11 \times 13 \times 17 = 2431 > 2179$
so there is no smaller positive integer solution to the congruence above.

We also see that $2179$ satisfies all other conditions in the puzzle:

$2179 = 41 \times 53 + 6$
$2179$ is odd, so it cannot be a multiple of $24, 28$ or $30$
and hence $2179$ is the smallest possible solution to the puzzle.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $131$. -- Feeding the Monkeys
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $204$. Feeding the Monkeys




