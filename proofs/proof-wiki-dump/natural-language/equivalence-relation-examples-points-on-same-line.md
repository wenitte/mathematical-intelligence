# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Points_on_Same_Line



Example of Equivalence Relation
Let $P$ be the set of points in the plane.
Let $\sim$ be the relation on $P$ defined as:

$\forall x, y \in P: x \sim y \iff \text {$x$ and $y$}$ both lie on the same horizontal line
Then $\sim$ is an equivalence relation.


Proof
In the Cartesian plane, the characteristic of a horizontal line is that the $y$ coordinates of all its points are equal.
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $p = \tuple {x, y} \in P$.
Then $p$ is trivially on the same horizontal line as itself.
Thus $\sim$ is seen to be reflexive.
$\Box$


Symmetry
Let $p_1 = \tuple {x_1, y_1}, p_2 = \tuple {x_2, y_2} \in P$.
Let $p_1 \sim p_2$.
Then $y_1 = y_2$, and so $y_2 = y_1$.
Hence $p_2 \sim p_1$
Thus $\sim$ is seen to be symmetric.
$\Box$


Transitivity
Let $p_1 = \tuple {x_1, y_1}, p_2 = \tuple {x_2, y_2}, p_3 = \tuple {x_3, y_3} \in P$.
Let $p_1 \sim p_2$.
Let $p_2 \sim p_3$.
Then $y_1 = y_2$ and $y_2 = y_3$.
Hence $y_1 = y_3$ and so $p_1 \sim p_3$.
Thus $\sim$ is seen to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 3$: Equivalence relations
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $7$




