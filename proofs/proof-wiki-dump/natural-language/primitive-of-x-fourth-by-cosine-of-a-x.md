# 

Source: https://proofwiki.org/wiki/Primitive_of_x_fourth_by_Cosine_of_a_x

Theorem
$\ds \int x^4 \cos a x \rd x = \frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^3 - \frac {12 \sin a x} {a^3} x^2 - \frac {24 \cos a x} {a^4} x + \frac {24 \sin a x} {a^5} + C$
where $C$ is an arbitrary constant.


Proof













\(\ds \int x^4 \cos a x \rd x\)

\(=\)







\(\ds \frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^{4 - 1} - \frac {4 \paren {4 - 1} } {a^2} \int x^{4 - 2} \cos a x \rd x + C\)





Primitive of $x^n \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^3 - \frac {12} {a^2} \int x^2 \cos a x \rd x + C\)





Simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^3 - \frac {12} {a^2} \paren {\frac {2 x \cos a x} {a^2} + \paren {\frac {x^2} a - \frac 2 {a^3} } \sin a x} + C\)





Primitive of $x^2 \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^3 - \frac {12 \sin a x} {a^3} x^2 - \frac {24 \cos a x} {a^4} x + \frac {24 \sin a x} {a^5} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \cos a x$
Primitive of $x^2 \sin a x$
Primitive of $x^6 \cos a x$




