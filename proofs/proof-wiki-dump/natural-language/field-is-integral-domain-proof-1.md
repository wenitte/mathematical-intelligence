# 

Source: https://proofwiki.org/wiki/Field_is_Integral_Domain/Proof_1

Theorem
Every field is an integral domain.


Proof
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Suppose $\exists x, y \in F: x \circ y = 0_F$.
Suppose $x \ne 0_F$.
Then, by the definition of a field, $x^{-1}$ exists in $F$ and:

$y = 1_F \circ y = x^{-1} \circ x \circ y = x^{-1} \circ 0_F = 0_F$.

Otherwise $x = 0_F$.
So if $x \circ y = 0_F$, either $x = 0_F$ or $y = 0_F$ as we were to show.
$\blacksquare$

Note that this is equivalent to the statement $\forall x, y \in F: x \ne 0_F \land y \ne 0_F \implies x \circ y \ne 0_F$, so the set $F^*$ is closed under product.


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $3$: Some special classes of rings
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 55.1$ Special types of ring and ring elements




