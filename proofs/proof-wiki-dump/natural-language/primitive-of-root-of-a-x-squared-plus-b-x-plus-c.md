# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \sqrt {a x^2 + b x + c} \rd x = \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds \paren {2 a x + b}^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 4 a \paren {2 a x + b}\)





Derivative of Power and Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 4 a \sqrt z\)










Suppose $a > 0$.
Then we have:














\(\ds \)

\(\)







\(\ds \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sqrt {\frac {\paren {2 a x + b}^2 + \paren {4 a c - b^2} } {4 a} } \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \int \frac {\sqrt {z + \paren {4 a c - b^2} } \rd z} {\paren {2 \sqrt a} \paren {4 a \sqrt z} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {8 a \sqrt a} \int \frac {\sqrt {z + \paren {4 a c - b^2} } \rd z} {\sqrt z}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {8 a \sqrt a} \paren {\sqrt z \sqrt {z + \paren {4 a c - b^2} } + \frac {4 a c - b^2} 2 \int \frac {\d z} {\sqrt z \sqrt {z + \paren {4 a c - b^2} } } }\)





Primitive of $\dfrac {\sqrt{p x + q} } {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \sqrt {z + \paren {4 a c - b^2} } } {8 a \sqrt a} + \frac {4 a c - b^2} {16 a \sqrt a} \int \frac {\d z} {\sqrt z \sqrt {z + \paren {4 a c - b^2} } }\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {\paren {2 a x + b}^2 + \paren {4 a c - b^2} } } {8 a \sqrt a} + \frac {4 a c - b^2} {16 a \sqrt a} \int \frac {4 a \rd x} {\sqrt {\paren {2 a x + b}^2 + \paren {4 a c - b^2} } }\)





substituting back for $z$ and $\d z$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \paren {2 \sqrt a \sqrt {a x^2 + b x + c} } } {8 a \sqrt a} + \frac {4 a c - b^2} {16 a \sqrt a} \int \frac {4 a \rd x} {2 \sqrt a \sqrt {a x^2 + b x + c} }\)





substituting back for $\sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying




When $a < 0$, the above does not work, as we cannot take the square root of a negative number.
Hence in this case:














\(\ds \)

\(\)







\(\ds \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sqrt {\frac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a} } \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \int \sqrt {\frac {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} {-4 a} } \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \int \frac {\sqrt {\paren {b^2 - 4 a c} - z} \rd z} {\paren {2 \sqrt {-a} } \paren {4 a \sqrt z} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {8 a \sqrt {-a} } \int \frac {\sqrt {-z + \paren {b^2 - 4 a c} } \rd z} {\sqrt z}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {8 a \sqrt {-a} } \paren {\sqrt z \sqrt {-z + \paren {b^2 - 4 a c} } + \frac {b^2 - 4 a c} 2 \int \frac {\d z} {\sqrt z \sqrt {-z + \paren {b^2 - 4 a c} } } }\)





Primitive of $\dfrac {\sqrt{p x + q} } {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \sqrt {\paren {b^2 - 4 a c} - z} } {8 a \sqrt {-a} } + \frac {b^2 - 4 a c} {16 a \sqrt {-a} } \int \frac {\d z} {\sqrt z \sqrt {\paren {b^2 - 4 a c} - z} }\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} } {8 a \sqrt {-a} } + \frac {b^2 - 4 a c} {16 a \sqrt {-a} } \int \frac {4 a \rd x} {\sqrt {\paren {b^2 - 4 a c} - \paren {2 a x + b}^2} }\)





substituting back for $z$ and $\d z$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \paren {2 \sqrt {-a} \sqrt {a x^2 + b x + c} } } {8 a \sqrt {-a} } + \frac {b^2 - 4 a c} {16 a \sqrt {-a} } \int \frac {4 a \rd x} {2 \sqrt {-a} \sqrt {a x^2 + b x + c} }\)





substituting back for $\sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {b^2 - 4 a c} {-8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} +\frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





arranging it into its final form



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.37$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.285$




