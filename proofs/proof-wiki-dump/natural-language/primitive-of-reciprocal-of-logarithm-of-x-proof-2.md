# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Logarithm_of_x/Proof_2

Theorem
For $x > 1$:














\(\ds \int \frac {\d x} {\ln x}\)

\(=\)







\(\ds \map \ln {\ln x} + \sum_{k \mathop \ge 1} \frac {\paren {\ln x}^k} {k \times k!} + C\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\ln x} + \dfrac {\ln x} {1 \times 1!} + \dfrac {\paren {\ln x}^2} {2 \times 2!} + \dfrac {\paren {\ln x}^3} {3 \times 3!} + \cdots + C\)











Proof
From Primitive of $\dfrac {x^m} {\ln x}$:

$\ds \int \frac {x^m \rd x} {\ln x} = \map \ln {\ln x} + \paren {m + 1} \ln x + \sum_{k \mathop \ge 2}^n \frac {\paren {m + 1}^k \paren {\ln x}^k} {k \times k!} + C$
The result follows by setting $m = 0$.
$\blacksquare$





