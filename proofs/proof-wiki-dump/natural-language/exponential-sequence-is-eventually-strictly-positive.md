# 

Source: https://proofwiki.org/wiki/Exponential_Sequence_is_Eventually_Strictly_Positive

Theorem
Let $\sequence {E_n}$ be the sequence of real functions $E_n: \R \to \R$ defined as:

$\map {E_n} x = \paren {1 + \dfrac x n}^n$

Then, for each $x \in \R$ and for sufficiently large $n \in \N$, $\map {E_n} x$ is positive.
That is:

$\forall x \in \R: \forall n \in \N: n \ge \ceiling {\size x} \implies \map {E_n} x > 0$
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





dividing both sides by $n$








\(\ds \leadsto \ \ \)





\(\ds 1 + \frac x n\)

\(>\)







\(\ds 0\)





adding $\dfrac {-x} n$ to both sides








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac x n}^n\)

\(>\)







\(\ds 0\)





Power of Strictly Positive Real Number is Strictly Positive: Positive Integer



$\blacksquare$





