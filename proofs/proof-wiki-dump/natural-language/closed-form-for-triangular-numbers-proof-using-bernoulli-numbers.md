# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Proof_using_Bernoulli_Numbers

Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
From Sum of Powers of Positive Integers:














\(\ds \sum_{i \mathop = 1}^n i^p\)

\(=\)







\(\ds 1^p + 2^p + \cdots + n^p\)




















\(\ds \)

\(=\)







\(\ds \frac {n^{p + 1} } {p + 1} + \sum_{k \mathop = 1}^p \frac {B_k \, p^{\underline {k - 1} } \, n^{p - k + 1} } {k!}\)









where $B_k$ are the Bernoulli numbers.

Setting $p = 1$:














\(\ds \sum_{i \mathop = 1}^n i^1\)

\(=\)







\(\ds 1 + 2 + \cdots + n\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} 2 + \frac {B_1 \, p^{\underline 0} n^1} {1!}\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} 2 + \frac 1 2 \frac {1 \times n} 1\)





Definition of Bernoulli Numbers, Number to Power of Zero Falling is One














\(\ds \)

\(=\)







\(\ds \frac {n^2 + n} 2\)









Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Sums of Powers of Positive Integers: $19.9$




