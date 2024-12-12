# 

Source: https://proofwiki.org/wiki/All_Infima_Preserving_Mapping_is_Upper_Adjoint_of_Galois_Connection/Lemma_2

Theorem
Let $\struct {S, \preceq}$ be a complete lattice.
Let $\struct {T, \precsim}$ be an ordered set.
Let $g: S \to T$ be an all infima preserving mapping.
Let us define a mapping $d: T \to S$ as:

$\forall t \in T: \map d t := \map \inf {g^{-1} \sqbrk {t^\succsim} }$

Then:

$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$


Proof
$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
Let $t \in T$.
By definition of $d$:

$\map d t = \map \inf {g^{-1} \sqbrk {t^\succsim} }$
By Image of Inverse Image:

$g \sqbrk {g^{-1} \sqbrk {t^\succsim} } \subseteq t^\succsim$
By Infimum of Subset and Infimum of Upper Closure of Element:

$t = \map \inf {t^\succsim} \precsim \map \inf {g \sqbrk {g^{-1} \sqbrk {t^\succsim} } }$
By definition of upper closure of element:

$\map \inf {g \sqbrk {g^{-1} \sqbrk {t^\succsim} } } \in t^\succsim$
By definition of complete lattice:

$g^{-1} \sqbrk {t^\succsim}$ admits an infimum
By definitions mapping preserves the infimum:

$\map \inf {g \sqbrk {g^{-1} \sqbrk {t^\succsim} } } = \map g {\map d t}$
Thus by definition of image of set:

$\map d t \in g^{-1} \sqbrk {t^\succsim}$
Thus

$\map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:14




