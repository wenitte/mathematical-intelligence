# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_plus_a_squared_squared



Theorem
$\ds \int \frac {\d x} {\paren {x^2 + a^2}^2} = \frac x {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^3} \arctan \frac x a + C$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \tan \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sec^2 \theta\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \frac {a \sec^2 \theta} {\paren {a^2 \tan^2 \theta + a^2}^2} \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {a \sec^2 \theta} {\paren {a^2 \sec^2 \theta}^2} \rd \theta\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\d \theta} {\sec^2 \theta}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \cos^2 \theta \rd \theta\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac \theta 2 + \frac {\sin 2 \theta} 4} + C\)





Primitive of Square of Cosine Function














\(\ds \)

\(=\)







\(\ds \frac \theta {2 a^3} + \frac 1 {2 a^3} \frac {\tan \theta} {1 + \tan^2 \theta} + C\)





Tangent Half-Angle Substitution for Sine














\(\ds \)

\(=\)







\(\ds \frac x {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^3} \arctan \frac x a + C\)





substituting for $\theta$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {x^2 - a^2}^2}$
Primitive of $\dfrac 1 {\paren {a^2 - x^2}^2}$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.24$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.132$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $17$.




