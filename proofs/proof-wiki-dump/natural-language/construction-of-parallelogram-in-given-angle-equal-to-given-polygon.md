# 

Source: https://proofwiki.org/wiki/Construction_of_Parallelogram_in_Given_Angle_equal_to_Given_Polygon



Theorem
A parallelogram can be constructed in a given angle the same size as any given polygon.

In the words of Euclid:

To construct, in a given rectilineal angle, a parallelogram equal to a given rectilineal figure.
(The Elements: Book $\text{I}$: Proposition $45$)


Proof

Let $ABCD$ be the given polygon, and let $E$ be the given angle.
Join $DB$, and construct the parallelogram $FGHK$ equal in size to $\triangle ABD$, in $\angle HKF = \angle E$.
Then construct the parallelogram $GLMH$ equal in area to $\triangle BCD$ on the line segment $GH$, in $\angle GHM = \angle E$.

We now need to show that $KFLM$ is the required parallelogram.

By Common Notion $1$, $\angle HKF = \angle GHM$ as both are equal to $\angle E$.
Add $\angle KHG$ to each, so as to make $\angle FKH + \angle KHG = \angle KHG + \angle GHM$.
From Parallelism implies Supplementary Interior Angles:

$\angle FKH + \angle KHG$
Therefore $\angle KHG + \angle GHM$ equal two right angles.
So from Two Angles making Two Right Angles make Straight Line, $KH$ is in a straight line with $HM$.
From Parallelism implies Equal Alternate Angles:

$\angle MHG = \angle HGF$
Add $\angle HGL$ to each, so as to make $\angle MHG + \angle HGL = \angle HGF + \angle HGL$.
From Parallelism implies Supplementary Interior Angles:

$\angle MHG + \angle HGL$
Therefore $\angle HGF + \angle HGL$ equal two right angles.
So from Two Angles making Two Right Angles make Straight Line, $FG$ is in a straight line with $GL$.
From Parallelism is Transitive Relation, as $KF \parallel HG$ and $HG \parallel ML$, it follows that $KF \parallel ML$.
Similarly, from common notion 1, $KF = ML$.
As $KM$ and $FL$ join them at their endpoints, $KM \parallel FL$ and $KM = FL$ from Lines Joining Equal and Parallel Straight Lines are Parallel.
Therefore $KFLM$ is a parallelogram.

But the area of $KFLM$ equals the combined areas of $FGHK$ and $GLMH$, which are equal to the combined areas of $\triangle ABD$ and $\triangle BCD$.

Therefore from Common Notion $2$, $KFLM$ has the same area as the polygon $ABCD$, in the angle $E$
$\blacksquare$


Historical Note
This proof is Proposition $45$ of Book $\text{I}$ of Euclid's The Elements. Note that this technique can be expanded for a polygon with any number of sides, merely by dividing the polygon up into as many triangles as it takes. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 1 (2nd ed.) ... (previous) ... (next): Book $\text{I}$. Propositions
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text I$: $\S 1$. Area of a Circle




