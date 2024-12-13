# 

Source: https://proofwiki.org/wiki/Inverse_of_Group_Commutator

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\sqbrk {g, h}$ denote the commutator of $g$ and $h$.

Then $\sqbrk {g, h}$ is the inverse of $\sqbrk {h, g}$:

$\sqbrk {g, h} = \sqbrk {h, g}^{-1}$


Proof













\(\ds \sqbrk {g, h} \circ \sqbrk {h, g}\)

\(=\)







\(\ds \paren {g^{-1} \circ h^{-1} \circ g \circ h} \circ \paren {h^{-1} \circ g^{-1} \circ h \circ g}\)





Definition of Commutator of Group Elements














\(\ds \)

\(=\)







\(\ds \paren {g^{-1} \circ h^{-1} \circ g \circ h} \circ \paren {g^{-1} \circ h^{-1} \circ g \circ h}^{-1}\)





Inverse of Group Product: General Result














\(\ds \)

\(=\)







\(\ds e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {g^{-1} \circ h^{-1} \circ g \circ h}^{-1} \circ \paren {g^{-1} \circ h^{-1} \circ g \circ h}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {h^{-1} \circ g^{-1} \circ h \circ g} \circ \paren {g^{-1} \circ h^{-1} \circ g \circ h}\)





Inverse of Group Product: General Result














\(\ds \)

\(=\)







\(\ds \sqbrk {h, g} \circ \sqbrk {g, h}\)





Definition of Commutator of Group Elements



$\blacksquare$





