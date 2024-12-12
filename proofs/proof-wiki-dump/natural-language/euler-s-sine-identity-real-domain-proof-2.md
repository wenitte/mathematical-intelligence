# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity/Real_Domain/Proof_2

Theorem
$\sin x = \dfrac {e^{i x} - e^{-i x} } {2 i}$


Proof
Recall Euler's Formula:

$e^{i x} = \cos x + i \sin x$

Then, starting from the right hand side:














\(\ds \frac {e^{i x} - e^{-i x} }{2 i}\)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x} - \paren {\map \cos {-x} + i \map \sin {-x} } } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x - \cos x - i \map \sin {-x} } } {2 i}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \frac {i \sin x - i \map \sin {-x} } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {i \sin x - i \paren {-\map \sin {-x} } } {2 i}\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 i \sin x} {2 i}\)




















\(\ds \)

\(=\)







\(\ds \sin x\)









$\blacksquare$





