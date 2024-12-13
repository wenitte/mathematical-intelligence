# 

Source: https://proofwiki.org/wiki/Quadruple_Angle_Formulas/Cosine/Factor_Form

Theorem
$\cos 4 \theta = \paren {\cos \theta - \cos \dfrac \pi 8} \paren {\cos \theta - \cos \dfrac {3 \pi} 8} \paren {\cos \theta - \cos \dfrac {5 \pi} 8} \paren {\cos \theta - \cos \dfrac {7 \pi} 8}$


Proof













\(\ds z^8 + 1\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z^2 - 2 z \cos \dfrac {\paren {2 k + 1} \pi} 8 + 1}\)





Complex Algebra Examples: $z^8 + 1$








\(\ds \leadsto \ \ \)





\(\ds z^4 + z^{-4}\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z - 2 \cos \dfrac {\paren {2 k + 1} \pi} 8 + z^{-1} }\)





dividing both sides by $z^4$




Setting $z = e^{i \theta}$:














\(\ds e^{4 i \theta} + e^{-4 i \theta}\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {e^{i \theta} - 2 \cos \dfrac {\paren {2 k + 1} i \pi} 8 + e^{-i \theta} }\)














\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {e^{4 i \theta} + e^{-4 i \theta} } 2\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {2 \frac {e^{i \theta} + e^{-i \theta} } 2 - 2 \cos \dfrac {\paren {2 k + 1} i \pi} 8}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds 2 \cos 4 \theta\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {2 \cos \theta - 2 \cos \dfrac {\paren {2 k + 1} i \pi} 8}\)





Euler's Cosine Identity








\(\ds \leadsto \ \ \)





\(\ds \cos 4 \theta\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {\cos \theta - \cos \dfrac {\paren {2 k + 1} i \pi} 8}\)





simplifying



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: Exercise $8$




