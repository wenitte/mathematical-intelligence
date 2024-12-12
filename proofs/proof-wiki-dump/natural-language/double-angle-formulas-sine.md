# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Sine



Theorem
$\sin 2 \theta = 2 \sin \theta \cos \theta$
where $\sin$ and $\cos$ denote sine and cosine respectively.


Corollary
$\sin 2 \theta = \dfrac {2 \tan \theta} {1 + \tan^2 \theta}$


Proof 1













\(\ds \cos 2 \theta + i \sin 2 \theta\)

\(=\)







\(\ds \paren {\cos \theta + i \sin \theta}^2\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds \cos^2 \theta + i^2 \sin^2 \theta + 2 i \cos \theta \sin \theta\)




















\(\ds \)

\(=\)







\(\ds \cos^2 \theta - \sin^2 \theta + 2 i \cos \theta \sin \theta\)














\(\ds \leadsto \ \ \)





\(\ds \sin 2 \theta\)

\(=\)







\(\ds 2 \cos \theta \sin \theta\)





equating imaginary parts



$\blacksquare$


Proof 2













\(\ds \sin 2 \theta\)

\(=\)







\(\ds \map \sin {\theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \sin \theta \cos \theta + \cos \theta \sin \theta\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds 2 \sin \theta \cos \theta\)









$\blacksquare$


Proof 3
  
Consider an isosceles triangle $\triangle ABC$ with base $BC$ and apex $\angle BAC = 2 \alpha$.
Construct the angle bisector to $\angle BAC$ and name it $AH$:

$\angle BAH = \angle CAH = \alpha$
From Bisector of Apex of Isosceles Triangle is Perpendicular to Base:

$AH \perp BC$
From Area of Triangle in Terms of Two Sides and Angle:














\(\ds \map \Area {\triangle BAH}\)

\(=\)







\(\ds \dfrac {BA \cdot AH \sin \alpha} 2\)




















\(\ds \map \Area {\triangle CAH}\)

\(=\)







\(\ds \dfrac {CA \cdot AH \sin \alpha} 2\)










By definition of sine:














\(\ds AH\)

\(=\)







\(\ds CA \cos \alpha\)




















\(\ds AH\)

\(=\)







\(\ds BA \cos \alpha\)










and so:














\(\ds \map \Area {\triangle BAH}\)

\(=\)







\(\ds \dfrac {BA \cdot CA \cos \alpha \sin \alpha} 2\)




















\(\ds \map \Area {\triangle CAH}\)

\(=\)







\(\ds \dfrac {CA \cdot BA \cos \alpha \sin \alpha} 2\)




















\(\ds \map \Area {\triangle ABC}\)

\(=\)







\(\ds \map \Area {\triangle BAH} + \map \Area {\triangle CAH}\)




















\(\ds \)

\(=\)







\(\ds \frac {BA \cdot CA \cos \alpha \sin \alpha} 2 + \frac {CA \cdot BA \cos \alpha \sin \alpha} 2\)




















\(\ds \)

\(=\)







\(\ds BA \cdot CA \cos \alpha \sin \alpha\)




















\(\ds \)

\(=\)







\(\ds \frac {BA \cdot CA \sin 2 \alpha} 2\)





Area of Triangle in Terms of Two Sides and Angle ($\triangle ABC$)








\(\ds \leadsto \ \ \)





\(\ds \sin 2 \alpha\)

\(=\)







\(\ds 2 \cos \alpha \sin \alpha\)





dividing both sides by $\dfrac {BA \cdot CA} 2$



$\blacksquare$


Proof 4













\(\ds \sin 2 \theta\)

\(=\)







\(\ds \frac 1 {2 i} \paren {e^{2 i \theta} - e^{-2 i \theta} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {e^{i \theta} + e^{-i \theta} } \paren {e^{i \theta} - e^{-i \theta} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {e^{i \theta} - e^{-i \theta} } {2 i} \cdot \frac {e^{i \theta} + e^{-i \theta} } 2}\)




















\(\ds \)

\(=\)







\(\ds 2 \sin \theta \cos \theta\)





Euler's Sine Identity, Euler's Cosine Identity



$\blacksquare$


Also see
Double Angle Formula for Cosine


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(16)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.38$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (3) \ \text{(iii)}$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): sine
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): double-angle formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): double-angle formulae
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): double-angle formula (in trigonometry)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Double-angle formulae
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Double-angle formulae




