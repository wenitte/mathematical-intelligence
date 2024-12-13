# 

Source: https://proofwiki.org/wiki/Pythagoras%27s_Theorem/Classic_Proof



Theorem
Let $\triangle ABC$ be a right triangle with $c$ as the hypotenuse.
Then:

$a^2 + b^2 = c^2$

In the words of Euclid:

In right-angled triangles the square on the side subtending the right angle is equal to the squares on the sides containing the right angle.
(The Elements: Book $\text{I}$: Proposition $47$)


Proof

Let $ABC$ be a right triangle whose angle $BAC$ is a right angle.
Construct squares $BDEC$ on $BC$, $ABFG$ on $AB$ and $ACKH$ on $AC$.
Construct $AL$ parallel to $BD$ (or $CE$).
Since $\angle BAC$ and $\angle BAG$ are both right angles, from Two Angles making Two Right Angles make Straight Line it follows that $CA$ is in a straight line with $AG$.
For the same reason $BA$ is in a straight line with $AH$.

We have that $\angle DBC = \angle FBA$, because both are right angles.
We add $\angle ABC$ to each one to make $\angle FBC$ and $\angle DBA$.
By common notion 2, $\angle FBC = \angle DBA$.
By Triangle Side-Angle-Side Congruence, $\triangle ABD = \triangle FBC$.
We have that the parallelogram $BDLM$ is on the same base $BD$ and between the same parallels $BD$ and $AL$ as the triangle $\triangle ABD$.
So, by Parallelogram on Same Base as Triangle has Twice its Area, the parallelogram $BDLM$ is twice the area of $\triangle ABD$.
Similarly, we have that the parallelogram $ABFG$ (which happens also to be a square) is on the same base $FB$ and between the same parallels $FB$ and $GC$ as the triangle $\triangle FBC$.
So, by Parallelogram on Same Base as Triangle has Twice its Area, the parallelogram $ABFG$ is twice the area of $\triangle FBC$.
So $BDLM = 2 \triangle ABD = 2 \triangle FBC = ABFG$.

By the same construction, we have that $CELM = 2 \triangle ACE = 2 \triangle KBC = ACKH$.
But $BDLM + CELM$ is the whole of the square $BDEC$.
Therefore the area of the square $BDEC$ is equal to the combined area of the squares $ABFG$ and $ACKH$.
$\blacksquare$


Historical Note
This proof is Proposition $47$ of Book $\text{I}$ of Euclid's The Elements. This is the proof he gave.It is the converse of Proposition $48$: Square equals Sum of Squares implies Right Triangle. 


Source of Name
This entry was named for Pythagoras of Samos.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 1 (2nd ed.) ... (previous) ... (next): Book $\text{I}$. Propositions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $2$: The Logic of Shape: Euclid




