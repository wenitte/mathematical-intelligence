# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_1_minus_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {1 - \sin a x} = \frac 1 a \map \tan {\frac \pi 4 + \frac {a x} 2} + C$


Corollary 1
$\ds \int \frac {\d x} {1 - \sin x} = \map \tan {\frac x 2 + \frac \pi 4} + C$


Corollary 2
$\ds \int \frac {\d x} {1 - \sin x} = -\map \cot {\frac x 2 - \frac \pi 4} + C$


Proof













\(\ds \int \frac {\d x} {1 - \sin a x}\)

\(=\)







\(\ds \int \map {\sec^2} {\frac \pi 4 + \frac {a x} 2} \rd x\)





Reciprocal of One Minus Sine




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map {\sec^2} {\frac \pi 4 + \frac {a x} 2} \rd x\)





Primitive of Constant Multiple of Function




Then:














\(\ds z\)

\(=\)







\(\ds \frac \pi 4 + \frac {a x} 2\)




















\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds \frac a 2\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {1 - \sin a x}\)

\(=\)







\(\ds \frac 1 2 \int \frac 2 a \sec^2 z \rd z\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac 2 a \tan z + C\)





Primitive of Square of Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \map \tan {\frac \pi 4 + \frac {a x} 2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {1 + \sin a x}$
Primitive of $\dfrac 1 {1 + \cos a x}$
Primitive of $\dfrac 1 {1 - \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.354$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $73$.




