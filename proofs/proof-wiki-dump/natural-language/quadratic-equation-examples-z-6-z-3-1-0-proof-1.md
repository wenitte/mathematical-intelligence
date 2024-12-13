# 

Source: https://proofwiki.org/wiki/Quadratic_Equation/Examples/z%5E6_%2B_z%5E3_%2B_1_%3D_0/Proof_1

Example of Quadratic Equation
The sextic equation:

$z^6 + z^3 + 1 = 0$
has the solutions:

$z = \begin{cases} \cos \dfrac {2 \pi} 9 \pm i \sin \dfrac {2 \pi} 9 \\ \cos \dfrac {4 \pi} 9 \pm i \sin \dfrac {4 \pi} 9 \\ \cos \dfrac {8 \pi} 9 \pm i \sin \dfrac {8 \pi} 9 \end{cases}$


Proof
Although this is a sextic in $z$, it can be solved as a quadratic in $z^3$.
From the Quadratic Formula:














\(\ds z^6 + z^3 + 1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z^3\)

\(=\)







\(\ds \dfrac {-1 \pm \sqrt {1^2 - 4 \times 1 \times 1} } {2 \times 1}\)





Quadratic Formula: $a = 1$, $b = 1$, $c = 1$














\(\ds \)

\(=\)







\(\ds -1 \pm \dfrac {\sqrt {-3} } 2\)





simplifying














\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \pm i \dfrac {\sqrt 3} 2\)





Definition of Imaginary Unit



$\Box$

$-\dfrac 1 2 \pm i \dfrac {\sqrt 3} 2$ are recognised as the complex cube roots of unity, and so:














\(\ds z^3\)

\(=\)







\(\ds e^{\pm 2 i \pi / 3}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {2 \pi} 3 \pm i \sin  \dfrac {2 \pi} 3\)










It remains to solve for $z$.
By Roots of Complex Number:

$z = \set {w \alpha^k: k \in \set {1, 2, \ldots, n - 1} }$
where:

$w$ is a cube root of $e^{\pm 2 i \pi / 3}$
$\alpha$ is one of the complex cube roots of unity.

Taking $z^3 = e^{2 i \pi / 3}$:














\(\ds z\)

\(=\)







\(\ds e^{2 i \pi / 9} e^{2 k i \pi / 3}\)




















\(\ds \)

\(=\)







\(\ds e^{2 i \pi / 9 + 2 k i \pi / 3}\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {\dfrac {2 \pi} 9 + \dfrac {2 k \pi} 3} + i \sin \paren {\dfrac {2 \pi} 9 + \dfrac {2 k \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases} \cos \dfrac {2 \pi} 9 + i \sin \dfrac {2 \pi} 9 \\ \cos \dfrac {8 \pi} 9 + i \sin \dfrac {8 \pi} 9 \\ \cos \dfrac {14 \pi} 9 + i \sin \dfrac {14 \pi} 9 \end{cases}\)










The roots obtained by taking $z^3 = e^{-2 i \pi / 3}$ can be calculated as above:














\(\ds z\)

\(=\)







\(\ds e^{-2 i \pi / 9} e^{2 k i \pi / 3}\)




















\(\ds \)

\(=\)







\(\ds e^{-2 i \pi / 9 + 2 k i \pi / 3}\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {\dfrac {-2 \pi} 9 + \dfrac {2 k \pi} 3} + i \sin \paren {\dfrac {-2 \pi} 9 + \dfrac {2 k \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases} \cos \dfrac {2 \pi} 9 - i \sin \dfrac {2 \pi} 9 \\ \cos \dfrac {4 \pi} 9 + i \sin \dfrac {4 \pi} 9 \\ \cos \dfrac {10 \pi} 9 + i \sin \dfrac {10 \pi} 9 \end{cases}\)










We note that:














\(\ds \cos \dfrac {14 \pi} 9 + i \sin \dfrac {14 \pi} 9\)

\(=\)







\(\ds \cos \paren {2 \pi - \dfrac {4 \pi} 9} + i \sin \paren {2 \pi - \dfrac {4 \pi} 9}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {4 \pi} 9 - i \sin \dfrac {4 \pi} 9\)










and:














\(\ds \cos \dfrac {10 \pi} 9 + i \sin \dfrac {10 \pi} 9\)

\(=\)







\(\ds \cos \paren {2 \pi - \dfrac {8 \pi} 9} + i \sin \paren {2 \pi - \dfrac {8 \pi} 9}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {8 \pi} 9 - i \sin \dfrac {8 \pi} 9\)









$\blacksquare$





