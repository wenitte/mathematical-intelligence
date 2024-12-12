# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Even_Power_of_Sine_x/Proof_2

Theorem













\(\ds \int_0^{\frac \pi 2} \sin^{2 n} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \cdot 3 \cdot 5 \cdots \paren {2 n - 1} } {2 \cdot 4 \cdot 6 \cdots 2 n} \dfrac \pi 2\)









for $n \in \Z_{>0}$.


Proof













\(\ds \int_0^{\pi/2} \sin^{2 n} x \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \paren {\sin x}^{2 \paren {n + \frac 1 2} - 1} \paren {\cos x}^{2 \paren {\frac 1 2} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \Beta {n + \frac 1 2, \frac 1 2}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + \frac 1 2} \map \Gamma {\frac 1 2} } {2 \map \Gamma {n + 1} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 \times n!} \map \Gamma {n + \frac 1 2}\)





Gamma Function of One Half, Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 \times n!} \paren {\frac {\paren {2 n}!} {2^{2 n} n!} \sqrt \pi}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}!} {\paren {2^n n!}^2} \frac \pi 2\)









$\blacksquare$





