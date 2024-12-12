# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Commutator_of_Group_Elements



Theorem
The following definitions of the concept of Commutator of Group Elements are equivalent:

Definition $1$
The commutator of $g$ and $h$ is the element of $G$ defined and denoted:

$\sqbrk {g, h} := g^{-1} \circ h^{-1} \circ g \circ h$
Definition $2$
The commutator of $g$ and $h$ is the element $c$ of $G$ with the property:

$h \circ g \circ c := g \circ h$


Proof
Throughout the following, Group Axiom $\text G 1$: Associativity is assumed implicitly.
Let $g, h \in G$ be arbitrary elements of $G$.

Let $c$ be the commutator of $g$ and $h$ by definition $2$.
Then we have:














\(\ds h \circ g \circ c\)

\(=\)







\(\ds g \circ h\)





Definition 2 of Commutator of Group Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds h^{-1} \circ h \circ g \circ c\)

\(=\)







\(\ds h^{-1} \circ g \circ h\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds g \circ c\)

\(=\)







\(\ds h^{-1} \circ g \circ h\)





Definition of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds g^{-1} \circ g \circ c\)

\(=\)







\(\ds g^{-1} \circ h^{-1} \circ g \circ h\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds c\)

\(=\)







\(\ds g^{-1} \circ h^{-1} \circ g \circ h\)





Definition of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds c\)

\(=\)







\(\ds \sqbrk {g, h}\)





Definition 1 of Commutator of Group Elements



$\blacksquare$





