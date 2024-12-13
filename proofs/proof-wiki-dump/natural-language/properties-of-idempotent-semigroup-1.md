# 

Source: https://proofwiki.org/wiki/Properties_of_Idempotent_Semigroup/1

Property of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.

Let $x \circ y = y$ and $y \circ x = x$.
Then for all $z \in S$:

$z \circ x \circ z \circ y = z \circ y$
and:

$z \circ y \circ z \circ x = z \circ x$


Proof
From Semigroup Axiom $\text S 1$: Associativity we take it for granted that $\circ$ is associative.











\(\ds \forall z \in S: \, \)



\(\ds z \circ x \circ z \circ y\)

\(=\)







\(\ds z \circ x \circ z \circ x \circ y\)





as $x \circ y = y$ by hypothesis














\(\ds \)

\(=\)







\(\ds z \circ x \circ y\)





Definition of Idempotent Operation: $\paren {z \circ x} \circ \paren {z \circ x} = z \circ x$














\(\ds \)

\(=\)







\(\ds z \circ y\)





as $x \circ y = y$ by hypothesis














\(\ds \forall z \in S: \, \)



\(\ds z \circ y \circ z \circ x\)

\(=\)







\(\ds z \circ y \circ z \circ y \circ x\)





as $y \circ x = x$ by hypothesis














\(\ds \)

\(=\)







\(\ds z \circ y \circ x\)





Definition of Idempotent Operation: $\paren {z \circ y} \circ \paren {z \circ y} = z \circ y$














\(\ds \)

\(=\)







\(\ds z \circ x\)





as $y \circ x = x$ by hypothesis



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(a)}$




