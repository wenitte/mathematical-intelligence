# 

Source: https://proofwiki.org/wiki/Relative_Lengths_of_Lines_Outside_Circle



Theorem
In the words of Euclid:

If a point be taken outside a circle and from the point straight lines be drawn through to the circle, one of which is through the centre and the others are drawn at random, then, of the straight lines which fall on the concave circumference, that through the centre is greatest, while of the rest the nearer to that through the centre is always greater than the more remote, but, of the straight lines falling on the convex circumference, that between the point and the diameter is least, while of the rest the nearer to the least is always less than the more remote; and only two equal straight lines fall on the circle from the point, one on each side of the least.
(The Elements: Book $\text{III}$: Proposition $8$)


Construction

Let $\bigcirc ABC$ be a circle.
Let $D$ be a point outside $\bigcirc ABC$.
Using Proposition $1$ of Book $\text{III} $: Finding Center of Circle, let $M$ be the center of $\bigcirc ABC$.
Let $E$, $F$, and $C$ be points on the concave circumference of $\bigcirc ABC$
Using Euclid's First Postulate, draw straight lines $DM$, $DC$, $DE$, and $DF$.
Using Euclid's Second Postulate, extend $DM$ to $A$ on $\bigcirc ABC$.
Place $H$, $L$, $K$, and $G$ on the intersections of $\bigcirc ABC$ and $DC$, $DF$, $DE$, and $DA$ respectively.
Then:

of the straight lines falling on the concave circumference $AEFC$, the line $DA$ through the center is the greatest, with $DE > DF > DC$
of the straight lines falling on the convex circumference $HLKG$, the line $DG$ is the least, with $DK < DL < DH$.


Proof
Using Euclid's First Postulate, join $ME$, $MF$, $MC$, $MH$, $ML$, and $MK$.
Since $AM = EM$, add $DM$ to each, so $AD = EM + MD$.
But from Proposition $20$ of Book $\text{I} $: Sum of Two Sides of Triangle Greater than Third Side, we know that $EM + MD > ED$.
Hence it follows that:

$AD > ED$
Since this is true for any $E$, $AD$ is the greatest line from $D$ to the concave circumference.

We have that:

$EM = FM$
$DM$ is common
$\angle EMD > \angle FMD$.
Hence, from the Proposition $20$ of Book $\text{I} $: Hinge Theorem, it follows that:

$ED > FD$
Similarly we can show that:

$FD > CD$
Thus:

$DA > DE > DF > DC$

From Proposition $20$ of Book $\text{I} $: Sum of Two Sides of Triangle Greater than Third Side, we know that:

$MK + KD > MD$
Because $MG = MK$, we have:

$KD > GD$.
Because $K$ is arbitrary, it follows that $GD$ is the least line from $D$ to the convex circumference.

We have that $K$ is inside $\triangle MLD$.
Hence from Proposition $21$ of Book $\text{I} $: Lines Through Endpoints of One Side of Triangle to Point Inside Triangle is Less than Sum of Other Sides:

$ML + LD > MK + KD$.
Then because $MK = ML$:

$DK < DL$
Similarly we can show that $DL < DH$.
Thus:

$DG < DK < DL < DH$


From the point $D$ only two equal straight lines fall on $\bigcirc ABC$: one on each side of the line $DA$.
From Proposition $23$ of Book $\text{I} $: Construction of Equal Angle, construct the angle $\angle DMB = \angle KMD$ on the straight line $MD$ at the point $M$.
Using Euclid's First Postulate, join  $DB$.
We have that:

$MK = MB$
$MD$ is common.
Hence from Proposition $4$ of Book $\text{I} $: Triangle Side-Angle-Side Congruence:

$DK = DB$
Another straight line equal to $DK$ will not fall on $\bigcirc ABC$ from $D$.

For if this is possible, let $DN$ be this straight line.
Then $DN = DB$.
But from what we proved above, either:

$DN > DB$
or:

$DN < DB$
depending on where $N$ falls on $\bigcirc ABC$.
This is a contradiction.

Therefore the point $N$ cannot exist as described.
It follows that no more than two equal straight lines fall on $\bigcirc ABC$ from $D$: one on each side of $DA$.
$\blacksquare$


Historical Note
This proof is Proposition $8$ of Book $\text{III}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{III}$. Propositions




