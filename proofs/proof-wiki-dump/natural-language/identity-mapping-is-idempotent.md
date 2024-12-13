# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Idempotent

Theorem
Let $S$ be a set.
Let $I_S: S \to S$ be the identity mapping on $S$.
Then $I_S$ is idempotent:

$I_S \circ I_S = I_S$


Proof
From Identity Mapping is Left Identity:

$I_S \circ f = f$
for all mappings $f: S \to S$.
From Identity Mapping is Right Identity:

$f \circ I_S = f$
for all mappings $f: S \to S$.
Substituting $I_S$ for $f$ in either one and the result follows.
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions: Theorem $14.7$




