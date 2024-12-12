# 

Source: https://proofwiki.org/wiki/Arcsine_in_terms_of_Twice_Arctangent

Theorem
$\arcsin x = 2 \map \arctan {\dfrac x {1 + \sqrt {1 - x^2} } }$
where $x$ is a real number with $-1 < x < 1$.


Proof
Let: 

$\theta = \arcsin x$
Then by the definition of arcsine:

$x = \sin \theta$
and: 

$-\dfrac \pi 2 < \theta < \dfrac \pi 2$

Then:














\(\ds \tan \dfrac \theta 2\)

\(=\)







\(\ds \dfrac {\sin \theta} {1 + \cos \theta}\)





Half Angle Formula for Tangent: Corollary $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\sin \theta} {1 + \sqrt {1 - \sin^2 \theta} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \dfrac x {1 + \sqrt {1 - x^2} }\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \dfrac \theta 2\)

\(=\)







\(\ds \map \arctan {\dfrac x {1 + \sqrt {1 - x^2} } }\)





taking arctangent of both sides








\(\ds \leadsto \ \ \)





\(\ds \arcsin x\)

\(=\)







\(\ds 2 \map \arctan {\dfrac x {1 + \sqrt {1 - x^2} } }\)





substituting $\theta \gets \arcsin x$



$\blacksquare$





