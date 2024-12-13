# 

Source: https://proofwiki.org/wiki/Napoleon%27s_Theorem



Theorem
Let $\triangle ABC$ be an arbitrary triangle.
Let $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$ be equilateral triangles constructed on $AB$, $BC$ and $AC$ respectively on the exterior of $\triangle ABC$.
Let $O_1$, $O_2$ and $O_3$ be the incenters of $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$.
Then $\triangle O_1 O_2 O_3$ is an equilateral triangle.




Variant 1
Let $\triangle ABC$ be an arbitrary triangle.
Let $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$ be equilateral triangles constructed on $AB$, $BC$ and $AC$ respectively toward the interior of $\triangle ABC$.
Let $O_1$, $O_2$ and $O_3$ be the incenters of $\triangle ABF$, $\triangle ACE$ and $\triangle BCD$ respectively.
Then $\triangle O_1 O_2 O_3$ is an equilateral triangle.




Variant 2
Napoleon's Theorem/Variant 2

Proof 1
For simplicity of notation, we relabel the incenters $O_1, O_2, O_3$ as $P, Q, R$.

By Line from Vertex of Triangle to Incenter is Angle Bisector:

$CQ$ bisects $\angle ACE$
$CP$ bisects $\angle BCD$
Given:

$\angle ACE = \angle BCD = 60^{\circ}$
Since $\triangle CBD$ and $\triangle ACE$ are both equilateral, the four smaller angles are all equal to $30^{\circ}$:

$\angle ACQ = \angle QCE = \angle BCP = \angle PCD = 30^{\circ}$

By addition:

$\angle BCE = \angle BCA + 60^{\circ}$
But also by addition:

$\angle PCQ = \angle BCA + 60^{\circ}$
So by Common Notion 1:

$\angle BCE = \angle PCQ$
Let $\angle BCE = \angle PCQ = \gamma$
By Law of Cosines:

$(1) \ PQ^2 = CP^2 + CQ^2 - 2 \ CP \cdot CQ \cdot \cos {\gamma}$

By the same argument:

$\angle BAE = \angle RAQ = \angle BAC + 60^{\circ}$
Let $\angle BAE = \angle RAQ = \alpha$.

We also can obtain $CP$ and $CQ$ in terms of the sides of the original triangle.
Draw the altitude from $Q$ to $AC$.
Since $\angle ACQ = 30^{\circ}$:

$CA/2 : CQ = \map \cos {30^{\circ}} = \dfrac {\sqrt{3}} 2$
Simplifying:

$CA = \sqrt{3} CQ$
$CA^2 = 3 CQ^2$
In the same way:

$BC/2 : CP = \map \cos {30^{\circ}} = \dfrac {\sqrt{3}} 2$
Simplifying:

$BC = \sqrt{3} CP$
$BC^2 = 3 CP^2$
Multiplying:

$3 CP \cdot CQ = BC \cdot CA$
Multiply (1) by $3$:

$3PQ^2 = 3CP^2 + 3CQ^2 - 2 \cdot 3 \cdot CP \cdot CQ \cdot \cos {\gamma}$
and substitute:

$(2) \ 3PQ^2 = BC^2 + CA^2 - 2 BC \cdot CA \cdot \cos {\gamma}$

Recall that $\alpha = \angle BAE$.
We can make all the same arguments for $QR$ so by symmetry:

$(3) \ 3 QR^2 = AB^2 + AC^2 - 2 AB \cdot AC \cos \alpha$

Finally consider $BE$ as part of $\triangle ABE$.  
By Law of Cosines:

$BE^2 = AB^2 + AE^2 - 2 AB \cdot AE \cdot \cos \alpha$
But $AE = AC$ so:

$(4) \ BE^2 = AB^2 + AC^2 - 2 AB \cdot AC \cdot \cos \alpha$
Consider $BE$ as part of $\triangle BCE$.  
By Law of Cosines:

$BE^2 = BC^2 + CE^2 - 2 BC \cdot CE \cdot \cos \gamma$
Since $AC = CE$:

$(5) \ BE^2 = BC^2 + AC^2 - 2 BC \cdot AC \cdot \cos \gamma$
By Common Notion 1, since the LHS of (4) and (5) are equal, the RHS are also equal.
The RHS of (4) is the same as the RHS of (3).
The RHS of (5) is the same as the RHS of (2).
So then too by Common Notion 1 the LHS of (2) and (3) are equal:

$3 \cdot PQ^2 = 3 \cdot QR^2$
Simplifying:

$PQ = QR$
We can make the same argument for any pair of points from $P, Q, R$.
Therefore:

$PQ = QR = PR$
$\triangle PQR$ satisfies the definition of an equilateral triangle.
$\blacksquare$


Proof 2
Lemma $1$
Let $T = \triangle ABC$ be an equilateral triangle in the Cartesian plane $\CC$.
Let the sides of $\triangle ABC$ be the vectors $\mathbf u$, $\mathbf v$, and $\mathbf w$.
Let the interior of $T$ lie to the left of the vector path.
Let $\mathbf v$ be rotated by an angle of $60 \degrees$ anticlockwise.
Let the rotated vector be $\mathbf v'$.
Then:

