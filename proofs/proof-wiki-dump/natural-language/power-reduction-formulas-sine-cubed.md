# 

Source: https://proofwiki.org/wiki/Power_Reduction_Formulas/Sine_Cubed



Theorem
$\sin^3 x = \dfrac {3 \sin x - \sin 3 x} 4$
where $\sin$ denotes sine.


Proof 1













\(\ds \sin 3 x\)

\(=\)







\(\ds 3 \sin x - 4 \sin^3 x\)





Triple Angle Formula for Sine








\(\ds \leadsto \ \ \)





\(\ds 4 \sin^3 x\)

\(=\)







\(\ds 3 \sin x - \sin 3 x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \sin^3 x\)

\(=\)







\(\ds \frac {3 \sin x - \sin 3 x} 4\)





dividing both sides by $4$



$\blacksquare$


Proof 2













\(\ds \sin^3 x\)

\(=\)







\(\ds \paren {\frac {e^{i x} - e^{-i x} } {2 i} }^3\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {\paren {e^{i x} - e^{-i x} }^3} {8 i^3}\)





rearranging














\(\ds \)

\(=\)







\(\ds -\frac 1 {8 i} \paren {\paren {e^{i x} }^3 - 3 \paren {e^{i x} }^2 \paren {e^{-i x} } + 3 \paren {e^{i x} } \paren {e^{-i x} }^2 - \paren {e^{-i x} }^3}\)





multiplying out














\(\ds \)

\(=\)







\(\ds -\frac 1 {8 i} \paren {e^{3 i x} - 3 e^{i x} + 3 e^{-i x} - e^{-3 i x} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 3 4 \paren {\frac {e^{i x} - e^{-i x} } {2 i} } - \frac 1 4 \paren {\frac {e^{3 i x} - e^{-3 i x} } {2 i} }\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {3 \sin x - \sin 3 x} 4\)





Euler's Sine Identity



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.55$




