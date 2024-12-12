# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Even_Power_of_Cosine_x/Proof_2

Theorem
$\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x = \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2$


Proof













\(\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \paren {\sin x}^{\frac 2 2 - 1} \paren {\cos x}^{2 \paren {n + \frac 1 2} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \Beta \paren {\frac 1 2, n + \frac 1 2}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot \frac {\map \Gamma {n + \frac 1 2} \, \map \Gamma {\frac 1 2} } {\map \Gamma {n + 1} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + \frac 1 2} \sqrt \pi} {2 \paren {n!} }\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}! \paren {\sqrt \pi}^2} {2 \cdot 2^{2 n} \paren {n!}^2}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}!} {\paren {2^n n!}^2} \frac \pi 2\)









$\blacksquare$





