# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem

  This article was Featured Proof between 17 April 2009 and 25 April 2009.




Theorem
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


Corollary
Let $n_1, n_2, \ldots, n_r$ be pairwise coprime positive integers.
Let $\ds N = \prod_{i \mathop = 1}^r n_i$.
For an integer $k$, let $\Z / k \Z$ denote the ring of integers modulo $k$.
Then we have a ring isomorphism:

$\Z / N \Z \simeq \Z / n_1 \Z \times \cdots \times \Z / n_r \Z$


General Result
Let $n_1, n_2, \ldots, n_k$ be positive integers.
Let $b_1, b_2, \ldots, b_k$ be integers such that:

$\forall i \ne j: \gcd \set {n_i, n_j} \divides b_i - b_j$

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







\(\ds b_k\)

\(\ds \pmod {n_k}\)







has a simultaneous solution which is unique modulo $\lcm \set {n_1, \ldots, n_k}$.


Proof
Existence
Let $N_k = \dfrac N {n_k}$ for $k = 1, 2, \ldots, r$.

From Integer Coprime to all Factors is Coprime to Whole:

$\forall k \in \set {1, 2, \ldots, r}: \gcd \set {N_k, n_k} = \gcd \set {n_1 n_2 \cdots n_{k - 1} n_{k + 1} \cdots n_r, n_k} = 1$
From Solution of Linear Congruence, the linear congruence:

$N_k x \equiv b_k \pmod {n_k}$
has a unique solution modulo $n_k$.
Let this solution be $x_k$.
That is:

$(1): \quad N_k x_k \equiv b_k \pmod {n_k}$
for $k = 1, 2, \ldots, r$.

Let $\ds x_0 = \sum_{i \mathop = 1}^r N_i x_i$.
For each $k, i \in \set {1, 2, 3, \ldots, r}$ such that $i \ne k$:














\(\ds n_k\)

\(\divides\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds n_k\)

\(\divides\)







\(\ds n_i N_i\)














\(\ds \leadsto \ \ \)





\(\ds n_k\)

\(\divides\)







\(\ds N_i\)





Euclid's Lemma








\(\ds \leadsto \ \ \)





\(\ds n_k\)

\(\divides\)







\(\ds N_i x_i\)





Divisor Divides Multiple




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds N_i x_i\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {n_k}\)



Congruent to Zero iff Modulo is Divisor




Then for each $k = 1, 2, 3, \ldots, r$:














\(\ds x_0\)

\(\equiv\)







\(\ds \sum_{i \mathop = 1}^r N_i x_i\)




















\(\ds \)

\(\equiv\)







\(\ds N_k x_k\)





from $(2)$














\(\ds \)

\(\equiv\)







\(\ds b_k\)

\(\ds \pmod {n_k}\)



from $(1)$



Thus $x_0$ is a simultaneous solution.
$\Box$

Uniqueness
Suppose $x'$ is a second solution of the system.
That is:

$\forall k \in \set {1, 2, \ldots, r}: x_0 \equiv x' \equiv b_k \pmod {n_k}$
Then:










\(\ds \forall k \in \set {1, 2, \ldots, r}: \, \)



\(\ds x'\)

\(\equiv\)







\(\ds x_0\)

\(\ds \pmod {n_k}\)












\(\ds \leadsto \ \ \)

\(\ds \forall k \in \set {1, 2, \ldots, r}: \, \)



\(\ds n_k\)

\(\divides\)







\(\ds x' - x_0\)





Definition of Congruence








\(\ds \leadsto \ \ \)





\(\ds N\)

\(\divides\)







\(\ds x' - x_0\)





All Factors Divide Integer then Whole Divides Integer








\(\ds \leadsto \ \ \)





\(\ds x'\)

\(\equiv\)







\(\ds x_0\)

\(\ds \pmod N\)



Definition of Congruence



Thus the simultaneous solution is unique modulo $N$.
$\blacksquare$


Construction of Solution
The following is a systematic technique for finding $a$:
For each $i \in \set {1, 2, \ldots, r}$, calculate:

$y_i = \dfrac N {n_i}$
Using Euclid's Algorithm, calculate $z_i$ such that:

$z_i y_i = 1 \pmod {n_i}$
Then:

$x \equiv \ds \sum_{i \mathop = 1}^r b_i y_i z_i$
is a unique solution to the given system of linear congruences.


Examples
Example: $x \equiv 2 \pmod 3, 3 \pmod 5, 2 \pmod 7$
Consider the system of simultaneous linear congruences:














\(\ds x\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 3\)


















\(\ds x\)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod 5\)


















\(\ds x\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 7\)







Then $x \equiv 23 \pmod {105}$


Also see
Chinese Remainder Theorem (Commutative Algebra)


Historical Note
The Chinese Remainder Theorem was found in the Sun Tzu Suan Ching of Sun Tzu, who was active in China sometime between $200$ and $500$ C.E (nobody knows exactly when).
The principle is believed to have been used by Chinese calendar makers as far back as $100$ C.E.
It was first proved properly by Qin Jiushao in $1247$.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Theorem $5$
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $12$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): remainder theorem: 2.
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Sun Tsu Suan Ching: $69$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Chinese remainder theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Chinese remainder theorem




