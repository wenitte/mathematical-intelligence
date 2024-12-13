# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/5

Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

$\RR$ is a congruence relation for $\circ$.


Proof
From Idempotent Semigroup: Relation induced by Inverse Element: $4$:

$\RR$ is an equivalence relation.
Let $a, b \in S$ be arbitrary such that $a \mathrel \RR b$.

Then:




\(\text {(1)}: \quad\)









\(\ds \paren {a \circ b} \circ a\)

\(=\)







\(\ds a\)





Definition of $\RR$




\(\text {(2)}: \quad\)









\(\ds b \circ \paren {a \circ b}\)

\(=\)







\(\ds b\)





Definition of $\RR$




Then we have:




\(\text {(3)}: \quad\)









\(\ds a \circ \paren {a \circ b}\)

\(=\)







\(\ds a \circ b\)





Definition of Idempotent Operation




\(\text {(4)}: \quad\)









\(\ds \paren {a \circ b} \circ b\)

\(=\)







\(\ds a \circ b\)





Definition of Idempotent Operation




Then:










\(\ds \forall z \in S: \, \)



\(\ds a \circ z\)

\(\RR\)







\(\ds \paren {a \circ b} \circ z\)





Idempotent Semigroup: Relation induced by Inverse Element: $1$, $(1)$ and $(3)$












\(\, \ds \land \, \)

\(\ds z \circ a\)

\(\RR\)







\(\ds z \circ \paren {a \circ b}\)
















\(\ds \forall z \in S: \, \)



\(\ds \paren {a \circ b} \circ z\)

\(\RR\)







\(\ds b \circ z\)





Idempotent Semigroup: Relation induced by Inverse Element: $2$, $(2)$ and $(4)$












\(\, \ds \land \, \)

\(\ds z \circ \paren {a \circ b}\)

\(\RR\)







\(\ds z \circ b\)














\(\ds \leadsto \ \ \)

\(\ds \forall z \in S: \, \)



\(\ds z \circ a\)

\(\RR\)







\(\ds z \circ b\)





Definition of Equivalence Relation: $\RR$ is transitive








\(\ds \land \ \ \)





\(\ds a \circ z\)

\(\RR\)







\(\ds b \circ z\)










As $a$ and $b$ are arbitrary, the result follows by Equivalence Relation is Congruence iff Compatible with Operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(g)}$




