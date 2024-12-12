# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_is_Into_Linear_Isomorphism_iff_Dual_Operator_is_Surjective



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be Banach spaces over $\GF$. 
Let $X^\ast$ and $Y^\ast$ be the normed duals of $X$ and $Y$ respectively.
Let $T : X \to Y$ be a bounded linear transformation.
Let $T^\ast : Y^\ast \to X^\ast$ be the dual operator of $T$. 

Then $T$ is an into linear isomorphism if and only if $T^\ast$ is surjective. 


Proof
Let $B_{X^\ast}^-$ and $B_{Y^\ast}^-$ be the closed unit balls of $X^\ast$ and $Y^\ast$ respectively. 

Necessary Condition
We want to show that $T$ is a linear isomorphism considered as a map $X \to T \sqbrk X$. 
Suppose that $T^\ast$ is surjective.
From Dual Operator is Bounded Linear Transformation, $T^\ast$ is a bounded linear transformation.
From Banach-Schauder Theorem, $T^\ast$ is an open mapping.
From Characterization of Open Linear Transformation between Normed Vector Spaces, there exists $\delta > 0$ such that $\delta B_{X^\ast}^- \subseteq T^\ast \sqbrk {B_{Y^\ast}^-}$.
Now, for each $x \in X$ we have: 














\(\ds \norm {T x}_Y\)

\(=\)







\(\ds \sup_{f \in Y^\ast} \cmod {\map f {T x} }\)





Norm in terms of Normed Dual Space














\(\ds \)

\(=\)







\(\ds \sup_{f \in Y^\ast} \cmod {\map {\paren {T^\ast f} } x}\)





Definition of Dual Operator














\(\ds \)

\(=\)







\(\ds \sup_{g \in T^\ast \sqbrk {B_{Y^\ast}^-} } \cmod {\map g x}\)




















\(\ds \)

\(\ge\)







\(\ds \sup_{g \in \delta B_Y^-} \cmod {\map g x}\)





from Supremum of Subset since $\delta B_{X^\ast}^- \subseteq T^\ast \sqbrk {B_{Y^\ast}^-}$














\(\ds \)

\(=\)







\(\ds \delta \sup_{g \in B_Y^-} \cmod {\map g x}\)





Multiple of Supremum














\(\ds \)

\(=\)







\(\ds \delta \norm x_X\)









Hence $\map \ker T = \set { {\mathbf 0}_X}$.
So from Linear Transformation is Injective iff Kernel Contains Only Zero, we have that $T$ is injective, hence bijective as a map $X \to T \sqbrk X$.
From Characterization of Invertible Bounded Linear Transformations, $T^{-1}$ is a bounded linear transformation.
Hence $T$ is a linear isomorphism as a map $X \to T \sqbrk X$, hence an into linear isomorphism.
$\Box$


Sufficient Condition
Suppose that $T$ is an into linear isomorphism. 
Then $T^{-1} : T \sqbrk X \to X$ is a bounded linear transformation. 
Let $f \in X^\ast$. 
From Composite of Continuous Mappings is Continuous, $f \circ T^{-1} : T \sqbrk X \to \GF$ is continuous.
By Continuity of Linear Functionals, $f \circ T^{-1}$ is bounded.
From the Hahn-Banach Theorem, there exists $g \in Y^\ast$ such that: 

$\map g y = \map f {T^{-1} y}$
for each $y \in T \sqbrk X$. 
Then for $x \in X$, we have:














\(\ds \map {\paren {T^\ast g} } x\)

\(=\)







\(\ds \map {\paren {g \circ T} } x\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {f \circ T^{-1} } \circ T} } x\)




















\(\ds \)

\(=\)







\(\ds \map f x\)





Composition of Mappings is Associative



So we have: 

$T^\ast g = f$
So $T^\ast$ is surjective.
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Exercise $2.39 \text { (i)}$




