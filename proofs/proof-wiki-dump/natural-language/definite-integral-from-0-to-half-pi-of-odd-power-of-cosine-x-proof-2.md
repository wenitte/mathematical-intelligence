# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Odd_Power_of_Cosine_x/Proof_2

Theorem
$\ds \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x = \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}$


Proof













\(\ds \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \paren {\sin x}^{\frac 2 2 - 1} \paren {\cos x}^{2 \paren {n + 1} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \Beta {\frac 1 2, n + 1}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot \frac {\map \Gamma {n + 1} \map \Gamma {\frac 1 2} } {\map \Gamma {n + 1 + \frac 1 2} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot \frac {n! \sqrt \pi} {\map \Gamma {n + 1 + \frac 1 2} }\)





Gamma Function Extends Factorial, Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot n! \sqrt \pi \cdot \frac{2^{2 n + 2} \paren {n + 1}!} {\paren {2 n + 2}! \sqrt \pi}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {n! \cdot 2^{2 n + 1} \paren {n + 1}!} {\paren {2 n + 2} \paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 2 \cdot \frac {n! \cdot 2^{2 n} \paren {n + 1} n!} {\paren {n + 1} \paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2^n n!}^2} {\paren {2 n + 1}!}\)









$\blacksquare$





