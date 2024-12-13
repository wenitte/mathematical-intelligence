# 

Source: https://proofwiki.org/wiki/Ordered_Semigroup_Monomorphism_into_Image_is_Isomorphism

Theorem
Let $\struct {S, \circ, \preceq}$ and $\struct {T, *, \preccurlyeq}$ be ordered semigroups.
Let $\phi: \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ be an ordered semigroup monomorphism.
Let $S'$ be the image of $\phi$.

Then $\phi$ is an ordered semigroup isomorphism from $\struct {S, \circ, \preceq}$ into $\struct {S', * {\restriction_{S'} }, \preccurlyeq \restriction_{S'} }$.
Here:

$* {\restriction_{S'}}$ denotes the restriction of $*$ to $S' \times S'$
$\preccurlyeq \restriction_{S'}$ denotes the restriction of $\preccurlyeq$ to $S' \times S'$.


Proof
Let $\phi: \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ be an ordered semigroup monomorphism.

Then $\phi$ is an injection into $\struct {T, *, \preccurlyeq}$ by definition.
From Restriction of Mapping to Image is Surjection, a mapping from a set to the image of that mapping is a surjection.
Thus the surjective restriction of $\phi$ onto $S'$ is an ordered semigroup monomorphism which is also a surjection.
Hence the result from Ordered Semigroup Isomorphism is Surjective Monomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups




