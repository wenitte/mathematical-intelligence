# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Inversion_Formula_for_Cyclotomic_Polynomials

Theorem
Let $n > 0$ be a (strictly) positive integer.
Let $\Phi_n$ be the $n$th cyclotomic polynomial.

Then:

$\map {\Phi_n} x = \ds \prod_{d \mathop \divides n} \paren {x^d - 1}^{\map \mu {n / d} }$
where:

the product runs over all divisors of $n$
$\mu$ is the Möbius function.


Proof
By Product of Cyclotomic Polynomials:

$\ds \prod_{d \mathop \divides n} \map {\Phi_d} x = x^n - 1$
for all $n \in \N$.
The nonzero rational forms form an abelian group under multiplication.
By the Möbius inversion formula for abelian groups, this implies:

$\ds \map {\Phi_n} x = \prod_{d \mathop \divides n} \paren {x^d - 1}^{\map \mu {n / d} }$
for all $n \in \N$.
$\blacksquare$





