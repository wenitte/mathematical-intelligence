# 

Source: https://proofwiki.org/wiki/Napoleon%27s_Theorem/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\triangle ABC$ be an arbitrary triangle.
Let $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$ be equilateral triangles constructed on $AB$, $BC$ and $AC$ respectively on the exterior of $\triangle ABC$.
Let $O_1$, $O_2$ and $O_3$ be the incenters of $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$.
Then $\triangle O_1 O_2 O_3$ is an equilateral triangle.




Proof
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





