# 

Source: https://proofwiki.org/wiki/Normed_Dual_Space_of_Normed_Quotient_Vector_Space_is_Isometrically_Isomorphic_to_Annihilator

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$.
Let $X^\ast$ be the normed dual space of $X$. 
Let $Y$ be a closed linear subspace of $X$. 
Let $\paren {X/Y}^\ast$ be the normed dual space of the normed quotient vector space $X/Y$.

Then: 

$\paren {X/Y}^\ast$ is isometrically isomorphic to $Y^\bot$
where $Y^\bot$ is the annihilator of $Y$. 


Proof
Let $\pi$ be the quotient mapping associated with $X/Y$. 
Note that for each $f \in \paren {X/Y}^\ast$ we have: 

$f \circ \pi \in X^\ast$
by Composition of Bounded Linear Transformations is Bounded Linear Transformation.
Further, for $y \in Y$ we have $\map \pi y = 0_{X/Y}$ from Kernel of Quotient Mapping, and so: 

$\map {\paren {f \circ \pi} } y = \map f {0_{X/Y} } = 0$ for all $y \in Y$.
So we have $f \circ \pi \in Y^\bot$.
Now define $\phi : \paren {X/Y}^\ast \to Y^\bot$ by: 

$\map \phi f = f \circ \pi$
From Linear Isometry is Injective: Corollary, it suffices to show that $\phi$ is a linear isometry and surjective.
First, take $f, g \in \paren {X/Y}^\ast$ and $\lambda, \mu \in \GF$.
We have: 














\(\ds \map \phi {\lambda f + \mu g}\)

\(=\)







\(\ds \paren {\lambda f + \mu g} \circ \pi\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {f \circ \pi} + \mu \paren {g \circ \pi}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map \phi f + \mu \map \phi g\)









so $\phi$ is linear. 
Now, we have for $f \in \paren {X/Y}^\ast$: 














\(\ds \norm {\map \phi f}_{X^\ast}\)

\(=\)







\(\ds \sup_{x \in B_X} \cmod {\map {\paren {f \circ \pi} } x}\)





Definition of Norm on Bounded Linear Transformation














\(\ds \)

\(=\)







\(\ds \sup_{\mathbf x \in \map \pi {B_X} } \cmod {\map f {\mathbf x} }\)




















\(\ds \)

\(=\)







\(\ds \sup_{\mathbf x \in B_{X/Y} } \cmod {\map f {\mathbf x} }\)





Quotient Mapping Maps Unit Open Ball in Normed Vector Space to Unit Open Ball in Normed Quotient Vector Space














\(\ds \)

\(=\)







\(\ds \norm f_{X/Y}\)





Definition of Norm on Bounded Linear Functional



so $\phi$ is a linear isometry.
It remains to show that $\phi$ is surjective. 
Since we have shown that: 

$\ds \sup_{\mathbf x \in \map \pi {B_X} } \cmod {\map f {\mathbf x} } = \sup_{\mathbf x \in B_{X/Y} } \cmod {\map f {\mathbf x} }$
we know that if $f \circ \pi \in X^\ast$, then $f \in \paren {X/Y}^\ast$.
From Condition for Mapping from Quotient Vector Space to be Well-Defined, we have that for each $g \in X^\ast$, there exists $f : X/Y \to \GF$ such that: 

$g = f \circ \pi$
From the above, it follows that $f \in \paren {X/Y}^\ast$ and so $g = \map \phi f$. 
So $\phi$ is surjective, and we are done from Linear Isometry is Injective: Corollary.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $4.9$: Theorem




