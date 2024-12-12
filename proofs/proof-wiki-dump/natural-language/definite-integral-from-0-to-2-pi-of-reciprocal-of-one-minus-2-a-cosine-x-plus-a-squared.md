# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Reciprocal_of_One_minus_2_a_Cosine_x_plus_a_Squared

Theorem
$\ds \int_0^{2 \pi} \frac {\d x} {1 - 2 a \cos x + a^2} = \frac {2 \pi} {1 - a^2}$
where $a$ is a real number with $0 < a < 1$.


Proof

This article, or a section of it, needs explaining.In particular: The context of this needs to be explained a little more deeply: the integrand is defined as a real function, but the analysis is actually in the complex plane. The latter needs to be brought forward so as to make it clear to the reader.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $C$ be the unit open disk centred at $0$. 
The boundary of $C$, $\partial C$, can be parameterized by: 

$\map \gamma \theta = e^{i \theta}$
for $0 \le \theta \le 2 \pi$. 
We have: 














\(\ds \int_0^{2 \pi} \frac {\d x} {1 - 2 a \cos x + a^2}\)

\(=\)







\(\ds \int_0^{2 \pi} \frac {\d x} {1 - a \paren {e^{i x} + e^{-i x} } + a^2}\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \frac {e^{i x} } {a e^{2 i x} - \paren {a^2 + 1} e^{i x} + a} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a \int_0^{2 \pi} \frac {e^{i x} } {e^{2 i x} - \paren {a + \frac 1 a} e^{i x} + \frac a a} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a \int_0^{2 \pi} \frac {e^{i x} } {\paren {e^{i x} - \frac 1 a} \paren {e^{i x} - a} } \rd x\)





factorising














\(\ds \)

\(=\)







\(\ds -\frac 1 {i a} \int_{\partial C} \frac 1 {\paren {z - \frac 1 a} \paren {z - a} } \rd z\)





Definition of Complex Contour Integral, Derivative of Exponential Function



The integrand has poles: 

$z_1 = a$
and: 

$z_2 = \dfrac 1 a$
We have $0 < a < 1$, so $\dfrac 1 a > 1$. 
So:

$z_2$ lies outside the closed disk $\size z \le 1$
and:

$z_1$ lies in $C$
Thus the only pole of concern is $z_1$. 
Therefore: 














\(\ds -\frac 1 {i a} \int_{\partial C} \frac 1 {\paren {z - \frac 1 a} \paren {z - a} } \rd z\)

\(=\)







\(\ds -\frac {2 \pi} a \Res {\frac 1 {\paren {z - \frac 1 a} \paren {z - a} } } a\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds -\frac {2 \pi} a \paren {\frac 1 {2 z - \paren {a + \frac 1 a} } }_{z \mathop = a}\)





Residue at Simple Pole, Derivative of Power














\(\ds \)

\(=\)







\(\ds -\frac {2 \pi} a \paren {\frac 1 {2 a - a - \frac 1 a} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {1 - a^2}\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.46$




