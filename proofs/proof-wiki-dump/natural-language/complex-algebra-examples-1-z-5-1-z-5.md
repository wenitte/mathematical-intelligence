# 

Source: https://proofwiki.org/wiki/Complex_Algebra/Examples/(1%2Bz)%5E5_%3D_(1-z)%5E5

Example of Complex Algebra
The roots of the equation:

$\paren {1 + z}^5 = \paren {1 - z}^5$
are:

$z = \set {\dfrac {\omega^k - 1} {\omega^k + 1}: k = 0, 1, 2, 3, 4}$
That is:

$z = \set {0, \dfrac {\omega - 1} {\omega + 1}, \dfrac {\omega^2 - 1} {\omega^2 + 1}, \dfrac {\omega^3 - 1} {\omega^3 + 1} , \dfrac {\omega^4 - 1} {\omega^4 + 1} }$
where:

$\omega = \cis \dfrac {2 \pi i} 5$


Proof
We have:














\(\ds \paren {1 + z}^5\)

\(=\)







\(\ds \paren {1 - z}^5\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\paren {1 + z}^5} {\paren {1 - z}^5}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1 + z} {1 - z}\)

\(=\)







\(\ds 1, \cis \dfrac {2 i \pi} 5, \cis \dfrac {4 i \pi} 5, \cis \dfrac {6 i \pi} 5, \cis \dfrac {8 i \pi} 5\)










Let $\cis \dfrac {2 \pi i} 5 = \omega$ as suggested.
Thus:














\(\ds \frac {1 + z} {1 - z}\)

\(=\)







\(\ds 1, \omega, \omega^2, \omega^3, \omega^4\)




















\(\ds \)

\(=\)







\(\ds \omega^n: n = 0, 1, \dotsc, 4\)










So:














\(\ds 1 + z\)

\(=\)







\(\ds \paren {1 - z} \omega^n\)














\(\ds \leadsto \ \ \)





\(\ds 1 + z\)

\(=\)







\(\ds \omega^n - \omega^n z\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {\omega^n + 1}\)

\(=\)







\(\ds \omega^n - 1\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {\omega^n - 1} {\omega^n + 1}: n = 0, 1, \ldots, 4\)










When $n = 0$:

$\omega^n = 1$
and thus:

$z = \paren {1 - 1} / \paren {1 + 1}$
So:

$z = 0, \dfrac {\omega - 1} {\omega + 1}, \dfrac {\omega^2 - 1} {\omega^2 + 1}, \dfrac {\omega^3 - 1} {\omega^3 + 1}, \dfrac {\omega^4 - 1} {\omega^4 + 1}$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: The $n$th Roots of Unity: $109$




