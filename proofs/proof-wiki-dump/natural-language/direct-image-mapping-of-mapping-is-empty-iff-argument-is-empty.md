# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Mapping_is_Empty_iff_Argument_is_Empty

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $f^\to$ be the direct image mapping of $f$:

$f^\to: \powerset S \to \powerset T: \map {f^\to} X = \set {t \in T: \exists s \in X: \map f s = t}$

Then:

$\map {f^\to} X = \O \iff X = \O$


Proof
By definition, a mapping is a left-total relation.
The result then follows from Direct Image Mapping of Left-Total Relation is Empty iff Argument is Empty.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections




