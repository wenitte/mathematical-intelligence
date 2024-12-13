# 

Source: https://proofwiki.org/wiki/Inverse_Relation_Functor_is_Contravariant_Functor

Theorem
Let $\mathbf{Rel}$ be the category of relations.
Let $C: \mathbf{Rel} \to \mathbf{Rel}$ be the inverse relation functor.

Then $C$ is a contravariant functor.


Proof
For any set $X$. we have:














\(\ds C \operatorname{id}_X\)

\(=\)







\(\ds \operatorname{id}_X^{-1}\)





Definition of Inverse Relation Functor














\(\ds \)

\(=\)







\(\ds \set {\tuple {x, x}: \tuple {x, x} \in \operatorname{id}_X}\)





Definition of Inverse Relation














\(\ds \)

\(=\)







\(\ds \operatorname{id}_X\)










For any two relations $\RR \subseteq X \times Y$ and $\SS \subseteq Y \times Z$, we have:














\(\ds C \paren {\SS \circ \RR}\)

\(=\)







\(\ds \paren {\SS \circ \RR}^{-1}\)





Definition of Inverse Relation Functor














\(\ds \)

\(=\)







\(\ds \RR^{-1} \circ \SS^{-1}\)





Inverse of Composite Relation














\(\ds \)

\(=\)







\(\ds C \RR \circ C \SS\)





Definition of Inverse Relation Functor




Hence $C$ is shown to be a contravariant functor.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 1.9$: Exercise $1 \,\text{(c)}$




