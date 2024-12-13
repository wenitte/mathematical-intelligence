# 

Source: https://proofwiki.org/wiki/Norm_in_terms_of_Normed_Dual_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$. 
Let $X^\ast$ be the normed dual of $X$.
Let $B_{X^\ast}^-$ be the closed unit ball of $X^\ast$. 

Then: 

$\ds \norm x = \sup_{f \in B_{X^\ast}^-} \cmod {\map f x}$


Proof
From Fundamental Property of Norm on Bounded Linear Functional, we have: 

$\ds \cmod {\map f x} \le \norm x$
for each $x \in X$.
From Existence of Support Functional, there exists $f \in B_{X^\ast}^-$ such that $\map f x = \norm x$. 
Hence we conclude: 

$\ds \norm x = \sup_{f \in B_{X^\ast}^-} \cmod {\map f x}$
$\blacksquare$





