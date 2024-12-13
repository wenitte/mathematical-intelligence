# 

Source: https://proofwiki.org/wiki/P-adic_Valuation_of_Difference_of_Powers_with_Coprime_Exponent/Proof_1

Theorem
Let $x, y \in \Z$ be distinct integers.
Let $n \ge 1$ be a natural number.
Let $p$ be a prime number.
Let:

$p \divides x - y$
and:

$p \nmid x y n$.

Then 

$\map {\nu_p} {x^n - y^n} = \map {\nu_p} {x - y}$


Proof
We have:

$x^n - y^n = \paren {x - y} \paren {x^{n - 1} + \cdots + y^{n - 1} }$
We have to show that:

$p \nmid x^{n - 1} + \cdots + y^{n - 1}$
Because $x \equiv y \pmod p$:

$x^{n - 1} + \cdots + y^{n - 1} \equiv x^{n - 1} + x^{n - 1} + \cdots + x^{n - 1} = n x^{n - 1} \pmod p$
Because $p \nmid x$ and $p \nmid n$:

$p \nmid n x^{n - 1}$
$\blacksquare$





