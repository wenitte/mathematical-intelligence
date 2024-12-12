# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Cosine/Proof_4

Theorem
$\cos 2 \theta = \cos^2 \theta - \sin^2 \theta$


Proof
  
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





