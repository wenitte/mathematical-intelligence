# 

Source: https://proofwiki.org/wiki/Image_of_Bounded_Linear_Transformation_is_Everywhere_Dense_iff_Dual_Operator_is_Injective/Proof_1



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$. 
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively. 
Let $T : X \to Y$ be a bounded linear transformation.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$. 

Then $T \sqbrk X$ is everywhere dense in $Y$ if and only if $T^\ast$ is injective.


Proof
Necessary Condition
Suppose that $T \sqbrk X$ is everywhere dense in $Y$.
Let $f \in Y^\ast$ be such that $T^\ast f = 0$.
That is: 

$\map f {T x} = 0$
for all $x \in X$. 
So:

$\map f y = 0$
for all $y \in T \sqbrk X$.
Since $T \sqbrk X$ is everywhere dense in $Y$, $f$ is continuous and $\GF$ is Hausdorff, we have that: 

$\map f y = 0$ for all $y \in Y$
from Continuous Mappings into Hausdorff Space coinciding on Everywhere Dense Set coincide.
So $T^\ast f = 0$ implies $f = 0$. 
So $T^\ast$ is injective from Linear Transformation is Injective iff Kernel Contains Only Zero.
$\Box$

Sufficient Condition
Suppose that $T \sqbrk X$ is not everywhere dense in $Y$.
Then $\map \cl {T \sqbrk X}$ is a proper closed linear subspace of $Y$.
From Existence of Distance Functional, there exists $f \in Y^\ast$ such that $f \ne 0$ and: 

$\map f y = 0$ for all $y \in \map \cl {T \sqbrk X}$
In particular: 

$\map f y = 0$ for all $y \in T \sqbrk X$
so that: 

$\map f {T x} = 0$ for all $x \in X$.
Hence, we have: 

$T^\ast f = 0$
while $f \ne 0$. 
So from Linear Transformation is Injective iff Kernel Contains Only Zero, we conclude that $T^\ast$ is not injective.
Hence by Proof by Contraposition, if $T^\ast$ is injective then $T \sqbrk X$ is everywhere dense in $Y$.
$\blacksquare$





