# 

Source: https://proofwiki.org/wiki/All_Suprema_Preserving_Mapping_is_Lower_Adjoint_of_Galois_Connection

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $\struct {T, \precsim}$ be a complete lattice.
Let $d: T \to S$ be all suprema preserving mapping.

Then there exists a mapping $g: S \to T$ such that $\tuple {g, d}$ is Galois connection and:

$\forall s \in S: \map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
where

$\min$ denotes the maximum
$d^{-1} \sqbrk {s^\preceq}$ denotes the image of $s^\preceq$ under relation $d^{-1}$
$s^\preceq$ denotes the lower closure of $t$


Proof
Define a mapping $d: T \to S$:

$\forall s \in S: \map g s := \map \sup {d^{-1} \sqbrk {s^\preceq} }$
We will prove as lemma 1 that:

$d$ is an increasing mapping.
Let $x, y \in T$ such that

$x \precsim y$
By Lower Closure is Increasing:

$x^\precsim \subseteq y^\precsim$
By Supremum of Lower Closure of Element:

$\map \sup {x^\precsim} = x$ and $\map \sup {y^\precsim} = y$
By definition of mapping preserves all suprema:

$d$ preserves the supremum on $x^\precsim$ and $d$ preserves the supremum on $y^\precsim$
By definition of mapping preserves the supremum on set:

$\map \sup {\map {d^\to} {x^\precsim} } = \map d x$ and $\map \sup {\map {d^\to} {y^\precsim} } = \map d y$
By Image of Subset under Mapping is Subset of Image:

$\map {d^\to} {x^\precsim} \subseteq \map {d^\to} {y^\precsim}$
Thus by Supremum of Subset:

$\map d x \preceq \map d y$
This ends the proof of lemma 1.

We will prove as lemma 2 that

$\forall s \in S: \map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
Let $s \in S$.
By definition of $g$:

$\map g s = \map \sup {d^{-1} \sqbrk {s^\preceq} }$
By Image of Inverse Image:

$d \sqbrk {d^{-1} \sqbrk {s^\preceq} } \subseteq s^\preceq$
By Supremum of Subset and Supremum of Lower Closure of Element:

$\map \sup {d \sqbrk {d^{-1} \sqbrk {s^\preceq} } } \preceq \map \sup {s^\preceq} = s$
By definition of lower closure of element:

$\map \sup {d \sqbrk {d^{-1} \sqbrk {s^\preceq} } } \in s^\preceq$
By definition of complete lattice:

$d^{-1} \sqbrk {s^\preceq}$ admits a supremum
By definition of mapping preserves the supremum:

$\map \sup {d \sqbrk {d^{-1} \sqbrk {s^\preceq} } } = \map d {\map g s}$
Thus by definition of image of set:

$\map g s \in d^{-1} \sqbrk {s^\preceq}$
Thus

$\map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
This ends the proof of lemma 2.

Thus by Galois Connection is Expressed by Maximum:

$\tuple {g, d}$ is a Galois connection.
Thus by lemma 2:

$\forall s \in S: \map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:15




