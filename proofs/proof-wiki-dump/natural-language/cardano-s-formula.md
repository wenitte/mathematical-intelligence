# 

Source: https://proofwiki.org/wiki/Cardano%27s_Formula

  This article was Featured Proof between 22 March 2009 and 28 March 2009.




Theorem
Let $P$ be the cubic equation:

$a x^3 + b x^2 + c x + d = 0$ with $a \ne 0$
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







\(\ds \dfrac {3 a c - b^2} {9 a^2}\)




















\(\ds R\)

\(=\)







\(\ds \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}\)










The expression $D = Q^3 + R^2$ is called the discriminant of the equation.


Real Coefficients
Let $a, b, c, d \in \R$.
Then:

$(1): \quad$ If $D > 0$, then one root is real and two are complex conjugates.
$(2): \quad$ If $D = 0$, then all roots are real, and at least two are equal.
$(3): \quad$ If $D < 0$, then all roots are real and unequal.


Trigonometric Form of Solutions
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
First the cubic is depressed, by using the Tschirnhaus Transformation:

$x \to x + \dfrac b {3 a}$:













\(\ds a x^3 + b x^2 + c x + d\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + \frac b {3 a} }^3 - 3 \frac b {3 a} x^2 - 3 \frac {b^2} {9 a^2} x - \frac {b^3} {27 a^3} + \frac b a x^2 + \frac c a x + \frac d a\)

\(=\)







\(\ds 0\)





completing the cube: $\paren {a + b}^3 = a^3 + 3 a^2 b + 3 a b^2 + b^3$








\(\ds \leadsto \ \ \)





\(\ds \paren {x + \frac b {3 a} }^3 + \paren {\frac {3 a c - b^2} {3 a^2} } x + \paren {\frac {27 a^2 d - b^3} {27 a^3} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + \frac b {3 a} }^3 + \paren {\frac {3 a c - b^2} {3 a^2} } \paren {x + \frac b {3 a} } - \frac b {3 a} \paren {\frac {3 a c - b^2} {3 a^2} } + \paren {\frac {27 a^2 d - b^3} {27 a^3} }\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + \frac b {3 a} }^3 + \paren {\frac {3 a c - b^2} {3 a^2} } \paren {x + \frac b {3 a} } + \paren {\frac {27 a^2 d + 2 b^3 - 9 a b c} {27 a^3} }\)

\(=\)







\(\ds 0\)










Now let:

$y = x + \dfrac b {3 a}, Q = \dfrac {3 a c - b^2} {9 a^2}, R = \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}$
Thus we have obtained the depressed cubic $y^3 + 3 Q y - 2 R = 0$.

Now let $y = u + v$ where $u v = -Q$.
Then:














\(\ds \paren {u + v}^3 + 3 Q \paren {u + v} - 2 R\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u^3 + 3 u^2 v + 3 u v^2 + v^3 + 3 Q \paren {u + v} - 2 R\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u^3 - 3 Q \paren {u + v} + 3 Q \paren {u + v} + v^3 - 2 R\)

\(=\)







\(\ds 0\)





as $u v = -Q$








\(\ds \leadsto \ \ \)





\(\ds u^3 + v^3 - 2 R\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u^3 - \frac {Q^3} {u^3} - 2 R\)

\(=\)







\(\ds 0\)





substituting for $T$ from $u v = -Q$








\(\ds \leadsto \ \ \)





\(\ds u^6 - 2 R u^3 - Q^3\)

\(=\)







\(\ds 0\)









Thus the resolvent equation is obtained.

This resolvent is seen to be a quadratic in $u^3$.
From Solution to Quadratic Equation:

$u^3 = \dfrac {2 R \pm \sqrt {4 Q^3 + 4 R^2}} 2 = R \pm \sqrt {Q^3 + R^2}$

We have from above $u v = -Q$ and hence $v^3 = -\dfrac {Q^3} {u^3}$.
Let us try taking the positive root: $u^3 = R + \sqrt {Q^3 + R^2}$.
Then:














\(\ds v^3\)

\(=\)







\(\ds \frac {-Q^3} {R + \sqrt {Q^3 + R^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-Q^3 \paren {R - \sqrt {Q^3 + R^2} } } {R^2 - \paren {Q^3 + R^2} }\)




















\(\ds \)

\(=\)







\(\ds R - \sqrt {Q^3 + R^2}\)









The same sort of thing happens if you start with $u^3 = R - \sqrt {Q^3 + R^2}$: we get $v^3 = R + \sqrt {Q^3 + R^2}$.
Thus we see that taking either square root we arrive at the same solution.
Without loss of generality:

$u^3 = R + \sqrt {Q^3 + R^2}$
$v^3 = R - \sqrt {Q^3 + R^2}$

Let:

$S = \sqrt [3] {R + \sqrt {Q^3 + R^2} }$
$T = \sqrt [3] {R - \sqrt {Q^3 + R^2} }$
From Roots of Complex Number, we have the three cube roots of $u^3$ and $v^3$:

$u = \begin{cases}
& S \\
\paren {-\dfrac 1 2 + \dfrac {i \sqrt 3} 2} & S \\ 
\paren {-\dfrac 1 2 - \dfrac {i \sqrt 3} 2} & S \\ 
\end{cases}$

$v = \begin{cases}
& T \\
\paren {-\dfrac 1 2 + \dfrac {i \sqrt 3} 2} & T \\ 
\paren {-\dfrac 1 2 - \dfrac {i \sqrt 3} 2} & T \\ 
\end{cases}$
Because of our constraint $u v = -Q$, there are only three combinations of these which are possible such that $y = u + v$:

$ y = \begin{cases}
& S + T  \\
\paren {-\dfrac 1 2 + \dfrac {i \sqrt 3} 2} S + \paren {-\dfrac 1 2 - \dfrac {i \sqrt 3} 2} T = & -\dfrac {S + T} 2 + \dfrac {i \sqrt 3} 2 \paren {S - T} \\ 
\paren {-\dfrac 1 2 - \dfrac {i \sqrt 3} 2} S + \paren {-\dfrac 1 2 + \dfrac {i \sqrt 3} 2} T = & -\dfrac {S + T} 2 - \dfrac {i \sqrt 3} 2 \paren {S - T} \\ 
\end{cases}$
As $y = x + \dfrac b {3a}$, it follows that the three roots are therefore:

$(1): \quad x_1 = S + T - \dfrac b {3 a}$
$(2): \quad x_2 = - \dfrac {S + T} 2 - \dfrac b {3 a} + \dfrac {i \sqrt 3} 2 \paren {S - T}$
$(3): \quad x_3 = - \dfrac {S + T} 2 - \dfrac b {3 a} - \dfrac {i \sqrt 3} 2 \paren {S - T}$
$\blacksquare$


Also presented as
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











Also known as
Cardano's Formula is also sometimes seen referred to as Cardan's Formula, from the English form of Cardano's name, Jerome Cardan.
Some use the term Cardano's Method.

Some sources refer to it as the Tartaglia Formula, acknowledging the work of Niccolò Fontana Tartaglia in its development.


Examples
Example: $x^3 - 15x - 4$
$\ds x^3 - 15x - 4  = 0$
has solutions $x = 4$, $x = -2 + \sqrt 3$ and $x = -2 - \sqrt 3$.


Also see
Tartaglia's Poem


Source of Name
This entry was named for Gerolamo Cardano.


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
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): cubic
2004: Ian Stewart: Galois Theory (3rd ed.) ... (previous) ... (next): Historical Introduction: Polynomial Equations
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): cubic
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $4$: Lure of the Unknown: Cubic equations




