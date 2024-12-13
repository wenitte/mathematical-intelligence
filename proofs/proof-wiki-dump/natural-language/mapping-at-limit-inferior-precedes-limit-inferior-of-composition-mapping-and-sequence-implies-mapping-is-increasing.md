# 

Source: https://proofwiki.org/wiki/Mapping_at_Limit_Inferior_Precedes_Limit_Inferior_of_Composition_Mapping_and_Sequence_implies_Mapping_is_Increasing

Theorem
Let $\struct {S, \vee_1, \wedge_1, \preceq_1}$ and $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be lattices.
Let $f: S \to T$ be a mapping such that:

for all directed set $\struct {D, \precsim}$ and nets $N:D \to S$ in $S$: $\map f {\liminf N} \preceq_2 \map \liminf {f \circ N}$

Then $f$ is an increasing mapping.


Proof
Let $a, b \in S$ such that

$a \preceq_1 b$
Define $M = \struct {\N, \le}$ being an ordered set.
We will prove that:

$M$ is a directed set.
Let $x, y \in \N$.
Thus by definition of max operation:

$\max \set {x, y} \in \N$
Thus by definition of max operation:

$x \le \max \set {x, y}$ and $y \le \max \set {x, y}$
$\Box$
Define $g = \sequence {c_i}_{i \mathop \in \N} = \tuple {a, b, a, b, \dots}: \N \to S$ being a net in $S$.
By Limit Inferior of Repetition Net:

$\liminf \sequence {c_i}_{i \mathop \in \N} = a \wedge_1 b$
By Preceding iff Meet equals Less Operand:

$\map f {\liminf \sequence {c_i}_{i \mathop \in \N} } = \map f a$
By definition of composition of mappings:

$f \circ g = \sequence {\map f {c_i} }_{i \mathop \in \N} = \tuple {\map f a, \map f b, \map f a, \map f b, \dots}$
By Limit Inferior of Repetition Net:

$\map \liminf {f \circ g} = \map f a \wedge_2 \map f b$
By assumption:

$\map f a \preceq_2 \map f a \wedge_2 \map f b$
By Meet Precedes Operands:

$\map f a \wedge_2 \map f b \preceq_2 \map f a$
By definition of antisymmetry:

$\map f a = \map f a \wedge_2 \map f b$
Thus by Preceding iff Meet equals Less Operand:

$\map f a \preceq_2 \map f b$
$\blacksquare$


Sources
Mizar article WAYBEL17:11




