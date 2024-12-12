# 

Source: https://proofwiki.org/wiki/Cosine_of_Angle_plus_Straight_Angle



Theorem
$\map \cos {x + \pi} = -\cos x$


Proof 1













\(\ds \map \cos {x + \pi}\)

\(=\)







\(\ds \cos x \cos \pi - \sin x \sin \pi\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \cos x \cdot \paren {-1} - \sin x \cdot 0\)





Cosine of Straight Angle and Sine of Straight Angle














\(\ds \)

\(=\)







\(\ds -\cos x\)









$\blacksquare$


Proof 2













\(\ds \map \cos {x + \pi}\)

\(=\)







\(\ds \map \Re {\map \cos {x + \pi} + i \, \map \sin {x + \pi} }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {e^{i \paren {x + \pi} } }\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \map \Re {e^{i x + i \pi} }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {e^{i x} e^{i \pi} }\)





Exponential of Sum: Complex Numbers














\(\ds \)

\(=\)







\(\ds \map \Re {-e^{i x} }\)





Euler's Identity














\(\ds \)

\(=\)







\(\ds -\map \Re {e^{i x} }\)




















\(\ds \)

\(=\)







\(\ds -\map \Re {\cos x + i \cos x}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds -\cos x\)









$\blacksquare$


Proof 3













\(\ds \map \cos {x + \pi}\)

\(=\)







\(\ds \frac 1 2 \paren {e^{i \paren {x + \pi} } + e^{-i \paren {x + \pi} } }\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {e^{i x} e^{i \pi} + e^{-i x} e^{-i \pi} }\)





Exponential of Sum: Complex Numbers














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {-e^{i x} - e^{-i x} }\)





Euler's Identity














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {e^{i x} + e^{-i x} }\)




















\(\ds \)

\(=\)







\(\ds -\cos x\)





Euler's Cosine Identity



$\blacksquare$


Proof 4
From the discussion in the proof of Real Cosine Function is Periodic:

$\map \sin {x + \eta} = \cos x$
$\map \cos {x + \eta} = -\sin x$
for $\eta \in \R_{>0}$.
From Sine and Cosine are Periodic on Reals: Pi, we define $\pi \in \R$ as $\pi := 2 \eta$.
It follows that $\eta = \dfrac \pi 2$, thus:

$\map \cos {x + \pi} = -\map \sin {x + \dfrac \pi 2} = -\cos x$
$\blacksquare$


Also see
Sine of Angle plus Straight Angle
Tangent of Angle plus Straight Angle
Cotangent of Angle plus Straight Angle
Secant of Angle plus Straight Angle
Cosecant of Angle plus Straight Angle


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Angles larger than $90 \degrees$: Examples
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: Functions of Angles in All Quadrants in terms of those in Quadrant I
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Shifts and periodicity
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Shifts and periodicity




