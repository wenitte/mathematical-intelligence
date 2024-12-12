# 

Source: https://proofwiki.org/wiki/Divisor_of_Perfect_Number_is_Deficient

Theorem
Let $n$ be a perfect number.
Let $n = r s$ where $r$ and $s$ are positive integers such that $r > 1$ and $s > 1$.

Then $r$ and $s$ are both deficient.


Proof
Without loss of generality, consider $r$.
We have by definition of divisor sum function and perfect number that:

$\dfrac {\map {\sigma_1} {r s} } {r s} = 2$
But from Abundancy Index of Product is greater than Abundancy Index of Proper Factors:

$\dfrac {\map {\sigma_1} {r s} } {r s} > \dfrac {\map {\sigma_1} r} r$
That is:

$\dfrac {\map {\sigma_1} r} r < 2$
Mutatis mutandis:

$\dfrac {\map {\sigma_1} r} s < 2$
Hence the result by definition of deficient.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $12$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $12$




