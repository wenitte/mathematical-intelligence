# 

Source: https://proofwiki.org/wiki/Convergents_are_Best_Approximations/Corollary

Corollary to Convergents are Best Approximations
Let $x$ be an irrational number.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be the numerators and denominators of its continued fraction expansion.

Each convergent $\dfrac {p_n} {q_n}$ is a best rational approximation to $x$.
That is, for any rational number $\dfrac a b$ such that $1 \le b \le q_n$:

$\size {x - \dfrac {p_n} {q_n} } \le \size {x - \dfrac a b}$

The equality holds only if $a = p_n$ and $b = q_n$.


Proof
Assume otherwise:

$\exists \dfrac a b$ such that $1 \le b \le q_n$
and:

$\size {x - \dfrac {p_n} {q_n} } > \size {x - \dfrac a b}$

Then:














\(\ds \size {q_n x - p_n}\)

\(=\)







\(\ds q_n \size {x - \frac {p_n} {q_n} }\)




















\(\ds \)

\(>\)







\(\ds q_n \size {x - \frac a b}\)




















\(\ds \)

\(\ge\)







\(\ds b \size {x - \frac a b}\)




















\(\ds \)

\(=\)







\(\ds \size {b x - a}\)









which contradicts the result of Convergents are Best Approximations.
$\blacksquare$





