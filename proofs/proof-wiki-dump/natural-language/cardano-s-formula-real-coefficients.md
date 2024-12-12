# 

Source: https://proofwiki.org/wiki/Cardano%27s_Formula/Real_Coefficients



Theorem
Let $P$ be the cubic equation:

$a x^3 + b x^2 + c x + d = 0$
with $a \ne 0$.
Let $a, b, c, d \in \R$.

Let $D$ be the discriminant of $P$:

$D := Q^3 + R^2$
where:

$Q = \dfrac {3 a c - b^2} {9 a^2}$
$R = \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}$

Then:

$(1): \quad$ If $D > 0$, then one root is real and two are complex conjugates.
$(2): \quad$ If $D = 0$, then all roots are real, and at least two are equal.
$(3): \quad$ If $D < 0$, then all roots are real and unequal.


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











Zero Discriminant
First the easy case: $D = 0$.
Hence $S = T = \sqrt [3] R$, and so $S + T = 2 \sqrt [3] R, S - T = 0$.
From the above, this gives us:




\(\text {(1)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds 2 \sqrt [3] R - \dfrac b {3 a}\)










\(\text {(2)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds -\sqrt [3] R - \dfrac b {3 a}\)










\(\text {(3)}: \quad\)









\(\ds x_3\)

\(=\)







\(\ds -\sqrt [3] R - \dfrac b {3 a}\)









Thus the roots $x_2$ and $x_3$ are equal, and all three roots are real.
They are all equal when $R = 0$.
$\Box$


Positive Discriminant
Let $D = Q^3 + R^2 > 0$.
Then $S = R + \sqrt{Q^3 + R^2}$ and $T = R - \sqrt{Q^3 + R^2}$ are wholly real and distinct.
Therefore, so are $S + T$ and $S - T$.
Hence:

$\dfrac {S + T} 2 - \dfrac b {3 a} + \dfrac {i \sqrt 3} 2 \paren {S - T}$
and

$\dfrac {S + T} 2 - \dfrac b {3 a} - \dfrac {i \sqrt 3} 2 \paren {S - T}$
are complex conjugates.
$\Box$


Negative Discriminant
Let $D = Q^3 + R^2 < 0$.
Then $\sqrt D = \pm i \left|{Q^3 + R^2}\right| = \pm i E$, say, where $E > 0$.
Thus $S^3 = R + i E, T^3 = R - i E$.
Let $\sqrt [3] {R + i E} = p + i q$, and so $\sqrt [3] {R - i E} = p - i q$.
Hence $S + T = 2 p, S - T = 2 i q$.
So:














\(\ds y_1\)

\(=\)







\(\ds S + T\)




















\(\ds \)

\(=\)







\(\ds 2 p\)




















\(\ds y_2\)

\(=\)







\(\ds -\dfrac {S + T} 2 + \dfrac {i \sqrt 3} 2 \paren {S - T}\)




















\(\ds \)

\(=\)







\(\ds -p - \sqrt 3 q\)





after algebra














\(\ds y_3\)

\(=\)







\(\ds -\dfrac {S + T} 2 - \dfrac {i \sqrt 3} 2 \paren {S - T}\)




















\(\ds \)

\(=\)







\(\ds -p + \sqrt 3 q\)





after algebra




Subtracting $\dfrac b {3 a}$ from the above, we obtain the three distinct real solutions:




\(\text {(1)}: \quad\)









\(\ds x_1\)

\(=\)







\(\ds 2 p - \dfrac b {3 a}\)










\(\text {(2)}: \quad\)









\(\ds x_2\)

\(=\)







\(\ds -p - \sqrt 3 q - \dfrac b {3 a}\)










\(\text {(3)}: \quad\)









\(\ds x_3\)

\(=\)







\(\ds -p + \sqrt 3 q - \dfrac b {3 a}\)









$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.8$ Algebraic Equations: Solution of Cubic Equations: $3.8.2$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 9$: Solutions of Algebraic Equations: $9.3$ Cubic Equation
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): cubic
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): cubic




