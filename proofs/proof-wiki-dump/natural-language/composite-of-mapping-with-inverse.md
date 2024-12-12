# 

Source: https://proofwiki.org/wiki/Composite_of_Mapping_with_Inverse



Theorem
Let $f: S \to T$ be a mapping.

Then:

$\forall x \in S: \map {f^{-1} \circ f} x = \eqclass x {\RR_f}$
where:

$\RR_f$ is the equivalence induced by $f$
$\eqclass x {\RR_f}$ is the $\RR_f$-equivalence class of $x$.


Proof
Let $y = \map f x$.
Then by the definition of induced equivalence:

$x \in \eqclass x {\RR_f}$
By the definition of the inverse of a mapping:

$f^{-1} = \set {\tuple {y, x}: \tuple {x, y} \in f}$
Thus:

$\eqclass x {\RR_f} = \set {s \in \Dom f: \map f s = \map f x}$
By definition:

$\map {f^{-1} } y = \eqclass x {\RR_f}$
Hence the result.
$\blacksquare$


Also see
Composite of Inverse of Mapping with Mapping


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{AA}$: Relations




