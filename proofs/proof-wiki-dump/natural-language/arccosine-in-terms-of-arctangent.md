# 

Source: https://proofwiki.org/wiki/Arccosine_in_terms_of_Arctangent

Theorem
$\arccos x = 2 \map \arctan {\sqrt {\dfrac {1 - x} {1 + x} } }$
where $x$ is a real number with $-1 < x \le 1$.


Proof
Let: 

$\theta = \arccos x$
Then by the definition of arccosine:

$x = \cos \theta$
and: 

$0 \le \theta < \pi$

Then: 














\(\ds 2 \map \arctan {\sqrt {\frac {1 - x} {1 + x} } }\)

\(=\)







\(\ds 2 \map \arctan {\sqrt {\frac {1 - \cos \theta} {1 + \cos \theta} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \arctan {\sqrt {\frac {2 \sin^2 \frac \theta 2} {2 \cos^2 \frac \theta 2} } }\)





Double Angle Formula for Cosine: Corollary $1$, Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds 2 \map \arctan {\tan \frac \theta 2}\)





for $0 \le \theta < \dfrac \pi 2$ we have $\sin \theta \ge 0$ and $\cos \theta > 0$














\(\ds \)

\(=\)







\(\ds \theta\)





Definition of Real Arctangent














\(\ds \)

\(=\)







\(\ds \arccos x\)









$\blacksquare$


Also see
Arcsine in terms of Arctangent




