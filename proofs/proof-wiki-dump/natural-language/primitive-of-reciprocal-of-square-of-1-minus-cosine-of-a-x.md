# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_1_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {1 - \cos a x}^2} = \frac {-1} {2 a} \cot \frac {a x} 2 - \frac 1 {6 a} \cot^3 \frac {a x} 2 + C$


Proof













\(\ds \int \frac {\d x} {\paren {1 - \cos a x}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 2 \csc^2 \frac {a x} 2}^2 \rd x\)





Reciprocal of One Minus Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \csc^4 \frac {a x} 2 \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\frac{-\csc^2 \dfrac {a x} 2 \cot \dfrac {a x} 2} {\dfrac {3 a} 2} + \frac 2 3 \int \csc^2 \frac {a x} 2 \rd x} + C\)





Primitive of $\csc^n a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {6 a} \csc^2 \frac {a x} 2 \cot \dfrac {a x} 2 + \frac 1 6 \int \csc^2 \frac {a x} 2 \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {6 a} \csc^2 \frac {a x} 2 \cot \dfrac {a x} 2 + \frac 1 6 \paren {\frac {-2} a \cot \frac {a x} 2} + C\)





Primitive of $\csc^2 a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {6 a} \paren {1 + \cot^2 \frac {a x} 2} \cot \dfrac {a x} 2 - \frac 2 {6 a} \cot \frac {a x} 2 + C\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \cot \frac {a x} 2 - \frac 1 {6 a} \cot^3 \frac {a x} 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {1 - \sin a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.388$




