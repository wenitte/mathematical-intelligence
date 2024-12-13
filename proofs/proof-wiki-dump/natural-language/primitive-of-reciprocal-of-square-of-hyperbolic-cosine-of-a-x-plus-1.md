# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_Hyperbolic_Cosine_of_a_x_plus_1



Theorem
$\ds \int \frac {\d x} {\paren {\cosh a x + 1}^2} = \frac 1 {2 a} \tanh \frac {a x} 2 - \frac 1 {6 a} \tanh^3 \frac {a x} 2 + C$


Proof













\(\ds \int \frac {\d x} {\paren {\cosh a x + 1}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 2 \sech^2 \frac {a x} 2}^2 \rd x\)





Reciprocal of Hyperbolic Cosine Plus One














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \sech^4 \frac {a x} 2 \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\frac{\sech^2 \dfrac {a x} 2 \tanh \dfrac {a x} 2} {\dfrac {3 a} 2} + \frac 2 3 \int \sech^2 \frac {a x} 2 \rd x} + C\)





Primitive of $\sech^n a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \sech^2 \frac {a x} 2 \tanh \dfrac {a x} 2 + \frac 1 6 \int \sech^2 \frac {a x} 2 \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \sech^2 \frac {a x} 2 \tanh \dfrac {a x} 2 + \frac 1 6 \paren {\frac 2 a \tanh \frac {a x} 2} + C\)





Primitive of $\sech^2 a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \paren {1 - \tanh^2 \frac {a x} 2} \tan \dfrac {a x} 2 + \frac 2 {6 a} \tanh \frac {a x} 2 + C\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \tanh \frac {a x} 2 - \frac 1 {6 a} \tanh^3 \frac {a x} 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {\cosh a x - 1}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.579$




