# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Tangent



Theorem
$\tan 2 \theta = \dfrac {2 \tan \theta} {1 - \tan^2 \theta}$
where $\tan$ denotes tangent.


Corollary
Let $u = \tan \dfrac \theta 2$.
Then:

$\tan \theta = \dfrac {2 u} {1 - u^2}$


Proof 1













\(\ds \tan 2 \theta\)

\(=\)







\(\ds \frac {\sin 2 \theta} {\cos 2 \theta}\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \frac {2 \cos \theta \sin \theta} {\cos^2 \theta - \sin^2 \theta}\)





Double Angle Formula for Sine and Double Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds \frac {\frac {2 \cos \theta \sin \theta} {\cos^2 \theta} } {\frac {\cos^2 \theta - \sin^2 \theta} {\cos^2 \theta} }\)





dividing numerator and denominator by $\cos^2 \theta$














\(\ds \)

\(=\)







\(\ds \frac {2 \tan \theta} {1 - \tan^2 \theta}\)





simplifying: Tangent is Sine divided by Cosine



$\blacksquare$


Proof 2













\(\ds \tan 2 \theta\)

\(=\)







\(\ds \map \tan {\theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\tan \theta + \tan \theta} {1 - \tan \theta \tan \theta}\)





Tangent of Sum














\(\ds \)

\(=\)







\(\ds \frac {2 \tan \theta} {1 - \tan^2 \theta}\)









$\blacksquare$


Proof 3













\(\ds \frac {2 \tan \theta} {1 - \tan^2 \theta}\)

\(=\)







\(\ds \dfrac {2 i \dfrac {1 - e^{2 i \theta} } {1 + e^{2 i \theta} } } {1 - \paren {i \dfrac {1 - e^{2 i \theta} } {1 + e^{2 i \theta} } }^2}\)





Euler's Tangent Identity














\(\ds \)

\(=\)







\(\ds \dfrac {2 i \paren {1 - e^{2 i \theta} } \paren {1 + e^{2 i \theta} } } {\paren {1 + e^{2 i \theta} }^2 + \paren {1 - e^{2 i \theta} }^2}\)





multiplying both numerator and denominator by $\paren {1 + e^{2 i \theta} }^2$; $i$ is the imaginary unit














\(\ds \)

\(=\)







\(\ds \dfrac {2 i \paren {1 - e^{4 i \theta} } } {1 + 2 e^{2 i \theta} + e^{4 i \theta} + 1 - 2 e^{2 i \theta} + e^{4 i \theta} }\)





Difference of Two Squares, Square of Sum, Square of Difference














\(\ds \)

\(=\)







\(\ds \dfrac {2 i \paren {1 - e^{4 i \theta} } } {2 + 2 e^{4 i \theta} }\)





simplifying














\(\ds \)

\(=\)







\(\ds i \dfrac {1 - e^{4 i \theta} } {1 + e^{4 i \theta} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \tan 2 \theta\)





Euler's Tangent Identity



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(19)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.40$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): double-angle formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): double-angle formulae
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): double-angle formula (in trigonometry)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Double-angle formulae
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Double-angle formulae




