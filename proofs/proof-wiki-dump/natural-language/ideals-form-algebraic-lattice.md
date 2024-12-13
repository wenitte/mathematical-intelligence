# 

Source: https://proofwiki.org/wiki/Ideals_form_Algebraic_Lattice

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $I = \struct {\map {\operatorname{Ids} } L, \precsim}$ be an inclusion ordered set
where

$\map {\operatorname{Ids} } L$ denotes the set of all ideals in $L$
$\mathord \precsim = \mathord \subseteq \cap \paren {\map {\operatorname{Ids} } L \times \map {\operatorname{Ids} } L}$

Then $I$ is an algebraic lattice.


Proof
By definition of subset:

$\map {\operatorname{Ids} } L \subseteq \powerset S$
where $\powerset S$ denotes the power set of $S$.
Define:

$P = \struct {\powerset S, \precsim'}$
where:

$\mathord \precsim' = \mathord\subseteq \cap \paren {\powerset S \times \powerset S}$
By Ideals are Continuous Lattice Subframe of Power Set:

$I$ is an continuous lattice subframe of $P$.
By Lattice of Power Set is Algebraic:

$P$ is an algebraic lattice.
Thus by Continuous Lattice Subframe of Algebraic Lattice is Algebraic Lattice:

$I$ is an algebraic lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:10




