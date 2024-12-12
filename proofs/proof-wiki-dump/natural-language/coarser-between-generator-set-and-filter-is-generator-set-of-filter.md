# 

Source: https://proofwiki.org/wiki/Coarser_Between_Generator_Set_and_Filter_is_Generator_Set_of_Filter

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $F$ be a filter on $L$.
Let $G$ be a generator set of $F$.
Let $A$ be a subset of $S$ such that

$G$ is coarser than $A$ and $A$ is coarser than $F$.

Then $A$ is generator set of $F$.


Proof
By definition of generator set of filter:

$F = \paren {\map {\operatorname {fininfs} } G}^\succeq$
where

$\map {\operatorname {fininfs} } G$ denotes the finite infima set of $G$,
$A^\succeq$ denotes the upper closure of $A$.
By Finite Infima Set of Coarser Subset is Coarser than Finite Infima Set:

$\map {\operatorname {fininfs} } G$ is coarser than $\map {\operatorname {fininfs} } A$
Thus by Upper Closure of Coarser Subset is Subset of Upper Closure:

$F \subseteq \paren {\map {\operatorname {fininfs} } A}^\succeq$
By filter in ordered set:

$F$ is an upper section.
By Set Coarser than Upper Section is Subset:

$A \subseteq F$
Thus by Finite Infima Set and Upper Closure is Smallest Filter:

$\paren {\map {\operatorname {fininfs} } A}^\succeq \subseteq F$
Thus by definition of set equality:

$F = \paren {\map {\operatorname {fininfs} } A}^\succeq$
Hence $A$ is generator set of $F$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article YELLOW12:30




