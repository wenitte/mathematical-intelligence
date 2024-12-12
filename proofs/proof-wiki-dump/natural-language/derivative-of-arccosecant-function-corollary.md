# 

Source: https://proofwiki.org/wiki/Derivative_of_Arccosecant_Function/Corollary

Corollary to Derivative of Arccosecant Function
Let $x \in \R$.
Let $\arccsc \dfrac x a$ be the arccosecant of $\dfrac x a$.

Then:

$\map {\dfrac \d {\d x} } {\map \arccsc {\dfrac x a} }  = \dfrac {-a} {\size x {\sqrt {x^2 - a^2} } } = \begin{cases} \dfrac {-a} {x \sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac a {x \sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}$


Proof













\(\ds \map {\dfrac \d {\d x} } {\map \arccsc {\dfrac x a} }\)

\(=\)







\(\ds \frac 1 a \frac {-1} {\size {\frac x a} \sqrt {\paren {\frac x a}^2 - 1} }\)





Derivative of Arccosecant Function and Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {-1} {\size {\frac x a} \frac {\sqrt {x^2 - a^2} } a}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {-a^2} {\size x {\sqrt {x^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {-a} {\size x {\sqrt {x^2 - a^2} } }\)









$\Box$

Similarly:














\(\ds \map {\dfrac \d {\d x} } {\map \arccsc {\dfrac x a} }\)

\(=\)







\(\ds \begin{cases} \dfrac 1 a \dfrac {-1} {\frac x a \sqrt {\paren {\frac x a}^2 - 1} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac 1 a \dfrac {+1} {\frac x a \sqrt {\paren {\frac x a}^2 - 1} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}\)





Derivative of Arccosecant Function andDerivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \begin{cases} \dfrac {-a} {x \sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac a {x \sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}\)





simplifying as above



$\blacksquare$


Also see
Derivative of $\arcsin \dfrac x a$
Derivative of $\arccos \dfrac x a$
Derivative of $\arctan \dfrac x a$
Derivative of $\arccot \dfrac x a$
Derivative of $\arcsec \dfrac x a$




