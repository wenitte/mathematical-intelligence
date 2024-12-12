# 

Source: https://proofwiki.org/wiki/Extension_of_Infima_Preserving_Mapping_to_Complete_Lattice_Preserves_Infima

Theorem
Let $L_1 = \struct {S_1, \preceq_1}$, $L_2 = \struct {S_2, \preceq_2}$ be ordered sets.
Let $L_3 = \struct {S_3, \preceq_3}$ be a complete lattice.

Suppose that.

$L_2$ is an infima inheriting ordered subset of $L_3$.
Let $f: S_1 \to S_2$ be a mapping such that:

$f$ preserves infima.

Then
$f: S_1 \to S_3$ preserves infima.


Proof
By definition of ordered subset:

$S_2 \subseteq S_3$
Then define $g = f:S_1 \to S_3$
Let $X$ be a subset of $S_1$ such that

$X$ admits a infimum in $L_1$.
Thus by definition of complete lattice:

$g \sqbrk X$ admits a infimum in $L_3$.
By definition of mapping preserves infima:

$f \sqbrk X$ admits a infimum in $L_2$ and $\map {\inf_{L_2} } {f \sqbrk X} = \map f {\map {\inf_{L_1} } X}$
Thus by definition of infima inheriting:

$\map {\inf_{L_3} } {g \sqbrk X} = \map g {\inf_{L_1} } X$
$\blacksquare$


Sources
Mizar article WAYBEL13:21




