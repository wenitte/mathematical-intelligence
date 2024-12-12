# 

Source: https://proofwiki.org/wiki/Circumscribing_Regular_Pentagon_about_Circle



Theorem
About a given circle, it is possible to circumscribe a regular pentagon.

In the words of Euclid:

About a given circle to circumscribe an equilateral and equiangular pentagon.
(The Elements: Book $\text{IV}$: Proposition $12$)


Construction

Let $ABCDE$ be the given circle.
Find the center $F$ of the circle $ABCDE$.
Let $A, B, C, D, E$ be the vertices of a regular pentagon which has been inscribed within the circle $ABCDE$.
Draw tangents $GH, HK, KL, LM, MG$ to $ABCDE$ at the points $A, B, C, D, E$.
Then $GHKLM$ is the required regular pentagon.


Proof
Join $FB, FK, FC, FL, FD$.
From Radius at Right Angle to Tangent, $HK, KL$ etc. are perpendicular to the radii they touch.
So $\angle KCF$ and $\angle LCF$ are right angles.
For the same reason, $\angle KBF$ and $\angle LDF$ are right angles.
By Pythagoras's Theorem, $FK^2 = FC^2 + CK^2$
For the same reason, $FK^2 = FB^2 + BK^2$.
As $FB = FC$ it follows that $BK = CK$.
From Triangle Side-Side-Side Congruence it follows that $\triangle FCK = \triangle FBK$ and so $\angle FKC = \angle FKB$ and $\angle KFC = \angle KFB$.
So $\angle BFC = 2 \angle KFC$ and $\angle BKC = 2 \angle FKC$.
For the same reason $\angle CFD = 2 \angle CFL$ and $\angle DLC = 2 \angle FLC$.
We have that the arc $BC$ equals the arc $CD$.
So from Angles on Equal Arcs are Equal, $\angle BFC = \angle CFD$.
As $\angle BFC = 2 \angle KFC$ and $\angle CFD = 2 \angle CFL$, it follows that $\angle KFC = \angle CFL$.
But $\angle FCK = \angle FCL$.
So from Triangle Angle-Side-Angle Congruence:

$\triangle FCK = \triangle FLC$
So $KC = CL$ and $\angle FKC = \angle FLC$.
Since $KC = CL$ it follows that $KL = 2 KC$.
For the same reason $HK = 2 BK$ and $BK = KC$.
So $HK = KL$.
Similarly each of the straight lines $HG, GM, ML$ are all equal to $HK$ and $KL$.
So the pentagon $GHKLM$ is equilateral.

We have that:

$\angle FKC = \angle FLC$
$\angle HKL = 2 \angle FKC$
$\angle KLM = 2 \angle FLC$
So:

$\angle HKL = \angle KLM$
Similarly each of $\angle KHG, \angle HGM, \angle GML$ are equal to $\angle HKL$ and $\angle KLM$.
So the pentagon $GHKLM$ is equiangular.
$\blacksquare$


Historical Note
This proof is Proposition $12$ of Book $\text{IV}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IV}$. Propositions




