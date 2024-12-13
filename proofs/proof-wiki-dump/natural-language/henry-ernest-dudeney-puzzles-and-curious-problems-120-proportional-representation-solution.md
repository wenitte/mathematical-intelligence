# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/120_-_Proportional_Representation/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $120$
Proportional Representation
In a local election, there were ten names of candidates on a proportional representation ballot paper.
Voters should place No. $1$ against the candidate of their first choice.
They might also place No. $2$ against the candidate of their second choice,
and so on until all the ten candidates have numbers placed against their names.
The voters must mark their first choice, and any others may be marked or not as they wish.
How many different ways might the ballot paper be marked by the voter?


Solutions
$9 \, 684 \, 100$


Proof
Let $n$ denoted the number of different ways to vote.
Let the voter vote for $k$ candidates, where $1 \le k \le 10$.
Each way of making $k$ votes is a $k$-permutation on $10$ objects, denoted ${}^{10} P_k$.
Thus:














\(\ds n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{10} {}^{10} P_k\)




















\(\ds \)

\(=\)







\(\ds 10! \sum_{k \mathop = 0}^9 \dfrac 1 {k!}\)





Count of All Permutations on $n$ Objects














\(\ds \)

\(=\)







\(\ds 10! \paren {\dfrac 1 {9!} + \dfrac 1 {8!} + \dfrac 1 {7!} + \dfrac 1 {6!} + \dfrac 1 {5!} + \dfrac 1 {4!} + \dfrac 1 {3!} + \dfrac 1 {2!} + \dfrac 1 {1!} + \dfrac 1 {0!} }\)




















\(\ds \)

\(=\)







\(\ds 3628800 \paren {\dfrac 1 {362880} + \dfrac 1 {40320} + \dfrac 1 {5040} + \dfrac 1 {720} + \dfrac 1 {120} + \dfrac 1 {24} + \dfrac 1 6 + \dfrac 1 2 + \dfrac 1 1 + \dfrac 1 1}\)




















\(\ds \)

\(=\)







\(\ds 10 + 90 + 720 + 5040 + 30240 + 151200 + 604800 + 1814400 + 3628800 + 3628800\)




















\(\ds \)

\(=\)







\(\ds 9 \, 684 \, 100\)









$\blacksquare$


Also see
Count of All Permutations on $n$ Objects


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $120$. -- Proportional Representation
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $194$. Proportional Representation




