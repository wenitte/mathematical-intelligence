# 

Source: https://proofwiki.org/wiki/Bounded_Real-Valued_Linear_Functional_is_Real_Part_of_Unique_Bounded_Complex-Valued_Linear_Functional

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\C$.
Let $\struct {X_\R, \norm {\, \cdot \,}_\R}$ be the realification of $X$ equipped with the restricted norm.  
Let $f : X_\R \to \R$ be a bounded linear functional.

Then there exists a unique bounded linear functional $g : X \to \C$ such that: 

$\map f x = \map \Re {\map g x}$
for each $x \in X$. 


Proof
Let $M > 0$ be such that: 

$\cmod {\map f x} \le M \norm x$
for each $x \in X$. 
From Linear Functional on Complex Vector Space is Uniquely Determined by Real Part, there exists a unique linear functional $g : X \to \C$ such that: 

$\map f x = \map \Re {\map g x}$
for each $x \in X$, given by: 

$\map g x = \map f x - i \map f {i x}$
for each $x \in X$.
We just need to show that $g$ is bounded. 
Then we have, for each $x \in X$:














\(\ds \cmod {\map g x}^2\)

\(=\)







\(\ds \size {\map f x}^2 + \size {\map f {i x} }^2\)




















\(\ds \)

\(\le\)







\(\ds M^2 \norm x^2 + M^2 \norm {i x}^2\)




















\(\ds \)

\(=\)







\(\ds 2 M^2 \norm x^2\)





Norm Axiom $\text N 2$: Positive Homogeneity



so that: 

$\cmod {\map g x} \le M \sqrt 2 \norm x$
for each $x \in X$.
So $g$ is a bounded linear functional as required.
$\blacksquare$





