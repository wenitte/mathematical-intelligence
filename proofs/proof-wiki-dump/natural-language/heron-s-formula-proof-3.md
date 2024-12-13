# 

Source: https://proofwiki.org/wiki/Heron%27s_Formula/Proof_3



Theorem
Let $\triangle ABC$ be a triangle with sides $a$, $b$ and $c$ opposite vertices $A$, $B$ and $C$ respectively.

Then the area $\AA$ of $\triangle ABC$ is given by:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where $s = \dfrac {a + b + c} 2$ is the semiperimeter of $\triangle ABC$.


Proof

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


Source of Name
This entry was named for Heron of Alexandria.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.1$: The Pythagorean Theorem: Appendix: The Formulas of Heron and Brahmagupta




