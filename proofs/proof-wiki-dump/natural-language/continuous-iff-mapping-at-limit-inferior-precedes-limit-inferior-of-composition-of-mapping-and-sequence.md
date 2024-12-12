# 

Source: https://proofwiki.org/wiki/Continuous_iff_Mapping_at_Limit_Inferior_Precedes_Limit_Inferior_of_Composition_of_Mapping_and_Sequence



Theorem
Let $\struct {S, \preceq_1, \tau_1}$ and $\struct {T, \preceq_2, \tau_2}$ be complete topological lattices with Scott topologies.
Let $f: S \to T$ be a mapping.

Then $f$ is continuous if and only if:

for all directed set $\struct {D, \precsim}$ and net $N: D \to S$ in $S$: $\map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$


Proof
Sufficient Condition
Assume that

$f$ is continuous.
Let $\struct {D, \precsim}$ be a directed set.
Let $N: D \to S$ be a net in $S$.
Aiming for a contradiction, suppose

$\map f {\liminf N} \npreceq_2 \map \liminf {f \circ N}$
By definition of lower closure of element:

$\map f {\liminf N} \notin \paren {\map \liminf {f \circ N} }^{\preceq_2}$
By definition of relative complement:

$\map f {\liminf N} \in \relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} }$
By Lower Closure of Element is Topologically Closed in Scott Topological Ordered Set:

$\paren {\map \liminf {f \circ N} }^{\preceq_2}$ is closed.
By definition of closed set:

$\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} }$ is open.
By definition of continuous:

$f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$ is open.
By Open iff Upper and with Property (S) in Scott Topological Lattice:

$f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$ has property (S).
By Set of Infima for Sequence is Directed:

$X := \set {\map \inf {N \sqbrk {\map \precsim j} }: j \in D}$ is directed.
By definition of limit inferior:

$\liminf N = \sup X$
By definition of preimage of set:

$\liminf N \in f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$
By definition of property (S):

$\exists y \in X:\forall x \in X: y \preceq_1 x \implies x \in f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$
We have:

$\exists j \in D: y = \map \inf {N \sqbrk {\map \precsim j} }$
By definition of reflexivity:

$y \preceq_1 y$
Then:

$y \in f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$
Define $y' := \map \inf {\paren {f \circ N} \sqbrk {\map \precsim j} }$
Define $X' := \set {\map \inf {\paren {f \circ N} \sqbrk {\map \precsim j} }: j \in D}$
By Mapping is Increasing implies Mapping at Infimum for Sequence Precedes Infimum for Composition of Mapping and Sequence:

$\map f y \preceq_2 y'$
By definition of $X'$:

$y' \in X'$
By definitions of supremum and upper bound:

$y' \preceq_2 \sup X'$
By definition of limit inferior:

$\map \liminf {f \circ N} = \sup X'$
By definition of transitivity:

$\map f y \preceq_2 \map \liminf {f \circ N}$
By definition of lower closure of element:

$\map f y \in \paren {\map \liminf {f \circ N} }^{\preceq_2}$
By definition of preimage of set:

$y \in f^{-1} \sqbrk {\paren {\map \liminf {f \circ N} }^{\preceq_2} }$
By Complement of Preimage equals Preimage of Complement:

$f^{-1} \sqbrk {\relcomp T {\paren {\map \liminf {f \circ N} }^{\preceq_2} } } = \relcomp S {f^{-1} \sqbrk {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$
Thus this contradicts $y \in \relcomp S {f^{-1} \sqbrk {\paren {\map \liminf {f \circ N} }^{\preceq_2} } }$
$\Box$


Necessary Condition
Assume that

for all directed set $\struct {D, \precsim}$ and net $N: D \to S$ in $S$: $\map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$
By Mapping at Limit Inferior Precedes Limit Inferior of Composition Mapping and Sequence implies Mapping Preserves Directed Suprema:

$f$ preserves directed suprema.
Thus by Mapping Preserves Directed Suprema implies Mapping is Continuous:

$f$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:21




