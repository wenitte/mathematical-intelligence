# 

Source: https://proofwiki.org/wiki/Pi_as_Sum_of_Alternating_Sequence_of_Products_of_3_Consecutive_Reciprocals/Lemma

Theorem
$\ds \iiint \dfrac x {x^2 + 1} \rd x \rd x \rd x = x \map \arctan x + \dfrac {\paren {x^2 - 1} \map \ln {x^2 + 1} - 3 x^2} 4$
with all integration constants at $0$.


Proof
First primitive:














\(\ds \int \dfrac x {x^2 + 1} \rd x\)

\(=\)







\(\ds \dfrac 1 2 \int \dfrac {2 x} {x^2 + 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {x^2 + 1} } 2\)





Primitive of Function under its Derivative



The integration constant is not added due to the series never having a constant during its integration.
$\Box$

Second primitive:














\(\ds \int \dfrac {\map \ln {x^2 + 1} } 2 \rd x\)

\(=\)







\(\ds \dfrac 1 2 \paren {x \map \ln {x^2 + 1^2} - 2 x + 2 \times 1 \times \arctan \frac x 1}\)





Primitive of $\ln {x^2 + a^2}$, putting $a = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {x \map \ln {x^2 + 1} } 2 - x + \map \arctan x\)









$\Box$

Third primitive:














\(\ds \int \paren {\dfrac {x \map \ln {x^2 + 1} } 2 + \map \arctan x - x} \rd x\)

\(=\)







\(\ds \int \dfrac {x \map \ln {x^2 + 1} } 2 \rd x + \int \map \arctan x \rd x - \int x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {x \map \ln {x^2 + 1} } 2 \rd x + \int \map \arctan x \rd x - \dfrac {x^2} 2\)





Integral of Power














\(\ds \)

\(=\)







\(\ds \int \dfrac {x \map \ln {x^2 + 1} } 2 \rd x + x \map \arctan x - \dfrac {\map \ln {x^2 + 1} } 2 - \dfrac {x^2} 2\)





Primitive of $\arctan \dfrac x a$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {\paren {x^2 + 1} \map \ln {x^2 + 1} - x^2} 2} + x \map \arctan x - \dfrac {\map \ln {x^2 + 1} } 2 - \dfrac {x^2} 2\)





Primitive of $x \map \ln {x^2 + a^2}$ with $a = 1$














\(\ds \)

\(=\)







\(\ds x \map \arctan x + \dfrac {\paren {x^2 - 1} \map \ln {x^2 + 1} - 3 x^2} 4\)





simplifying



$\blacksquare$





