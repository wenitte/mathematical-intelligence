# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Reciprocal_of_Square_of_a_plus_b_Cosine_x



Theorem
$\ds \int_0^{2 \pi} \frac {\d x} {\paren {a + b \cos x}^2} = \frac {2 \pi a} {\paren {a^2 - b^2}^{3/2} }$
where $a$ and $b$ are real numbers with $a > b > 0$.


Proof 1
From Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {a + b \cos x}$, we have: 

$\ds \int_0^{2 \pi} \frac {\d x} {a + b \cos x} = \frac {2 \pi} {\sqrt {a^2 - b^2} }$
We have: 














\(\ds \frac \partial {\partial a} \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)

\(=\)







\(\ds \int_0^{2 \pi} \frac \partial {\partial a} \paren {\frac 1 {a + b \cos x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \frac {\d x} {\paren {a + b \cos x}^2}\)





Quotient Rule for Derivatives



and: 














\(\ds \frac \partial {\partial a} \paren {\frac {2 \pi} {\sqrt {a^2 - b^2} } }\)

\(=\)







\(\ds 2 \pi \paren {\frac {-2 a} {2 \sqrt {a^2 - b^2} } } \paren {\frac 1 {a^2 - b^2} }\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\frac {2 \pi a} {\paren {a^2 - b^2}^{3/2} }\)









giving:

$\ds \int_0^{2 \pi} \frac {\d x} {\paren {a + b \cos x}^2} = \frac {2 \pi a} {\paren {a^2 - b^2}^{3/2} }$
$\blacksquare$


Proof 2













\(\ds \int_0^{2 \pi} \frac {\d x} {\paren {a + b \cos x}^2}\)

\(=\)







\(\ds \intlimits {\frac {b \sin x} {\paren {b^2 - a^2} \paren {a + b \cos x} } } 0 {2 \pi} - \frac a {b^2 - a^2} \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)





Primitive of Reciprocal of square of p plus q by Cosine of a x














\(\ds \)

\(=\)







\(\ds \frac {b \sin 2 \pi} {\paren {b^2 - a^2} \paren {a + b \cos 2 \pi} } - \frac {b \sin 0} {\paren {b^2 - a^2} \paren {a + b \cos 0} } + \frac a {a^2 - b^2} \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)




















\(\ds \)

\(=\)







\(\ds \frac a {a^2 - b^2} \int_0^{2 \pi} \frac {\d x} {a + b \cos x}\)





Sine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac a {a^2 - b^2} \times \frac {2 \pi} {\sqrt {a^2 - b^2} }\)





Definite Integral from 0 to 2 Pi of Reciprocal of a plus b Cosine x














\(\ds \)

\(=\)







\(\ds \frac {2 \pi a} {\paren {a^2 - b^2}^{3/2} }\)









$\blacksquare$


Also see
Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {\paren {a + b \sin x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.46$




