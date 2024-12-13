# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_iff_Normalizer_is_Group



Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.

Then $H$ is normal in $G$ if and only if the normalizer of $H$ is equal to $G$:

$H \lhd G \iff \map {N_G} H = G$


Proof
Sufficient Condition
Let $H$ be normal in $G$.
Then $G$ is trivially the largest subgroup of $G$ in which $H$ is normal.
Thus from Normalizer of Subgroup is Largest Subgroup containing that Subgroup as Normal Subgroup:

$\map {N_G} H = G$
$\Box$


Necessary Condition
Let $\map {N_G} H = G$.
From Subgroup is Normal Subgroup of Normalizer, $H$ is normal in $\map {N_G} H$.
Hence $H$ is normal in $G$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Example $10.10$




