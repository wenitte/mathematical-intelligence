# 

Source: https://proofwiki.org/wiki/Ptolemy%27s_Theorem



Theorem
Let $ABCD$ be a cyclic quadrilateral.
Then:

$AB \times CD + AD \times BC = AC \times BD$


Proof 1

Let $ABCD$ be a cyclic quadrilateral.
By Angles in Same Segment of Circle are Equal:

$\angle BAC = \angle BDC$
and:

$\angle ADB = \angle ACB$
By Construction of Equal Angle, construct $E$ on $AC$ such that:

$\angle ABE = \angle CBD$
Since:

$\angle ABE + \angle CBE = \angle ABC = \angle CBD + \angle ABD$
it follows that:

$\angle CBE = \angle ABD$

By Equiangular Triangles are Similar:

$\triangle ABE$ is similar to $\triangle DBC$
and:

$\triangle ABD$ is similar to $\triangle EBC$
Thus:

$\dfrac {AE} {AB} = \dfrac {CD} {BD}$
and:

$\dfrac {CE} {BC} = \dfrac {DA} {BD}$

Equivalently:

$AE \times BD = AB \times CD$
and:

$CE \times BD = BC \times DA$

Adding:

$AE \times BD + CE \times BD = AB \times CD + BC \times DA$

Factorizing:

$\paren {AE + CE} \times BD = AB \times CD + BC \times DA$

But:

$AE + CE = AC$
so:

$AC \times BD = AB \times CD + BC \times DA$
$\blacksquare$


Proof 2

Let $\Box ABCD$ be a cyclic quadrilateral, with diagonals $AC$ and $BD$.  
By Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles:

$\angle ABC$ is supplementary to $\angle ADC$
As well:

$\angle BAD$ is supplementary to $\angle BCD$
Construct two triangles $\triangle A'B'C'$ and $\triangle C'D'E'$ congruent to $\triangle ABC$ and $\triangle CDE$ respectively, with $B'C'D'$ collinear.



Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This is messy. The new triangles have different points, so we can't refer to them as $\triangle ABC$ and $\triangle CDE$. We also need to be more precise about exactly what we are doing, because currently it's woolly.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$E$ is the same point that was $A$ in Figure $1$.
Hence:

$ED = AD$
$\angle ABC$ and $\angle CDE$ are supplementary.
By Equal Corresponding Angles or Supplementary Interior Angles implies Parallel Lines:

$AB \parallel ED$
By construction:

$AC = EC$
Now, scale the sides of $\triangle CDE$ by the length of $AB$.
Also scale the sides of $\triangle ABC$ by the length of $DE$.

Let the scaled figure be $A'B'F'G'$.

$A'B' = AB \cdot DE = F'G'$
By Quadrilateral is Parallelogram iff One Pair of Opposite Sides is Equal and Parallel:

$\Box A'B'F'G'$ is a parallelogram
By construction:

$\angle A'C'B' + \angle A'C'F'$ has the same measure of angle as the original $\angle BCD$.
Therefore the supplementary angle $\angle A'C'G'$ has the same measure as the supplementary angle $\angle BAD$. 
By construction:

$A'C' = AC \times DE$
$B'C' = BC \times DE$
Also by construction:

$C'G' = CE \times AC = AD \cdot AC$
$C'F' = CD \times AC$
Therefore $A'C'$ and $C'G'$ are in proportion with scale factor $AC$.
By Triangles with One Equal Angle and Two Sides Proportional are Similar:

$\triangle A'C'H' \sim \triangle ABD$
Thus, the length of $A'G'$ of the new construct is equal to $BD$ times the scale factor $AC$ Euclid:Proposition/VI/4:

$A'G' = AC \times BD$
And:

$B'F' = B'C' + C'F'$
Substituting:

$B'F' = BC \times DE + CD \times AC$
But by Opposite Sides and Angles of Parallelogram are Equal: 

$A'G' = B'C'F' = B'F'$
Therefore 

$AC \times BD = BC \times DE + CD \times AC$
$\blacksquare$


Proof 3

Let an arbitrary circle $K$ be drawn in the plane.
Let $A$, $B$, $C$, and $D$ be arbitrary points on $K$.
By definition, $\Box ABCD$ is a cyclic quadrilateral.

