# 

Source: https://proofwiki.org/wiki/Ideals_are_Continuous_Lattice_Subframe_of_Power_Set



Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $I = \paren {\map {\operatorname{Ids} } L, \precsim}$ be an inclusion ordered set
where

$\map {\operatorname{Ids} } L$ denotes the set of all ideals in $L$,
$\mathord \precsim = \mathord \subseteq \cap \paren {\map {\operatorname{Ids} } L \times \map {\operatorname{Ids} } L}$
Let $P = \struct {\powerset S, \precsim'}$ be an inclusion ordered set
where

$\powerset S$ denotes the power set of $S$,
$\mathord \precsim' = \mathord \subseteq \cap \paren {\powerset S \times \powerset S}$

Then $I$ is continuous lattice subframe of $P$.


Proof
By definition of subset:

$\map {\operatorname{Ids} } L \subseteq \powerset S$
Then

$\mathord \precsim = \mathord \precsim' \cap \paren {\map {\operatorname{Ids} } L \times \map {\operatorname{Ids} } L}$
Hence $I$ is ordered subset of $P$.


Infima Inheriting
Let $A$ be a subset of $\map {\operatorname{Ids} } L$ such that:

$A$ admits an infimum in $P$.
By proof of Power Set is Complete Lattice:

$\ds \inf_P A = \bigcap A$
By Intersection of Semilattice Ideals is Ideal/Set of Sets:

$\ds \inf_P A \in \map {\operatorname{Ids} } L$
Thus by Infimum in Ordered Subset:

$A$ admits an infimum in $I$ and $\ds \inf_I A = \inf_P A$
Hence $I$ inherits infima.
$\Box$


Directed Suprema Inheriting
Let $D$ be a directed subset of $\map {\operatorname{Ids} } L$ such that:

$D$ admits a supremum in $P$.
By proof of Power Set is Complete Lattice:

$\ds \sup_P D = \bigcup D$

We will prove that:

$\ds \bigcup D$ is an ideal in $L$.


Directed
Let $\ds x, y \in \bigcup D$.
By definition of union:

$\exists I_1 \in D: x \in I_1$
and

$\exists I_2 \in D: y \in I_2$
By definition of directed:

$\exists I \in D: I_1 \precsim I \land I_2 \precsim I$
By definition of $\precsim$:

$I_1 \subseteq I$ and $I_2 \subseteq I$
By definition of subset:

$x, y \in I$
By definition of directed:

$\exists z \in I: x \preceq z \land y \preceq z$
Thus by definition of union:

$\ds \exists z \in \bigcup D: x \preceq z \land y \preceq z$
$\Box$


Lower Section
Let $\ds x \in \bigcup D$, $y \in S$ such that:

$y \preceq x$
By definition of union:

$\exists I \in D: x \in I$
By definition of lower section:

$y \in I$
Thus by definition of union:

$\ds y \in \bigcup D$
$\Box$


Non-Empty Set
By definition of directed:

$D$ is non-empty and $\forall I \in D: I$ is non-empty.
Thus by definitions of non-empty set and union:

$\ds \bigcup D$ is non-empty.
$\Box$

By definition of $\operatorname{Ids}$:

$\ds \bigcup D \in \map {\operatorname{Ids} } L$
Hence $I$ inherits directed suprema.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:8




