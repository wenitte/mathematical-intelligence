# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Injection_is_Surjection

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a injection.
Let $f^\gets: \powerset T \to \powerset S$ be the inverse image mapping of $f$.

Then $f^\gets$ is a surjection.


Proof
Let $f^\to: \powerset S \to \powerset T$ be the direct image mapping by $f$.
Let $X \in \powerset S$.
Let $Y = \map {f^\to} X$.
By Subset equals Preimage of Image iff Mapping is Injection:

$\map {f^\gets} Y = X$
As such a $Y$ exists for each $X \in \powerset S$, $f^\gets$ is surjective.
$\blacksquare$





