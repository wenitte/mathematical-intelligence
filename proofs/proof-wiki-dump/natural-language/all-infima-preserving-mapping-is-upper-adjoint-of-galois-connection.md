# 

Source: https://proofwiki.org/wiki/All_Infima_Preserving_Mapping_is_Upper_Adjoint_of_Galois_Connection



Theorem
Let $\struct {S, \preceq}$ be a complete lattice.
Let $\struct {T, \precsim}$ be an ordered set.
Let $g: S \to T$ be an all infima preserving mapping.

Then there exists a mapping $d: T \to S$ such that $\struct {g, d}$ is Galois connection and:

$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
where:

$\min$ denotes the minimum
$g^{-1} \sqbrk {t^\succsim}$ denotes the image of $t^\succsim$ under relation $g^{-1}$
$t^\succsim$ denotes the upper closure of $t$


Proof
Lemma 1
$g$ is an increasing mapping.
$\Box$

Let us define a mapping $d: T \to S$ as:

$\forall t \in T: \map d t := \map \inf {g^{-1} \sqbrk {t^\succsim} }$


Lemma 2
$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
$\Box$

Thus by Galois Connection is Expressed by Minimum:

$\struct {g, d}$ is a Galois connection.
Thus by lemma $2$:

$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:14




