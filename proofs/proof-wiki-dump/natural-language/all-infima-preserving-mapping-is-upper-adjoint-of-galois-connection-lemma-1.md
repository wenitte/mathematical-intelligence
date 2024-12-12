# 

Source: https://proofwiki.org/wiki/All_Infima_Preserving_Mapping_is_Upper_Adjoint_of_Galois_Connection/Lemma_1

Theorem
Let $\struct {S, \preceq}$ be a complete lattice.
Let $\struct {T, \precsim}$ be an ordered set.
Let $g: S \to T$ be an all infima preserving mapping.

Then:

$g$ is an increasing mapping.


Proof
Define a mapping $d: T \to S$:

$\forall t \in T: \map d t := \map \inf {g^{-1} \sqbrk {t^\succsim} }$
Let $x, y \in S$ such that

$x \preceq y$
By Upper Closure is Decreasing:

$y^\succeq \subseteq x^\succeq$
By Infimum of Upper Closure of Element:

$\map \inf {x^\succeq} = x$ and $\map \inf {y^\succeq} = y$
By definition of all infima preserving mapping:

$g$ preserves the infimum on $x^\succeq$
and:

$g$ preserves the infimum on $y^\succeq$
By definition of infimum on subset preserving mapping:

$\map \inf {\map {g^\to} {x^\succeq} } = \map g x$ and $\map \inf {\map {g^\to} {y^\succeq} } = \map g y$
By Image of Subset under Mapping is Subset of Image:

$\map {g^\to} {y^\succeq} \subseteq \map {g^\to} {x^\succeq}$
Thus by Infimum of Subset:

$\map g x \precsim \map g y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:14