$\mathbf u + \mathbf v' = \mathbf 0$
where $\mathbf 0$ denotes the zero vector.
$\Box$


Lemma $2$
Let $T = \triangle ABC$ be an equilateral triangle in the plane $\CC$.
Let $\mathbf{v}$ be a vector in $\CC$ with magnitude $\dfrac 1 3 \norm {AB}$ and direction $\vec {BA}$.
Let a unit rotation be anticlockwise by $60^{\circ}$, and denote vector $\mathbf{v}$ after this rotation as $\mathbf{v}'$.
Then the vector path from $B$ to the incenter $O$ of $T$ is $\mathbf{v} + -\mathbf{v}' '$ and the vector path from the incenter $O$ to $A$ is $\mathbf{v}' + \mathbf{v}$.
$\Box$


Vectors
Side $a = BC$ lies opposite vertex $A$ of $\triangle ABC$.
Let the vector $\mathbf{a}$ have magnitude $\dfrac 1 3 a$ in the direction of $\vec {BC}$.
$O_1$ is the incenter of the $\triangle BCD$ with side $a$ from $\triangle ABC$.

Side $b = CA$ lies opposite vertex $B$ of $\triangle ABC$.
Let the vector $\mathbf{b}$ have magnitude $\dfrac 1 3 b$ in the direction of $\vec {CA}$.
$O_2$ is the incenter of the $\triangle CAE$ with side $b$ from $\triangle ABC$.

Side $c = AB$ lies opposite vertex $C$ of $\triangle ABC$.
Let the vector $\mathbf{c}$ have magnitude $\dfrac 1 3 c$ in the direction of $\vec {AB}$.
$O_3$ is the incenter of the $\triangle ABF$ with side $c$ from of $\triangle ABC$.


Construction of Vector Paths
Let $\mathbf{p}$ be the vector path from $O_1$ to $O_2$ through vertex $C$.
By Lemma $2$:

The first part of $\mathbf{p}$ from $O_1$ to $C$ is $\mathbf{a}' + \mathbf{a}$.
Also by Lemma $2$:

The second part of $\mathbf{p}$ from $C$ to $O_2$ is $\mathbf{b} + - \mathbf{b}' '$.
By addition:

$\mathbf{p} = \mathbf{a}' + \mathbf{a} + \mathbf{b} + - \mathbf{b}' '$


Let $\mathbf{q}$ be the vector path from $O_2$ to $O_3$ through vertex $A$.
By Lemma $2$:

The first part of $\mathbf{q}$ from $O_2$ to $A$ is $\mathbf{b}' + \mathbf{b}$.
By Lemma $2$:

The second part of $\mathbf{q}$ from $A$ to $O_3$ is $\mathbf{c} + - \mathbf{c}' '$.
By addition:

$\mathbf{q} = \mathbf{b}' + \mathbf{b} + \mathbf{c} + - \mathbf{c}' '$


Test for Equilateral Triangle
By the test from Lemma $1$, we construct $\mathbf{p} + \mathbf{q}'$: 

If the result is $\mathbf{p} + \mathbf{q}' = \mathbf{0}$, the two vectors $\mathbf{p}$ and $\mathbf{q}$ are sides of an equilateral triangle.


$\mathbf{q}' = \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' - \mathbf{c}' ' '$
By definition of plane rotation and that $\theta = \frac 1 6$ of a complete rotation:

$- \mathbf{c}' ' ' = \mathbf{c}$
Substituting:

$\mathbf{q}' = \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' + \mathbf{c}$

Then:














\(\ds \mathbf{p} + \mathbf{q}'\)

\(=\)







\(\ds \mathbf{a}' + \mathbf{a} + \mathbf{b} - \mathbf{b}' ' + \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' + \mathbf{c}\)





Addition














\(\ds \)

\(=\)







\(\ds \mathbf{a}' + \mathbf{a} + \mathbf{b} + \mathbf{b}' + \mathbf{c}' + \mathbf{c}\)





Cancel terms














\(\ds \)

\(=\)







\(\ds \mathbf{a} + \mathbf{b} + \mathbf{c}\)





Vector Sum of Rotated Triangle is Zero














\(\ds \)

\(=\)







\(\ds \mathbf{0}\)





Vector Sum of Triangle is Zero



The result follows.
$\blacksquare$



Source of Name
This entry was named for Napoleon Bonaparte.


Historical Note
The attribution of Napoleon's Theorem to Napoleon Bonaparte is in fact dubious.
An early appearance is by William Rutherford in $1825$.
An earlier appearance is in one of the papers for candidates for the Gold Medal in the General Examination of the University of Dublin in October $1820$.
It is known that Napoleon Bonaparte did have some understanding of mathematics, so the suggestion that he may have discovered this theorem is not impossible.
It is rediscovered over and over again by enthusiastic amateurs.


Sources
1991: David Wells: Curious and Interesting Geometry ... (previous) ... (next): Napoleon's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Napoleon's theorem
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Napoleon's theorem




