# 

Source: https://proofwiki.org/wiki/Group_Direct_Product_is_Product_in_Category_of_Groups

Theorem
Let $\mathbf{Grp}$ be the category of groups.
Let $G$ and $H$ be groups, and let $G \times H$ be their direct product.

Then $G \times H$ is a binary product of $G$ and $H$ in $\mathbf{Grp}$.


Proof
Let $F$ be a group.
By Direct Product of Group Homomorphisms is Homomorphism, given group homomorphisms:

$g: F \to G, h: F \to H$
their direct product $g \times h: F \to G \times H$ is a group homomorphism.
From Projections on Direct Product of Group Homomorphisms, the following diagram is commutative:

$\begin{xy}\xymatrix@L+3mu@R=3em{
&

F
 \ar@/_/[dl]_*{g}
 \ar[d]^*{\quad g \times h}
 \ar@/^/[dr]^*{h}

\\

G

&

G \times H
 \ar[l]^*{\pr_1}
 \ar[r]_*{\pr_2}

&

H

}\end{xy}$
By Cartesian Product is Set Product, $g \times h$ is the only mapping $F \to G \times H$ that could fit into the diagram.
Since it is also a group homomorphism, we see that the UMP for the binary product is satisfied.

Thus the direct product $G \times H$ indeed is a categorical product for $G$ and $H$ in $\mathbf{Grp}$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.5.2$




