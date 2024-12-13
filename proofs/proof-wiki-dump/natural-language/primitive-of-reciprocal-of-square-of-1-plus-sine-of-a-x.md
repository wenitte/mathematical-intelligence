# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_1_plus_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {1 + \sin a x}^2} = \frac {-1} {2 a} \map \tan {\frac \pi 4 - \frac {a x} 2} - \frac 1 {6 a} \map {\tan^3} {\frac \pi 4 - \frac {a x} 2} + C$


Proof













\(\ds \int \frac {\d x} {\paren {1 + \sin a x}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 2 \map {\sec^2} {\dfrac \pi 4 - \frac {a x} 2} }^2 \rd x\)





Reciprocal of One Plus Sine














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \map {\sec^4} {\frac \pi 4 - \frac {a x} 2} \rd x\)





simplifying



Let:














\(\ds z\)

\(=\)







\(\ds \frac \pi 4 - \frac {a x} 2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\ d x}\)

\(=\)







\(\ds \frac {-a} 2\)





simplifying




Thus:














\(\ds \frac 1 4 \int \map {\sec^4} {\frac \pi 4 - \frac {a x} 2} \rd x\)

\(=\)







\(\ds \frac 1 4 \int \frac {-2} a \sec^4 z \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \int \sec^4 z \rd z\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \paren {\frac {\sec^2 z \tan z} 3 + \frac 2 3 \int \sec^2 z \rd z} + C\)





Primitive of $\sec^n a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \paren {\frac {\sec^2 z \tan z} 3 + \frac 2 3 \tan z} + C\)





Primitive of $\sec^2 a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \paren {\frac {\paren {1 + \tan^2 z} \tan z} 3 + \frac 2 3 \tan z} + C\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \tan z - \frac 1 {6 a} \tan^3 z + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a} \map \tan {\frac \pi 4 - \frac {a x} 2} - \frac 1 {6 a} \map {\tan^3} {\frac \pi 4 - \frac {a x} 2} + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {1 + \cos a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.359$




