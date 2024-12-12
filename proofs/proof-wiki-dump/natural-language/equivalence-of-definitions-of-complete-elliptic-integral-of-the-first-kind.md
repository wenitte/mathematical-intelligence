# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complete_Elliptic_Integral_of_the_First_Kind



Theorem
The following definitions of the concept of Complete Elliptic Integral of the First Kind are equivalent:

Definition 1
$\ds \map K k = \int \limits_0^{\pi / 2} \frac {\d \phi} {\sqrt {1 - k^2 \sin^2 \phi} }$
is the complete elliptic integral of the first kind, and is a function of $k$, defined on the interval $0 < k < 1$.

Definition 2
$\ds \map K k = \int \limits_0^1 \frac {\d v} {\sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }$
is the complete elliptic integral of the first kind, and is a function of $k$, defined on the interval $0 < k < 1$.


Proof
Let $\map K k$ be the complete elliptic integral of the first kind by definition $1$.

Let $v := \sin \phi$.
Then we have:














\(\ds \dfrac {\d v} {\d \phi}\)

\(=\)







\(\ds \cos \phi\)





Derivative of Sine Function














\(\ds \phi\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds 0\)




















\(\ds \phi\)

\(=\)







\(\ds \dfrac \pi 2\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds 1\)










Hence:














\(\ds \map K k\)

\(=\)







\(\ds \int \limits_0^{\pi / 2} \frac {\d \phi} {\sqrt {1 - k^2 \sin^2 \phi} }\)





Definition 1 of Complete Elliptic Integral of the First Kind














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\cos \phi \sqrt {1 - k^2 \sin^2 \phi} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\sqrt {1 - \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\sqrt {1 - v^2} \sqrt {1 - k^2 v^2} }\)





substituting for $v$














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }\)





making the equivalence explicit



 
Thus $\map K k$ is the complete elliptic integral of the first kind by definition $2$.
$\blacksquare$





