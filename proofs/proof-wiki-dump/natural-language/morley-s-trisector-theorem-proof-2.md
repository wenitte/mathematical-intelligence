# 

Source: https://proofwiki.org/wiki/Morley%27s_Trisector_Theorem/Proof_2

Theorem
Let $\triangle ABC$ be a triangle.
Let the internal angles of $\triangle ABC$ be trisected.
Let the points where these angle trisectors first intersect be $D$, $E$ and $F$.



Then $\triangle EDF$ is equilateral.


Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: 2 different proofs, separate them out into different pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
By comparing the given triangle $\triangle A'B'C'$ with the constructed triangle  $\triangle ABC $, we shall prove that $\triangle X'Y'Z' \sim \triangle XYZ$ where $\triangle XYZ$ is an equilateral triangle.

The Given Triangle $\triangle A'B'C'$


The Constructed Triangle $\triangle ABC$


We begin by constructing $\triangle XYZ$, an equilateral triangle such that:

$XY = YZ = XZ$
Noting that $\alpha + \beta + \gamma = 60 \degrees$, we construct $\triangle AXY$ such that: 














\(\ds \angle AXY\)

\(=\)







\(\ds 60 \degrees + \beta\)




















\(\ds \angle XZB\)

\(=\)







\(\ds 60 \degrees + \gamma\)






















\(\ds \therefore \angle XAY\)

\(=\)







\(\ds 180 \degrees - (60 \degrees + \beta + 60 \degrees + \gamma)\)




















\(\ds \)

\(=\)







\(\ds 60 \degrees - \beta - 60 \degrees\)




















\(\ds \)

\(=\)







\(\ds \alpha\)









Construct $\triangle BXZ$ such that: 














\(\ds \angle ZXB\)

\(=\)







\(\ds 60 \degrees + \alpha\)




















\(\ds \angle XZB\)

\(=\)







\(\ds 60 \degrees + \gamma\)




















\(\ds \therefore \angle XBZ\)

\(=\)







\(\ds \beta\)










Construct $\triangle CYZ$ such that: 















\(\ds \angle BXZ\)

\(=\)







\(\ds 60 \degrees + \beta\)




















\(\ds \angle AYX\)

\(=\)







\(\ds 60 \degrees + \alpha\)




















\(\ds \therefore \angle YCZ\)

\(=\)







\(\ds \gamma\)










Construct $AB$, $BC$ and $AC$, the sides of $\triangle ABC$.

$\angle AXB$ is calculated as follows:














\(\ds \angle AXB\)

\(=\)







\(\ds 360 \degrees - ( \angle AXY +\angle YXZ + \angle BXZ )\)




















\(\ds \)

\(=\)







\(\ds 360 \degrees - ((60 \degrees + \beta) +  60 \degrees + (60 \degrees + \alpha))\)




















\(\ds \)

\(=\)







\(\ds 360 \degrees - (180 \degrees + \beta  + \alpha)\)




















\(\ds \)

\(=\)







\(\ds 180 \degrees -  \beta  - \alpha\)









To proceed, it is necessary to prove that $ \triangle A'X'B' \sim \triangle AXB$.
We shall provide two alternate proofs for this preposition; a trigonometric proof and a geometric proof.

Trigonometric proof for $\triangle A'X'B' \sim \triangle AXB$ 

Applying the Sine Rule for $\triangle XBZ$ and $\triangle XAY$, we have:




\(\text {(1)}: \quad\)









\(\ds BX\)

\(=\)







\(\ds XZ \map \sin {\angle XZB} / \sin \beta = XZ \map \sin {60 \degrees + \gamma} / \sin \beta\)










\(\text {(2)}: \quad\)









\(\ds AX\)

\(=\)







\(\ds XY \map \sin {\angle AYX } /  \sin \alpha = XY \map \sin {60 \degrees + \gamma } /  \sin \alpha\)









Dividing $(1)$ by $(2)$ and noting that by construction $XZ = XY$, we obtain:




\(\text {(3)}: \quad\)









\(\ds \dfrac {BX } { AX}\)

