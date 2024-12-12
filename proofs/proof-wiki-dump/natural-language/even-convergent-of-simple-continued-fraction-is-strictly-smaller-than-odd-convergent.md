# 

Source: https://proofwiki.org/wiki/Even_Convergent_of_Simple_Continued_Fraction_is_Strictly_Smaller_than_Odd_Convergent

Theorem
Let $n \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, \ldots}$ be a simple continued fraction in $\R$ of length $n$.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.
Let $\sequence {C_0, C_1, \ldots}$ be its sequence of convergents.

Every even convergent is strictly smaller than every odd convergent.


Proof
Let $k \ge 1$.
From Denominators of Simple Continued Fraction are Strictly Positive, $q_k q_{k - 1}>0$.
From Difference between Adjacent Convergents of Simple Continued Fraction:

$C_k - C_{k - 1} = \dfrac {\paren {-1}^{k + 1} } {q_k q_{k - 1} }$

Let $k$ be even.
Then:

$\exists s \in \N: k = 2 s$
and:

$C_{2 s} < C_{2 s - 1}$

Let $k$ be odd.
Then:

$\exists t \in \N: k = 2 t + 1$
and:

$C_{2 t + 1 } > C_{2 t}$

Now, consider any even convergent $C_{2 s}$ and any odd convergent $C_{2 t + 1}$, with $s, t \ge 0$.
If $2 s < 2 t + 1$, then $2 s \le 2 t$, so:














\(\ds C_{2 s}\)

\(\le\)







\(\ds C_{2 t}\)





Even Convergents of Simple Continued Fraction are Strictly Increasing














\(\ds \)

\(<\)







\(\ds C_{2 t + 1}\)





by the above




If $2 s > 2 t + 1$, then $2 s - 1 \ge 2 t + 1$, so:














\(\ds C_{2 s}\)

\(<\)







\(\ds C_{2 s - 1}\)





by the above














\(\ds \)

\(\le\)







\(\ds C_{2 t + 1}\)





Odd Convergents of Simple Continued Fraction are Strictly Decreasing



In either case:

$C_{2 s} < C_{2 t + 1}$
Hence the result.
$\blacksquare$


Also see
Properties of Convergents of Continued Fractions




