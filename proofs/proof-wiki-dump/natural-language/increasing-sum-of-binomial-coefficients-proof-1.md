# 

Source: https://proofwiki.org/wiki/Increasing_Sum_of_Binomial_Coefficients/Proof_1

Theorem
$\ds \sum_{j \mathop = 0}^n j \binom n j = n 2^{n - 1}$


Proof













\(\ds \sum_{j \mathop = 0}^n j \binom n j\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \binom n j\)





as $0 \dbinom n 0 = 0$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n n \binom {n - 1} {j - 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \sum_{j \mathop = 0}^{n - 1} \binom {n - 1} j\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds n 2^{n - 1}\)





Sum of Binomial Coefficients over Lower Index



$\blacksquare$





