# 

Source: https://proofwiki.org/wiki/Annihilator_of_Image_of_Bounded_Linear_Transformation_is_Kernel_of_Dual_Operator

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a bounded linear transformation.
Let $X^\ast$ and $Y^\ast$ be the normed duals of $X$ and $Y$ respectively.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$. 
Let $T \sqbrk X^\bot$ be the annihilator of $T \sqbrk X$.

Then:

$T \sqbrk X^\bot = \map \ker {T^\ast}$


Proof
We have: 

$f \in \map \ker {T^\ast}$
if and only if:

$\map {\paren {T^\ast f} } x = \map f {T x} = 0$ for each $x \in X$.
That is, if and only if:

$\map f y = 0$ for all $y \in T \sqbrk X$
To conclude, we have $f \in \map \ker {T^\ast}$ if and only if:

$f \in T \sqbrk X^\bot$
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Exercise $2.39 \text { (i)}$




