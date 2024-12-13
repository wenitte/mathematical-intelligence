# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Logarithm_of_x/Proof_1

Theorem
For $x > 1$:














\(\ds \int \frac {\d x} {\ln x}\)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {\ln x}^k} {k \times k!} + C\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \dfrac {\ln x} {1 \times 1!} + \dfrac {\paren {\ln x}^2} {2 \times 2!} + \dfrac {\paren {\ln x}^3} {3 \times 3!} + \cdots + C\)











Proof













\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e^u\)














\(\ds \leadsto \ \ \)





\(\ds \d x\)

\(=\)







\(\ds e^u \d u\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\ln x}\)

\(=\)







\(\ds \int \frac {e^u \rd u} u\)




















\(\ds \)

\(=\)







\(\ds \ln u + \sum_{k \mathop \ge 1} \frac {u^k} {k \times k!} + C\)





Primitive of $\dfrac {e^{a x} } x$: $u > 0$ for $x > 1$














\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {\ln x}^k} {k \times k!} + C\)





substituting $u = \ln x$



$\blacksquare$





