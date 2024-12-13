# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Isomorphism_is_Bijection

Theorem
Let $H, K$ be Hilbert spaces.
Denote by $\innerprod \cdot \cdot_H$ and $\innerprod \cdot \cdot_K$ their respective inner products.

Let $U: H \to K$ be an isomorphism.

Then $U$ is a bijection.


Proof
As $U$ is an isomorphism, it is necessarily surjective.

Suppose now that $g, h \in H$ are such that $\map U g = \map U h$.
Then as $U$ is a linear map, it follows that $\map U {g - h} = \bszero_K$, the zero vector of $K$.

From property $(3)$ of an isomorphism, conclude that:

$0 = \innerprod {\bszero_K} {\bszero_K}_K = \innerprod {\map U {g - h} } {\map U {g - h} }_K = \innerprod {g - h} {g - h}_H$
Property $(5)$ of an inner product ensures us that $g - h = \bszero_H$, that is $g = h$.
Hence $U$ is injective.

As $U$ is both injective and surjective, it is a bijection.
$\blacksquare$





