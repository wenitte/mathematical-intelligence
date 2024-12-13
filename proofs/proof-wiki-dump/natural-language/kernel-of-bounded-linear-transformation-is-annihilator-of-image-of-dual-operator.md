# 

Source: https://proofwiki.org/wiki/Kernel_of_Bounded_Linear_Transformation_is_Annihilator_of_Image_of_Dual_Operator

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$. 
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively. 
Let $T : X \to Y$ be a Bounded linear transformation.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$. 

Then we have: 

$\map \ker T = {}^\bot T^\ast \sqbrk {Y^\ast}$
where ${}^\bot$ denotes the annihilator operation on subspaces of $X^\ast$. 


Proof
Let $x \in \map \ker T$. 
Let $\phi \in T^\ast \sqbrk {Y^\ast}$.
Then from the definition of the dual operator, there exists $f \in Y^\ast$ such that $f \circ T = \phi$.
Then we have: 














\(\ds \map \phi x\)

\(=\)







\(\ds \map f {T x}\)




















\(\ds \)

\(=\)







\(\ds 0\)





since $T x = {\mathbf 0}_X$



Since this holds for all $\phi \in T^\ast \sqbrk {Y^\ast}$, we obtain $x \in {}^\bot T^\ast \sqbrk {Y^\ast}$.
So we have:

$\map \ker T \subseteq {}^\bot T^\ast \sqbrk {Y^\ast}$

Now let $x \in {}^\bot T^\ast \sqbrk {Y^\ast}$.
Then for all $\phi \in T^\ast \sqbrk {Y^\ast}$ we have $\map \phi x = 0$. 
That is, for all $f \in Y^\ast$, we have: 

$\map {\paren {T^\ast f} } x = \map f {T x} = 0$
from the definition of the dual operator.
From Normed Dual Space Separates Points, we obtain $T x = {\mathbf 0}_Y$ and hence $x \in \map \ker T$. 
So we obtain:

${}^\bot T^\ast \sqbrk {Y^\ast} \subseteq \map \ker T$

Hence we can conclude:

$\map \ker T = {}^\bot T^\ast \sqbrk {Y^\ast}$
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Exercise $2.39 \text { (i)}$




