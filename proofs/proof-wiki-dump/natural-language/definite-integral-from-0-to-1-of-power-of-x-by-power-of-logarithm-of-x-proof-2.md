# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Power_of_x_by_Power_of_Logarithm_of_x/Proof_2

Theorem
$\ds \int_0^1 x^m \paren {\ln x}^n \rd x = \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }$


Proof
From Primitive of Power, we have: 

$\ds \int_0^1 x^m \rd x = \frac 1 {m + 1}$
We have: 














\(\ds \frac {\d^n} {\d m^n} \int_0^1 x^m \rd x\)

\(=\)







\(\ds \int_0^1 \frac {\partial^n} {\partial m^n} x^m \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^1 x^m \paren {\ln x}^n \rd x\)





Derivative of Power of Constant



So: 














\(\ds \int_0^1 x^m \paren {\ln x}^n \rd x\)

\(=\)







\(\ds \map {\frac {\d^n} {\d m^n} } {\frac 1 {m + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\frac {\d^{n + 1} } {\d m^{n + 1} } } {\map \ln {m + 1} }\)





Derivative of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }\)





$n$th Derivative of Natural Logarithm



$\blacksquare$





