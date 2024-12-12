# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Preimage_with_Image_of_Relation_is_Correspondence

Theorem
Let $\RR \subseteq S \times T$ be a relation.
Then the restriction of $\RR$ to $\Preimg \RR \times \Img \RR$ is a correspondence.


Proof
By the definition of a correspondence it will be shown that $\RR$ is both left-total and right-total.

$\RR$ is left-total if and only if:

$\forall x \in S: \exists y \in T: x \mathrel \RR y$
By the definition of the pre-image of $\RR$:

$\Preimg \RR = \set {x \in S: \exists y \in T: x \mathrel \RR y}$
Therefore $\RR$ is left-total.

$\RR$ is right-total if and only if:

$\forall x \in T: \exists y \in S: x \mathrel \RR y$
By the definition of the image of $\RR$:

$\Img \RR = \set {x \in T: \exists y \in S: x \mathrel \RR y}$
Therefore $\RR$ is right-total.

Hence $\RR$ is a correspondence.
$\blacksquare$





