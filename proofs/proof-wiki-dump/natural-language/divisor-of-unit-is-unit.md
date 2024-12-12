# 

Source: https://proofwiki.org/wiki/Divisor_of_Unit_is_Unit

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose unity is $1_D$.
Let $\struct {U_D, \circ}$ be the group of units of $\struct {D, +, \circ}$.

Then:

$x \in D, u \in U_D: x \divides u \implies x \in U_D$

That is, if $x$ is a divisor of a unit, $x$ must itself be a unit.


Proof
Let $x \in D, u \in U_D$ such that $x \divides u$.
By definition:

$\exists t \in D: u = t \circ x$
Thus:

$1_D = u^{-1} \circ u = u^{-1} \circ t \circ x$
Also, as $D$ is an integral domain and hence a commutative ring, we have:

$u^{-1} \circ t \circ x = 1_D = x \circ u^{-1} \circ t$

It follows by definition that $x$ is a unit, as it has an inverse, namely $u^{-1} \circ t$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 62.1$ Factorization in an integral domain: $\text{(iii)}$




