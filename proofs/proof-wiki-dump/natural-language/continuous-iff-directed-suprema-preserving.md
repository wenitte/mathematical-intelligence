# 

Source: https://proofwiki.org/wiki/Continuous_iff_Directed_Suprema_Preserving



Theorem
Let $\struct {S, \preceq_1, \tau_1}$ and $\struct {T, \preceq_2, \tau_2}$ be complete topological lattices with Scott topologies.
Let $f: S \to T$ be a mapping.

Then $f$ is continuous if and only if $f$ preserves directed suprema.


Proof
Sufficient Condition
Assume that

$f$ is continuous.
By Continuous iff Mapping at Limit Inferior Precedes Limit Inferior of Composition of Mapping and Sequence:

for all directed set $\struct {D, \precsim}$ and net $N:D \to S$ in $S$: $\map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$
Thus by Mapping at Limit Inferior Precedes Limit Inferior of Composition Mapping and Sequence implies Mapping Preserves Directed Suprema:

$f$ preserves directed suprema.
$\Box$

Necessary Condition
Thus by Mapping Preserves Directed Suprema implies Mapping is Continuous:

if $f$ preserves directed suprema, then $f$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:22




