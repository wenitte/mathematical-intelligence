# 

Source: https://proofwiki.org/wiki/Galois_Connection_Implies_Order_on_Mappings

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$ and $d: T \to S$ be mappings such that

$\tuple {g, d}$ is Galois connection.

Then $d \circ g \preceq I_S$ and $I_T \precsim g \circ d$
where

$\preceq, \precsim$ denote the orderings on mappings,
$I_S$ denotes the identity mapping of $S$


Proof
Let $s \in S$.
By definition of reflexivity:

$\map g s \precsim \map g s$
By definition of Galois connection:

$\map d {\map g s} \preceq s$
By definition of composition:

$\map {\paren {d \circ g} } s \preceq s$
By definition of identity mapping:

$\map {\paren {d \circ g} } s \preceq \map {I_S} s$
Thus by definition of order on mappings:

$d \circ g \preceq I_S$

Let $t \in T$.
By definition of reflexivity:

$\map d t \preceq \map d t$
By definition of Galois connection:

$t \precsim \map g {\map d t}$
By definition of composition:

$t \precsim \map {\paren {g \circ d} } t$
By definition of identity mapping:

$\map {I_T} t \precsim \map {\paren {g \circ d} } t$
Thus by definition of order on mappings:

$I_T \precsim g \circ d$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:18




