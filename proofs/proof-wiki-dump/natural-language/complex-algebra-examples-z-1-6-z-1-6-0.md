# 

Source: https://proofwiki.org/wiki/Complex_Algebra/Examples/(z-1)%5E6_%2B_(z%2B1)%5E6_%3D_0

Example of Complex Algebra
The roots of the equation:

$\paren {z - 1}^6 + \paren {z + 1}^6 = 0$
are:

$\pm i \cot \dfrac \pi {12}, \pm i \cot \dfrac {5 \pi} {12}, \pm i$


Proof













\(\ds \paren {z - 1}^6 + \paren {z + 1}^6\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 z^6 + 30 z^4 + 30 z^2 + 2\)

\(=\)







\(\ds 0\)





expanding the terms, perhaps using Binomial Theorem




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds z^6 + 15 z^4 + 15 z^2 + 1\)

\(=\)







\(\ds 0\)





dividing by 2 on each side




By substituting $z = i$ in $(1)$ above, it is seen that $i$ is a root of $(1)$:














\(\ds i^6 + 15 i^4 + 15 i^2 + 1\)

\(=\)







\(\ds -1 + 15 - 15 + 1\)




















\(\ds \)

\(=\)







\(\ds 0\)










From Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs it follows that $-i$ is also a root of $(1)$.
So it is now established $i$ and $-i$ are indeed roots of $(1)$.





\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {z^2 + 1} \paren {z^4 + 14 z^2 + 1}\)

\(=\)







\(\ds 0\)





factoring out the roots found above




Substituting $x = z^2$ into the second factor of $(2)$ gives the quadratic equation:

$x^2 + 14 x + 1 = 0$
which, from Solution to Quadratic Equation, has roots:














\(\ds x\)

\(=\)







\(\ds \dfrac {-14 \pm \sqrt {14^2 - 4} } 2\)




















\(\ds \)

\(=\)







\(\ds -7 \pm 4 \sqrt 3\)














\(\ds \leadsto \ \ \)





\(\ds z^2\)

\(=\)







\(\ds -7 \pm 4 \sqrt 3\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \pm \sqrt{ -7 \pm 4 \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds \pm i \sqrt{ 7 \pm 4 \sqrt 3}\)










Since:

$7 + 4 \sqrt 3 = \paren {2 + \sqrt 3}^2$
and:

$7 - 4 \sqrt 3 = \paren {2 - \sqrt 3}^2$
it follows we have roots:

$z = \pm i \paren {2 \pm \sqrt 3}$

From Particular Values of Cotangent Function:

$\cot \dfrac {\pi} {12} = 2 + \sqrt 3$
and:

$\cot \dfrac {5 \pi} {12} = 2 - \sqrt 3$

Therefore we can simplify the remaining roots as:

$\pm i \cot \dfrac \pi {12}, \pm i \cot \dfrac {5 \pi} {12}$
as required.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: Exercise $10$




