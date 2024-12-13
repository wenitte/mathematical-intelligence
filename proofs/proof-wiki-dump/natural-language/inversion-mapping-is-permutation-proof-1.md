# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Permutation/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\iota: G \to G$ be the inversion mapping on $G$.

Then $\iota$ is a permutation on $G$.


Proof
The inversion mapping on $G$ is the mapping $\iota: G \to G$ defined by:

$\forall g \in G: \map \iota g = g^{-1}$
where $g^{-1}$ is the inverse or $g$.
By Inversion Mapping is Involution, $\iota$ is an involution:

$\forall g \in G: \map \iota {\map \iota g} = g$
The result follows from Involution is Permutation.
$\blacksquare$





