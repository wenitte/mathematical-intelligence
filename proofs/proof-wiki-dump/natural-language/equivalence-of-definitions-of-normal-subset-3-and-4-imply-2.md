# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subset/3_and_4_imply_2

Theorem
Let $\struct {G, \circ}$ be a group.
Let $S \subseteq G$.
Let $S$ be a normal subset of $G$ by Definition 3 and Definition 4.

Then $S$ is a normal subset of $G$ by Definition 2.


Proof
By Equivalence of Definitions of Normal Subset: 3 iff 4, $S$ being a normal subset of $G$ by Definition 3 and Definition 4 implies that the following hold:

$(1)\quad \forall g \in G: g \circ S \circ g^{-1} \subseteq S$
$(2)\quad \forall g \in G: g^{-1} \circ S \circ g \subseteq S$
$(3)\quad \forall g \in G: S \subseteq g \circ S \circ g^{-1}$
$(4)\quad \forall g \in G: S \subseteq g^{-1} \circ S \circ g$
By $(1)$ and $(3)$ and definition of set equality:

$\forall g \in G: g \circ S \circ g^{-1} = S$
By $(2)$ and $(4)$ and definition of set equality:

$\forall g \in G: g^{-1} \circ S \circ g = S$
$\blacksquare$





