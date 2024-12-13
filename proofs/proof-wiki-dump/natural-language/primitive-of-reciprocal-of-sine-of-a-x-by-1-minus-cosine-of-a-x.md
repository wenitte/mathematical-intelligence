# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Sine_of_a_x_by_1_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin a x \paren {1 - \cos a x} } = \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {2 a} \ln \size {\tan \frac {a x} 2} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \cos a x\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \sin a x\)





Derivative of $\cos a x$




Then:














\(\ds \int \frac {\d x} {\sin a x \paren {1 - \cos a x} }\)

\(=\)







\(\ds \int \frac {\sin a x \rd x} {\sin^2 a x \paren {1 - \cos a x} }\)





multiplying top and bottom by $\sin a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\sin a x \rd x} {\paren {1 - \cos^2 a x} \paren {1 - \cos a x} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \frac {-1} a \int \frac {\d u} {\paren {1 - u^2} \paren {1 - u} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} a \int \frac {\d u} {\paren {1 + u} \paren {1 - u}^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac {-1} a \paren {\frac 1 2 \paren {frac 1 {1 - u} + \frac 1 2 \ln \size {\frac {1 + u} {1 - u} } } } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2 \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - u} } - \frac 1 {4 a} \ln \size {\frac {1 + u} {1 - u} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - u} } + \frac 1 {4 a} \ln \size {\frac {1 - u} {1 + u} } + C\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {4 a} \ln \size {\frac {1 - \cos a x} {1 + \cos a x} } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {4 a} \ln \size {\frac {\frac 1 2 \sec^2 \frac {a x} 2} {\frac 1 2 \csc^2 \frac {a x} 2} } + C\)





Reciprocal of $1 - \cos$ and Reciprocal of $1 + \cos$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {4 a} \ln \size {\frac {\sin^2 \frac {a x} 2} {\cos^2 \frac {a x} 2} } + C\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {4 a} \ln \size {\tan^2 \frac {a x} 2} + C\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {1 - \cos a x} } + \frac 1 {2 a} \ln \size {\tan \frac {a x} 2} + C\)





Logarithm of Power



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sin a x \paren {1 + \cos a x} }$
Primitive of $\dfrac 1 {\cos a x \paren {1 + \sin a x} }$
Primitive of $\dfrac 1 {\cos a x \paren {1 - \sin a x} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.411$




