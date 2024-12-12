# 

Source: https://proofwiki.org/wiki/Boolean_Ring_has_Proper_Zero_Divisor

Theorem
Let $\left({R, +, \circ}\right)$ be a Boolean ring whose zero is $0_R$.
Suppose that $R$ has more than two elements.

Then $R$ has a proper zero divisor.


Proof
Since $R$ has more than two elements, there exist distinct non-zero elements $x, y \in R$.
Note that $x + y \ne 0_R$ since $x$ and $y$ are distinct (by Idempotent Ring has Characteristic Two).

If $x \circ y = 0$, $x$ is a proper zero divisor.
If $x \circ y \ne 0$, then:














\(\ds \left({x \circ y}\right) \circ \left({x + y}\right)\)

\(=\)







\(\ds x \circ y \circ x + x \circ y \circ y\)




















\(\ds \)

\(=\)







\(\ds x \circ y + x \circ y\)





$R$ is an idempotent ring, Idempotent Ring is Commutative














\(\ds \)

\(=\)







\(\ds 0_R\)





Idempotent Ring has Characteristic Two



Hence $x \circ y$ is a proper zero divisor.

The result follows, from Proof by Cases.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $9$




