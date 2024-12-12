# 

Source: https://proofwiki.org/wiki/Characterization_of_Almost_Everywhere_Zero



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $f : X \to \overline \R$ be a measurable function.

Then:

$f = 0$ $\mu$-almost everywhere
if and only if:

$\ds \forall A \in \Sigma : \int \paren {\chi_A \cdot f} \rd \mu = 0$
where:

$\chi_A$ is the characteristic function of $A$


Proof
Necessary condition
First, by Measurable Function Zero A.E. iff Absolute Value has Zero Integral:

$\ds \int \size f \rd \mu = 0$

Let $A\in\Sigma$.
Let $\paren {\chi_A \cdot f}^+$, $\paren {\chi_A \cdot f}^-$ be the positive and negative parts of $\chi_A \cdot f$, respectively.
Observe:

$\paren {\chi_A \cdot f}^+ \le \size f$
and:

$\paren {\chi_A \cdot f}^- \le \size f$
Therefore, by Integral of Positive Measurable Function is Monotone:

$\ds \int \paren {\chi_A \cdot f}^+ \rd \mu \le \int \size f \rd \mu = 0$
and:

$\ds \int \paren {\chi_A \cdot f}^- \rd \mu \le \int \size f \rd \mu = 0$
This means by definition of integral:

$\ds \int \paren { \chi_A \cdot f } \rd \mu = 0$.
$\Box$


Sufficient condition













\(\ds \map \mu {\set {f \mathop > 1 / n} }\)

\(=\)







\(\ds \int \chi_{\set {f \mathop > \frac 1 n} } \rd \mu\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(\le\)







\(\ds \int \chi_{\set {f \mathop > \frac 1 n} } n f \rd \mu\)





Integral of Positive Measurable Function is Monotone, $\chi_{\set {f \mathop > \frac 1 n} } \le \chi_{\set {f \mathop > \frac 1 n} } n f$














\(\ds \)

\(=\)







\(\ds n \int \chi_{\set {f \mathop > \frac 1 n} } f \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds 0\)





by hypothesis



Similarly:

$\map \mu {\set {-f > 1 / n} } = 0$
Altogether:

$\map \mu {\set {\size f > 1 / n} } = 0$
Therefore:














\(\ds \map \mu {\set  {f \ne 0 } }\)

\(=\)







\(\ds \map \mu {\set {\size f > 0 } }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1} ^\infty \set {\size f > 1 / n} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1} ^\infty \map \mu {\set {\size f > 1 / n} }\)





Measure is Countably Subadditive














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$





