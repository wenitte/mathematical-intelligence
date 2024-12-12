# 

Source: https://proofwiki.org/wiki/Cardano%27s_Formula/Also_presented_as



Cardano's Formula: Also presented as
Cardano's Formula can also be presented in the following form:
Let $P$ be the cubic equation:

$x^3 + a_2 x^2 + a_1 x + a_1 = 0$
Then $P$ has solutions:














\(\ds x_1\)

\(=\)







\(\ds S + T - \dfrac b {3 a}\)




















\(\ds x_2\)

\(=\)







\(\ds -\dfrac {S + T} 2 - \dfrac b {3 a} + \dfrac {i \sqrt 3} 2 \paren {S - T}\)




















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









where:














\(\ds Q\)

\(=\)







\(\ds \dfrac 1 3 a_1 - \dfrac 1 9 {a_2}^2\)




















\(\ds R\)

\(=\)







\(\ds \dfrac 1 6 \paren {a_1 a_2 - 3 a_0} - \dfrac 1 {27} {a_2}^3\)











Proof
From the main presentation of Cardano's Formula, we have that:














\(\ds Q\)

\(=\)







\(\ds \dfrac {3 a c - b^2} {9 a^2}\)




















\(\ds R\)

\(=\)







\(\ds \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}\)










Hence setting $a \gets 1$, $b \gets a_2$, $c \gets a_1$ and $d \gets a_0$:














\(\ds Q\)

\(=\)







\(\ds \dfrac {3 \times a_1 - {a_2}^2} {9 \times 1^2}\)

\(\ds = \dfrac 1 3 a_1 - \dfrac 1 9 {a_2}^2\)


















\(\ds R\)

\(=\)







\(\ds \dfrac {9 \times 1 \times a_2 a_1 - 27 \times 1^2 \times a_0 - 2 {a_2}^3} {54 \times 1^3}\)

\(\ds = \dfrac 1 6 \paren {a_1 a_2 - 3 a_0} - \dfrac 1 {27} {a_2}^3\)







after simplification.
$\blacksquare$


Historical Note
Cardano's Formula (in an incomplete form) was first published by Gerolamo Cardano in $1545$, in his Artis Magnae, Sive de Regulis Algebraicis.
He learned the technique from Niccolò Fontana Tartaglia, who had sworn him to secrecy.
However, as Cardano learned in $1543$, the technique had in fact first been discovered by Scipione del Ferro, so he no longer felt bound by his oath to Tartaglia.
The latter did not see the matter in the same light, and entered into a feud with Cardano that lasted a decade.

This technique was not actually analyzed in depth until the work of Rafael Bombelli, who was the first one to solve the problem of what to do about the "imaginary numbers" that inevitably arose when using this formula.

The method detailed here is that given by Johannes van Waveren Hudde, who delivered it some time around $1650$.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.8$ Algebraic Equations: Solution of Cubic Equations: $3.8.2$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 9$: Solutions of Algebraic Equations: $9.3$ Cubic Equation
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Introduction