\(=\)







\(\ds \dfrac {\sin \alpha} {\sin \beta}\)









Applying the Sine Rule to $\triangle A'X'B' $, we get:




\(\text {(4)}: \quad\)









\(\ds \dfrac {B'X' } { A'X'}\)

\(=\)







\(\ds \dfrac {\sin \alpha} {\sin \beta}\)









Combining $(3)$ and $(4)$, yields:














\(\ds \dfrac {BX } { AX}\)

\(=\)







\(\ds \dfrac {B'X'} {A'X'}\)










For $\triangle A'X'B' $, we have: 














\(\ds \angle A'X'B'\)

\(=\)







\(\ds 180 \degrees -  \beta  - \alpha\)









and we have already shown that: 














\(\ds \angle AXB\)

\(=\)







\(\ds 180 \degrees -  \beta  - \alpha\)




















\(\ds \leadsto \angle AXB\)

\(=\)







\(\ds \angle A'X'B'\)




















\(\ds \therefore \triangle A'X'B'\)

\(\sim\)







\(\ds \triangle AXB\)





Triangles with One Equal Angle and Two Sides Proportional are Similar




Consequently, $\angle BAX = \alpha $ and $\angle ABX = \beta $.

In a similar fashion, we can obtain the following triangle similarities:














\(\ds \triangle A'Y'C'\)

\(\sim\)







\(\ds \triangle CYC\)




















\(\ds \triangle B'Z'C'\)

\(\sim\)







\(\ds \triangle BZC\)










--- End of the Trigonometric Proof for $\triangle A'X'B' \sim \triangle AXB$ ---   

Geometric proof for $\triangle A'X'B' \sim \triangle AXB$


We consider 3 different cases for the geometric proof 

[1] $\gamma < 30 \degrees $
[2] $\gamma > 30 \degrees $
[3] $\gamma = 30 \degrees $

The outline for proving  case [1] is given as follows: 

Construct $\triangle A' 'Y' 'X' '$.
Construct $\triangle B' 'X' 'Z' ' $.
Prove that $\triangle A' 'X' 'B' ' \cong \triangle AXB$.
Prove that $\triangle  A'X'B' \sim \triangle AXB$.

We construct triangle $\triangle A' 'Y' 'X' '$ such that  $\triangle A' 'Y' 'X' ' \cong \triangle AYX $.














\(\ds \therefore \angle X' 'Y' 'A' '\)

\(=\)







\(\ds \angle XYA\)




















\(\ds \)

\(=\)







\(\ds 60 \degrees + \gamma\)





by the construction of $\triangle XYA$




Next, we  construct triangle $\triangle B' 'X' 'Z' ' $ as follows:














\(\ds \angle Z' 'X' 'Y' '\)

\(=\)







\(\ds 60 \degrees - 2 \gamma\)





construct $\angle Z' 'X' 'Y' '$














\(\ds \leadsto \angle X' 'Z' 'B' ' '\)

\(=\)







\(\ds 180 \degrees - \angle X' 'Y' 'A' ' - \angle Z' 'X' 'Y' ' '\)




















\(\ds \)

\(=\)







\(\ds 180 \degrees - (60 \degrees + \gamma) -  (60 \degrees - 2 \gamma)\)




















\(\ds \)

\(=\)







\(\ds 60 \degrees + \gamma\)




















\(\ds \)

\(=\)







\(\ds \angle XZB\)





by the construction of $\triangle XZB$














\(\ds \therefore X' 'Z' '\)

\(=\)







\(\ds X' 'Y' '\)





$\triangle Y' 'X' 'Z' '$  is an isosceles by Triangle with Two Equal Angles is Isosceles














\(\ds \)

\(=\)







\(\ds XY\)





by $\triangle A' 'Y' 'X' ' \cong \triangle AYX $














\(\ds \)

\(=\)







\(\ds XZ\)





by equilateral $\triangle XYZ$  construction














\(\ds \angle B' 'X' 'Z' '\)

\(=\)







\(\ds \angle BXZ\)





construct $\angle B' 'X' 'Z' '$














\(\ds \)

\(=\)







\(\ds 60 \degrees +\alpha\)





by the construction of $\triangle XZB$














\(\ds \therefore \triangle B' 'X' 'Z' '\)

\(\cong\)







\(\ds \triangle BXZ\)





Triangle Angle-Side-Angle Congruence




We shall now prove that that $\triangle A' 'X' 'B' ' \cong \triangle AXB$.
We note that:














\(\ds \angle X' 'A' 'Y' '\)

\(=\)







\(\ds \angle XAY\)





by $\triangle A' 'Y' 'X' ' \cong \triangle AYX $














\(\ds \)

\(=\)







\(\ds \alpha\)




















\(\ds \angle X' 'B' 'Z' '\)

\(=\)







\(\ds \angle XBZ\)





by $\triangle B' 'X' 'Z' ' \cong \triangle BXZ$














\(\ds \)

\(=\)







\(\ds \beta\)




















\(\ds \angle AXB\)

\(=\)







\(\ds 180 \degrees - \angle XAY -\angle XBZ\)




















\(\ds \)

\(=\)







\(\ds 180 \degrees - \alpha - \beta\)




















\(\ds \angle A' 'X' 'B' '\)

\(=\)







\(\ds 180 \degrees - \angle X' 'A' 'Y' ' - \angle X' 'B' 'Z' '\)




















\(\ds \)

\(=\)







\(\ds 180 \degrees - \alpha - \beta\)




















\(\ds \)

\(=\)







\(\ds \angle AXB\)






















\(\ds B' 'X' '\)

\(=\)







\(\ds BX\)





by $\triangle B' 'X' 'Z' ' \cong \triangle BXZ$














\(\ds A' 'X' '\)

\(=\)







\(\ds AX\)





by $\triangle A' 'Y' 'X' ' \cong \triangle AYX $














\(\ds \therefore \triangle AXB\)

\(\cong\)







\(\ds \triangle A' 'X' 'B' '\)





Triangle Side-Angle-Side Congruence




Consequently,














\(\ds \angle XBA\)

\(=\)







\(\ds \angle X' 'B' 'A' '\)




















\(\ds \)

\(=\)







\(\ds \beta\)




















\(\ds \angle XAB\)

\(=\)







\(\ds \angle X' 'A' 'B' '\)




















\(\ds \)

\(=\)







\(\ds \alpha\)









and given that:














\(\ds \angle  X'B'A'\)

\(=\)







\(\ds \beta\)




















\(\ds \angle  X'A'B'\)

\(=\)







\(\ds \alpha\)









yields the desired result:














\(\ds \triangle  A'X'B'\)

\(\sim\)







\(\ds \triangle AXB\)





Triangles with Two Equal Angles are Similar




For case [2], where $\gamma > 30 \degrees$, $\angle Z' 'X' 'Y' ' =  2 \gamma - 60 \degrees$ and
$\triangle X' 'Z' 'Y' '$ is external to $\triangle A' 'Y' 'X' '$ and $\triangle B' 'X' 'Z' '$.
In case [3], where $\gamma = 30 \degrees $, $\angle Z' 'X' 'Y' ' =  0 \degrees$ and $\triangle X' 'Z' 'Y' '$ degenerates into line segment $X' 'Z' '$. 
In either case, [2] or [3],
the proof for $\triangle  X'A'B' \sim \triangle XAB$ is very similar to the proof for case [1].
In a similar fashion, we can prove that:

$\triangle  B'Z'C' \sim \triangle BZC$ and $\triangle  A'Y'C' \sim \triangle AYC$
and that:

$\angle CAY = \alpha $, $\angle ACY = \gamma $, $\angle CBZ = \beta $ and $\angle BCZ = \gamma $.

--- End of the Geometric Proof for $\triangle  A'X'B' \sim \triangle AXB$ --- 

Because














\(\ds \angle ABC\)

\(=\)







\(\ds \angle ABX + \angle XBZ + \angle ZBC\)




















\(\ds \)

\(=\)







\(\ds 3 \beta\)









and













\(\ds \angle BAC\)

\(=\)







\(\ds \angle BAX + \angle XAY + \angle CAY\)




















\(\ds \)

\(=\)







\(\ds 3 \alpha\)









we have the following similarity:














\(\ds \triangle ABC\)

\(\sim\)







\(\ds \triangle A'B'C'\)





Triangles with Two Equal Angles are Similar




Using $ \triangle ABC \sim \triangle A'B'C' $, $\triangle A'B'X' \sim \triangle ABX$ and $\triangle A'C'Y' \sim \triangle ACY$ triangle similarities, we observe that:














\(\ds \dfrac {AX} { A'X' }\)

\(=\)







\(\ds \dfrac {AB} { A'B' }\)





by $\triangle A'B'X' \sim \triangle ABX$














\(\ds \dfrac {AY} { A'Y' }\)

\(=\)







\(\ds \dfrac {AC} { A'C' }\)





by $\triangle A'C'Y' \sim \triangle ACY$














\(\ds \)

\(=\)







\(\ds \dfrac {AB} { A'B' }\)





by $ \triangle ABC \sim \triangle A'B'C' $














\(\ds \leadsto \dfrac {AX} { A'X' }\)

\(=\)







\(\ds \dfrac {AY} { A'Y' }\)





the 2 ratios are equal to $\dfrac {AB} { A'B'}$




Furthermore,














\(\ds \angle XAY\)

\(=\)







\(\ds \angle X'A'Y'\)




















\(\ds \)

\(=\)







\(\ds \alpha\)




















\(\ds \therefore \triangle XAY\)

\(\sim\)







\(\ds \triangle X'A'Y'\)





Triangles with One Equal Angle and Two Sides Proportional are Similar














\(\ds \leadsto \dfrac { XY } { X'Y' }\)

\(=\)







\(\ds \dfrac {AX} { A'X' }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {AB} { A'B' }\)





by $\triangle A'B'X' \sim \triangle ABX$




In a similar fashion, we can also prove the following triangle similarities:














\(\ds \triangle XBZ\)

\(\sim\)







\(\ds \triangle X'B'Z'\)




















\(\ds \triangle YCZ\)

\(\sim\)







\(\ds \triangle Y'C'Z'\)









which yield the following:














\(\ds \dfrac {XZ} { X'Z' }\)

\(=\)







\(\ds \dfrac { BX } { B'X' }\)





by $\triangle XBZ \sim \triangle X'B'Z'$














\(\ds \)

\(=\)







\(\ds \dfrac {AB} { A'B' }\)





by $\triangle A'B'X' \sim \triangle ABX$
















\(\ds \dfrac {YZ} { Y'Z' }\)

\(=\)







\(\ds \dfrac { CY } { C'Y' }\)





by $\triangle YCZ \sim \triangle Y'C'Z'$














\(\ds \)

\(=\)







\(\ds \dfrac {AC} { A'C' }\)





by $\triangle A'C'Y' \sim \triangle ACY$














\(\ds \)

\(=\)







\(\ds \dfrac {AB} { A'B'}\)





by $\triangle A'B'C' \sim \triangle ABC$
















\(\ds \therefore \dfrac {XY} { X'Y' }\)

\(=\)







\(\ds \dfrac {XZ} { X'Z' } = \dfrac {YZ} { Y'Z' }\)





the 3 ratios are all equal to $\dfrac {AB} { A'B'}$



By construction:














\(\ds XY\)

\(=\)







\(\ds XZ = YZ\)




















\(\ds \therefore \dfrac {XY} { X'Y' }\)

\(=\)







\(\ds \dfrac {XY} { X'Z' } = \dfrac {XY} { Y'Z' }\)






















\(\ds \leadsto X'Y'\)

\(=\)







\(\ds X'Z' = Y'Z'\)









Hence, $\triangle X'Y'Z'$ is an equilateral triangle, which proves the theorem.
$\blacksquare$


Historical Note
This proof is provided by Joseph Hoshen in the spirit of and in the memory of his exceptional high school geometry teacher, Yehuda Klein (1914-1989).





