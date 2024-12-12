# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Incomplete_Elliptic_Integral_of_the_Second_Kind



Theorem
The following definitions of the concept of Incomplete Elliptic Integral of the Second Kind are equivalent:

Definition 1
$\ds \map E {k, \phi} = \int \limits_0^\phi \sqrt {1 - k^2 \sin^2 \phi} \rd \phi$
is the incomplete elliptic integral of the second kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$\phi$, defined on the interval $0 \le \phi \le \pi / 2$.
Definition 2
$\ds \map E {k, \phi} = \int \limits_0^x \dfrac {\sqrt {1 - k^2 v^2} } {\sqrt {1 - v^2}} \rd v$
is the incomplete elliptic integral of the second kind, and is a function of the variables:

$k$, defined on the interval $0 < k < 1$
$x = \sin \phi$, where $\phi$ is defined on the interval $0 \le \phi \le \pi / 2$.


Proof
Let $\map E {k, \phi}$ be the incomplete elliptic integral of the second kind by definition $1$.

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














\(\ds \map E {k, \phi}\)

\(=\)







\(\ds \int \limits_0^\phi \sqrt {1 - k^2 \sin^2 \phi} \rd \phi\)





Definition 1 of Incomplete Elliptic Integral of the Second Kind














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \sqrt {1 - k^2 \sin^2 \phi} \frac {\d v} {\cos \phi}\)





Integration by Substitution: $x = \sin \phi$














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \sqrt {1 - k^2 \sin^2 \phi} \frac {\d v} {\sqrt {1 - \sin^2 \phi} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \limits_0^x \dfrac {\sqrt {1 - k^2 v^2} } {\sqrt {1 - v^2} } \rd v\)





substituting for $v$



 
Thus $\map E {k, \phi}$ is the incomplete elliptic integral of the second kind by definition $2$.
$\blacksquare$





