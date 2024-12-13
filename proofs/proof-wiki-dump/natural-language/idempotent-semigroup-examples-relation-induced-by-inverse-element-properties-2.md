# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/2

Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

Let $x \circ y = x$ and $y \circ x = y$.
Then for all $z \in S$:

$\paren {x \circ z} \mathrel \RR \paren {y \circ z}$
and:

$\paren {z \circ x} \mathrel \RR \paren {z \circ y}$


Proof
From Semigroup Axiom $\text S 1$: Associativity we take it for granted that $\circ$ is associative.
Hence parentheses will be employed whenever it makes groupings of operations more clear.

We have:










\(\ds \forall z \in S: \, \)



\(\ds x \circ z\)

\(=\)







\(\ds \paren {x \circ z} \circ \paren {y \circ z}\)





Properties of Idempotent Semigroup: $2$








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ z} \circ \paren {x \circ z}\)

\(=\)







\(\ds \paren {x \circ z} \circ \paren {y \circ z} \paren {x \circ z}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ z}\)

\(=\)







\(\ds \paren {x \circ z} \circ \paren {y \circ z} \paren {x \circ z}\)





Definition of Idempotent Operation



Similarly:










\(\ds \forall z \in S: \, \)



\(\ds y \circ z\)

\(=\)







\(\ds \paren {y \circ z} \circ \paren {x \circ z}\)





Properties of Idempotent Semigroup: $2$








\(\ds \leadsto \ \ \)





\(\ds \paren {y \circ z} \circ \paren {y \circ z}\)

\(=\)







\(\ds \paren {y \circ z} \circ \paren {x \circ z} \circ \paren {y \circ z}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y \circ z}\)

\(=\)







\(\ds \paren {y \circ z} \circ \paren {x \circ z} \circ \paren {y \circ z}\)





Definition of Idempotent Operation



Hence by definition of $\RR$:

$\forall z \in S: \paren {x \circ z} \mathrel \RR \paren {y \circ z}$
$\Box$

Then:










\(\ds \forall z \in S: \, \)



\(\ds z \circ x\)

\(=\)







\(\ds z \circ \paren {x \circ z} \circ x\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds z \circ \paren {x \circ z} \circ \paren {y \circ z} \circ x\)





Properties of Idempotent Semigroup: $2$














\(\ds \)

\(=\)







\(\ds \paren {z \circ x} \circ \paren {z \circ y} \circ \paren {z \circ x}\)





Semigroup Axiom $\text S 1$: Associativity



and:










\(\ds \forall z \in S: \, \)



\(\ds z \circ y\)

\(=\)







\(\ds z \circ \paren {y \circ z} \circ y\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds z \circ \paren {y \circ z} \circ \paren {x \circ z} \circ y\)





Properties of Idempotent Semigroup: $2$














\(\ds \)

\(=\)







\(\ds \paren {z \circ y} \circ \paren {z \circ x} \circ \paren {z \circ y}\)





Semigroup Axiom $\text S 1$: Associativity



Hence by definition of $\RR$:

$\forall z \in S: \paren {z \circ x} \mathrel \RR \paren {z \circ y}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(d)}$




