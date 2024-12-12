# 

Source: https://proofwiki.org/wiki/Derivative_of_Arcsecant_Function/Corollary_1

Corollary to Derivative of Arcsecant Function
Let $x \in \R$.
Let $\arcsec \dfrac x a$ be the arcsecant of $\dfrac x a$.

Then:

$\map {\dfrac \d {\d x} } {\map \arcsec {\dfrac x a} } = \dfrac a {\size x \sqrt {x^2 - a^2} } = \begin {cases} \dfrac a {x \sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \ (\text {that is: $x > a$})  \\
\dfrac {-a} {x \sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \ (\text {that is: $x < -a$}) \\
\end{cases}$


Proof













\(\ds \map {\dfrac \d {\d x} } {\map \arcsec {\dfrac x a} }\)

\(=\)







\(\ds \frac 1 a \frac 1 {\size {\frac x a} \sqrt {\paren {\frac x a}^2 - 1} }\)





Derivative of Arcsecant Function and Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac 1 {\size {\frac x a} \frac {\sqrt {x^2 - a^2} } a}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {a^2} {\size x {\sqrt {x^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac a {\size x {\sqrt {x^2 - a^2} } }\)









$\Box$

Similarly:














\(\ds \map {\dfrac \d {\d x} } {\map \arcsec {\dfrac x a} }\)

\(=\)







\(\ds \begin {cases} \dfrac 1 a \dfrac {+1} {\frac x a \sqrt {\paren {\frac x a}^2 - 1} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \ (\text {that is: $\dfrac x a > 1$}) \\
\dfrac 1 a \dfrac {-1} {\frac x a \sqrt {\paren {\frac x a}^2 - 1} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \ (\text {that is: $\dfrac x a < -1$}) \\
\end{cases}\)





Derivative of Arcsecant Function and Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \begin {cases} \dfrac a {x \sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \\
\dfrac {-a} {x \sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \\
\end{cases}\)





simplifying as above



$\blacksquare$


Also see
Derivative of $\arcsin \dfrac x a$
Derivative of $\arccos \dfrac x a$
Derivative of $\arctan \dfrac x a$
Derivative of $\arccot \dfrac x a$
Derivative of $\arccsc \dfrac x a$




