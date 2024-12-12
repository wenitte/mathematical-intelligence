# 

Source: https://proofwiki.org/wiki/Double_Root_of_Polynomial_is_Root_of_Derivative

Theorem
Let $R$ be a commutative ring with unity.
Let $f \in R \sqbrk X$ be a polynomial.
Let $a \in R$ be a root of $f$ with multiplicity at least $2$.
Let $f'$ denote the formal derivative of $f$.

Then $a$ is a root of $f'$.


Proof
Because $a$ has multiplicity at least $2$, we can write:

$\map f X = \paren {X - a}^2 \map g X$
with $\map g X \in R \sqbrk X$.

From Formal Derivative of Polynomials Satisfies Leibniz's Rule:

$\map {f'} X = 2 \paren {X - a} \map g X + \paren {X - a}^2 \map {g'} X$
and thus:

$\map {f'} a = 0$
$\blacksquare$





