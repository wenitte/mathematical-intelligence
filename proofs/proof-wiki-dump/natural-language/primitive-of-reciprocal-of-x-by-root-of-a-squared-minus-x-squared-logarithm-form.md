# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_a_squared_minus_x_squared/Logarithm_Form



Theorem
For $a > 0$ and $0 < \size x < a$:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C$


Proof













\(\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} }\)

\(=\)







\(\ds -\frac 1 a \sech^{-1} {\frac {\size x} a} + C\)





Primitive of Reciprocal of $x \sqrt {a^2 - x^2}$: $\sech^{-1}$ form














\(\ds \)

\(=\)







\(\ds -\frac 1 a \map \ln {\frac {1 + \sqrt {1 - \paren {\frac {\size x} a}^2} } {\frac {\size x} a} } + C\)





Definition 2 of Inverse Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \map \ln {\frac {a + a \sqrt {1 - \paren {\frac {\size x} a}^2} } {\size x} } + C\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds -\frac 1 a \map \ln {\frac {a + \sqrt {a^2 - a^2 \paren {\frac {\size x} a}^2} } {\size x} } + C\)





moving $a$ within the square root














\(\ds \)

\(=\)







\(\ds -\frac 1 a \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C\)





simplifying, noting $\size x^2 = x^2$



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \ln \size {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C$


Also see
Primitive of Reciprocal of $x \sqrt {x^2 + a^2}$
Primitive of Reciprocal of $x \sqrt {x^2 - a^2}$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.46$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.47$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.241$




