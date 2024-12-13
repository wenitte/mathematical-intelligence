# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_a_squared_minus_x_squared/Proof_1



Theorem
$\ds \int x^2 \sqrt {a^2 - x^2} \rd x = -\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} 8 \arcsin \frac x a + C$


Proof
Let us assume that $a > 0$.
Let:














\(\ds x\)

\(=\)







\(\ds a \sin t\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds a \cos t\)














\(\ds \leadsto \ \ \)





\(\ds a^2 - x^2\)

\(=\)







\(\ds a^2 - a^2 \sin^2 t\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {1 - \sin^2 t}\)




















\(\ds \)

\(=\)







\(\ds a^2 \cos^2 t\)





Sum of Squares of Sine and Cosine




Hence:














\(\ds \int x^2 \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \int a^2 \sin^2 t \cdot \sqrt {a^2 \cos^2 t} \cdot a \cos t \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds a^4 \int \sin^2 t \cos^2 t \rd t\)





simplifying














\(\ds \)

\(=\)







\(\ds a^4 \paren {\frac t 8 - \frac {\sin 4 t} {32} } + C\)





Primitive of $\sin^2 a t \cos^2 a t$ where $a \gets 1$














\(\ds \)

\(=\)







\(\ds a^4 \paren {\frac t 8 - \dfrac {4 \sin t \cos t - 8 \sin^3 t \cos t} {32} } + C\)





Quadruple Angle Formula for Sine




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {a^4} 8 \paren {t - \sin t \cos t - 2 \sin^3 t \cos t} + C\)





simplifying




Recall:














\(\ds x\)

\(=\)







\(\ds a \sin t\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \arcsin \frac x a\)










Hence:














\(\ds \)

\(\)







\(\ds \frac {a^4} 8 \paren {t - \sin t \cos t - 2 \sin^3 t \cos t} + C\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a - \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} + 2 \paren {\frac x a}^3 \paren {\frac {\sqrt {a^2 - x^2} } a} } + C\)





substituting $\sin t = \dfrac x a$, $\cos t = \dfrac {\sqrt {a^2 - x^2} } a$














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} \paren {-1 + \frac {2 x^2} {a^2} } } + C\)





Distributive Laws of Arithmetic














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \paren {\frac {\sqrt {a^2 - x^2} } a} \paren {\dfrac {-2 a^2 + 2 x^2 + a^2} {a^2} } } + C\)





manipulating as necessary














\(\ds \)

\(=\)







\(\ds \frac {a^4} 8 \paren {\arcsin \frac x a + \paren {\frac x a} \frac {\sqrt {a^2 - x^2} } a \paren {-2 \frac {a^2 - x^2} {a^2} + 1} } + C\)




















\(\ds \)

\(=\)







\(\ds -\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {a^2 x \sqrt {a^2 - x^2} } 8 + \frac {a^4} 8 \arcsin \frac x a + C\)





simplifying and rearranging



$\blacksquare$


Also see
Primitive of $x^2 \sqrt {x^2 + a^2}$
Primitive of $x^2 \sqrt {x^2 - a^2}$


Sources
J. W. Perry (https://math.stackexchange.com/users/93144/j-w-perry), Find a primitive of $x^2\sqrt{a^2 - x^2}$, URL (version: 2013-11-22): https://math.stackexchange.com/q/576068




