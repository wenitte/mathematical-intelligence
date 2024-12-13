# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Logarithm_of_x



Theorem
For $x > 1$:














\(\ds \int \frac {\d x} {\ln x}\)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {\ln x}^k} {k \times k!} + C\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \dfrac {\ln x} {1 \times 1!} + \dfrac {\paren {\ln x}^2} {2 \times 2!} + \dfrac {\paren {\ln x}^3} {3 \times 3!} + \cdots + C\)











Proof 1













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


Proof 2
From Primitive of $\dfrac {x^m} {\ln x}$:

$\ds \int \frac {x^m \rd x} {\ln x} = \map \ln {\ln x} + \paren {m + 1} \ln x + \sum_{k \mathop \ge 2}^n \frac {\paren {m + 1}^k \paren {\ln x}^k} {k \times k!} + C$
The result follows by setting $m = 0$.
$\blacksquare$


Also see
Primitive of $\dfrac 1 {\ln x}$ has no Solution in Elementary Functions


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.533$




