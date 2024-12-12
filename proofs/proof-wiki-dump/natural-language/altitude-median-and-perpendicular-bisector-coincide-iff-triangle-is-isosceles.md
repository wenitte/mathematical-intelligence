# 

Source: https://proofwiki.org/wiki/Altitude,_Median_and_Perpendicular_Bisector_Coincide_iff_Triangle_is_Isosceles



Theorem
Let $\triangle ABC$ be a triangle.

Then:

the altitude from $AB$ to $C$
the median from $AB$ to $C$
the perpendicular bisector of $AB$
are all the same straight line
if and only if:

$\triangle ABC$ is isosceles where $AB$ is the base.


Proof
Necessary Condition
Let $\triangle ABC$ be an isosceles triangle whose base is $AB$.
Let $D$ be the midpoint of $AB$.




By definition of isosceles triangle, $AC = BC$.
We have $AD = DB$ by construction, and $CD$ is common.
So by Triangle Side-Side-Side Congruence:

$\triangle ACD = \triangle BCD$
From Two Angles on Straight Line make Two Right Angles:

$\angle ADC + \angle BDC$ equals two right angles
and as $\angle ADC = \angle BDC$ they are each both right angles.
Thus $CD$ is the perpendicular bisector of $AB$.
By definition:

As $D$ is the midpoint of $AB$, $CD$ is the median from $AB$ to $C$.
As $CD$ is perpendicular to $AB$ and passes through $C$, which is a vertex of $\triangle ABC$, $CD$ is the altitude from $AB$ to $C$.
Thus all three lines coincide.
$\Box$


Converse Statement
Let $AC \ne BC$ in $\triangle ABC$.
Let $CD$ be the altitude from $AB$ to $C$.
From Triangle with Two Equal Angles is Isosceles, it follows that $\angle CAB \ne \angle CBA$.
Thus $\triangle ACD \ne \triangle BCD$.

Let $E$ be the midpoint of $AB$.
Let $EF$ be the perpendicular bisector of $AB$.
By definition, $CE$ is the median from $AB$ to $C$.




Aiming for a contradiction, suppose $D = E$.
Then:

$AD = BD$
$AC = BC$
$CD$ is common.
So by Triangle Side-Side-Side Congruence:

$\triangle ACD = \triangle BCD$
But we have that $\angle CAB \ne \angle CBA$.
So by Proof by Contradiction it follows that $D \ne E$.
It follows that $CD$, $CE$ and $EF$ are all different lines.
$\blacksquare$





