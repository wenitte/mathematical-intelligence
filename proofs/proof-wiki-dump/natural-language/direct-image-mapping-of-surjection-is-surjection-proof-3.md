# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Surjection_is_Surjection/Proof_3

Theorem
Let $f: S \to T$ be a surjection.

Then the direct image mapping of $f$:

$f^\to: \powerset S \to \powerset T$
is a surjection.


Proof
Let $f^\gets$ be the inverse image mapping of $f$.
Let $Y \in \powerset T$.
Let $X = \map {f^\gets} Y$.
By Subset equals Image of Preimage iff Mapping is Surjection:

$\map {f^\to} X = Y$
As such an $X$ exists for each $Y \in \powerset S$, $f^\to$ is surjective.
$\blacksquare$





