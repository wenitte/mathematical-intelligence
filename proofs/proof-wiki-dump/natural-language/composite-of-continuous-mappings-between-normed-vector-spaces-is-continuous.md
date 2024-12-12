# 

Source: https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_between_Normed_Vector_Spaces_is_Continuous



Theorem
Let $X, Y, Z$ be normed vector spaces.
Let $f : X \to Y$ and $g : Y \to Z$ be continuous mappings on $X$ and $Y$ respectively.
Let $g \circ f : X \to Z$ be a composite mapping where:

$\forall x \in X : \map {\paren {g \circ f} } x := \map g {\map f x}$

Then $g \circ f$ is continuous on $X$.


Proof
Let $W$ be open in $Z$.
$g$ is continuous on $Y$.
By Mapping is Continuous iff Inverse Images of Open Sets are Open, $\map {g^{-1} } W$ is open in $Y$.
$f$ is continuous on $X$.
By Mapping is Continuous iff Inverse Images of Open Sets are Open, $\map {f^{-1} } {\map {g^{-1} } W}$ is open in $X$.
By Inverse of Composite Relation:

$\map {\paren {g \circ f}^{-1} } W = \map {f^{-1} } {\map {g^{-1} } W}$
Hence, $\map {\paren {g \circ f}^{-1} } W$ is continuous on $X$.
By Mapping is Continuous iff Inverse Images of Open Sets are Open, $g \circ f$ is continuous on $X$.
$\blacksquare$


Also see
Composite of Continuous Mappings is Continuous
Composite of Continuous Mappings between Metric Spaces is Continuous


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




