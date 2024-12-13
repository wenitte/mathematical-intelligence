# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Cosine_of_a_x_by_1_minus_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\cos a x \paren {1 - \sin a x} } = \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {2 a} \ln \size {\map \tan {\frac {a x} 2 + \frac \pi 4} } + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sin a x\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cos a x\)





Derivative of $\sin a x$




Then:














\(\ds \int \frac {\d x} {\cos a x \paren {1 - \sin a x} }\)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {\cos^2 a x \paren {1 - \sin a x} }\)





multiplying top and bottom by $\cos a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {\paren {1 - \sin^2 a x} \paren {1 - \sin a x} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d u} {\paren {1 - u^2} \paren {1 - u} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d u} {\paren {1 + u} \paren {1 - u}^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 2 \paren {\frac 1 {1 - u} + \frac 1 2 \ln \size {\frac {1 + u} {1 - u} } } } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2 \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - u} } + \frac 1 {4 a} \ln \size {\frac {1 + u} {1 - u} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\frac {1 + \sin a x} {1 - \sin a x} } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\frac {\frac 1 2 \map {\sec^2} {\frac \pi 4 + \frac {a x} 2} } {\frac 1 2 \map {\sec^2} {\frac \pi 4 - \frac {a x} 2} } } + C\)





Reciprocal of $1 - \sin$ and Reciprocal of $1 + \sin$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\frac {\map {\cos^2} {\frac \pi 4 - \frac {a x} 2} } {\map {\cos^2} {\frac \pi 4 + \frac {a x} 2} } } + C\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\frac {\map {\sin^2} {\frac \pi 2 - \paren {\frac \pi 4 - \frac {a x} 2} } } {\map {\cos^2} {\frac \pi 4 + \frac {a x} 2} } } + C\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\frac {\map {\sin^2} {\frac \pi 4 + \frac {a x} 2} } {\map {\cos^2} {\frac \pi 4 + \frac {a x} 2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {4 a} \ln \size {\map {\tan^2} {\frac \pi 4 + \frac {a x} 2} } + C\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {1 - \sin a x} } + \frac 1 {2 a} \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } + C\)





Logarithm of Power



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\cos a x \paren {1 + \sin a x} }$
Primitive of $\dfrac 1 {\sin a x \paren {1 + \cos a x} }$
Primitive of $\dfrac 1 {\sin a x \paren {1 - \cos a x} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.410$




