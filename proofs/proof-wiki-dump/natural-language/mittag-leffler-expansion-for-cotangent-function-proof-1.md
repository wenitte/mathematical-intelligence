# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cotangent_Function/Proof_1

Theorem
$\ds \pi \cot \pi z = \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}$
where:

$z \in \C$ is not an integer
$\cot$ is the cotangent function.


Outline of proof
Informally, we can say:

$\pi \cot \pi z = \map {\dfrac \d {\d z} } {\ln \map \sin {\pi z} }$.
We then use the Euler Formula for Sine Function to write $\map \sin {\pi z}$ as an infinite product and differentiate its logarithm.
Formally, we work with logarithmic derivatives and use Logarithmic Derivative of Infinite Product of Analytic Functions.


Proof
Let $\LL$ denote the logarithmic derivative.
On the open set $\C \setminus \Z$ we have:














\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \map \LL {\map \sin {\pi z} }\)





Primitive of Cotangent Function, or a complex version thereof














\(\ds \)

\(=\)







\(\ds \map \LL {\pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2} } }\)





Euler Formula for Sine Function














\(\ds \)

\(=\)







\(\ds \map \LL {\pi z} + \sum_{n \mathop = 1}^\infty \map \LL {1 - \frac {z^2} {n^2} }\)





Logarithmic Derivative of Infinite Product of Analytic Functions














\(\ds \)

\(=\)







\(\ds \frac \pi {\pi z} + \sum_{n \mathop = 1}^\infty \frac 1 {1 - \frac {z^2} {n^2} } \cdot \map {\frac \d {\d z} } {1 - \frac {z^2} {n^2} }\)





Definition of Logarithmic Derivative of Meromorphic Function














\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \frac z {n^2 - z^2}\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}\)









$\blacksquare$





