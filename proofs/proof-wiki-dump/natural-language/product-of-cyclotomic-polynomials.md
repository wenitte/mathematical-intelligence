# 

Source: https://proofwiki.org/wiki/Product_of_Cyclotomic_Polynomials

Theorem
Let $n > 0$ be a (strictly) positive integer.

Then:

$\ds \prod_{d \mathop \divides n} \map {\Phi_d} x = x^n - 1$
where:

$\map {\Phi_d} x$ denotes the $d$th cyclotomic polynomial
the product runs over all divisors of $n$.


Proof
From the Polynomial Factor Theorem and Complex Roots of Unity in Exponential Form:

$\ds x^n - 1 = \prod_\zeta \paren {x - \zeta}$
where the product runs over all complex $n$th roots of unity.
In the left hand side, each factor $x - \zeta$ appears exactly once, in the factorization of $\map {\Phi_d} x$ where $d$ is the order of $\zeta$.


This article, or a section of it, needs explaining.In particular: The above statement needs justification.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus the polynomials are equal.
$\blacksquare$


Also see
Möbius Inversion Formula for Cyclotomic Polynomials




