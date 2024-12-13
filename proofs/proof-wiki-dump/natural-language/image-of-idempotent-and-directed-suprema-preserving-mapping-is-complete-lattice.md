# 

Source: https://proofwiki.org/wiki/Image_of_Idempotent_and_Directed_Suprema_Preserving_Mapping_is_Complete_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $f:S \to S$ be a mapping that is idempotent and preserves directed suprema.
Let $F = \struct {f \sqbrk S, \precsim}$ be an ordered subset of $L$.

Then $F$ inherits directed suprema and is complete lattice.


Proof
We will prove that

$F$ inherits directed suprema.
Let $D$ be a directed subset of $f \sqbrk S$ such that

$D$ admits a supremum in $L$.
By definition of ordered subset:

$D$ is directed in $L$.
By definition of mapping preserves directed suprema:

$\map {\sup_L} {f \sqbrk D} = \map f {\sup_L D}$
By definition of idempotent mapping:

$f \sqbrk D = D$
Thus by definition of image of set:

$\sup_L D \in f \sqbrk S$
$\Box$

By definition of idempotent mapping:

$f \sqbrk S = \set {x \in S: \map f x = x}$
By Directed Suprema Preserving Mapping is Increasing:

$f$ is an increasing mapping.
Thus by Image under Increasing Mapping equal to Special Set is Complete Lattice:

$F$ is complete lattice.
$\blacksquare$


Sources
Mizar article YELLOW_2:35




