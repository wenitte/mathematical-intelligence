# 

Source: https://proofwiki.org/wiki/Prime_Divisors_of_Cyclotomic_Polynomials


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $n \ge 1$ be a positive integer.
Let $\map {\Phi_n} x$ denote the $n$th cyclotomic polynomial.
Let $a \in \Z$ be an integer such that $\map {\Phi_n} a \ne 0$.
Let $p$ be a prime divisor of $\map {\Phi_n} a$.

Then $p \equiv 1 \pmod n$ or $p \divides n$.


Proof
Let $k$ be the order of $a$ modulo $p$.
By Element to Power of Multiple of Order is Identity, $k \divides p - 1$.
If $k = n$, the result follows.

Let $k < n$.
Then by Product of Cyclotomic Polynomials, there exists $d \divides k$ such that $p \divides \map {\Phi_d} a$.
Consequently, $a$ is a double root of $\Phi_d \Phi_n$ modulo $p$.
Again by Product of Cyclotomic Polynomials, $a$ is a double root of $x^n - 1$ modulo $p$.
Thus, by Double Root of Polynomial is Root of Derivative, $a$ is a root of the derivative of $x^n - 1$ modulo $p$, which is the constant polynomial $n$.
Thus $n \equiv 0 \pmod p$, for a nonzero constant polynomial has no roots.
$\blacksquare$


Also see
Cyclotomic Polynomial has Integer Coefficients




