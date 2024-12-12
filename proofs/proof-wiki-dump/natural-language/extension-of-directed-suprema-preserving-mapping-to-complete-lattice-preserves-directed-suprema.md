# 

Source: https://proofwiki.org/wiki/Extension_of_Directed_Suprema_Preserving_Mapping_to_Complete_Lattice_Preserves_Directed_Suprema

Theorem
Let $L_1 = \struct {S_1, \preceq_1}$ and $L_2 = \struct {S_2, \preceq_2}$ be ordered sets.
Let $L_3 = \struct {S_3, \preceq_3}$ be a complete lattice.
Suppose that

$L_2$ is directed suprema inheriting ordered subset of $L_3$.
Let $f:S_1 \to S_2$ be a mapping such that

$f$ preserves directed suprema.

Then
$f:S_1 \to S_3$ preserves directed suprema.


Proof
By definition of ordered subset:

$S_2 \subseteq S_3$
Then define $g = f: S_1 \to S_3$
Let $X$ be a directed subset of $S_1$ such that

$X$ admits a supremum in $L_1$.
Thus by definition of complete lattice:

$g \sqbrk X$ admits a supremum in $L_3$.
By definition of mapping preserves directed suprema:

$f \sqbrk X$ admits a supremum in $L_2$ and $\map {\sup_{L_2} } {f \sqbrk X} = \map f {\sup_{L_1} X}$
By Directed Suprema Preserving Mapping is Increasing:

$f$ is an increasing mapping.
By Image of Directed Subset under Increasing Mapping is Directed:

$f \sqbrk X$ is directed.
Thus by definition of directed suprema inheriting:

$\map {\inf_{L_3} } {g \sqbrk X} = \map g {\inf_{L_1} X}$
$\blacksquare$


Sources
Mizar article WAYBEL13:22




