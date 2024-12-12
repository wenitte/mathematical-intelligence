# 

Source: https://proofwiki.org/wiki/Galois_Connection_is_Expressed_by_Minimum



Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$, $d: T \to S$ be mappings.

Then $\tuple {g, d}$ is a Galois connection if and only if:

$g$ is an increasing mapping and
$\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
where

$\min$ denotes the minimum
$g^{-1} \sqbrk {t^\succsim}$ denotes the image of $t^\succsim$ under relation $g^{-1}$
$t^\succsim$ denotes the upper closure of $t$


Proof
Sufficient Condition
Let $\tuple {g, d}$ be a Galois connection.
Thus by definition of Galois connection:

$g$ is an increasing mapping
Let $t \in T$.
By definition of reflexivity:

$\map d t \preceq \map d t$
By definition of Galois connection:

$t \precsim \map g {\map d t}$
By definition of upper closure:

$\map g {\map d t} \in t^\succsim$
By definition of image of set under relation:

$\map d t \in g^{-1} \sqbrk {t^\succsim}$
By definition of lower bound:

$\forall s \in S: s$ is lower bound for $g^{-1} \sqbrk {t^\succsim} \implies s \preceq \map d t$
We will prove that:

$\map d t$ is lower bound for $g^{-1} \sqbrk {t^\succsim}$
Let $s \in g^{-1} \sqbrk {t^\succsim}$.
By definition of image of set:

$\map g s \in t^\succsim$
By definition of upper closure of element:

$t \precsim \map g s$
Thus by definition of Galois connection:

$\map d t \preceq s$

By definition of infimum:

$g^{-1} \sqbrk {t^\succsim}$ admits an infimum
and

$\map \inf {g^{-1} \sqbrk {t^\succsim} } = \map d t$
Thus:

$\map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
$\Box$


Necessary Condition
Let $g: S \to T$ be an increasing mapping.
Let $\forall t \in T: \map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
Thus:

$g$ is increasing mapping.
We will prove that

$d$ is increasing mapping.
Let $x, y \in T$ such that

$x \precsim y$
By Upper Closure is Decreasing:

$y^\succsim \subseteq x^\succsim$
By Preimage of Subset is Subset of Preimage:

$g^{-1} \sqbrk {y^\succsim} \subseteq g^{-1} \sqbrk {x^\succsim}$
By assumption

$\map d x = \map \min {g^{-1} \sqbrk {x^\succsim} } = \map \inf {g^{-1} \sqbrk {x^\succsim} }$
and

$\map d y = \map \min {g^{-1} \sqbrk {y^\succsim} } = \map \inf {g^{-1} \sqbrk {y^\succsim} }$
By Infimum of Subset:

$\map d x \preceq \map d y$
Thus by definition:

$d$ is an increasing mapping.

We will prove that

$\forall s \in S, t \in T:  t \precsim \map g s \iff \map d t \preceq s$
Let $s \in S, t \in T$.
First implication:
Let $t \precsim \map g s$.
By definition of upper closure of element:

$\map g s \in t^\succsim$
By definition of image of set:

$s \in g^{-1} \sqbrk {t^\succsim}$
By assumption:

$\map d t = \map \min {g^{-1} \sqbrk {t^\succsim} } = \map \inf {g^{-1} \sqbrk {t^\succsim} }$
By definition of infimum:

$\map d t$ is lower bound for $g^{-1} \sqbrk {t^\succsim}$
Thus by definition of lower bound:

$\map d t \preceq s$

Second implication:
Let $\map d t \preceq s$
By assumption:

$\map d t = \map \min {g^{-1} \sqbrk {t^\succsim} }$
By definition of smallest element of set:

$\map d t \in g^{-1} \sqbrk {t^\succsim}$
By definition of image of set:

$\map g {\map d t} \in t^\succsim$
By definition of upper closure of element:

$t \precsim \map g {\map d t}$
By definition of increasing mapping:

$\map g {\map d t} \precsim \map g s$
Thus by definition of transitivity:

$t \precsim \map g s$

Thus by definition:

$\tuple {g, d}$ is Galois connection.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:10




