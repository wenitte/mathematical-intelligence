# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/176_-_Counting_the_Loss/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $176$
Counting the Loss
An officer explained that the force to which he belonged originally consisted of $1000$ men, but that it lost heavily in an engagement,
and the survivors surrendered and were marched down to a concentration camp.
On the first day's march one-sixth of the survivors escaped;
on the second day one-eighth of the remainder escaped, and one man died;
on the third day's march one-fourth of the remainder escaped.
Arrived in camp, the rest were set to work in four equal gangs.
How many had been killed in the engagement?


Solution
There were $472$ soldiers who were killed in the engagement.


Proof
Let $n$ be the number of survivors of the engagement.
Let $n_1$, $n_2$ and $n_3$ be the numbers left in the captured group at the end of days $1$ to $3$ respectively.
We have:














\(\ds n_1\)

\(=\)







\(\ds n - \dfrac n 6 = \dfrac {5 n} 6\)





On the first day's march one-sixth of the survivors escaped;














\(\ds n_2\)

\(=\)







\(\ds n_1 - \dfrac {n_1} 8 - 1 = \dfrac {7 n_1} 8 - 1\)





on the second day one-eighth of the remainder escaped, and one man died;














\(\ds n_3\)

\(=\)







\(\ds n_2 - \dfrac {n_2} 4 = \dfrac {3 n_2} 4\)





on the third day's march one-fourth of the remainder escaped.










\(\ds \exists k \in \Z_{>0}: \, \)



\(\ds n_3\)

\(=\)







\(\ds 4 k\)





Arrived in camp, the rest were set to work in four equal gangs.








\(\ds \leadsto \ \ \)





\(\ds n_2\)

\(=\)







\(\ds \dfrac {4 n_3} 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 \paren {4 k} } 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {16 k} 3\)














\(\ds \leadsto \ \ \)





\(\ds n_1\)

\(=\)







\(\ds \dfrac {8 \paren {n_2 + 1} } 7\)




















\(\ds \)

\(=\)







\(\ds \dfrac 8 7 \paren {\dfrac {16 k} 3 + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {8 \paren {16 k + 3} } {21}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {128 k + 24} {21}\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds \dfrac {6 n_1} 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 5 \paren {\dfrac {128 k + 24} {21} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {768 k + 144} {105}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {256 k + 48} {35}\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(=\)







\(\ds \dfrac {35 n - 48} {256}\)









This leads us to the linear Diophantine equation:

$35 n - 256 k = 48$
From Example of Linear Diophantine Equation: $35 x - 256 y = 48$:

$n = 16 + 256 t, k = 2 + 35 t$
for $t \in \Z$.
We now need to select a value of $t$ such that:

$1 \le n \le 1000$
and:

$6 \divides n$
in order to fit the conditions of the question.
By inspection of the cases where $t = 0, 1, 2, 3, 4$ we have that the only solution is for $t = 2$.
Thus:

$n = 16 + 256 \times 2 = 528$
That is, there were $528$ survivors of the initial combat.
Hence $1000 - 528 = 472$ men died in battle.
The result follows.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $176$. -- Counting the Loss
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $240$. Counting the Loss




