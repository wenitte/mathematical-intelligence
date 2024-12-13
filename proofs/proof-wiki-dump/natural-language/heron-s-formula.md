# 

Source: https://proofwiki.org/wiki/Heron%27s_Formula

  This article was Featured Proof between 9 May 2009 and 15 May 2009.




Theorem
Let $\triangle ABC$ be a triangle with sides $a$, $b$ and $c$ opposite vertices $A$, $B$ and $C$ respectively.

Then the area $\AA$ of $\triangle ABC$ is given by:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where $s = \dfrac {a + b + c} 2$ is the semiperimeter of $\triangle ABC$.


Proof 1
Construct the altitude from $A$.
Let the length of the altitude be $h$ and the foot of the altitude be $D$.
Let the distance from $D$ to $B$ be $z$.


From Pythagoras's Theorem:

$\paren 1: \quad h^2 + \paren {a - z}^2 = b^2$
and:

$\paren 2: \quad h^2 + z^2 = c^2$
By subtracting $\paren 1$ from $\paren 2$:

$2 a z - a^2 = c^2 - b^2$
which can be expressed in terms of $z$ as:

$z = \dfrac {a^2 + c^2 - b^2} {2 a}$
Substituting for $z$ in $\paren 2$ and simplifying yields:

$h = \sqrt {c^2 - \paren {\dfrac {a^2 + c^2 - b^2} {2a} }^2}$
and so:














\(\ds \AA\)

\(=\)







\(\ds \frac 1 2 a \sqrt {c^2 - \paren {\frac{a^2 + c^2 - b^2}{2a} }^2}\)





Area of Triangle in Terms of Side and Altitude














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {4 c^2 a^2 - \left({a^2 + c^2 - b^2}\right)^2} {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {2ac - a^2 - c^2 + b^2} \paren {2ac + a^2 + c^2 - b^2} } {16} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {b^2 - \paren {a - c}^2} \paren {\paren {a + c}^2 - b^2} } {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {b - a + c} \paren {b + a - c} \paren {a + c - b} \paren {a + b + c} } {16} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {a + b + c} \paren {a + b - c} \paren {a - b + c} \paren {-a + b + c} } {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\frac {a + b + c} 2} \paren {\frac {a + b + c} 2 - c} \paren {\frac {a + b + c} 2 - b} \paren {\frac {a + b + c} 2 - a} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {s \paren {s - c} \paren {s - b} \paren{s - a} }\)





Definition of Semiperimeter



$\blacksquare$


Proof 2
A triangle can be considered as a cyclic quadrilateral one of whose sides has degenerated to zero.
From Brahmagupta's Formula, the area of a cyclic quadrilateral is given by:

$\sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d}}$
where $s$ is the semiperimeter:

$s = \dfrac {a + b + c + d} 2$
The result follows by letting $d$ tend to zero.
$\blacksquare$


Proof 3

Let $\AA$ be the area of $\triangle ABC$.
Construct the incircle of $\triangle ABC$.
Let the incenter of $\triangle ABC$ be $M$.
Let the inradius of $\triangle ABC$ be $r$.
$\triangle ABC$ is made up of three triangles: $\triangle AMB$, $\triangle BMC$ and $\triangle CMA$.
From Area of Triangle in Terms of Side and Altitude, the areas of $\triangle AMB$, $\triangle BMC$ and $\triangle CMA$ are given by:

$\Area \paren {\triangle AMB} = \dfrac {r c} 2$
$\Area \paren {\triangle BMC} = \dfrac {r a} 2$
$\Area \paren {\triangle CMA} = \dfrac {r b} 2$
Thus:

$(1): \quad \AA = \dfrac {r \paren {c + a + b} } 2 = r s$
where $s$ is the semiperimeter of $\triangle ABC$.

Construct the excircle of $\triangle ABC$ with excenter $N$ tangent to $AB$, and to $AC$ and $BC$ produced at $D$ and $E$ respectively.
By Length of Tangent to Excircle:

$s = CD = CE$
Therefore:

$DA = s - b$
$EB = s - a$
Note that:

$AF + DA = BG + EB$
and:

$AF + BG = C$
We need to show that $\triangle MAF \sim \triangle DNA$.
Note that:

$AM$ bisects $\angle BAC$
$AN$ bisects $\angle BAD$
But $\angle BAC$ and $\angle BAD$ are supplementary angles.
Hence the half-angles $\angle MAF$ and $\angle DAN$ are complementary angles.
It follows that:

$\angle MAF = \angle DNA$
Since $\triangle MAF$ and $\triangle DNA$ are both right triangles:

$\triangle DNA \sim \triangle MAF$
As right triangles sharing an acute angle:

$\triangle NDC \sim \triangle MFC$
from which:














\(\ds \dfrac R r\)

\(=\)







\(\ds \dfrac s {s - c}\)




















\(\ds \dfrac R {s - b}\)

\(=\)







\(\ds \dfrac {s - a} r\)














\(\ds \leadsto \ \ \)





\(\ds R\)

\(=\)







\(\ds \dfrac {r s} {s - c}\)





substituting for $R$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {s - a} \paren {s - b} } r\)














\(\ds \leadsto \ \ \)





\(\ds r^2\)

\(=\)







\(\ds \dfrac {\paren {s - a} \paren {s - b} \paren {s - c} } s\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \AA\)

\(=\)







\(\ds s \sqrt {\dfrac {\paren {s - a} \paren {s - b} \paren {s - c} } s}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)





simplifying



$\blacksquare$


Proof 4













\(\ds \AA\)

\(=\)







\(\ds \dfrac {a b \sin C} 2\)





Area of Triangle in Terms of Two Sides and Angle














\(\ds \)

\(=\)







\(\ds \dfrac {a b} 2 \cdot 2 \sin \dfrac C 2 \cos \dfrac C 2\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds a b \sqrt {\dfrac {\paren {s - a} \paren {s - b} } {a b} } \sqrt {\dfrac {s \paren {s - c} } {a b} }\)





Sine of Half Angle in Triangle, Cosine of Half Angle in Triangle














\(\ds \)

\(=\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)





simplifying





Also known as
Heron's Formula is also known as Hero's formula.


Also see
Brahmagupta's Formula


Source of Name
This entry was named for Heron of Alexandria.


Historical Note
Arabic sources from the Middle Ages inform us that Heron's Formula was actually due to Archimedes of Syracuse.
However, Heron's is the earliest proof that survives.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(45)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 4$: Geometric Formulas: $4.5$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Heron's formula or Hero's formula
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.7$: Heron (first century A.D.)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.1$: The Pythagorean Theorem: Appendix: The Formulas of Heron and Brahmagupta
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Area Enclosed Against The Seashore: $31$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Hero's formula (Heron's formula)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hero's formula (Heron's formula)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): triangle (v): Hero's formula
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): triangle (v): Hero's formula




