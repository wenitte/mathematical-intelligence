# 

Source: https://proofwiki.org/wiki/Brahmagupta%27s_Formula



Theorem
The area of a cyclic quadrilateral with sides of lengths $a, b, c, d$ is:

$\sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} }$
where $s$ is the semiperimeter:

$s = \dfrac {a + b + c + d} 2$


Corollary
The area of a cyclic quadrilateral with sides of lengths $a, b, c, d$ is:

$\dfrac {\sqrt {\paren {a^2 + b^2 + c^2 + d^2}^2 + 8 a b c d - 2 \paren {a^4 + b^4 + c^4 + d^4} } } 4$


Proof
Let $ABCD$ be a cyclic quadrilateral with sides $a, b, c, d$.


Area of $ABCD$ = Area of $\triangle ABC$ + Area of $\triangle ADC$
From Area of Triangle in Terms of Two Sides and Angle:














\(\ds \triangle ABC\)

\(=\)







\(\ds \frac 1 2 a b \sin \angle ABC\)




















\(\ds \triangle ADC\)

\(=\)







\(\ds \frac 1 2 c d \sin \angle ADC\)









From Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles, $\angle ABC + \angle ADC$ equals two right angles, that is, are supplementary.

Hence we have:














\(\ds \sin \angle ABC\)

\(=\)







\(\ds \sin \angle ADC\)





Sine and Cosine of Supplementary Angles














\(\ds \cos \angle ABC\)

\(=\)







\(\ds -\cos \angle ADC\)





Sine and Cosine of Supplementary Angles




This leads to:














\(\ds \Area\)

\(=\)







\(\ds \frac 1 2 a b \sin \angle ABC + \frac 1 2 c d \sin \angle ABC\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\Area}^2\)

\(=\)







\(\ds \frac 1 4 \paren {a b + c d}^2 \sin^2 \angle ABC\)














\(\ds \leadsto \ \ \)





\(\ds 4 \paren {\Area}^2\)

\(=\)







\(\ds \paren {a b + c d}^2 \paren {1 - \cos^2 \angle ABC}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \paren {a b + c d}^2 - \cos^2 \angle ABC \paren {a b + c d}^2\)










Applying the Law of Cosines for $\triangle ABC$ and $\triangle ADC$ and equating the expressions for side $AC$:

$a^2 + b^2 - 2 a b \cos \angle ABC = c^2 + d^2 - 2 c d \cos \angle ADC$

From the above:

$\cos \angle ABC = -\cos \angle ADC$
Hence:

$2 \cos \angle ABC \paren {a b + c d} = a^2 + b^2 - c^2 - d^2$

Substituting this in the above equation for the area:














\(\ds 4 \paren {\Area}^2\)

\(=\)







\(\ds \paren {a b + c d}^2 - \frac 1 4 \paren {a^2 + b^2 - c^2 - d^2}^2\)














\(\ds \leadsto \ \ \)





\(\ds 16 \paren {\Area}^2\)

\(=\)







\(\ds 4 \paren {a b + c d}^2 - \paren {a^2 + b^2 - c^2 - d^2}^2\)










This is of the form $x^2 - y^2$.
Hence, by Difference of Two Squares, it can be written in the form $\paren {x + y} \paren {x - y}$ as:















\(\ds \)

\(\)







\(\ds \paren {2 \paren {a b + c d} + a^2 + b^2 - c^2 - d^2} \paren {2 \paren {a b + c d} - a^2 - b^2 + c^2 + d^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a + b}^2 - \paren {c - d}^2} \paren {\paren {c + d}^2 - \paren {a - b}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + b + c - d} \paren {a + b + d - c} \paren {a + c + d - b} \paren {b + c + d - a}\)










When we introduce the expression for the semiperimeter:

$s = \dfrac {a + b + c + d} 2$
the above converts to:

$16 \paren {\Area}^2 = 16 \paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d}$

Taking the square root:

$\Area = \sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} }$
$\blacksquare$


Also known as
Some sources refer to Brahmagupta's Formula as the Archimedes-Heron-Brahmagupta Formula, for Archimedes of Syracuse and Heron of Alexandria as well as Brahmagupta.
The Heron of Alexandria connection comes from the application of this to the triangle to obtain Heron's Formula.
The reference to Archimedes of Syracuse comes from the possibility that (despite Heron being the one to publish) he may have been the one to first come up with Heron's Formula.


Also see
This formula is a generalization of Heron's Formula for the area of a triangle, which can be obtained from this by setting $d = 0$.
The relationship between the general and extended form of Brahmagupta's Formula is similar to how the Law of Cosines extends Pythagoras's Theorem.
Bretschneider's Formula, which extends this result to the general quadrilateral.
Area of Quadrilateral with Given Sides is Greatest when Quadrilateral is Cyclic


Source of Name
This entry was named for Brahmagupta.


Historical Note
While Brahmagupta's Formula bears the name of Brahmagupta, it was apparently known by Archimedes of Syracuse.


Sources
1992: John Hadley/2 and David Singmaster: Problems to Sharpen the Young (Math. Gazette Vol. 76, no. 475: pp. 102 – 126)  www.jstor.org/stable/3620384
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.1$: The Pythagorean Theorem: Appendix: The Formulas of Heron and Brahmagupta
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Area Enclosed Against The Seashore: $31$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Brahmagupta's formula
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Brahmagupta's formula




