# 

Source: https://proofwiki.org/wiki/Multiplicative_Order_of_Roots_of_Cyclotomic_Polynomial_Modulo_Prime

Theorem
Let $n\geq1$ be a natural number.
Let $p$ be a prime number
Let $n=p^\alpha q$ where $\alpha = \nu_p(n)$ is the valuation of $p$ in $n$.
Let $a\in\Z$ with $\Phi_n(a)\equiv0\pmod p$.

Then the order of $a$ modulo $p$ is $q$:

$\operatorname{ord}_p(a) = q$.


Proof
By Product of Cyclotomic Polynomials, $p\mid \Phi_n(a) \mid a^n-1$.
Thus $a$ is coprime to $p$.
By Fermat's Little Theorem, $1\equiv a^n\equiv a^q\pmod p$.
Thus $\operatorname{ord}_p(a) \leq q$.
Suppose $\operatorname{ord}_p(a) = k < q$.
By Product of Cyclotomic Polynomials, $p\mid \Phi_d(a)$ for some $d\mid k$.
Then $a$ is a double root of $x^q-1$ modulo $p$.
By Double Root of Polynomial is Root of Derivative, $q\equiv0\pmod p$.
This is a contradiction, thus $k=q$.
$\blacksquare$





