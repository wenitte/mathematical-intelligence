# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Logarithm_of_x_squared_plus_a_squared

Theorem
$\ds \int x \map \ln {x^2 + a^2} \rd x = \frac {\paren {x^2 + a^2} \map \ln {x^2 + a^2} - x^2} 2 + C$


Proof 1













\(\ds \int x \map \ln {x^2 + a^2} \rd x\)

\(=\)







\(\ds \frac {x^2 \map \ln {x^2 + a^2} } 2 - \int \frac {x^3} {x^2 + a^2} \rd x + C\)





Primitive of $x^m \map \ln {x^2 + a^2}$ with $m = 1$














\(\ds \)

\(=\)







\(\ds \frac {x^2 \map \ln {x^2 + a^2} } 2 - \paren {\frac {x^2} 2 - \frac {a^2} 2 \map \ln {x^2 + a^2} } + C\)





Primitive of $\dfrac {x^3} {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {x^2 + a^2} \map \ln {x^2 + a^2} - x^2} 2 + C\)





simplifying



$\blacksquare$


Proof 2
Let $u := x^2 + a^2$.
Then:














\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds \int x \map \ln {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int \dfrac 1 2 \dfrac {\d u} {\d x} \ln u \rd x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int \ln u \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {u \ln u - u + C}\)





Primitive of $\ln u$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {x^2 + a^2} \map \ln {x^2 + a^2} - x^2 + a^2} + C\)





substituting back














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x^2 + a^2} \map \ln {x^2 + a^2} - x^2} 2 + C\)





subsuming $\dfrac {a^2} 2$ into the arbitrary constant and simplifying



$\blacksquare$





