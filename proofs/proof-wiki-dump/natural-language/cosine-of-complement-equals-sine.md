# 

Source: https://proofwiki.org/wiki/Cosine_of_Complement_equals_Sine



Theorem
$\map \cos {\dfrac \pi 2 - \theta} = \sin \theta$
where $\cos$ and $\sin$ are cosine and sine respectively.
That is, the sine of an angle is the cosine of its complement.


Proof 1













\(\ds \map \cos {\frac \pi 2 - \theta}\)

\(=\)







\(\ds \cos \frac \pi 2 \cos \theta + \sin \frac \pi 2 \sin \theta\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds 0 \times \cos \theta + 1 \times \sin \theta\)





Cosine of Right Angle and Sine of Right Angle














\(\ds \)

\(=\)







\(\ds \sin \theta\)









$\blacksquare$


Proof 2













\(\ds \map \cos {\frac \pi 2 - \theta}\)

\(=\)







\(\ds \map \cos {\theta - \frac \pi 2}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \map \sin {\theta - \frac \pi 2 + \frac \pi 2}\)





Sine of Angle plus Right Angle














\(\ds \)

\(=\)







\(\ds \sin \theta\)









$\blacksquare$


Proof 3













\(\ds \map \cos {\dfrac \pi 2 - \theta}\)

\(=\)







\(\ds \frac 1 2 \paren {e^{i \paren {\frac \pi 2 - \theta} } + e^{-i \paren {\frac \pi 2 - \theta} } }\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {e^{i \frac \pi 2} e^{-i \theta} + e^{-i \frac \pi 2} e^{i \theta} }\)





Exponential of Sum: Complex Numbers














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\map \cos {\frac \pi 2} + i \, \map \sin {\frac \pi 2} } e^{-i \theta} + \paren {\map \cos {-\frac \pi 2} + i \, \map \sin {-\frac \pi 2} } e^{i \theta} }\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {i e^{-i \theta} - i e^{i \theta} }\)





Cosine of Right Angle, Sine of Right Angle, Cosine Function is Even, Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {e^{i \theta} - e^{-i \theta} }\)





Definition of Imaginary Unit














\(\ds \)

\(=\)







\(\ds \sin \theta\)





Euler's Sine Identity



$\blacksquare$


Proof 4

Let $\angle xOP$ and $\angle QOy$ be complementary.
Then:

$\angle xOP = \angle QOy$
Hence:

the projection of $OP$ on the $x$-axis
equals:

the projection of $OQ$ on the $y$-axis.
Hence the result.
$\blacksquare$


Also see
Sine of Complement equals Cosine
Tangent of Complement equals Cotangent
Cotangent of Complement equals Tangent
Secant of Complement equals Cosecant
Cosecant of Complement equals Secant


Historical Note
The result Cosine of Complement equals Sine was discovered and documented by Varahamihira in the $6$th century CE.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(4)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: Functions of Angles in All Quadrants in terms of those in Quadrant I
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Symmetry
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Symmetry




