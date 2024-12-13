# 

Source: https://proofwiki.org/wiki/Modulus_of_Linear_Functional_on_Vector_Space_is_Seminorm



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $f : X \to \GF$ be a linear functional.
Define $p_f : X \to \R_{\ge 0}$ by: 

$\map {p_f} x = \cmod {\map f x}$
for each $x \in X$.

Then $p_f$ is a seminorm. 


Proof
Proof of Seminorm Axiom $\text N 2$: Positive Homogeneity
For each $\lambda \in \GF$ and $x \in X$, we have: 














\(\ds \map {p_f} {\lambda x}\)

\(=\)







\(\ds \cmod {\map f {\lambda x} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\lambda \map f x}\)





since $f$ is linear














\(\ds \)

\(=\)







\(\ds \cmod \lambda \cmod {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \map {p_f} x\)









$\Box$


Proof of Seminorm Axiom $\text N 3$: Triangle Inequality
For each $x, y \in X$, we have:














\(\ds \map {p_f} {x + y}\)

\(=\)







\(\ds \cmod {\map f {x + y} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map f x + \map f y}\)





since $f$ is linear














\(\ds \)

\(\le\)







\(\ds \cmod {\map f x} + \cmod {\map f y}\)





Triangle Inequality for Real Numbers if $\GF = \R$ and Triangle Inequality for Complex Numbers if $\GF = \C$














\(\ds \)

\(=\)







\(\ds \map {p_f} x + \map {p_f} y\)









$\blacksquare$





