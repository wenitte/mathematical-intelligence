# 

Source: https://proofwiki.org/wiki/Isometric_Isomorphism_is_Norm-Preserving



Theorem
Let $\struct {R, \norm {\,\cdot\,}_R}$ and $\struct {S, \norm {\,\cdot\,}_S}$ be normed division rings.
Let $\phi: R \to S$ be a ring isomorphism.

Then $\phi: R \to S$ is an isometric isomorphism if and only if $\phi$ satisfies:

$\forall x \in R: \norm {\map \phi x}_S = \norm x_R $


Proof
Let $d_R$ and $d_S$ be the metric induced by the norms $\norm {\,\cdot\,}_R$ and $\norm {\,\cdot\,}_S$ respectively.


Necessary Condition
Let $\phi: R \to S$ be an isometric isomorphism.

Then for $x \in R$:














\(\ds \norm {\map \phi x}_S\)

\(=\)







\(\ds \norm {\map \phi x - 0_S}_S\)





$0_S$ is the zero of $S$














\(\ds \)

\(=\)







\(\ds \norm {\map \phi x - \map \phi {0_R} }_S\)





Ring Homomorphism Preserves Zero














\(\ds \)

\(=\)







\(\ds \map {d_S} {\map \phi x, \map \phi {0_R} }\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(=\)







\(\ds \map {d_R} {x, {0_R} }\)





Definition of Isometry (Metric Spaces)














\(\ds \)

\(=\)







\(\ds \norm {x - {0_R} }_R\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(=\)







\(\ds \norm x_R\)





$0_R$ is the zero of $R$



The result follows.
$\Box$


Sufficient Condition
Let $\phi: R \to S$ satisfy:

$\forall x \in R: \norm {\map \phi x}_S = \norm x_R$

Then for $x, y \in R$:














\(\ds \map {d_S} {\map \phi x, \map \phi y}\)

\(=\)







\(\ds \norm {\map \phi x - \map \phi y}_S\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(=\)







\(\ds \norm {\map \phi {x - y} }_S\)





$\phi$ is a Ring Isomorphism














\(\ds \)

\(=\)







\(\ds \norm {x - y}_R\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {d_R} {x, y}\)





Definition of Metric Induced by Norm on Division Ring



The result follows.
$\blacksquare$





