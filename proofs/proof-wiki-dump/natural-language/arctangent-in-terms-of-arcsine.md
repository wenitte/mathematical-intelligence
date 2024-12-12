# 

Source: https://proofwiki.org/wiki/Arctangent_in_terms_of_Arcsine



Theorem
$\arctan x = \map \arcsin {\dfrac x {\sqrt {1 + x^2} } }$
where $x$ is a real number.


Proof 1
Let: 

$\theta = \arctan x$
Then by the definition of arctangent:

$x = \tan \theta$

Then: 














\(\ds \map \arcsin { \dfrac x {\sqrt {1 + x^2} }  }\)

\(=\)







\(\ds \map \arcsin { \dfrac {\tan \theta} {\sqrt {1 + \tan^2 \theta} }  }\)




















\(\ds \)

\(=\)







\(\ds \map \arcsin { \dfrac {\tan \theta} {\sqrt {\sec^2 \theta} }  }\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \map \arcsin { \dfrac {\sin \theta} { \cos \theta \dfrac 1 {\cos \theta } }  }\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \map \arcsin {\sin \theta }\)




















\(\ds \)

\(=\)







\(\ds \theta\)





Definition of Real Arcsine














\(\ds \)

\(=\)







\(\ds \arctan x\)









$\blacksquare$


Proof 2
From Pfaff's Transformation:

$\ds \map F {a, b; c; x} = \paren {1 - x}^{-a} \map F {a, c - b; c; \dfrac x {x - 1} }$
where $\map F {a, b; c; x}$ is the Gaussian hypergeometric function of $x$.

We have:














\(\ds \map \arctan x\)

\(=\)







\(\ds x \map F {\dfrac 1 2, 1; \dfrac 3 2; -x^2}\)





Arctangent Function in terms of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds x \paren {1 - \paren {-x^2} }^{-\frac 1 2} \map F {\dfrac 1 2, \dfrac 3 2 - 1; \dfrac 3 2; \dfrac {\paren {-x^2} } {\paren {-x^2} - 1} }\)





Pfaff's Transformation














\(\ds \)

\(=\)







\(\ds \dfrac x {\sqrt {1 + x^2} } \map F {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; \dfrac {x^2} {1 + x^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \arcsin {\dfrac x {\sqrt {1 + x^2} }  }\)





Arcsine Function in terms of Gaussian Hypergeometric Function




Therefore:

$\map \arctan x = \map \arcsin {\dfrac x {\sqrt {1 + x^2} } }$
$\blacksquare$


Also see
Arcsine in terms of Arctangent
Arccosine in terms of Arctangent




