# 

Source: https://proofwiki.org/wiki/Increasing_Alternating_Sum_of_Binomial_Coefficients

Theorem
Let $n \in \Z$ be an integer.

Then:

$\ds \sum_{j \mathop = 0}^n \paren {-1}^{n + 1} j \binom n j = 0$
where $\dbinom n k$ denotes a binomial coefficient.

That is:

$1 \dbinom n 1 - 2 \dbinom n 2 + 3 \dbinom n 3 - \cdots + \paren {-1}^{n + 1} n \dbinom n n = 0$


Proof













\(\ds \sum_{j \mathop = 0}^n \paren {-1}^{n + 1} j \binom n j\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {-1}^{n + 1} j \binom n j\)





as $0 \dbinom n 0 = 0$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {-1}^{n + 1} n \binom {n - 1} {j - 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \sum_{j \mathop = 0}^{n - 1} \paren {-1}^{n - 1} \binom {n - 1} j\)





Translation of Index Variable of Summation, and $\paren {-1}^{n + 1} = \paren {-1}^{n - 1}$














\(\ds \)

\(=\)







\(\ds 0\)





Alternating Sum and Difference of Binomial Coefficients for Given n



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.15$




