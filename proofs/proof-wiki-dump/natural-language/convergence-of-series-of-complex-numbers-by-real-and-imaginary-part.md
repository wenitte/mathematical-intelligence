# 

Source: https://proofwiki.org/wiki/Convergence_of_Series_of_Complex_Numbers_by_Real_and_Imaginary_Part

Theorem
Let $\sequence {z_n}$ be a sequence of complex numbers.

Then:

the series $\ds \sum_{n \mathop = 1}^\infty z_n$ converges to $Z \in \C$
if and only if:

the series:
$\ds \sum_{n \mathop = 1}^\infty \map \Re {z_n}$
and:
$\ds \sum_{n \mathop = 1}^\infty \map \Im {z_n}$
converge to $\map \Re Z$ and $\map \Im Z$ respectively.


Proof
Let:

the $n$th partial sum of $\sequence {z_n}$ be denoted $Z_n$
the $n$th partial sum of $\sequence {\map \Re {z_n} }$ be denoted $U_n$
the $n$th partial sum of $\sequence {\map \Im {z_n} }$ be denoted $V_n$
Then:

$Z_n = U_n + i V_n$

Let:

$\lim_{n \mathop \to \infty} U_n = U$
$\lim_{n \mathop \to \infty} V_n = V$
By definition of convergent complex sequence:

$\lim_{n \mathop \to \infty} Z_n = \lim_{n \mathop \to \infty} U_n + i \lim_{n \mathop \to \infty} V_n$
and so:

$\lim_{n \mathop \to \infty} Z_n = U + i V$
and the result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.3$. Series




