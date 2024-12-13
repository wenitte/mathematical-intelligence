# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_squared_plus_a_squared_squared/Proof_1

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2}^2} = \frac {-x} {2 \paren {x^2 + a^2} } + \frac 1 {2 a} \arctan \frac x a + C$


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





\(\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \frac {a^2 \tan^2 \theta a \sec^2 \theta} {\paren {a^2 \tan^2 \theta + a^2}^2} \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {a^3 \tan^2 \theta \sec^2 \theta} {a^4 \sec^4 \theta} \rd \theta\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\tan^2 \theta} {\sec^2 \theta} \rd \theta\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \tan^2 \theta \cos^2 \theta \rd \theta\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sin^2 \theta} {\cos^2 \theta} \cos^2 \theta \rd \theta\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \sin^2 \theta \rd \theta\)





simplification














\(\ds \)

\(=\)







\(\ds \frac \theta {2 a} - \frac {\sin 2 \theta} {4 a} + C\)





Primitive of Square of Sine Function














\(\ds \)

\(=\)







\(\ds \frac \theta {2 a}  - \frac 1 {2 a} \frac {\tan \theta} {1 + \tan^2 \theta} + C\)





Tangent Half-Angle Substitution for Sine














\(\ds \)

\(=\)







\(\ds -\frac x {2 \paren {x^2 + a^2} } + \frac 1 {2 a} \arctan \frac x a + C\)





substituting for $\theta$



$\blacksquare$





