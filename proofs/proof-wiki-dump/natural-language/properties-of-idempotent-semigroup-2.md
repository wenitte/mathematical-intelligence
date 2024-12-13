# 

Source: https://proofwiki.org/wiki/Properties_of_Idempotent_Semigroup/2

Property of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.

Let $x \circ y = x$ and $y \circ x = y$.
Then for all $z \in S$:

$x \circ z \circ y \circ z = x \circ z$
and:

$y \circ z \circ x \circ z = y \circ z$


Proof
From Semigroup Axiom $\text S 1$: Associativity we take it for granted that $\circ$ is associative.











\(\ds \forall z \in S: \, \)



\(\ds x \circ z \circ y \circ z\)

\(=\)







\(\ds x \circ y \circ z \circ y \circ z\)





as $x \circ y = x$ by hypothesis














\(\ds \)

\(=\)







\(\ds x \circ y \circ z\)





Definition of Idempotent Operation: $\paren {y \circ z} \circ \paren {y \circ z} = y \circ z$














\(\ds \)

\(=\)







\(\ds x \circ z\)





as $x \circ y = x$ by hypothesis














\(\ds \forall z \in S: \, \)



\(\ds y \circ z \circ x \circ z\)

\(=\)







\(\ds y \circ x \circ z \circ x \circ z\)





as $y \circ x = y$ by hypothesis














\(\ds \)

\(=\)







\(\ds y \circ x \circ z\)





Definition of Idempotent Operation: $\paren {x \circ z} \circ \paren {x \circ z} = x \circ z$














\(\ds \)

\(=\)







\(\ds y \circ z\)





as $y \circ x = y$ by hypothesis



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(c)}$




