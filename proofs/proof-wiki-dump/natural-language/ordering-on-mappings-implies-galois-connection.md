# 

Source: https://proofwiki.org/wiki/Ordering_on_Mappings_Implies_Galois_Connection

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$ and $d: T \to S$ be mappings such that:

$g$ and $d$ are increasing mappings
and

$d \circ g \preceq I_S$ and $I_T \precsim g \circ d$

Then

$\struct {g, d}$ is Galois connection.
where

$\preceq, \precsim$ denote the orderings on mappings
$I_S$ denotes the identity mapping of $S$
$\circ$ denotes the composition of mappings.


Proof
We will prove that:

$\forall s \in S, t \in T: t \precsim \map g s \iff \map d t \preceq s$
Let $s \in S, t \in T$.
First implication:
Let

$t \precsim \map g s$
By definition of increasing mapping:

$\map d t \preceq \map d {\map g s}$
By definition of ordering on mappings:

$\map {\paren {d \circ g} } s \preceq \map {I_S} s$
By definition of composition:

$\map d {\map g s} \preceq \map {I_S} s$
By definition of identity mapping:

$\map d {\map g s} \preceq s$
Thus by definition of transitivity:

$\map d t \preceq s$

Second implication:
Let

$\map d t \preceq s$
By definition of increasing mapping:

$\map g {\map d t} \precsim \map g s$
By definition of ordering on mappings:

$\map {I_T} t \precsim \map {\paren {g \circ d} } t$
By definition of composition:

$\map {I_T} t \precsim \map g {\map d t}$
By definition of identity mapping:

$t \precsim \map g {\map d t}$
Thus by definition of transitivity:

$t \precsim \map g s$

Thus by definition:

$\struct {g, d}$ is Galois connection.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:19




