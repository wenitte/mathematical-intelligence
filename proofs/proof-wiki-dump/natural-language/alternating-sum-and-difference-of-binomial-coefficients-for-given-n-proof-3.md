# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n/Proof_3

Theorem
$\ds \forall n \in \Z_{\geq 0}: \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i = \delta_{n 0}$


Proof
Lemma
$\ds \sum_{i \mathop = 0}^0 \binom 0 0 = 1$
$\Box$

Let $n > 0$.
The assertion can be expressed:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom n i = 0$ for all $n > 0$
as $\dbinom n i = 0$ when $i < 0$ by definition of binomial coefficient.

From Alternating Sum and Difference of r Choose k up to n we have:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom r i = \paren {-1}^n \binom {r - 1} n$
Putting $r = n$ we have:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom n i = \paren {-1}^n \binom {n - 1} n$
As $n - 1 < n$ it follows from the definition of binomial coefficient that:

$\dbinom {n - 1} n = 0$
$\blacksquare$





