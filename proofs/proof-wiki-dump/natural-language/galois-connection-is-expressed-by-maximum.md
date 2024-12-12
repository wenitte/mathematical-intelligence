# 

Source: https://proofwiki.org/wiki/Galois_Connection_is_Expressed_by_Maximum



Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$, $d: T \to S$ be mappings.

Then $\tuple {g, d}$ is a Galois connection if and only if

$d$ is an increasing mapping and:
$\forall s \in S: \map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
where:

$\max$ denotes the maximum
$d^{-1} \sqbrk {s^\preceq}$ denotes the image of $s^\preceq$ under relation $d^{-1}$
$s^\preceq$ denotes the lower closure of $s$


Proof
Sufficient Condition
Let $\tuple {g, d}$ be a Galois connection.
Thus by definition of Galois connection:

$d$ is an increasing mapping.
Let $s \in S$.
By definition of reflexivity:

$\map g s \preceq \map g s$
By definition of Galois connection:

$\map d {\map g s} \preceq s$
By definition of lower closure:

$\map d {\map g s} \in s^\preceq$
By definition of image of set under relation:

$\map g s \in d^{-1} \sqbrk {s^\preceq}$
By definition of upper bound:

$\forall t \in T: t$ is an upper bound for $d^{-1} \sqbrk {s^\preceq} \implies \map g s \precsim t$
We will prove that:

$\map g s$ is an upper bound for $d^{-1} \sqbrk {s^\preceq}$
Let $t \in d^{-1} \sqbrk {s^\preceq}$.
By definition of image of set:

$\map d t \in s^\preceq$
By definition of lower closure of element:

$\map d t \preceq s$
Thus by definition of Galois connection:

$t \precsim \map g s$

By definition of supremum:

$d^{-1} \sqbrk {s^\preceq}$ admits a supremum
and

$\map \sup {d^{-1} \sqbrk {s^\preceq} } = \map g s$
Thus:

$\map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
$\Box$


Necessary Condition
Let $d: T \to S$ be an increasing mapping.
Let:

$\forall s \in S: \map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
We will prove that:

$g$ is an increasing mapping.
Let $x, y \in S$ such that:

$x \preceq y$
By Lower Closure is Increasing:

$x^\preceq \subseteq y^\preceq$
By Preimage of Subset is Subset of Preimage:

$d^{-1} \sqbrk {x^\preceq} \subseteq d^{-1} \sqbrk {y^\preceq}$
By assumption:

$\map g s = \map \max {d^{-1} \sqbrk {x^\preceq} } = \map \sup {d^{-1} \sqbrk {x^\preceq} }$
and:

$\map g y = \map \max {d^{-1} \sqbrk {y^\preceq} } = \map \sup {d^{-1} \sqbrk {y^\preceq} }$
By Supremum of Subset:

$\map g s \preceq \map g y$
Thus by definition:

$g$ is an increasing mapping.

Thus:

$d$ is an increasing mapping.
We will prove that:

$\forall s \in S, t \in T:  t \precsim \map g s \iff \map d t \preceq s$
Let $s \in S, t \in T$.
Second implication:
Let $\map d t \preceq s$.
By definition of lower closure of element:

$\map d t \in s^\preceq$
By definition of image of set:

$t \in d^{-1} \sqbrk {s^\preceq}$
By assumption:

$\map g s = \map \max {d^{-1} \sqbrk {s^\preceq} } = \map \sup {d^{-1} \sqbrk {s^\preceq} }$
By definition of supremum:

$\map g s$ is an upper bound for $d^{-1} \sqbrk {s^\preceq}$
Thus by definition of upper bound:

$t \precsim \map g s$

First implication:
Let $t \precsim \map g s$
By assumption:

$\map g s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
By greatest element of set:

$\map g s \in d^{-1} \sqbrk {s^\preceq}$
By definition of image of set:

$\map d {\map g s} \in s^\preceq$
By definition of lower closure of element:

$\map d {\map g s} \preceq s$
By definition of increasing mapping:

$\map d t \preceq \map d {\map g s}$
Thus by definition of transitivity:

$\map d t \preceq s$

Thus by definition:

$\tuple {g, d}$ is a Galois connection.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:11




