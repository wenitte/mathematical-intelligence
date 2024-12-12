# 

Source: https://proofwiki.org/wiki/Brahmagupta_Theorem

  This article was Featured Proof between 8th January 2011 and 18th March 2011.




Theorem
If a cyclic quadrilateral has diagonals which are perpendicular, then the perpendicular to a side from the point of intersection of the diagonals always bisects the opposite side.

Specifically:
Let $ABCD$ be a cyclic quadrilateral whose diagonals $AC$ and $BD$ are perpendicular, crossing at $M$.
Let $EF$ be a line passing through $M$ and crossing opposite sides $BC$ and $AD$ of $ABCD$.
Then $EF$ is perpendicular to $BC$ if and only if $F$ is the midpoint of $AD$.


Proof

Sufficient Condition
Suppose that $EF$ is perpendicular to $BC$.
We need to prove that $AF = FD$.
Thus:














\(\ds \angle FAM\)

\(=\)







\(\ds \angle CAD\)





producing $AF$ to $D$ and $AM$ to $C$














\(\ds \)

\(=\)







\(\ds \angle CBD\)





Angles in Same Segment of Circle are Equal: both subtend $CD$














\(\ds \)

\(=\)







\(\ds \angle CBM\)





producing $BM$ to $D$














\(\ds \)

\(=\)







\(\ds \angle CME\)





both are complements of $\angle BCM$














\(\ds \)

\(=\)







\(\ds \angle FMA\)





Vertical Angle Theorem



Then by Triangle with Two Equal Angles is Isosceles, it follows that $AF = FM$.

Similarly:














\(\ds \angle FDM\)

\(=\)







\(\ds \angle ADB\)





producing $DF$ to $A$ and $DM$ to $B$














\(\ds \)

\(=\)







\(\ds \angle ACB\)





Angles in Same Segment of Circle are Equal: both subtend $AB$














\(\ds \)

\(=\)







\(\ds \angle BCM\)





producing $BM$ to $A$














\(\ds \)

\(=\)







\(\ds \angle BME\)





both are complements to $\angle CBM$














\(\ds \)

\(=\)







\(\ds \angle DMF\)





Vertical Angle Theorem



Then by Triangle with Two Equal Angles is Isosceles, it follows that $FD = FM$.

So $AF = FD$, as we needed to show.
$\Box$


Necessary Condition
Now suppose that $AF = FD$.
We now need to show that $EF$ is perpendicular to $BC$.

From Thales' Theorem (indirectly) we have that $AF = FM = FD$.
So:














\(\ds \angle EBM\)

\(=\)







\(\ds \angle CBD\)





producing $EB$ to $C$ and $BM$ to $D$














\(\ds \)

\(=\)







\(\ds \angle CAD\)





Angles in Same Segment of Circle are Equal: both subtend $CD$














\(\ds \)

\(=\)







\(\ds \angle FAM\)





producing $AM$ to $C$ and $FA$ to $D$














\(\ds \)

\(=\)







\(\ds \angle AMF\)





Isosceles Triangle has Two Equal Angles, and $AF = FM$














\(\ds \)

\(=\)







\(\ds \angle EMC\)





Vertical Angle Theorem




We note the result Sum of Angles of Triangle equals Two Right Angles.
We have that $\angle EBM$ and $\angle ECM$ are complementary, as both are angles in $\triangle CBM$, which is a right triangle.
So $\angle EMC$ and $\angle ECM$ are complementary, which means that $\angle CEM$ must be a right angle.
Hence by definition $EF$ is perpendicular to $BC$, as we were to show.
$\blacksquare$


Source of Name
This entry was named for Brahmagupta.





