# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n/Proof_2



Theorem
$\ds \forall n \in \Z_{\geq 0}: \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i = \delta_{n 0}$


Proof
Lemma
$\ds \sum_{i \mathop = 0}^0 \binom 0 0 = 1$
$\Box$

Let $n > 0$.
From the Binomial Theorem, we have that:

$\ds \forall n \in \Z_{\ge 0}: \paren {x + y}^n = \sum_{i \mathop = 0}^n  \binom n i x^{n - i} y^i$

Putting $x = 1, y = -1$, we get:














\(\ds 0\)

\(=\)







\(\ds \paren {1 - 1}^n\)





which holds for all $n > 0$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \binom n i 1^{n - i} \paren {-1}^i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Binomial Theorem: Relations between coeffficients




