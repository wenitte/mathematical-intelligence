# 

Source: https://proofwiki.org/wiki/Non-Negative_Scalar_Multiple_of_Seminorm_on_Vector_Space_is_Seminorm



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $p$ be a seminorm on $X$.
Let $\alpha \in \R_{\ge 0}$.
Let $q = \alpha p$. 

Then $q$ is a seminorm on $X$.


Proof
Seminorm Axiom $\text N 2$: Positive Homogeneity
Let $x \in X$ and $k \in \GF$. 
We have:














\(\ds \map q {k x}\)

\(=\)







\(\ds \alpha \map p {k x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \cmod k \map p x\)





Seminorm Axiom $\text N 2$: Positive Homogeneity for $p$














\(\ds \)

\(=\)







\(\ds \cmod k \map q x\)









$\Box$

Seminorm Axiom $\text N 3$: Triangle Inequality
Let $x, y \in X$. 
Then we have: 














\(\ds \map q {x + y}\)

\(=\)







\(\ds \alpha \map p {x + y}\)




















\(\ds \)

\(\le\)







\(\ds \alpha \paren {\map p x + \map p y}\)





Seminorm Axiom $\text N 3$: Triangle Inequality for $p$














\(\ds \)

\(=\)







\(\ds \alpha \map p x + \alpha \map p y\)




















\(\ds \)

\(=\)







\(\ds \map q x + \map q y\)









$\blacksquare$





