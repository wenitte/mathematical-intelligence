# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Union/Proof_2

Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cup Z} = \paren {X \circ Y} \cup \paren {X \circ Z}$
$\paren {Y \cup Z} \circ X = \paren {Y \circ X} \cup \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof
Consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists g \in X$
Then:

$\forall S \subseteq G: X \circ S = \map \RR S$
Then:














\(\ds X \circ \paren {Y \cup Z}\)

\(=\)







\(\ds \map \RR {Y \cup Z}\)




















\(\ds \)

\(=\)







\(\ds \map \RR y \cup \map \RR Z\)





Image of Union under Relation














\(\ds \)

\(=\)







\(\ds \paren {X \circ Y} \cup \paren {X \circ Z}\)










Next, consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists h \in X$
Then:

$\forall S \subseteq G: S \circ X = \map \RR S$
Then:














\(\ds \paren {Y \cup Z} \circ X\)

\(=\)







\(\ds \map \RR {Y \cup Z}\)




















\(\ds \)

\(=\)







\(\ds \map \RR Y \cup \map \RR Z\)





Image of Union under Relation














\(\ds \)

\(=\)







\(\ds \paren {Y \circ X} \cup \paren {Z \circ X}\)









$\blacksquare$





