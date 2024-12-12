# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Abel%27s_Generalisation/Negative_n

Theorem
Abel's Generalisation of Binomial Theorem:

$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$
does not hold for $n \in \Z_{< 0}$.


Proof
Putting $n = x = -1$ and $y = z = 1$ into the left hand side

$\paren {-1 + 1}^{-1} = \dfrac 1 0$
which is undefined.

Putting the same values into the right hand side gives:














\(\ds \)

\(\)







\(\ds \sum_k \dbinom {-1} k \paren {-1} \paren {-1 - k}^{k - 1} \paren {1 + k}^{-1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^k \dbinom {-1} k \paren {1 + k}^{-2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {1 + k}^{-2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac 1 {k^2}\)





Translation of Index Variable of Summation: Corollary














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^2} 6\)





Basel Problem



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $52$




