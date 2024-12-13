# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_Logarithm_of_x

Theorem
For $x > 1$:














\(\ds \int \frac {x^m \rd x} {\ln x}\)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {m + 1}^k \paren {\ln x}^k} {k \times k!} + C\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \dfrac {\paren {m + 1} \ln x} {1 \times 1!} + \frac {\paren {m + 1}^2 \paren {\ln x}^2} {2 \times 2!} + \dfrac {\paren {m + 1}^3 \paren {\ln x}^3} {3 \times 3!} + \cdots + C\)











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





\(\ds \int \frac {x^m \rd x} {\ln x}\)

\(=\)







\(\ds \int \frac {\paren {e^u}^m e^u \rd u} u\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{u \paren {m + 1} } \rd u} u\)




















\(\ds \)

\(=\)







\(\ds \ln u + \sum_{k \mathop \ge 1} \frac {\paren {\paren {m + 1} u}^k} {k \times k!} + C\)





Primitive of $\dfrac {e^{a x} } x$: $u > 0$ for $x > 1$














\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {m + 1}^k \paren {\ln x}^k} {k \times k!} + C\)





substituting $u = \ln x$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.534$




