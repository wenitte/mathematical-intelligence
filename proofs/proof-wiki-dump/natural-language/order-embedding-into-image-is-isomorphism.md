# 

Source: https://proofwiki.org/wiki/Order_Embedding_into_Image_is_Isomorphism

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $S'$ be the image of a mapping $\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$.

Then:

$\phi$ is an order embedding from $\struct {S, \preceq_1}$ into $\struct {T, \preceq_2}$
if and only if:

$\phi$ is an order isomorphism from $\struct {S, \preceq_1}$ into $\struct {S', \preceq_2 \restriction_{S'} }$.


Proof
Let $\phi$ be an order embedding from $\struct {S, \preceq_1}$ into $\struct {T, \preceq_2}$.
Then $\phi$ is an injection into $\struct {T, \preceq_2}$ by definition.
From Restriction of Mapping to Image is Surjection, a mapping from a set to the image of that mapping is a surjection.
Thus the surjective restriction of $\phi$ onto $S'$ is an order embedding which is also a surjection.
Hence the result from Order Isomorphism is Surjective Order Embedding.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings




