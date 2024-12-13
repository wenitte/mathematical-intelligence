# 

Source: https://proofwiki.org/wiki/Ptolemy%27s_Theorem/Proof_2

Theorem
Let $ABCD$ be a cyclic quadrilateral.
Then:

$AB \times CD + AD \times BC = AC \times BD$


Proof

This article needs to be tidied.In particular: ... and plenty other stuffPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

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





