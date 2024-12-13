# 

Source: https://proofwiki.org/wiki/Image_of_Bounded_Linear_Transformation_is_Everywhere_Dense_iff_Dual_Operator_is_Injective/Proof_2

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$. 
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively. 
Let $T : X \to Y$ be a bounded linear transformation.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$. 

Then $T \sqbrk X$ is everywhere dense in $Y$ if and only if $T^\ast$ is injective.


Proof
From Annihilator of Image of Bounded Linear Transformation is Kernel of Dual Operator, we have:

$T \sqbrk X^\bot = \map \ker {T^\ast}$
where $T \sqbrk X^\bot$ denotes the annihilator of $T \sqbrk X$.
From Linear Transformation is Injective iff Kernel Contains Only Zero, we then have that $T^\ast$ is injective if and only if:

$T \sqbrk X^\bot = \set { {\mathbf 0}_{Y^\ast} }$
From Annihilator of Subspace of Banach Space is Zero iff Subspace is Everywhere Dense, this is equivalent to:

$T \sqbrk X$ is everywhere dense in $Y$.
This was the demand.
$\blacksquare$





