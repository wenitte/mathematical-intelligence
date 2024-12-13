# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_a_squared_minus_x_squared/Inverse_Hyperbolic_Secant_Form

Theorem
For $a > 0$ and $0 < \size x < a$:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \sech^{-1} {\frac {\size x} a} + C$


Proof
We note that $\sech^{-1} \dfrac x a$ is defined for $x \in \hointl 0 a$.
Hence we treat the two cases $x > 0$ and $x < 0$ separately.

First let $x > 0$.
Note that $\dfrac 1 {x \sqrt {a^2 - x^2} }$ is not defined at $\pm a$, so we are concerned only about the interval $\openint 0 a$.
Then:














\(\ds u\)

\(=\)







\(\ds \sech^{-1} {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sech u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds -a \sech u \tanh u\)





Derivative of Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \int \frac {-a \sech u \tanh u} {a \sech u \sqrt {a^2 - a^2 \sech^2 u} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac a {a^2} \int \frac {\sech u \tanh u} {\sech u \sqrt {1 - \sech^2 u} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int \frac {\sech u \tanh u} {\sech u \tanh u} \rd u\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \sech^{-1} {\frac x a} + C\)





Definition of $u$



$\Box$

Now let $x < 0$.
Let $z = -x$.
Then:














\(\ds z\)

\(=\)







\(\ds -x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -1\)





Derivative of Constant Multiple








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \int \frac {-\d z} {\paren {-z} \sqrt {a^2 - z^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {z \sqrt {a^2 - z^2} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 a \sech^{-1} {\frac z a} + C\)





from above: $z \in \hointl 0 a$














\(\ds \)

\(=\)







\(\ds -\frac 1 a \sech^{-1} {\frac {-x} a} + C\)





Definition of $z$



$\Box$

So when $x > 0$:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \sech^{-1} {\frac x a} + C$
and when $x < 0$:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \sech^{-1} {\frac {-x} a} + C$
It follows that for $\size x \in \openint 0 a$:

$\ds \int \frac {\d x} {x \sqrt {a^2 - x^2} } = -\frac 1 a \sech^{-1} {\frac {\size x} a} + C$
by definition of absolute value.
$\blacksquare$


Also see
Primitive of Reciprocal of $x \sqrt {x^2 + a^2}$
Primitive of Reciprocal of $x \sqrt {x^2 - a^2}$




