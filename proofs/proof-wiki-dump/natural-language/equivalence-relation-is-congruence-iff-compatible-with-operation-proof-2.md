# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_is_Congruence_iff_Compatible_with_Operation/Proof_2

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\RR$ be an equivalence relation on $S$.

Then $\RR$ is a congruence relation for $\circ$ if and only if:










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {x \circ z} \mathrel \RR \paren {y \circ z}\)




















\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {z \circ x} \mathrel \RR \paren {z \circ y}\)









That is, if and only if $\RR$ is compatible with $\circ$.


Proof
We have that an equivalence relation is a (symmetric) preordering.
Thus the result Preordering of Products under Operation Compatible with Preordering can be applied directly.
$\blacksquare$





