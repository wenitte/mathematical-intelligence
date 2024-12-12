# 

Source: https://proofwiki.org/wiki/Cosine_of_Sum/Proof_3

Theorem
$\map \cos {a + b} = \cos a \cos b - \sin a \sin b$


Proof













\(\ds \cos a \cos b - \sin a \sin b\)

\(=\)







\(\ds \paren {\frac {e^{i a} + e^{-i a} } 2} \paren {\frac {e^{i b} + e^{-i b} } 2} - \sin a \sin b\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \paren {\frac {e^{i a} + e^{-i a} } 2} \paren {\frac {e^{i b} + e^{-i b} } 2} - \paren {\frac {e^{i a} - e^{-i a} } {2 i} } \paren {\frac {e^{i b} - e^{-i b} } {2 i} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{i a} e^{-i b} + e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {e^{i a} e^{i b} - e^{i a} e^{-i b} - e^{-i a} e^{i b} + e^{-i a} e^{-i b} } {4 i^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{i a} e^{-i b} + e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {e^{i a} e^{i b} - e^{i a} e^{-i b} - e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)





as $i^2 = -1$














\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{-ia} e^{-ib} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{i \paren {a + b} } + e^{-i \paren {a + b} } } 2\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \cos {a + b}\)





Euler's Cosine Identity



$\blacksquare$





