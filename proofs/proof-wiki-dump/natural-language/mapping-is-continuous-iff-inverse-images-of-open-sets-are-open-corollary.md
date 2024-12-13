# 

Source: https://proofwiki.org/wiki/Mapping_is_Continuous_iff_Inverse_Images_of_Open_Sets_are_Open/Corollary



Theorem
Let $X$ and $Y$ be normed vector spaces.
Let $f : X \to Y$ be a mapping.

Then:

$f$ is continuous on $X$
if and only if:

for every $F$ closed in $Y$, $\map {f^{-1}} F$ is closed in $X$.


Proof
Sufficient Condition
Suppose that for every closed $F$ in $Y$, $\map {f^{-1}} F$ is closed in $X$.
Let $V$ be open in $Y$.
By definition, $Y \setminus V$ is closed in $Y$.
By assumption, $\map {f^{-1}} {Y \setminus V}$ is closed in $X$.
We have that:














\(\ds \map {f^{-1} } {Y \setminus V}\)

\(=\)







\(\ds \map {f^{-1} } Y \setminus \map {f^{-1} } V\)





Preimage of Set Difference under Mapping














\(\ds \)

\(=\)







\(\ds X \setminus \map {f^{-1} } V\)





Definition of $f$



Thus, $X \setminus \map {f^{-1} } V$ is closed in $X$.
By definition, $X \setminus \map {f^{-1} } V$ is closed iff $\map {f^{-1} } V$ is open.
Hence, for every $V$ open in $Y$, $ \map {f^{-1}} V$ is open in $X$.
By Mapping is Continuous iff Inverse Images of Open Sets are Open, $f$ is continuous on $X$.
$\Box$


Necessary Condition
Suppose that $f$ is continuous on $X$.
Let $F$ be closed in $Y$.
By definition, $Y \setminus F$ is open in $Y$.
By Mapping is Continuous iff Inverse Images of Open Sets are Open, $\map {f^{-1} } {Y \setminus F}$ is open on $X$.
Hence:














\(\ds \map {f^{-1} } {Y \setminus F}\)

\(=\)







\(\ds \map {f^{-1} } Y \setminus \map {f^{-1} } F\)





Preimage of Set Difference under Mapping














\(\ds \)

\(=\)







\(\ds X \setminus \map {f^{-1} } F\)





Definition of $f$



and $X \setminus \map {f^{-1} } F$ is open in $X$.
By definition, $\map {f^{-1}} F$ is closed in $X$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




