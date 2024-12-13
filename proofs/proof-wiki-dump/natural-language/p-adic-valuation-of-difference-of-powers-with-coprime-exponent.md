# 

Source: https://proofwiki.org/wiki/P-adic_Valuation_of_Difference_of_Powers_with_Coprime_Exponent



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
where $\nu_p$ denotes $p$-adic valuation.


Proof 1
We have:

$x^n - y^n = \paren {x - y} \paren {x^{n - 1} + \cdots + y^{n - 1} }$
We have to show that:

$p \nmid x^{n - 1} + \cdots + y^{n - 1}$
Because $x \equiv y \pmod p$:

$x^{n - 1} + \cdots + y^{n - 1} \equiv x^{n - 1} + x^{n - 1} + \cdots + x^{n - 1} = n x^{n - 1} \pmod p$
Because $p \nmid x$ and $p \nmid n$:

$p \nmid n x^{n - 1}$
$\blacksquare$


Proof 2
We have:

$x^n - y^n = \paren {x - y} \paren {x^{n - 1} + \cdots + y^{n - 1} }$
We have to prove that:

$p \nmid x^{n - 1} + \cdots + y^{n - 1}$
Let $\map P u = u^n - y^n$.
If $p \divides x^{n - 1} + \cdots + y^{n - 1}$, then $x$ would be a double root of $P$ modulo $p$.
By Double Root of Polynomial is Root of Derivative (or a version of this in modular arithmetic):

$p \divides \map {P'} x = n x^{n - 1}$
which is impossible.
Therefore:

$p \nmid x^{n - 1} + \cdots + y^{n - 1}$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also see
Lifting The Exponent Lemma


Sources
July 1904: George David Birkhoff and Harry Schultz Vandiver: On the Integral Divisors of $a^n - b^n$ (Ann. Math. Vol. 5: pp. 173 – 180)  www.jstor.org/stable/2007263: Theorem $\text{II}$




