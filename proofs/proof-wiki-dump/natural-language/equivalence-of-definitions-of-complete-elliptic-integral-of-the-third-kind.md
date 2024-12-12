# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complete_Elliptic_Integral_of_the_Third_Kind



Theorem
The following definitions of the concept of Complete Elliptic Integral of the Third Kind are equivalent:

Definition 1
$\ds \map \Pi {k, n} = \int \limits_0^{\pi / 2} \frac {\d \phi} {\paren {1 + n \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }$
is the complete elliptic integral of the third kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$n \in \Z$
Definition 2
$\ds \map \Pi {k, n} = \int \limits_0^1 \frac {\d v} {\paren {1 + n v^2} \sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }$
is the complete elliptic integral of the third kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$n \in \Z$


Proof
Let $\map \Pi {k, n}$ be the complete elliptic integral of the third kind by definition $1$.

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














\(\ds \map \Pi {k, n}\)

\(=\)







\(\ds \int \limits_0^{\pi / 2} \frac {\d \phi} {\paren {1 + n \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }\)





Definition 1 of Complete Elliptic Integral of the Third Kind














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\paren {1 + n \sin^2 \phi} \cos \phi \sqrt {1 - k^2 \sin^2 \phi} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\paren {1 + n \sin^2 \phi} \sqrt {1 - \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \limits_0^1 \frac {\d v} {\paren {1 + n v^2} \sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }\)





substituting for $v$



 
Thus $\map \Pi {k, n}$ is the complete elliptic integral of the third kind by definition $2$.
$\blacksquare$





