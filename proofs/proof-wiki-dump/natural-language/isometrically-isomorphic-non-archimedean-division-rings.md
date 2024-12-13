# 

Source: https://proofwiki.org/wiki/Isometrically_Isomorphic_Non-Archimedean_Division_Rings



Theorem
Let $\struct {R, \norm {\,\cdot\,}_R}$ and $\struct {S, \norm {\,\cdot\,}_S}$ be normed division rings.
Let $\phi:R \to S$ be an isometric isomorphism.

Then:

$\norm {\,\cdot\,}_R$ is a non-archimedean norm if and only if $\norm {\,\cdot\,}_S$ is a non-archimedean norm.


Proof
Necessary Condition
Let $\norm {\,\cdot\,}_R$ be a non-archimedean norm.
Then for all $x,y \in R$:














\(\ds \norm {x + y}_S\)

\(=\)







\(\ds \norm {\map \phi {\map {\phi^{-1} } x} + \map \phi {\map {\phi^{-1} } y} }_S\)





$\phi$ is a bijection














\(\ds \)

\(=\)







\(\ds \norm {\map {\phi^{-1} } x  + \map {\phi^{-1} } y}_R\)





$\phi$ is an isometry.














\(\ds \)

\(\le\)







\(\ds \max \set {\norm {\map {\phi^{-1} } x}_R, \norm {\map {\phi^{-1} } y}_R}\)





$\norm {\,\cdot\,}_R$ is non-archimedean.














\(\ds \)

\(=\)







\(\ds \max \set {\norm {\map \phi {\map {\phi^{-1} } x} }_S, \norm {\map \phi {\map {\phi^{-1} } y} }_S}\)





$\phi$ is an isometry.














\(\ds \)

\(=\)







\(\ds \max \set {\norm x_S, \norm y_S}\)





$\phi$ is a bijection.



$\Box$


Sufficient Condition
Let $\norm {\, \cdot \,}_S$ be a non-archimedean norm.
By Inverse of Isometric Isomorphism, $\phi^{-1}: S \to R$ is an isometric isomorphism.
By the necessary condition, $\norm {\, \cdot \,}_R$ is non-archimedean.
$\blacksquare$





