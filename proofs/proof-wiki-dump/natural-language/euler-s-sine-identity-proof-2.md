# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity/Proof_2

Theorem
$\sin z = \dfrac {e^{i z} - e^{-i z} } {2 i}$


Proof
Recall Euler's Formula:

$e^{i z} = \cos z + i \sin z$

Then, starting from the right hand side:














\(\ds \frac {e^{i z} - e^{-i z} } {2 i}\)

\(=\)







\(\ds \frac {\paren {\cos z + i \sin z} - \paren {\map \cos {-z} + i \map \sin {-z} } } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\cos z + i \sin z - \cos z - i \map \sin {-z} } } {2 i}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \frac {i \sin z - i \map \sin {-z} } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {i \sin z - i \paren {-\map \sin {-z} } } {2 i}\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 i \sin z} {2 i}\)




















\(\ds \)

\(=\)







\(\ds \sin z\)









$\blacksquare$





