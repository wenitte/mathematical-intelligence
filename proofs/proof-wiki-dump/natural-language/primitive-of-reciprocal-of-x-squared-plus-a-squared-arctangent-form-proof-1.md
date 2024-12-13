# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_plus_a_squared/Arctangent_Form/Proof_1

Theorem
$\ds \int \frac {\d x} {x^2 + a^2} = \frac 1 a \arctan \frac x a + C$


Proof
Let:

$a \tan \theta = x$
for $\theta \in \openint {-\dfrac \pi 2} {\dfrac \pi 2}$.
From Shape of Tangent Function, this substitution is valid for all real $x$.
Then:














\(\ds x\)

\(=\)







\(\ds a \tan \theta\)





from above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sec^2 \theta\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int \frac {a \ \sec^2 \theta} {a^2 \tan^2 \theta + a^2} \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a {a^2} \int \frac {\sec^2 \theta} {\tan^2 \theta + 1} rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sec^2 \theta} {\sec^2 \theta} \rd \theta\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \theta + C\)





Integral of Constant




As $\theta$ was stipulated to be in the open interval $\openint {-\dfrac \pi 2} {\dfrac \pi 2}$:

$\tan \theta = \dfrac x a \iff \theta = \arctan \dfrac x a$
Thus:

$\ds \int \frac 1 {x^2 + a^2} \rd x = \frac 1 a \arctan \frac x a + C$
$\Box$

When $a = 0$, both $\dfrac x a$ and $\dfrac 1 a$ are undefined.
However, consider the limit of the above primitive as $a \to 0$:














\(\ds \lim_{a \mathop \to 0} \frac 1 a \arctan {\frac x a}\)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {\arctan {\frac x a} } a\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {-x a^{-2} } {1 + \frac {x^2} {a^2} }\)





L'Hôpital's Rule, Derivative of Arctangent Function














\(\ds \)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {a^{-2} } {a^{-2} } \frac {-x} {x^2 + a^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 x\)









This corresponds with the result:

$\ds \int \frac 1 {x^2} \rd x = \frac {-1} x + C$
which follows from Primitive of Power.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




