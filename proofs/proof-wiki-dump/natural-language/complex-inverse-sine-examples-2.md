# 

Source: https://proofwiki.org/wiki/Complex_Inverse_Sine/Examples/2

Examples of Complex Inverse Sine Function
$\map {\sin^{-1} } 2 = \dfrac {4 k + 1} 2 \pi - i \map \ln {2 \pm \sqrt 3}$
for $k \in \Z$.


Proof
By definition of complex inverse sine:

$\map {\sin^{-1} } 2 := \set {z \in \C: \sin z = 2}$
Thus:














\(\ds \sin z\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map \exp {i z} - \map \exp {-i z} } {2 i}\)

\(=\)







\(\ds 2\)





Euler's Sine Identity








\(\ds \leadsto \ \ \)





\(\ds \map \exp {2 i z} - 4 i \map \exp {i z} - 1\)

\(=\)







\(\ds 0\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \map \exp {i z}\)

\(=\)







\(\ds \dfrac {4 i \pm \sqrt {\paren {-4 i}^2 - 4 \times 1 \times \paren {-1} } } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \paren {2 \pm \sqrt 3} i\)





simplifying














\(\ds \)

\(=\)







\(\ds \paren {2 \pm \sqrt 3} \map \exp {i \dfrac \pi 2}\)





Euler's Formula: $e^{i \pi / 2}$








\(\ds \leadsto \ \ \)





\(\ds i z\)

\(=\)







\(\ds \map \ln {2 \pm \sqrt 3} + i \paren {\dfrac \pi 2 + 4 k \pi}\)





Definition of Complex Logarithm








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \dfrac {4 k + 1} 2 \pi - i \map \ln {2 \pm \sqrt 3}\)





for $k \in \Z$



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $7$




