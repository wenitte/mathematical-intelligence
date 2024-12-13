# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Balanced_Convex_Absorbing_Set_in_Vector_Space_is_Seminorm



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$. 
Let $A \subseteq X$ be a set that is balanced, convex and absorbing.
Let $\mu_A$ be the Minkowski functional of $A$. 

Then $\mu_A$ is a seminorm. 


Proof
Case 1: $\GF = \R$
From Balanced Set in Vector Space is Symmetric, $A$ is symmetric.
Hence by Minkowski Functional of Symmetric Convex Absorbing Set in Real Vector Space is Seminorm, $\mu_A$ is a seminorm in this case.
$\Box$

Case 2: $\GF = \C$
From Minkowski Functional of Convex Absorbing Set is Positive Homogeneous, $\mu_A$ is a sublinear functional.
Hence we have: 

$\map {\mu_A} {x + y} \le \map {\mu_A} x + \map {\mu_A} y$ for all $x, y \in X$
and hence Seminorm Axiom $\text N 3$: Triangle Inequality.
We also have: 

$\map {\mu_A} {r x} = r \map {\mu_A} x$ for all $r \in \hointr 0 \infty$ and $x \in X$.
Towards Seminorm Axiom $\text N 2$: Positive Homogeneity, we want to show that: 

$\map {\mu_A} {r x} = \map {\mu_A} x$ for all $r \in \C$ with $\cmod r = 1$.
From the definition of a balanced set, we have: 

$r A \subseteq A$
and since $\cmod {r^{-1} } = 1$, we have: 

$r^{-1} A \subseteq A$
Then we have: 

$r A \subseteq A \subseteq r A$
so that: 

$A = r A$
Then we have: 














\(\ds \map {\mu_A} {r x}\)

\(=\)







\(\ds \inf \set {t > 0 : r x \in t A}\)





Definition of Minkowski Functional














\(\ds \)

\(=\)







\(\ds \inf \set {t > 0 : x \in t r^{-1} A}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {t > 0 : x \in t A}\)





since $\cmod {r^{-1} } = 1$














\(\ds \)

\(=\)







\(\ds \map {\mu_A} x\)





Definition of Minkowski Functional



Now take $r \in \C \setminus \hointl 0 \infty$ and $x \in X$. 
We have: 














\(\ds \map {\mu_A} {r x}\)

\(=\)







\(\ds \map {\mu_A} {\frac r {\cmod r} \cmod r x}\)




















\(\ds \)

\(=\)







\(\ds \cmod r \map {\mu_A} {\frac r {\cmod r} x}\)





Definition of Sublinear Functional














\(\ds \)

\(=\)







\(\ds \cmod r \map {\mu_A} x\)





since $\cmod {\dfrac r {\cmod r} } = 1$



proving Seminorm Axiom $\text N 2$: Positive Homogeneity.
$\blacksquare$





