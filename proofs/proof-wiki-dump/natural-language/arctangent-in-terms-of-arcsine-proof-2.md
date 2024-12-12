# 

Source: https://proofwiki.org/wiki/Arctangent_in_terms_of_Arcsine/Proof_2

Theorem
$\arctan x = \map \arcsin {\dfrac x {\sqrt {1 + x^2} } }$


Proof
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


Sources
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions




