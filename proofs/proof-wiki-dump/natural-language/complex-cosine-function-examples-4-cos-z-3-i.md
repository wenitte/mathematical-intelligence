# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function/Examples/4_cos_z_%3D_3%2Bi

Example of Complex Cosine Function
Let:

$4 \cos z = 3 + i$
Then:

$z = \dfrac {\paren {8 n + 1} \pi} 4 - \dfrac {i \ln 2} 2$ for $n \in \Z$
or:

$z = \dfrac {\paren {8 m - 1} i \pi} 4 + \dfrac {i \ln 2} 2$ for $m \in \Z$


Proof













\(\ds 4 \cos z\)

\(=\)







\(\ds 3 + i\)














\(\ds \leadsto \ \ \)





\(\ds 4 \paren {\dfrac {e^{i z} + e^{-i z} } 2}\)

\(=\)







\(\ds 3 + i\)





Euler's Cosine Identity








\(\ds \leadsto \ \ \)





\(\ds 2 e^{2 i z} - \paren {3 + i} e^{i z} + 2\)

\(=\)







\(\ds 0\)





mulitplying by $e^{i z}$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds e^{i z}\)

\(=\)







\(\ds \dfrac {3 + i \pm \sqrt {\paren {3 + i}^2 - 4 \times 2 \times 2} } {2 \times 2}\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac {3 + i \pm \sqrt {9 - 1 + 6 i - 16} } 4\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \dfrac {3 + i \pm \sqrt {-8 + 6 i} } 4\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac {3 + i \pm \paren {1 + 3 i} } 4\)





Square Root of $-8 + 6 i$














\(\ds \)

\(=\)







\(\ds \dfrac {4 + 4 i} 4 \text { or } \dfrac {2 - 2 i} 4\)




















\(\ds \)

\(=\)







\(\ds 1 + i \text { or } \dfrac 1 2 - \dfrac i 2\)










Thus we have:














\(\ds e^{i z}\)

\(=\)







\(\ds 1 + i\)














\(\ds \leadsto \ \ \)





\(\ds i z\)

\(=\)







\(\ds \ln \paren {1 + i}\)





Definition 2 of Complex Logarithm














\(\ds \)

\(=\)







\(\ds \ln \paren {\sqrt 2 \exp \paren {\dfrac {i \pi} 4} }\)





Definition of Exponential Form of Complex Number














\(\ds \)

\(=\)







\(\ds \ln \sqrt 2 + \dfrac {i \pi} 4 + 2 n i \pi\)





Definition 1 of Complex Logarithm














\(\ds \)

\(=\)







\(\ds \dfrac {\ln 2} 2 + \dfrac {\paren {8 n + 1} i \pi} 4\)





simplification








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds -\dfrac {i \ln 2} 2 + \dfrac {\paren {8 n + 1} \pi} 4\)





multiplying through by $-i = \dfrac 1 i$




and:














\(\ds e^{i z}\)

\(=\)







\(\ds \dfrac 1 2 - \dfrac i 2\)














\(\ds \leadsto \ \ \)





\(\ds i z\)

\(=\)







\(\ds \ln \paren {\dfrac 1 2 - \dfrac i 2}\)





Definition 2 of Complex Logarithm














\(\ds \)

\(=\)







\(\ds \ln \paren {\dfrac 2 {\sqrt 2} \exp \paren {-\dfrac \pi 4} }\)





Definition of Exponential Form of Complex Number














\(\ds \)

\(=\)







\(\ds \ln \dfrac 2 {\sqrt 2} + \dfrac {-i \pi} 4 + 2 m i \pi\)





Definition 1 of Complex Logarithm














\(\ds \)

\(=\)







\(\ds -\dfrac {\ln 2} 2 + \dfrac {\paren {8 m - 1} i \pi} 4\)





simplification








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \dfrac {i \ln 2} 2 + \dfrac {\paren {8 m - 1} \pi} 4\)





multiplying through by $-i = \dfrac 1 i$



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.6$. The Logarithm: Examples: $\text {(iii)}$




