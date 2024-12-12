# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Reciprocal_of_Square_of_a_plus_b_Sine_x



Theorem
$\ds \int_0^{2 \pi} \frac {\d x} {\paren {a + b \sin x}^2} = \frac {2 \pi a} {\paren {a^2 - b^2}^{3/2} }$
where $a$ and $b$ are real numbers with $a > b > 0$.


Proof
From Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {a + b \sin x}$, we have: 

$\ds \int_0^{2 \pi} \frac {\d x} {a + b \sin x} = \frac {2 \pi} {\sqrt {a^2 - b^2} }$
We have: 














\(\ds \frac \partial {\partial a} \int_0^{2 \pi} \frac {\d x} {a + b \sin x}\)

\(=\)







\(\ds \int_0^{2 \pi} \frac \partial {\partial a} \paren {\frac 1 {a + b \sin x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \frac {\d x} {\paren {a + b \sin x}^2}\)





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


Also see
Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {\paren {a + b \cos x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.46$




