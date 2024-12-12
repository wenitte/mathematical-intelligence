# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Odd_Power_of_Sine_x/Proof_2

Theorem













\(\ds \int_0^{\frac \pi 2} \sin^{2 n + 1} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \cdot 4 \cdot 6 \cdots 2 n} {3 \cdot 5 \cdot 7 \cdots \paren {2 n + 1} }\)









for $n \in \Z_{>0}$.


Proof













\(\ds \int_0^{\pi/2} \sin^{2 n + 1} x \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \paren {\sin x}^{2 \paren {n + 1} - 1} \paren {\cos x}^{2 \paren {\frac 1 2} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \Beta {n + 1, \frac 1 2}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + 1} \map \Gamma {\frac 1 2} } {2 \map \Gamma {n + \frac 3 2} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {n! \sqrt \pi} {2 \paren {n + \frac 1 2} \map \Gamma {n + \frac 1 2} }\)





Gamma Function Extends Factorial, Gamma Function of One Half, Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {n! \sqrt \pi} {2 n + 1} \times \frac {2^{2 n} n!} {\paren {2 n!} \sqrt \pi}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\paren {2^n n!}^2 } {\paren {2 n + 1}!}\)









$\blacksquare$





