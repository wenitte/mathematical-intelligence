# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Logarithm_of_x_squared_plus_a_squared/Proof_2

Theorem
$\ds \int x \map \ln {x^2 + a^2} \rd x = \frac {\paren {x^2 + a^2} \map \ln {x^2 + a^2} - x^2} 2 + C$


Proof
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





