# 

Source: https://proofwiki.org/wiki/Exponential_Sequence_is_Eventually_Increasing

Theorem
Let $\sequence {E_n}$ be the sequence of real functions $E_n: \R \to \R$ defined as:

$\map {E_n} x = \paren {1 + \dfrac x n}^n$

Then, for sufficiently large $n \in \N$, $\sequence {\map {E_n} x}$ is increasing with respect to $n$.
That is:

$\forall x \in \R: \forall n \in \N: n \ge \ceiling {\size x} \implies \map {E_n} x \le \map {E_{n + 1} } x$
where $\ceiling x$ denotes the ceiling of $x$.


Proof
Fix $x \in \R$.

Then:














\(\ds n\)

\(\ge\)







\(\ds \ceiling {\size x}\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(>\)







\(\ds -x\)





Real Number is between Ceiling Functions and Negative of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(>\)







\(\ds \frac {-x} n\)





Divide both sides by $n$








\(\ds \leadsto \ \ \)





\(\ds 1 + \frac x n\)

\(>\)







\(\ds 0\)










So we may apply the AM-GM inequality, with:

$x_1 := 1$
$x_j := 1 + \dfrac x n$ for each $j \in \set {2, 3, \dotsc, n + 1}$
to obtain that:

$\dfrac {1 + n \paren {1 + \dfrac x n} } {n + 1} > \paren {\paren {1 + \dfrac x n}^n}^{1 / \paren {n + 1} }$
After simplification:

$1 + \dfrac x {n + 1} > \paren {1 + \dfrac x n}^{n / \paren {n + 1} }$
From Power Function is Strictly Increasing over Positive Reals: Natural Exponent:

$\paren {1 + \dfrac x {n + 1} }^{n + 1} > \paren {1 + \dfrac x n}^n$
where we have raised both sides to the power of $n + 1$.
Hence the result.
$\blacksquare$





