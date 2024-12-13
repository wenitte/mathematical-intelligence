# 

Source: https://proofwiki.org/wiki/Power_Reduction_Formulas/Cosine_to_4th



Theorem
$\cos^4 x = \dfrac {3 + 4 \cos 2 x + \cos 4 x} 8$
where $\cos$ denotes cosine.


Proof 1













\(\ds \cos^4 x\)

\(=\)







\(\ds \paren {\cos^2 x}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {1 + \cos 2 x} 2}^2\)





Square of Cosine














\(\ds \)

\(=\)







\(\ds \frac {1 + 2 \cos 2 x + \cos^2 2 x} 4\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {1 + 2 \cos 2 x + \frac {1 + \cos 4 x} 2} 4\)





Square of Cosine














\(\ds \)

\(=\)







\(\ds \frac {2 + 4 \cos 2 x + 1 + \cos 4 x} 8\)





multiplying top and bottom by $2$














\(\ds \)

\(=\)







\(\ds \frac {3 + 4 \cos 2 x + \cos 4 x} 8\)





rearrangement



$\blacksquare$


Proof 2













\(\ds \cos ^4 x\)

\(=\)







\(\ds \paren {\frac {e^{i x} + e^{-i x} } 2}^4\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac {\paren {e^{i x} + e^{-i x} }^4} {16}\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {\paren {e^{i x} }^4 + 4 \paren {e^{i x} }^3 \paren {e^{-i x} } + 6 \paren {e^{i x} }^2 \paren {e^{-i x} }^2 + 4 \paren {e^{i x} } \paren {e^{-i x} }^3 + \paren {e^{-i x} }^4} {16}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {e^{4 i x} + 4 e^{2 i x} + 6 + 4 e^{-2 i x} + e^{-4 i x} } {16}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {3 + 4 \paren {\dfrac {e^{2 i x} + e^{-2 i x} } 2} + \paren {\dfrac {e^{4 i x} + e^{-4 i x} } 2} } 8\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {3 + 4 \cos 2 x + \cos 4 x} 8\)





Euler's Cosine Identity



$\blacksquare$


Also defined as
This result can often be seen as:

$\cos^4 x = \dfrac 3 8 + \dfrac {\cos 2 x} 2 + \dfrac {\cos 4 x} 8$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.58$




