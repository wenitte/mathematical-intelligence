# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Incomplete_Elliptic_Integral_of_the_Third_Kind



Theorem
The following definitions of the concept of Incomplete Elliptic Integral of the Third Kind are equivalent:

Definition 1
$\ds \map \Pi {k, n, \phi} = \int \limits_0^\phi \frac {\d \phi} {\paren {1 + n \sin^2 \phi} \sqrt{1 - k^2 \sin^2 \phi} }$
is the incomplete elliptic integral of the third kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$n \in \Z$
$\phi$, defined on the interval $0 \le \phi \le \pi / 2$.
Definition 2
$\ds \map \Pi {k, n, \phi} = \int \limits_0^x \frac {\d v} {\paren {1 + n v^2} \sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }$
is the incomplete elliptic integral of the third kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$n \in \Z$
$x = \sin \phi$, where $\phi$ is defined on the interval $0 \le \phi \le \pi / 2$.


Proof
Let $\map \Pi {k, n, \phi}$ be the incomplete elliptic integral of the third kind by definition $1$.

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









So as $0 \le \phi \le \dfrac \pi 2$, we have that $0 \le v \le 1$.

Hence:














\(\ds \map \Pi {k, n, \phi}\)

\(=\)







\(\ds \int \limits_0^\phi \frac {\d \phi} {\paren {1 + n \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }\)





Definition 1 of Incomplete Elliptic Integral of the Third Kind














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \frac {\d v} {\paren {1 + n \sin^2 \phi} \cos \phi \sqrt {1 - k^2 \sin^2 \phi} }\)





Integration by Substitution: $x = \sin \phi$














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \frac {\d v} {\paren {1 + n \sin^2 \phi} \sqrt {1 - \sin^2 \phi} \sqrt {1 - k^2 \sin^2 \phi} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \frac {\d v} {\paren {1 + n v^2} \sqrt {\paren {1 - v^2} \paren {1 - k^2 v^2} } }\)





substituting for $v$



 
Thus $\map \Pi {k, n, \phi}$ is the incomplete elliptic integral of the third kind by definition $2$.
$\blacksquare$





