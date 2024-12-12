# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complete_Elliptic_Integral_of_the_Second_Kind



Theorem
The following definitions of the concept of Complete Elliptic Integral of the Second Kind are equivalent:

Definition 1
$\ds \map E k = \int \limits_0^{\pi / 2} \sqrt {1 - k^2 \sin^2 \phi} \rd \phi$
is the complete elliptic integral of the second kind, and is a function of $k$, defined on the interval $0 < k < 1$.

Definition 2
$\ds \map E k = \int \limits_0^1 \dfrac {\sqrt {1 - k^2 v^2} } {\sqrt {1 - v^2} } \rd v$
is the complete elliptic integral of the second kind, and is a function of $k$, defined on the interval $0 < k < 1$.


Proof
Let $\map E k$ be the complete elliptic integral of the second kind by definition $1$.

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














\(\ds \map E k\)

\(=\)







\(\ds \int \limits_0^{\pi / 2} \sqrt {1 - k^2 \sin^2 \phi} \rd \phi\)





Definition 1 of Complete Elliptic Integral of the Second Kind














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \sqrt {1 - k^2 \sin^2 \phi} \frac {\d v} {\cos \phi}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \sqrt {1 - k^2 \sin^2 \phi} \frac {\d v} {\sqrt {1 - \sin^2 \phi} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \dfrac {\sqrt {1 - k^2 v^2} } {\sqrt {1 - v^2} } \rd v\)





substituting for $v$



 
Thus $\map E k$ is the complete elliptic integral of the second kind by definition $2$.
$\blacksquare$





