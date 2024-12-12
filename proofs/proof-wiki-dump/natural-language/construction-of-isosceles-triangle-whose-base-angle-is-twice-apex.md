# 

Source: https://proofwiki.org/wiki/Construction_of_Isosceles_Triangle_whose_Base_Angle_is_Twice_Apex



Theorem
It is possible to construct an isosceles triangle such that each of the angles at the base is twice that at the apex.

In the words of Euclid:

To construct an isosceles triangle having each of the angles at the base double of the remaining one.
(The Elements: Book $\text{IV}$: Proposition $10$)


Construction

Let $AB$ be a straight line.
Construct $C$ on $AB$ such that $AB \cdot BC = AC^2$.
Construct the circle whose center is at $A$ and whose radius is $AB$.
Fit $BD$ into this circle as a chord such that $BD = AC$.
Join $AD$.
Then $\triangle ABD$ is the required isosceles triangle, as $\angle ABD = \angle BAD = 2 \angle BDA$.


Proof
Join $CD$.
Circumscribe circle $ACD$ about $\triangle ACD$.
As $AC = BD$ we have that $AB \cdot BC = BD^2$.
We have that $B$ is outside the circle $ACD$.
From the converse of the Tangent Secant Theorem it follows that $BD$ is tangent to circle $ACD$.
Then from the Tangent-Chord Theorem:

$\angle BDC = \angle DAC$
Add $\angle CDA$ to both:

$\angle CDA + \angle BDC = \angle BDA = \angle CDA + \angle DAC$.
But from Sum of Angles of Triangle Equals Two Right Angles we have that:

$(1) \quad \angle BCD = \angle CDA + \angle DAC$
So $\angle BDA = \angle BCD$.
But since $AD = AB$, from Isosceles Triangle has Two Equal Angles $\angle BDA = \angle CBD$.
So $\angle BDA = \angle BCD = \angle CBD$.
Since $\angle DBC = \angle BCD$, from Triangle with Two Equal Angles is Isosceles we have $BD = DC$.
But by hypothesis $BD = CA$ and so $CA = CD$.
So from Isosceles Triangle has Two Equal Angles $\angle CDA = \angle DAC$.
So $\angle CDA + \angle DAC = 2 \angle DAC$.
But from $(1)$ we have that $\angle BCD = \angle CDA + \angle DAC$.
So $\angle BCD = 2 \angle CAD = 2 \angle BAD$.
But $\angle BCD = \angle BDA = \angle DBA$.
So $\angle ABD = \angle BAD = 2 \angle BDA$.
$\blacksquare$


Historical Note
This proof is Proposition $10$ of Book $\text{IV}$ of Euclid's The Elements. Having established in the proof that $CD$ equals $BD$, the construction can be simplified by constructing the circle whose center is at $C$ and whose radius is $AC$, then identifying $D$ as the point at which circle $ACD$ meets circle $ABD$, instead of invoking the somewhat more cumbersome construction that fits $BD$ into the circle $ABD$. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IV}$. Propositions




