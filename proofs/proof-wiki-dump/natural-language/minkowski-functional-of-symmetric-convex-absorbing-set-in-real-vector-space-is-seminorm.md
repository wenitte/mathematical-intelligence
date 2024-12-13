# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Symmetric_Convex_Absorbing_Set_in_Real_Vector_Space_is_Seminorm

Theorem
Let $X$ be a vector space over $\R$.
Let $A \subseteq X$ be a set that is symmetric, convex and absorbing.
Let $\mu_A$ be the Minkowski functional of $A$. 

Then $\mu_A$ is a seminorm. 


Proof
From Minkowski Functional of Convex Absorbing Set is Positive Homogeneous, $\mu_A$ is a sublinear functional.
Hence we have: 

$\map {\mu_A} {x + y} \le \map {\mu_A} x + \map {\mu_A} y$ for all $x, y \in X$
and hence Seminorm Axiom $\text N 3$: Triangle Inequality.
We also have: 

$\map {\mu_A} {r x} = r \map {\mu_A} x$ for all $r \ge 0$ and $x \in X$.
To establish Seminorm Axiom $\text N 2$: Positive Homogeneity, it remains to show that: 

$\map {\mu_A} {r x} = \size r \map {\mu_A} x$ for all $r < 0$ and $x \in X$.
For this we first show that: 

$\map {\mu_A} {-x} = \map {\mu_A} x$ for all $x \in X$.
Since $A$ is symmetric, we have $A = -A$. 
Then we have: 














\(\ds \map {\mu_A} x\)

\(=\)







\(\ds \inf \set {t > 0 : x \in t A}\)





Definition of Minkowski Functional of Convex Absorbing Set














\(\ds \)

\(=\)







\(\ds \inf \set {t > 0 : x \in -t A}\)





since $A = -A$














\(\ds \)

\(=\)







\(\ds \inf \set {t > 0 : -x \in t A}\)




















\(\ds \)

\(=\)







\(\ds \map {\mu_A} {-x}\)









Now for $r < 0$ and $x \in X$ we have:














\(\ds \map {\mu_A} {r x}\)

\(=\)







\(\ds \map {\mu_A} {-\size r x}\)




















\(\ds \)

\(=\)







\(\ds \size r \map {\mu_A} {-x}\)





Definition of Sublinear Functional














\(\ds \)

\(=\)







\(\ds \size r \map {\mu_A} x\)









showing Seminorm Axiom $\text N 2$: Positive Homogeneity.
$\blacksquare$





