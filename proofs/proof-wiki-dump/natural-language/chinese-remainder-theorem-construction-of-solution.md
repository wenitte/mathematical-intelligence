# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem/Construction_of_Solution

Theorem
Recall the Chinese Remainder Theorem:
Let $b_1, b_2, \ldots, b_r \in \Z$.
Let $n_1, n_2, \ldots, n_r$ be pairwise coprime positive integers.
Let $\ds N = \prod_{i \mathop = 1}^r n_i$.

Then the system of linear congruences:














\(\ds x\)

\(\equiv\)







\(\ds b_1\)

\(\ds \pmod {n_1}\)


















\(\ds x\)

\(\equiv\)







\(\ds b_2\)

\(\ds \pmod {n_2}\)


















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds x\)

\(\equiv\)







\(\ds b_r\)

\(\ds \pmod {n_r}\)







has a solution which is unique modulo $N$:

$\exists ! a \in \Z_{>0}: x \equiv a \pmod N$


Solution
The following is a systematic technique for finding $a$:
For each $i \in \set {1, 2, \ldots, r}$, calculate:

$y_i = \dfrac N {n_i}$
Using Euclid's Algorithm, calculate $z_i$ such that:

$z_i y_i = 1 \pmod {n_i}$
Then:

$x \equiv \ds \sum_{i \mathop = 1}^r b_i y_i z_i$
is a unique solution to the given system of linear congruences.


Proof
First we demonstrate that $x$ is a solution.
By construction:










\(\ds \forall j \in \set {1, 2, \ldots, r}: \, \)



\(\ds n_j\)

\(\divides\)







\(\ds y_i\)














\(\ds \leadsto \ \ \)





\(\ds y_i\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {n_i}\)








\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds b_i y_i z_i\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {n_i}\)








For each $i \in \set {1, 2, \ldots, r}$, we have:














\(\ds x\)

\(\equiv\)







\(\ds \sum_{i \mathop = 1}^r b_i y_i z_i\)

\(\ds \pmod {n_i}\)


















\(\ds \)

\(\equiv\)







\(\ds b_i y_i z_i\)

\(\ds \pmod {n_i}\)



from $(1)$: all terms vanish except for one














\(\ds \)

\(\equiv\)







\(\ds b_i\)

\(\ds \pmod {n_i}\)



as $y_i z_i \equiv 1$



Hence:

$\forall i \in \set {1, 2, \ldots, r}: x \equiv b_i \pmod {n_i}$
Thus $x$ is a solution as required.
$\Box$

Now we demonstrate uniqueness up to congruence modulo $N$:
Now suppose there exist $u, v \in \Z$ which are both solutions.
Then:










\(\ds \forall j \in \set {1, 2, \ldots, r}: \, \)



\(\ds u\)

\(\equiv\)







\(\ds b_i\)

\(\ds \pmod {n_i}\)


















\(\ds v\)

\(\equiv\)







\(\ds b_i\)

\(\ds \pmod {n_i}\)












\(\ds \leadsto \ \ \)





\(\ds u - v\)

\(\equiv\)







\(\ds b_i\)

\(\ds \pmod {n_i}\)












\(\ds \leadsto \ \ \)

\(\ds \forall j \in \set {1, 2, \ldots, r}: \, \)



\(\ds n_1\)

\(\divides\)







\(\ds u - v\)














\(\ds \leadsto \ \ \)





\(\ds \prod_{i \mathop = 1}^r n_i\)

\(\divides\)







\(\ds u - v\)





as $n_1, n_2, \ldots, n_r$ are pairwise coprime








\(\ds \leadsto \ \ \)





\(\ds u\)

\(\equiv\)







\(\ds v\)

\(\ds \pmod {\prod_{i \mathop = 1}^r n_i}\)












\(\ds \leadsto \ \ \)





\(\ds u\)

\(\equiv\)







\(\ds v\)

\(\ds \pmod N\)







$\blacksquare$





