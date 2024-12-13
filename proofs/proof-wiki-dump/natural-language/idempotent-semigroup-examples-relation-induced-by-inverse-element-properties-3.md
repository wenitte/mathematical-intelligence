# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/3

Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

Let:














\(\ds x \circ y\)

\(=\)







\(\ds y\)




















\(\ds y \circ x\)

\(=\)







\(\ds x\)




















\(\ds y \circ z\)

\(=\)







\(\ds y\)




















\(\ds z \circ y\)

\(=\)







\(\ds z\)










Then:

$x \mathrel \RR z$


Proof
From Semigroup Axiom $\text S 1$: Associativity we take it for granted that $\circ$ is associative.
Hence parentheses will be employed whenever it makes groupings of operations more clear.

Recall:
From $x \circ y = y$ and $y \circ x = x$

$(1): \quad \forall z \in S: z \circ x \circ z \circ y = z \circ y$
using Properties of Idempotent Semigroup: $1$
From $y \circ z = y$ and $z \circ y = z$ 

$(2): \quad \forall x \in S: y \circ x \circ z \circ x = y \circ x$
using Properties of Idempotent Semigroup: $2$, exchanging $z$ and $x$

We have:














\(\ds z \circ x \circ z\)

\(=\)







\(\ds z \circ x \circ z \circ y\)





by hypothesis: $z \circ y = z$














\(\ds \)

\(=\)







\(\ds z \circ y\)





from $(1)$














\(\ds \)

\(=\)







\(\ds z\)





by hypothesis: $z \circ y = z$



and:














\(\ds x \circ z \circ x\)

\(=\)







\(\ds y \circ x \circ z \circ x\)





by hypothesis: $y \circ x = x$














\(\ds \)

\(=\)







\(\ds y \circ x\)





from $(2)$














\(\ds \)

\(=\)







\(\ds x\)





by hypothesis: $y \circ x = x$



Hence the result, by definition of $\RR$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(e)}$




