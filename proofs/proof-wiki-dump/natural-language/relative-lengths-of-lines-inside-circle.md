# 

Source: https://proofwiki.org/wiki/Relative_Lengths_of_Lines_Inside_Circle



Theorem
In the words of Euclid:

If on the diameter of a circle a point be taken which is not the center of the circle, and from the point straight lines fall upon the circle, that will be greatest on which the center is, the remainder of the same diameter will be least, and of the rest the nearer to the straight line through the center is always greater than the more remote, and only two equal straight lines will fall from the point on the circle, one on each side of the least straight line.
(The Elements: Book $\text{III}$: Proposition $7$)


Proof

Let $ABCE$ be a circle, and let $AE$ be a diameter of it.
Let $D$ be the center of the circle, and let $F$ be a point on $AE$ different from $D$.
Let $FB, FC, FG$ be drawn from $F$ to the edge of the circle.
Then $FA$ is the greatest, $FE$ is the least, and (according to the diagram above) of the others, $FB$ is greater than $FC$, while $FC$ is greater than $FG$.

The proof is as follows.

Join $BD, CD, GD$.
From Sum of Two Sides of Triangle Greater than Third Side, we have that $DB + DF > BF$.
But $AD = BD$, so $AF > BF$.

Since $BD = CD$ and $FD$ is common, $BD + DF = CD + CF$.
But $\angle BDF > \angle CDF$, so from the Hinge Theorem $BF > CF$.

For the same reason, $CF > GF$.

Again, since $GF + FD > DG$, and $DG = DE$, $GF + FD > DE$.
Subtract $FD$ from each, and we see that $GF > FE$.

Therefore $FA$ is the greatest, followed by, in order of size, $FB, FC, FG$ and finally $FE$ is the smallest.


Also, from the point $F$ only two equal straight lines fall on the circle $ABCE$, one on either side of the least line $FE$.
Construct the angle $\angle FDH$ equal to $\angle GDF$ on the opposite side of $DF$, and join $FH$.
Since $GD = DH$ and $DF$ is common, and $\angle FDH = \angle GDF$ from Triangle Side-Angle-Side Congruence, $\triangle FDH = \triangle GDF$, and so $FG = FH$.

Another straight line equal to $FG$ will not fall on the circle from $F$.
For if this is possible, let $FK$ be that straight line.
Since $FK = FG$, and $FH = FG$, it follows that $FK = FH$.
But this contradicts what we proved earlier.
Therefore only one such straight line can be constructed.
$\blacksquare$


Historical Note
This proof is Proposition $7$ of Book $\text{III}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{III}$. Propositions




