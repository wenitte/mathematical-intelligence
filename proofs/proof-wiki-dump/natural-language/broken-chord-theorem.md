# 

Source: https://proofwiki.org/wiki/Broken_Chord_Theorem



Theorem


Let $A$ and $C$ be arbitrary points on a circle in the plane.
Let $M$ be a point on the circle with arc $AM = $ arc $MC$.
Let $B$ lie on the minor arc of $AM$.
Draw chords $AB$ and $BC$.
Find $D$ such that $MD \perp BC$.
Then:

$AB + BD = DC$


Proof 1

Given:

$MD \perp BC$
Find $E$ such that $BD = DE$ and draw $ME$
Then:

$MD$ is the perpendicular bisector of $BE$.
By Triangle Side-Angle-Side Congruence:

$\triangle MDB \cong \triangle MDE$
Let $H$ be a point such that arc $MH$ is equal to arc $BM$.
Label three angles for reference:
Let $\alpha = \angle MBC$.
Let $\beta = \angle MCB$.
Let $\gamma = \angle CMH$.
By the definition of congruence:

$\angle MBC = \angle MEB = \alpha$

By construction:

arc $AM$ = arc $AB$ + arc $BM$
Also by construction:

arc $MC = $ arc $MH + $ arc $HC$
Subtracting equals:

arc $AB = $ arc $HC$
In the words of Euclid:

In equal circles equal circumferences are subtended by equal straight lines.
(The Elements: Book $\text{III}$: Proposition $29$)

So:

$AB = HC$
By construction:

arc $HC$ subtends $\gamma$
By Inscribed Angle Theorem

$\angle MCH = \beta$
By construction:

arc $MHC$ subtends $\alpha$
Equating the results:

$\alpha = \beta + \gamma$

But $\alpha = \angle MEB$.
By External Angle of Triangle equals Sum of other Internal Angles:

$\alpha = \angle CME + \beta$
Subtracting:

$\angle CME = \gamma = \angle CMH$.
$MC$ is shared.
From above:

$\angle MCH = \angle MCB = \beta$













\(\ds \triangle MCE\)

\(\cong\)







\(\ds \triangle MCH\)





Triangle Angle-Side-Angle Congruence








\(\ds \leadsto \ \ \)





\(\ds HC\)

\(=\)







\(\ds EC\)





congruence














\(\ds AB\)

\(=\)







\(\ds HC\)





From above














\(\ds AB\)

\(=\)







\(\ds EC\)





Common Notion 1














\(\ds AB + BD\)

\(=\)







\(\ds DE + EC\)





Common Notion 2














\(\ds AB + BD\)

\(=\)







\(\ds CD\)





Addition




$\blacksquare$


Proof 2

Let point $E$ be such that $BD = DE$.
Extend $BC$ to $G$ such that $GD = DC$.














\(\ds \triangle MDB\)

\(\cong\)







\(\ds \triangle MDE\)





Triangle Side-Angle-Side Congruence














\(\ds \triangle MDG\)

\(\cong\)







\(\ds \triangle MDC\)





Triangle Side-Angle-Side Congruence








\(\ds \leadsto \ \ \)





\(\ds MG\)

\(=\)







\(\ds MC\)














\(\ds \leadsto \ \ \)





\(\ds \angle MGC\)

\(=\)







\(\ds \angle MCG\)









Given:

arc $AM$ = arc $MC$













\(\ds AM\)

\(=\)







\(\ds MC\)





Equal Arcs of Circles Subtended by Equal Straight Lines














\(\ds AM\)

\(=\)







\(\ds MG\)





Common Notion 1




By the definition of isosceles triangles:

$\triangle MGA$ is isosceles.















\(\ds \angle MGA\)

\(=\)







\(\ds \angle MAG\)





Isosceles Triangle has Two Equal Angles














\(\ds \angle MCG\)

\(=\)







\(\ds \angle MAB\)





Angles on Equal Arcs are Equal














\(\ds \angle MGC\)

\(=\)







\(\ds \angle MAB\)





Common Notion 1














\(\ds \angle BGA\)

\(=\)







\(\ds \angle BAG\)





Common Notion 3




By Triangle with Two Equal Angles is Isosceles:

$\triangle BAG$ is isosceles.















\(\ds AB\)

\(=\)







\(\ds GB\)





isosceles triangles














\(\ds GD\)

\(=\)







\(\ds DC\)





By construction














\(\ds GB + BD\)

\(=\)







\(\ds DE + EC\)





Common Notion 2














\(\ds AB + BD = DE + EC\)

\(=\)







\(\ds DE + EC\)





Common Notion 1














\(\ds AB + BD\)

\(=\)







\(\ds DC\)





Addition



$\blacksquare$


Proof 3

Let $E$ be a point such that $BD = DE$.
Given:

arc $AM = $ arc $MC$
By Equal Arcs of Circles Subtended by Equal Straight Lines:

$AM = MC$
By Angles on Equal Arcs are Equal:

$\angle BAM = \angle MCB$
$BM$ is shared
We have Ambiguous Case for Triangle Side-Side-Angle Congruence for these three triangles:

$\triangle BAM$
$\triangle MBC$
$\triangle MEC$
Given:

$\angle MDC$ is a right angle
By External Angle of Triangle is Greater than Internal Opposite:

$\angle MEC$ is obtuse.
Since $AM = MC$ and $AC$ is the rest of the circumference:

the major arc of $AM$ is more than half the circle.
It follows that $\angle ABM$ is obtuse.








\(\ds \leadsto \ \ \)





\(\ds \triangle ABM\)

\(\cong\)







\(\ds \triangle MEC\)














\(\ds \leadsto \ \ \)





\(\ds AB\)

\(=\)







\(\ds EC\)




















\(\ds AB + BD\)

\(=\)







\(\ds DE + EC = DC\)





addition



$\blacksquare$


Proof 4
Find $E$ on $BC$ such that $BD = BE$.















\(\ds BD\)

\(=\)







\(\ds ED\)





by hypothesis














\(\ds MD\)

\(\perp\)







\(\ds BE\)





by hypothesis














\(\ds \triangle MBD\)

\(\cong\)







\(\ds \triangle MED\)





Triangle Side-Angle-Side Congruence








\(\ds \leadsto \ \ \)





\(\ds MB\)

\(=\)







\(\ds ME\)





congruence
















\(\ds \angle MBE\)

\(=\)







\(\ds \angle MEB\)





Isosceles Triangle has Two Equal Angles














\(\ds \text {arc $AM$}\)

\(=\)







\(\ds \text {arc $MC$}\)





by hypothesis














\(\ds \angle MFC\)

\(=\)







\(\ds \angle MBC\)





Angles on Equal Arcs are Equal














\(\ds \angle AFM\)

\(=\)







\(\ds \angle MBC\)





Angles on Equal Arcs are Equal














\(\ds \angle MEB\)

\(=\)







\(\ds \angle CEF\)





Vertical Angle Theorem



Thus we have five equal angles:

$\angle MBE$
$\angle MEB$
$\angle AFM$
$\angle MFC$
$\angle CEF$

By Triangle with Two Equal Angles is Isosceles:

$\triangle CEF$ is isosceles
By definition of isosceles:

$CE = CF$
Since $\angle AFM = \angle CEF$:

$\angle AFC + \angle ECF =$ two right angles.















\(\ds BC\)

\(\parallel\)







\(\ds AF\)





Supplementary Interior Angles implies Parallel Lines














\(\ds AB\)

\(=\)







\(\ds CF\)





Parallel Chords Cut Equal Chords in a Circle














\(\ds AB\)

\(=\)







\(\ds CE\)





Common Notion $1$














\(\ds AB + BD\)

\(=\)







\(\ds DE + EC\)





Common Notion $2$














\(\ds AB + BD\)

\(=\)







\(\ds DC\)





Addition



$\blacksquare$


Proof 5

Given $MD \perp BC$
Draw $MN \parallel BC$ to meet the circle at $N$.
Draw $NE \parallel MD$.
By Quadrilateral is Parallelogram iff Both Pairs of Opposite Sides are Equal or Parallel:

$MNED$ is a parallelogram
By Parallelogram with One Right Angle is Rectangle:

$MNED$ is a rectangle.













\(\ds DE\)

\(=\)







\(\ds MN\)





Definition of Rectangle














\(\ds MD\)

\(=\)







\(\ds NE\)





Definition of Rectangle



By Parallelism implies Equal Corresponding Angles:

$\angle MDB = \angle NEC$
and both are right angles.















\(\ds BM\)

\(=\)







\(\ds NC\)





Parallel Chords Cut Equal Chords in a Circle














\(\ds \triangle MDB\)

\(\cong\)







\(\ds \triangle NEC\)





Triangle Side-Side-Side Congruence








\(\ds \leadsto \ \ \)





\(\ds BD\)

\(=\)







\(\ds EC\)




















\(\ds \text {arc $BM$}\)

\(=\)







\(\ds \text {arc $NC$}\)





Equal Arcs of Circles Subtended by Equal Straight Lines














\(\ds \text {arc $AM$}\)

\(=\)







\(\ds \text {arc $MC$}\)





by hypothesis














\(\ds \text {arc $AB$}\)

\(=\)







\(\ds \text {arc $MN$}\)





Common Notion $3$














\(\ds AB\)

\(=\)







\(\ds MN\)





Equal Arcs of Circles Subtended by Equal Straight Lines














\(\ds AB\)

\(=\)







\(\ds DE\)





Common Notion $1$














\(\ds AB + BC\)

\(=\)







\(\ds DE + EC\)





Common Notion $2$














\(\ds AB + BC\)

\(=\)







\(\ds DE\)





addition



The result follows.
$\blacksquare$





