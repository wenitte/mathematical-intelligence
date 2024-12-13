# 

Source: https://proofwiki.org/wiki/Idempotent_Ring_is_Commutative

Theorem
Let $\struct {R, +, \circ}$ be an idempotent ring.
Denote with $0_R$ the zero of $R$.

Then $\struct {R, +, \circ}$ is a commutative ring.


Proof
Let $x, y \in R$.
Then:














\(\ds x + y\)

\(=\)







\(\ds \paren {x + y}^2\)





Definition of Idempotent Ring














\(\ds \)

\(=\)







\(\ds x^2 + x \circ y + y \circ x + y^2\)





Binomial Theorem: Ring Theory














\(\ds \)

\(=\)







\(\ds x + x \circ y + y \circ x + y\)





Definition of Idempotent Ring




Subtracting $x + y$ from both sides yields:














\(\ds x \circ y + y \circ x\)

\(=\)







\(\ds 0_R\)




















\(\ds \)

\(=\)







\(\ds y \circ x + y \circ x\)





Idempotent Ring has Characteristic Two




Finally, subtracting $y \circ x$ from both sides, we obtain:

$x \circ y = y \circ x$
and conclude $R$ is a commutative ring.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $1$




