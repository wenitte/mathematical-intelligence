# 

Source: https://proofwiki.org/wiki/Cardano%27s_Formula/Trigonometric_Form



Theorem
Let $P$ be the cubic equation:

$a x^3 + b x^2 + c x + d = 0$ with $a \ne 0$
Let:














\(\ds Q\)

\(=\)







\(\ds \dfrac {3 a c - b^2} {9 a^2}\)




















\(\ds R\)

\(=\)







\(\ds \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}\)










Let $a, b, c, d \in \R$.
Let the discriminant $D < 0$, where $D := Q^3 + R^2$.

Then the solutions of $P$ can be expressed as:




\(\text {(1)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3} - \dfrac b {3 a}\)










\(\text {(2)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3 + \dfrac {2 \pi} 3} - \dfrac b {3 a}\)










\(\text {(3)}: \quad\)









\(\ds x_3\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3 + \dfrac {4 \pi} 3} - \dfrac b {3 a}\)










where:

$\cos \theta = \dfrac R {\sqrt {-Q^3} }$


Proof
From Cardano's Formula, the roots of $P$ are:




\(\text {(1)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds S + T - \dfrac b {3 a}\)










\(\text {(2)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds -\dfrac {S + T} 2 - \dfrac b {3 a} + \dfrac {i \sqrt 3} 2 \paren {S - T}\)










\(\text {(3)}: \quad\)









\(\ds x_3\)

\(=\)







\(\ds -\dfrac {S + T} 2 - \dfrac b {3 a} - \dfrac {i \sqrt 3} 2 \paren {S - T}\)










where:














\(\ds S\)

\(=\)







\(\ds \sqrt [3] {R + \sqrt {Q^3 + R^2} }\)




















\(\ds T\)

\(=\)







\(\ds \sqrt [3] {R - \sqrt {Q^3 + R^2} }\)










Let $D = Q^3 + R^2 < 0$.
Then:

$S^3 = R + i \sqrt {\size {Q^3 + R^2} }$

We can express this in polar form:

$S^3 = r \paren {\cos \theta + i \sin \theta}$
where:

$r = \sqrt {R^2 + \paren {\sqrt {Q^3 + R^2} }^2} = \sqrt {R^2 - \paren {Q^3 + R^2} } = \sqrt {-Q^3}$
$\tan \theta = \dfrac {\sqrt {\size {Q^3 + R^2} } } R$

Then:

$\cos \theta = \dfrac R {\sqrt {-Q^3} }$
Similarly for $T^3$.

The result:




\(\text {(1)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3} - \dfrac b {3 a}\)










\(\text {(2)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3 + \dfrac {2 \pi} 3} - \dfrac b {3 a}\)










\(\text {(3)}: \quad\)









\(\ds x_3\)

\(=\)







\(\ds 2 \sqrt {-Q} \map \cos {\dfrac \theta 3 + \dfrac {4 \pi} 3} - \dfrac b {3 a}\)









follows after some algebra.
$\blacksquare$


Historical Note
The Trigonometric Form of Cardano's Formula was devised by François Viète and published in $1591$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 9$: Solutions of Algebraic Equations: $9.4$ Cubic Equation: $x^3 + a_1 x^2 + a_2 x^1 + a_3 = 0$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): cubic
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): cubic




