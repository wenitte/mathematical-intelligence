# 

Source: https://proofwiki.org/wiki/Angle_Bisector_Theorem



Theorem
Let $\triangle ABC$ be a triangle.
Let $D$ lie on the base $BC$ of $\triangle ABC$.

Then the following are equivalent:

$(1): \quad AD$ is the angle bisector of $\angle BAC$
$(2): \quad BD : DC = AB : AC$
where $BD : DC$ denotes the ratio between the lengths $BD$ and $DC$.

In the words of Euclid:

If an angle of a triangle be bisected and the straight line cutting the angle cut the base also, the segments of the base will have the same ratio as the remaining sides of the triangle; and, if the segments of the base have the same ratio as the remaining sides of the triangle, the straight line joined from the vertex to the point of section will bisect the angle of the triangle.
(The Elements: Book $\text{VI}$: Proposition $3$)


Exterior Angle
Let $\triangle ABC$ be a triangle.
Let $AB$ be produced past $A$ to $D$.
Let the external angle $CAD$ be bisected by $AE$ where $BE$ is $BC$ produced.


Then:

$BE : EC = AB : AC$


Proof
$(1)$ implies $(2)$

Let $CE$ be drawn through $C$ parallel to $DA$.
Let $BA$ be produced so as to meet $CE$ at $E$.
From Proposition $29$ of Book $\text{I} $: Parallelism implies Equal Alternate Angles we have that:

$\angle ACE = \angle CAD$
But by hypothesis:

$\angle CAD = \angle BAD$
and so:

$\angle DAB = \angle ACE$
From Proposition $29$ of Book $\text{I} $: Parallelism implies Equal Corresponding Angles:

$\angle BAD = \angle AEC$
But from above $\angle ACE = \angle BAD$, so:

$\angle ACE = \angle AEC$
So from Proposition $6$ of Book $\text{I} $: Triangle with Two Equal Angles is Isosceles:

$AC = AE$
Since $AD \parallel EC$, from Proposition $2$ of Book $\text{VI} $: Parallel Transversal Theorem:

$BD : DC = BA : AE$
But $AE = AC$, so:

$BD : DC = AB : AC$
$\Box$


$(2)$ implies $(1)$
Now suppose $BD : DC = AB : AC$.
Join $AD$.
Using the same construction, from Proposition $2$ of Book $\text{VI} $: Parallel Transversal Theorem:

$BD : DC = AB : AE$
From Proposition $11$ of Book $\text{V} $: Equality of Ratios is Transitive:

$BA : AC = BA : AE$
So from Proposition $9$ of Book $\text{V} $: Magnitudes with Same Ratios are Equal:

$AC = AE$
So from Proposition $5$ of Book $\text{I} $: Isosceles Triangle has Two Equal Angles:

$\angle AEC = \angle ACE$
But from Proposition $29$ of Book $\text{I} $: Parallelism implies Equal Corresponding Angles:

$\angle AEC = \angle BAD$
Also, from Proposition $29$ of Book $\text{I} $: Parallelism implies Equal Alternate Angles:

$\angle ACE = \angle CAD$
Therefore:

$\angle BAD = \angle CAD$
and so $AD$ has bisected $\angle BAC$.
$\blacksquare$


Historical Note
This proof is Proposition $3$ of Book $\text{VI}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VI}$. Propositions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): angle bisector theorem




