# 

Source: https://proofwiki.org/wiki/Pseudometric_Induced_by_Seminorm_is_Pseudometric



Definition
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$. 
Let $p$ be a seminorm on $X$.
Let $d_p$ be the pseudometric induced by $p$. 

Then $d_p$ is a pseudometric.


Proof
Proof of Metric Space Axiom $(\text M 1)$
For each $x \in X$ we have: 

$\map {d_p} {x, x} = \map p {x - x} = \map p { {\mathbf 0}_X}$
From Seminorm Maps Zero Vector to Zero, we therefore have: 

$\map {d_p} {x, x} = 0$
$\Box$

Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
For $x, y, z \in X$ we have: 














\(\ds \map {d_p} {x, z}\)

\(=\)







\(\ds \map p {x - z}\)





Definition of Pseudometric Induced by Seminorm














\(\ds \)

\(=\)







\(\ds \map p {\paren {x - y} + \paren {y - z} }\)




















\(\ds \)

\(\le\)







\(\ds \map p {x - y} + \map p {y - z}\)





Seminorm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, y} + \map {d_p} {y, z}\)





Definition of Pseudometric Induced by Seminorm



$\Box$

Proof of Metric Space Axiom $(\text M 3)$
For $x, y \in X$ we have: 














\(\ds \map {d_p} {y, x}\)

\(=\)







\(\ds \map p {y - x}\)





Definition of Pseudometric Induced by Seminorm














\(\ds \)

\(=\)







\(\ds \cmod {-1} \map p {x - y}\)





Seminorm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \map p {x - y}\)




















\(\ds \)

\(=\)







\(\ds \map {d_p} {x, y}\)





Definition of Pseudometric Induced by Seminorm



$\blacksquare$





