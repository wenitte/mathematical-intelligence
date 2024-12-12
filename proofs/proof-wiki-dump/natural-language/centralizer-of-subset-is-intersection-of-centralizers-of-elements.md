# 

Source: https://proofwiki.org/wiki/Centralizer_of_Subset_is_Intersection_of_Centralizers_of_Elements

Theorem
Let $\struct {G, \circ}$ be a group.
Let $S \subseteq G$.

Let $\map {C_G} S$ be the centralizer of $S$ in $G$.
Then:

$\ds \map {C_G} S = \bigcap_{x \mathop \in S} \map {C_G} x$
where $\map {C_G} z$ is the centralizer of $x$ in $G$.


Proof













\(\ds \map {C_G} S\)

\(=\)







\(\ds \set {g \in G: \forall x \in S: g \circ x = x \circ g}\)





Definition of Centralizer of Group Subset














\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in S: g \in \map {C_G} x}\)





Definition of Centralizer of Group Element














\(\ds \)

\(=\)







\(\ds \bigcap_{x \mathop \in S} \map {C_G} x\)





Definition of Intersection of Family



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(11)$




