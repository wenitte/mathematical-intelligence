# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Intersection/Proof_2

Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
$\paren {Y \cap Z} \circ X \subseteq \paren {Y \circ X} \cap \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof
Consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists g \in X$
Then:

$\forall S \subseteq G: X \circ S = \RR \sqbrk S$
Then:














\(\ds X \circ \paren {Y \cap Z}\)

\(=\)







\(\ds \RR \sqbrk {Y \cap Z}\)




















\(\ds \)

\(\subseteq\)







\(\ds \RR \sqbrk Y \cap \RR \sqbrk Z\)





Image of Intersection under Relation














\(\ds \)

\(=\)







\(\ds \paren {X \circ Y} \cap \paren {X \circ Z}\)










Next, consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists h \in X$
Then:

$\forall S \subseteq G: S \circ X = \RR \sqbrk S$
Then:














\(\ds \paren {Y \cap Z} \circ X\)

\(=\)







\(\ds \RR \sqbrk {Y \cap Z}\)




















\(\ds \)

\(\subseteq\)







\(\ds \RR \sqbrk Y \cap \RR \sqbrk Z\)





Image of Intersection under Relation














\(\ds \)

\(=\)







\(\ds \paren {Y \circ X} \cap \paren {Z \circ X}\)









$\blacksquare$





