# 

Source: https://proofwiki.org/wiki/Leading_Coefficient_of_Product_of_Polynomials_over_Integral_Domain

Theorem
Let $R$ be an integral domain.
Let $f, g \in R \sqbrk x$ be polynomials.
Let $c$ and $d$ be their leading coefficients.

Then $f g$ has leading coefficient $c d$.


Proof
Let $p = \deg f$ and $q = \deg g$ be their degrees.
By Degree of Product of Polynomials over Integral Domain, $\map \deg {f g} = p + q$.
For a natural number $n \ge 0$, let:

$a_n$ be the coefficient of the monomial $x^n$ in $f$.
$b_n$ be the coefficient of the monomial $x^n$ in $g$.
By Coefficients of Product of Two Polynomials, the coefficient of $x^{p + q}$ in $f g$ is the sum:

$\ds \sum_{k \mathop = p}^p a_k b_{p + q - k}$
By Indexed Summation over Interval of Length One:

$\ds \sum_{k \mathop = p}^p a_k b_{p + q - k} = a_p b_q = c d$
$\blacksquare$





