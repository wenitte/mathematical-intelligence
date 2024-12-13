# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b_cubed

Theorem
$\ds \int \frac {\d x} {x^3 \paren {a x + b}^3} = \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} - \frac {4 a^3 x} {b^5 \paren {a x + b} } - \frac {\paren {a x + b}^2} {2 b^5 x^2} + \frac {4 a} {b^4 x} + \frac {6 a^2} {b^5} \ln \size {\frac x {a x + b} } + C$


Proof
A partial fraction expansion of the integrand gives:

$\dfrac 1 {x^3 \paren {a x + b}^3} = \dfrac {6 a^2} {b^5 x} - \dfrac {3 a} {b^4 x^2} + \dfrac 1 {b^3 x^3} - \dfrac {6 a^3} {b^5 \paren {a x + b} } - \dfrac {3 a^3} {b^4 \paren {a x + b}^2} - \dfrac {a^3} {b^3 \paren {a x + b}^3}$

From Linear Combination of Primitives it follows that the expression can be rendered as:

$\ds \int \frac {\d x} {x^3 \paren {a x + b}^3} = \frac {6 a^2} {b^5} \int \frac {\d x} x - \frac {3 a} {b^4} \int \frac {\d x} {x^2} + \frac 1 {b^3} \int \frac {\d x} {x^3} - \frac {6 a^3} {b^5} \int \frac {\d x} {\paren {a x + b} } - \frac {3 a^3} {b^4} \int \frac {\d x} {\paren {a x + b}^2} - \frac {a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^3}$

This can be integrated termwise as follows (ignoring for now the arbitrary constant):














\(\ds \frac {6 a^2} {b^5} \int \frac {\d x} x\)

\(=\)







\(\ds \frac {6 a^2} {b^5} \ln \size x\)





Primitive of Reciprocal














\(\ds -\frac {3 a} {b^4} \int \frac {\d x} {x^2}\)

\(=\)







\(\ds \frac {3 a} {b^4 x}\)





Primitive of Power














\(\ds \frac 1 {b^3} \int \frac {\d x} {x^3}\)

\(=\)







\(\ds -\frac 1 {2 b^3 x^2}\)





Primitive of Power














\(\ds -\frac {6 a^3} {b^5} \int \frac {\d x} {\paren {a x + b} }\)

\(=\)







\(\ds -\frac {6 a^2} {b^5} \ln \size {a x + b}\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds - \frac {3 a^3} {b^4} \int \frac {\d x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \frac {3 a^3} {b^4 a \paren {a x + b} }\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds -\frac {a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^3}\)

\(=\)







\(\ds \frac {a^2} {2 b^3 \paren {a x + b}^2}\)





Primitive of $\dfrac 1 {\paren {a x + b}^3}$




The terms with the logarithm can be combined thus:














\(\ds \frac {6 a^2} {b^5} \ln \size x - \frac {6 a^2} {b^5} \ln \size {a x + b}\)

\(=\)







\(\ds \frac {6 a^2} {b^5} \ln \size {\frac x {a x + b} }\)





Difference of Logarithms




and so the solution to the integral can be expressed as:














\(\ds \int \frac {\d x} {x^3 \paren {a x + b}^3}\)

\(=\)







\(\ds \frac {3 a} {b^4 x} - \frac 1 {2 b^3 x^2} + \frac {3 a^2} {b^4 \paren {a x + b} } + \frac {a^2} {2 b^3 \paren {a x + b}^2} + \frac {6 a^2} {b^5} \ln \size {\frac x {a x + b} } + C\)










While this would usually be considered as an acceptable form to leave such an expression, there is some way to go to obtain the result requested.

So, placing the non-logarithmic terms over a common denominator and rearranging, with a view to our destination:














\(\ds \)

\(\)







\(\ds \frac {3 a} {b^4 x} - \frac 1 {2 b^3 x^2} + \frac {3 a^2} {b^4 \paren {a x + b} } + \frac {a^2} {2 b^3 \paren {a x + b}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {6 a x \paren {a x + b}^2} {2 b^4 x^2 \paren {a x + b}^2} - \frac {b \paren {a x + b}^2} {2 b^4 x^2 \paren {a x + b}^2} + \frac {6 a^2 x^2 \paren {a x + b} } {2 b^4 x^2 \paren {a x + b}^2} + \frac {a^2 b x^2} {2 b^4 x^2 \paren {a x + b}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {12 a^3 x^3 + 18 a^2 b x^2 + 4 a b^2 x - b^3} {2 b^4 \paren {a x + b}^2 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^4 + 16 a^3 b x^3 + 24 a^2 b^2 x^2 + 8 a b^3 x} {2 b^5 \paren {a x + b}^2 x^2} - \frac {a^4 x^4 + 4 a^3 b x^3 + 6 a^2 b^2 x^2 + 4 a b^3 x + b^4} {2 b^5 \paren {a x + b}^2 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^4 + 16 a^3 b x^3 + 24 a^2 b^2 x^2 + 8 a b^3 x} {2 b^5 \paren {a x + b}^2 x^2} - \frac {\paren {a x + b}^4} {2 b^5 \paren {a x + b}^2 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^4 + 16 a^3 b x^3 + 24 a^2 b^2 x^2 + 8 a b^3 x} {2 b^5 \paren {a x + b}^2 x^2} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {16 a^3 b x^3 + 24 a^2 b^2 x^2 + 8 a b^3 x} {2 b^5 \paren {a x + b}^2 x^2} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {8 a^3 b x^3 + 8 a^2 b^2 x^2} {2 b^5 \paren {a x + b}^2 x^2} + \frac {8 a^3 b x^3 + 16 a^2 b^2 x^2 + 8 a b^3 x} {2 b^5 \paren {a x + b}^2 x^2} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {8 a^2 b x^2 \paren {a x + b} } {2 b^5 \paren {a x + b}^2 x^2} + \frac {8 a b x \paren {a x + b}^2} {2 b^5 \paren {a x + b}^2 x^2} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {4 a^2} {b^4 \paren {a x + b} } + \frac {4 a} {b^4 x} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {4 a^2 b} {b^5 \paren {a x + b} } + \frac {4 a} {b^4 x} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {4 a^2 \paren {a x + b} } {b^5 \paren {a x + b} } - \frac {4 a^3 x} {b^5 \paren {a x + b} } + \frac {4 a} {b^4 x} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} + \frac {4 a^2} {b^5} - \frac {4 a^3 x} {b^5 \paren {a x + b} } + \frac {4 a} {b^4 x} - \frac {\paren {a x + b}^2} {2 b^5 x^2}\)










Thus the full solution to the integral can be assembled as follows, where $\dfrac {4 a^2} {b^5}$ is subsumed into the arbitrary constant:














\(\ds \int \frac {\d x} {x^3 \paren {a x + b}^3}\)

\(=\)







\(\ds \frac {a^4 x^2} {2 b^5 \paren {a x + b}^2} - \frac {4 a^3 x} {b^5 \paren {a x + b} } - \frac {\paren {a x + b}^2} {2 b^5 x^2} + \frac {4 a} {b^4 x} + \frac {6 a^2} {b^5} \ln \size {\frac x {a x + b} } + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.79$
(in which a mistake apppears)




