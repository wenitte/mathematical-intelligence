# 

Source: https://proofwiki.org/wiki/Primitive_of_x_sixth_by_Cosine_of_a_x

Theorem
$\ds \int x^6 \cos a x \rd x = \frac {\sin a x} a x^6 + \frac {6 \cos a x} {a^2} x^5 - \frac {30 \sin a x} {a^3} x^4 - \frac {120 \cos a x} {a^4} x^3 + \frac {360 \sin a x} {a^5} x^2 + \frac {720 \cos a x} {a^6} x - \frac {720 \sin a x} {a^7} + C$
where $C$ is an arbitrary constant.


Proof













\(\ds \int x^6 \cos a x \rd x\)

\(=\)







\(\ds \frac {\sin a x} a x^6 + \frac {6 \cos a x} {a^2} x^{6 - 1} - \frac {6 \paren {6 - 1} } {a^2} \int x^{6 - 2} \cos a x \rd x + C\)





Primitive of $x^n \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^6 + \frac {6 \cos a x} {a^2} x^5 - \frac {30} {a^2} \int x^4 \cos a x \rd x + C\)





Simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^6 + \frac {6 \cos a x} {a^2} x^5 - \frac {30} {a^2} \paren {\frac {\sin a x} a x^4 + \frac {4 \cos a x} {a^2} x^3 - \frac {12 \sin a x} {a^3} x^2 - \frac {24 \cos a x} {a^4} x + \frac {24 \sin a x} {a^5} } + C\)





Primitive of $x^4 \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a x^6 + \frac {6 \cos a x} {a^2} x^5 - \frac {30 \sin a x} {a^3} x^4 - \frac {120 \cos a x} {a^4} x^3 + \frac {360 \sin a x} {a^5} x^2 + \frac {720 \cos a x} {a^6} x - \frac {720 \sin a x} {a^7} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^4 \cos a x$
Primitive of $x^2 \cos a x$
Primitive of $x^2 \sin a x$




