# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/1

Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

Let $x \circ y = y$ and $y \circ x = x$.
Then for all $z \in S$:

$\paren {z \circ x} \mathrel \RR \paren {z \circ y}$
and:

$\paren {x \circ z} \mathrel \RR \paren {y \circ z}$


Proof
From Semigroup Axiom $\text S 0$: Closure we take it for granted that $\struct {S, \circ}$ is closed under $\circ$.
From Semigroup Axiom $\text S 1$: Associativity we take it for granted that $\circ$ is associative.
Hence parentheses will be used whenever it makes groupings of operations more clear.

We have:










\(\ds \forall z \in S: \, \)



\(\ds z \circ x\)

\(=\)







\(\ds \paren {z \circ y} \circ \paren {z \circ x}\)





Properties of Idempotent Semigroup: $1$








\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ x} \circ \paren {z \circ x}\)

\(=\)







\(\ds \paren {z \circ x} \circ \paren {z \circ y} \circ \paren {z \circ x}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ x}\)

\(=\)







\(\ds \paren {z \circ x} \circ \paren {z \circ y} \circ \paren {z \circ x}\)





Definition of Idempotent Operation



Similarly:










\(\ds \forall z \in S: \, \)



\(\ds z \circ y\)

\(=\)







\(\ds \paren {z \circ x} \circ \paren {z \circ y}\)





Properties of Idempotent Semigroup: $1$








\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ y} \circ \paren {z \circ y}\)

\(=\)







\(\ds \paren {z \circ y} \circ \paren {z \circ x} \circ \paren {z \circ y}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ y}\)

\(=\)







\(\ds \paren {z \circ y} \circ \paren {z \circ x} \circ \paren {z \circ y}\)





Definition of Idempotent Operation



Hence by definition of $\RR$:

$\forall z \in S: \paren {z \circ x} \mathrel \RR \paren {z \circ y}$
$\Box$

Then:










\(\ds \forall z \in S: \, \)



\(\ds x \circ z\)

\(=\)







\(\ds x \circ \paren {z \circ x} \circ z\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ y} \circ \paren {z \circ x} \circ z\)





Properties of Idempotent Semigroup: $1$














\(\ds \)

\(=\)







\(\ds \paren {x \circ z} \circ \paren {y \circ z} \circ \paren {x \circ z}\)





Semigroup Axiom $\text S 1$: Associativity



and:










\(\ds \forall z \in S: \, \)



\(\ds y \circ z\)

\(=\)







\(\ds y \circ \paren {z \circ y} \circ z\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds y \circ \paren {z \circ x} \circ \paren {z \circ y} \circ z\)





Properties of Idempotent Semigroup: $1$














\(\ds \)

\(=\)







\(\ds \paren {y \circ z} \circ \paren {x \circ z} \circ \paren {y \circ z}\)





Semigroup Axiom $\text S 1$: Associativity



Hence by definition of $\RR$:

$\forall z \in S: \paren {x \circ z} \mathrel \RR \paren {y \circ z}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(b)}$




