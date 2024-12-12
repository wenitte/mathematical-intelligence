# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Cosine



Theorem
$\cos 2 \theta = \cos^2 \theta - \sin^2 \theta$
where $\cos$ and $\sin$ denote cosine and sine respectively.


Corollary 1
$\cos 2 \theta = 2 \cos^2 \theta - 1$


Corollary 2
$\cos 2 \theta = 1 - 2 \sin^2 \theta$


Corollary 3
$\cos 2 \theta = \dfrac {1 - \tan^2 \theta} {1 + \tan^2 \theta}$


Corollary 4
$1 + \cos \theta = 2 \cos^2 \dfrac \theta 2$


Corollary 5
$1 - \cos \theta = 2 \sin^2 \dfrac \theta 2$


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





\(\ds \cos 2 \theta\)

\(=\)







\(\ds \cos^2 \theta - \sin^2 \theta\)





equating real parts



$\blacksquare$


Proof 2













\(\ds \cos 2 \theta\)

\(=\)







\(\ds \map \cos {\theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos \theta \cos \theta - \sin \theta \sin \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \cos^2 \theta - \sin^2 \theta\)









$\blacksquare$


Proof 3
Starting from the right, we have:














\(\ds \cos^2 \theta - \sin^2\theta\)

\(=\)







\(\ds \paren {\frac 1 2 \paren {e^{i \theta} + e^{-i \theta} } }^2 - \paren {\frac 1 {2 i} \paren {e^{i \theta} - e^{-i \theta} } }^2\)





Euler's Cosine Identity, Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {e^{i \theta} + e^{-i \theta} }^2 + \frac 1 4 \paren {e^{i \theta} - e^{-i \theta} }^2\)





$i$ is the imaginary unit














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {e^{2 i \theta} + 2 + e^{-2 i \theta} + e^{2 i \theta} - 2 + e^{-2 i \theta} }\)





Square of Sum, Square of Difference














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {e^{2 i \theta} + e^{-2 i \theta} }\)





Simplifying














\(\ds \)

\(=\)







\(\ds \cos 2 \theta\)





Euler's Cosine Identity



$\blacksquare$


Proof 4
  
Consider an isosceles triangle $\triangle ABC$ with base $BC$, and apex $\angle BAC = 2 \alpha$.
Draw an angle bisector to $\angle BAC$ and name it $AH$.

$\angle BAH = \angle CAH = \alpha$
From Angle Bisector and Altitude Coincide iff Triangle is Isosceles:

$AH \perp BC$
From Law of Cosines:




\(\text {(1)}: \quad\)









\(\ds CB^2\)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \cdot \cos 2 \alpha\)










From Pythagoras's Theorem:














\(\ds AC ^ 2\)

\(=\)







\(\ds CH^2 + AH^2\)





in triangle $\triangle AHC$




\(\text {(2.1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds CH^2\)

\(=\)







\(\ds AC^2 - AH^2\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds AB ^ 2\)

\(=\)







\(\ds BH^2 + AH^2\)





in triangle $\triangle AHB$




\(\text {(2.2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds BH^2\)

\(=\)







\(\ds BC^2 - AH^2\)










By definition of sine:




\(\text {(3.1)}: \quad\)









\(\ds CH\)

\(=\)







\(\ds AC \sin \alpha\)










\(\text {(3.2)}: \quad\)









\(\ds BH\)

\(=\)







\(\ds AB \sin \alpha\)










By definition of cosine:

$AH = AB \cos \alpha = AC \cos \alpha$

So:




\(\text {(4)}: \quad\)









\(\ds AH^2\)

\(=\)







\(\ds AB \cdot AC \cdot \cos^2 \alpha\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds CH^2\)

\(=\)







\(\ds AC^2 - AH^2\)





$(2.1)$




\(\text {(5.1)}: \quad\)









\(\ds \)

\(=\)







\(\ds AC^2 - AB \cdot AC \cdot \cos^2 \alpha\)





assigning $(4)$














\(\ds \)

\(\)







\(\ds \)




















\(\ds BH^2\)

\(=\)







\(\ds AB^2 - AH^2\)





$(2.2)$




\(\text {(5.2)}: \quad\)









\(\ds \)

\(=\)







\(\ds AB^2 - AB \cdot AC \cdot \cos^2 \alpha\)





assigning $(4)$




Now:














\(\ds CB^2\)

\(=\)







\(\ds (CH + BH)^2\)




















\(\ds \)

\(=\)







\(\ds CH^2 + BH^2 + 2 \cdot CH \cdot BH\)





Square of Sum














\(\ds \)

\(=\)







\(\ds AC^2 - AB \cdot AC \cdot \cos^2 \alpha + AB^2 - AB \cdot AC \cdot \cos^2 \alpha + 2 \cdot CH \cdot BH\)





assigning $(5.1)$,$(5.2)$














\(\ds \)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \cdot \cos^2 \alpha + 2 \cdot CH \cdot BH\)





simplifying














\(\ds \)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \cdot \cos^2 \alpha + 2 \cdot AB \cdot AC \cdot \sin^2 \alpha\)





assigning $(3.1)$,$(3.2)$














\(\ds \)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \paren {\cos^2 \alpha - \sin^2 \alpha}\)





simplifying














\(\ds \)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \cdot \cos 2 \alpha\)





equating to $(1)$




Hence we get the equation:














\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \paren {\cos^2 \alpha - \sin^2 \alpha}\)

\(=\)







\(\ds AC^2 + AB^2 - 2 \cdot AB \cdot AC \cdot \cos 2 \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \cos^2 \alpha - \sin^2 \alpha\)

\(=\)







\(\ds \cos 2 \alpha\)





simplifying



$\blacksquare$


Also known as
Corollary $1$ and Corollary $2$ are sometimes known as Carnot's Formulas, for Lazare Nicolas Marguerite Carnot.


Also see
Double Angle Formula for Sine


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(13)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.39$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (3) \ \text{(iv)}$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): cosine
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): double-angle formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): double-angle formulae
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): double-angle formula (in trigonometry)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Double-angle formulae
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Double-angle formulae




