# 

Source: https://proofwiki.org/wiki/Formal_Derivative_of_Polynomials_Satisfies_Leibniz%27s_Rule

Theorem
Let $R$ be a commutative ring with unity.
Let $R \sqbrk X$ be the polynomial ring over $R$.
Let $f, g \in R \sqbrk X$ be polynomials.
Let $f'$ and $g'$ denote their formal derivatives.

Then:

$\paren {f g}' = f g' + f' g$


Proof
Both sides are bilinear functions of $f$ and $g$, so it suffices to verify the equality in the case where $\map f X = X^n$ and $\map g x = X^m$.
Then:

$\paren {X^n X^m}' = \paren {n + m} X^{n + m - 1}$
and:

$\paren {X^n}' X^m + X^n \paren {X^m}' = n X^{n - 1} X^m + m X^n X^{m - 1}$
$\blacksquare$





