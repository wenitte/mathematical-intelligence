# 

Source: https://proofwiki.org/wiki/Power_of_Sum_Modulo_Prime



Theorem
Let $p$ be a prime number.
Then:

$\paren {a + b}^p \equiv a^p + b^p \pmod p$


Corollary
Let $p$ be a prime number.
Then:

$\paren {1 + b}^p \equiv 1 + b^p \pmod p$


Proof
From the Binomial Theorem:

$\ds \paren {a + b}^p = \sum_{k \mathop = 0}^p \binom p k a^k b^{p - k}$

Also note that:

$\ds \sum_{k \mathop = 0}^p \binom p k a^k b^{p-k} = a^p + \sum_{k \mathop = 1}^{p - 1} \binom p k a^k b^{p - k} + b^p$

So:










\(\ds \forall k: 0 < k < p: \, \)



\(\ds \binom p k\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Binomial Coefficient of Prime








\(\ds \leadsto \ \ \)





\(\ds \binom p k a^k b^{p - k}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Definition of Modulo Multiplication








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{p - 1} \binom p k a^k b^{p - k}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Definition of Modulo Addition








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^p \binom p k a^k b^{p - k}\)

\(\equiv\)







\(\ds a^p + b^p\)

\(\ds \pmod p\)



from above



$\blacksquare$


Also see
Freshman's Dream
Prime Power of Sum Modulo Prime


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \eta$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Exercise $8$




