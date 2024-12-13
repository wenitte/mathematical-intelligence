# 

Source: https://proofwiki.org/wiki/Polarization_Identity/Real_Vector_Space

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\R$. 
Let $\norm \cdot$ be the inner product norm for $V$. 

Then we have: 

$4 \innerprod x y = \norm {x + y}^2 - \norm {x - y}^2$
for all $x, y \in V$.


Proof
We have: 














\(\ds \norm {x + y}^2 - \norm {x - y}^2\)

\(=\)







\(\ds \innerprod {x + y} {x + y} - \innerprod {x - y} {x - y}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \paren {\innerprod x {x + y} + \innerprod y {x + y} } - \paren {\innerprod x {x - y} - \innerprod y {x - y} }\)





since an inner product is linear in the first argument














\(\ds \)

\(=\)







\(\ds \paren {\innerprod {x + y} x + \innerprod {x + y} y} - \paren {\innerprod {x - y} x - \innerprod {x - y} y}\)





since a real inner product is symmetric














\(\ds \)

\(=\)







\(\ds \paren {\innerprod x x + \innerprod y x + \innerprod x y + \innerprod y y} - \paren {\innerprod x x - \innerprod y x - \innerprod x y + \innerprod y y}\)





using linearity in the first argument














\(\ds \)

\(=\)







\(\ds 2 \innerprod x y + 2 \innerprod y x\)




















\(\ds \)

\(=\)







\(\ds 4 \innerprod x y\)





since a real inner product is symmetric



$\blacksquare$


Sources
1965: Michael Spivak: Calculus on Manifolds ... (previous) ... (next): 1. Functions on Euclidean Space: Norm and Inner Product
2018: John M. Lee: Introduction to Riemannian Manifolds (2nd ed.) ... (previous) ... (next): $\S 2$: Riemannian Metrics. Definitions
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $8.3$: Properties of the Induced Norms