We are to show that $AB \cdot CD + BC \cdot AD = AC \cdot BD$.

Let $T$ be an inversive transformation such that:

the inversion center of $T$ is $D$
the inversion circle $O$ for $T$ is chosen such that $K$ is completely inside $O$
the radius of $O$ is $r$.
Let $A'$, $B'$, and $C'$ be the images of $A$, $B$, and $C$ under $T$ respectively.
By Inverse of Circle Through Inversion Center is Straight Line Not Through Inversion Center:

$A'$, $B'$ and $C'$ are collinear.





\(\text {(a)}: \quad\)









\(\ds AD \cdot A'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation




\(\text {(b)}: \quad\)









\(\ds BD \cdot B'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation




\(\text {(c)}: \quad\)









\(\ds CD \cdot C'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation


















\(\ds AD \cdot A'D\)

\(=\)







\(\ds BD \cdot B'D\)





Common Notion $1$ from $\text {(a)}$ and $\text {(b)}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AD} {BD}\)

\(=\)







\(\ds \dfrac {B'D} {A'D}\)





dividing by $A'D \cdot BD$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





Triangles with One Equal Angle and Two Sides Proportional are Similar




From $(1)$ we establish via Triangles with Proportional Sides are Similar that:














\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





from $(1)$














\(\ds A'B' : AB\)

\(=\)







\(\ds \dfrac {A'D} {BD}\)





Triangles with Proportional Sides are Similar




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A'B'\)

\(=\)







\(\ds AB \cdot \dfrac {A'D} {BD}\)





rearranging




and:














\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AD} {BD}\)

\(=\)







\(\ds \dfrac {B'D} {A'D}\)










\(\text {(3)}: \quad\)









\(\ds AD\)

\(=\)







\(\ds BD \cdot \paren {\dfrac {B'D} {A'D} }\)





rearranging




Similarly:














\(\ds \triangle BCD\)

\(\sim\)







\(\ds \triangle C'B'D\)





mutatis mutandis from $\text {(b)}$ and $\text {(c)}$














\(\ds \dfrac {B'C'} {BC}\)

\(=\)







\(\ds \dfrac {B'D} {CD}\)





Triangles with Proportional Sides are Similar




\(\text {(4)}: \quad\)









\(\ds B'C'\)

\(=\)







\(\ds BC \cdot \paren {\dfrac {B'D} {CD} }\)










and noting the collinearity of $A'$, $B'$ and $C'$:














\(\ds \triangle ACD\)

\(\sim\)







\(\ds \triangle C'A'D\)





mutatis mutandis from $\text {(a)}$ and $\text {(c)}$














\(\ds \dfrac {A'C'} {AC}\)

\(=\)







\(\ds \dfrac {A'D} {CD}\)










\(\text {(5)}: \quad\)









\(\ds A'C'\)

\(=\)







\(\ds AC \cdot \paren {\dfrac {A'D} {CD} }\)










Finally: 














\(\ds A'B' + B'C'\)

\(=\)







\(\ds A'C'\)




















\(\ds AB \cdot \paren {\dfrac {A'D} {BD} } + BC \cdot \paren {\dfrac {B'D} {CD} }\)

\(=\)







\(\ds AC \cdot \paren {\dfrac {A'D} {CD} }\)





substituting from $(2)$, $(4)$ and $(5)$














\(\ds AB \cdot CD \cdot A'D + BC \cdot BD \cdot B'D\)

\(=\)







\(\ds AC \cdot BD \cdot A'D\)





multiplying through by $CD \cdot BD$














\(\ds AB \cdot CD + BC \cdot BD \cdot \paren {\dfrac {B'D} {A'D} }\)

\(=\)







\(\ds AC \cdot BD\)





dividing everything by $A'D$














\(\ds AB \cdot CD + BC \cdot AD\)

\(=\)







\(\ds AC \cdot BD\)





substituting for $AD$ from $(3)$



The result follows.
$\blacksquare$


Source of Name
This entry was named for Claudius Ptolemy.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Ptolemy's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Ptolemy's theorem
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $5$: Eternal Triangles: Ptolemy
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Ptolemy's Theorem




