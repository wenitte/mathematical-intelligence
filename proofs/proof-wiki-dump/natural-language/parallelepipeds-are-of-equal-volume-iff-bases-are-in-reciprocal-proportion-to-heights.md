# 

Source: https://proofwiki.org/wiki/Parallelepipeds_are_of_Equal_Volume_iff_Bases_are_in_Reciprocal_Proportion_to_Heights



Theorem
In the words of Euclid:

In equal parallelepidedal solids the bases are reciprocally proportional to the heights; and those parallelepidedal solids in which the bases are reciprocally proportional to the heights are equal.
(The Elements: Book $\text{XI}$: Proposition $34$)


Proof

Let $AB$ and $CD$ be equal parallelepipeds.
It is to be demonstrated that the bases of $AB$ and $CD$ are inversely proportional to their heights.
That is:

$EH : NQ = CM : AG$

First, let $AG, EF, LB, HK, CM, NO, PD, QR$ be perpendicular to their bases.
It is to be shown that:

$EH : NQ = CM : AG$

Suppose $EH = NQ$.
From Proposition $32$ of Book $\text{XI} $: Parallelepipeds of Same Height have Volume Proportional to Bases:

$CM = AG$
Thus it follows trivially that:

$EH : NQ = CM : AG$

Next, suppose $EH \ne NQ$.
Suppose WLOG that $EH > NQ$.
We have that $AB = CD$.
Therefore $CM > AG$.
Let $CT = AG$.
Let the parallelepiped $CV$ be completed on the base $NQ$ and with height $CT$.
We have that $AB = CD$.
So from Proposition $7$ of Book $\text{V} $: Ratios of Equal Magnitudes:

$AB : CV = CD : CV$
But from Proposition $32$ of Book $\text{XI} $: Parallelepipeds of Same Height have Volume Proportional to Bases:

$AB : CV = EH : NQ$
From Proposition $25$ of Book $\text{XI} $: Parallelepiped cut by Plane Parallel to Opposite Planes:

$CD : CV = MQ : TQ$
and from Proposition $1$ of Book $\text{VI} $: Areas of Triangles and Parallelograms Proportional to Base:

$CD : CV = CM : CT$
Therefore also:

$EH : NQ = MC : CT$
But:

$CT = AG$
Therefore also:

$EH : NQ = MC : AG$
Therefore in the parallelepipeds $AB$ and $CD$, the bases are inversely proportional to their heights.
$\Box$

Now let the bases of the parallelepipeds $AB$ and $CD$ be inversely proportional to their heights.
That is:

$EH : NQ = MC : AG$
It is to be shown that $AB = CD$.
Let the sides $AG, EF, LB, HK, CM, NO, PD, QR$ be perpendicular to their bases.
Let $EH = NQ$.
Then it follows from $EH : NQ = MC : AG$ that $MC = AG$.
From Proposition $31$ of Book $\text{XI} $: Parallelepipeds on Equal Bases and Same Height are Equal in Volume:

$AB = CD$
Next suppose that $EH \ne NQ$.
Suppose WLOG that $EH > NQ$.
Therefore the height of $CD$ is greater than the height of $AB$.
That is:

$CM > AG$
Let $CT = AG$.
Let the parallelepiped $CV$ be completed on the base $NQ$ and with height $CT$.
We have that:

$EH : NQ = MC : AG$
while:

$AG = CT$
Therefore:

$EH : NQ = CM : CT$
We have that $AB$ and $CV$ are of equal height.
So from Proposition $32$ of Book $\text{XI} $: Parallelepipeds of Same Height have Volume Proportional to Bases:

$EH : NQ = AB : CV$
From Proposition $1$ of Book $\text{VI} $: Areas of Triangles and Parallelograms Proportional to Base:

$CM : CT = MQ : QT$
and from Proposition $25$ of Book $\text{XI} $: Parallelepiped cut by Plane Parallel to Opposite Planes:

$CM : CT = CD : CV$
Therefore also:

$AB : CV = CD : CV$
Therefore from Proposition $9$ of Book $\text{V} $: Magnitudes with Same Ratios are Equal:

$AB = CD$
$\Box$



Now let $AG, EF, LB, HK, CM, NO, PD, QR$ not be perpendicular to their bases.
Let perpendiculars be drawn from $F, G, B, K, O, M, D, R$ to the planes through $EH$ and $NQ$, meeting them at $S, T, U, V, W, X, Y, A'$.
Let the parallelepipeds $FV$ and $OA'$ be completed.
We have that:

$AB = CD$
We have that $AB$ and $BT$ are on the same base $FK$ and have the same height.
From:

Proposition $29$ of Book $\text{XI} $: Parallelepipeds on Same Base and Same Height whose Extremities are on Same Lines are Equal in Volume
and:

Proposition $30$ of Book $\text{XI} $: Parallelepipeds on Same Base and Same Height whose Extremities are not on Same Lines are Equal in Volume:
we have that:

$AB = BT$
For the same reason:

$CD = DX$
Therefore:

$BT = DX$
Therefore from the first part of this result:

$FK : OR$ is the same as the ratio of the heights of $DX$ and $BT$.
But:

$FK = EH$
and:

$OR = NQ$
Therefore:

$EH : NQ$ is the same as the ratio of the heights of $DX$ and $BT$.
But $DX$ and $BT$ have the same heights respectively as $DC$ and $BA$.
Therefore:

$EH : NQ$ is the same as the ratio of the heights of $DC$ and $BA$.
Therefore in the parallelepipeds $AB$ and $CD$, the bases are inversely proportional to their heights.
$\Box$

Now let the bases of the parallelepipeds $AB$ and $CD$ be inversely proportional to their heights.
Let perpendiculars be drawn from $F, G, B, K, O, M, D, R$ to the planes through $EH$ and $NQ$, meeting them at $S, T, U, V, W, X, Y, A'$.
Let the parallelepipeds $FV$ and $OA'$ be completed.
Then as $DY$ and $BU$ are the heights of $AB$ and $CD$:

$EH : NQ = DY : BU$
Thus:

$EH : NQ$ equals the ratio of the heights of $DC$ and $BA$.
We have:

$EH = FK$
and:

$NQ = OR$
Therefore:

$FK : OR$ equals the ratio of the heights of $DC$ and $BA$.
But $AB$ and $CD$ have the same heights as $BT$ and $DX$ respectively.
Therefore:

$FK : OR$ equals the ratio of the heights of $DX$ and $BT$.
Therefore the bases of the parallelepipeds $BT$ and $DX$ are inversely proportional to their heights.
Therefore by the first part of this result:

$BT = DX$
But from:

Proposition $29$ of Book $\text{XI} $: Parallelepipeds on Same Base and Same Height whose Extremities are on Same Lines are Equal in Volume
and:

Proposition $30$ of Book $\text{XI} $: Parallelepipeds on Same Base and Same Height whose Extremities are not on Same Lines are Equal in Volume:
we have that:

$AB = BT$
and:

$DX = DC$
Therefore:

$AB = CD$
$\blacksquare$


Historical Note
This proof is Proposition $34$ of Book $\text{XI}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{XI}$. Propositions




