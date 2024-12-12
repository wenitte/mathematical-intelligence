# 

Source: https://proofwiki.org/wiki/Components_of_Vector_between_two_Points

Theorem
Let $A, B$ be points in the Euclidean space $\R^n$.
Let their Cartesian coordinates be given by:














\(\ds A\)

\(=\)







\(\ds \tuple {a_1 , a_2, \ldots, a_n }\)




















\(\ds B\)

\(=\)







\(\ds \tuple {b_1 , b_2, \ldots, b_n }\)










Let $\vec {AB}$ be the vector quantity that represents the directed line segment with startpoint $A$ and endpoint $B$.

Then the vector components of $\vec {AB}$ are:

$\vec {AB} = \tuple {b_1 - a_1, b_2 - a_2, \ldots, b_n - a_n}$


Proof
Let $O$ denote the origin of $\R^n$.
Let $\vec {OA}$ and $\vec {OB}$ be the positions vectors of $A$ and $B$.
By definition of positions vectors, their components are:














\(\ds \vec {OA}\)

\(=\)







\(\ds \tuple {a_1 , a_2, \ldots, a_n }\)




















\(\ds \vec {OB}\)

\(=\)







\(\ds \tuple {b_1 , b_2, \ldots, b_n }\)









for some $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R$.

Let the components of $\vec {AB}$ be denoted as:

$\vec {AB} := \tuple {v_1 , v_2, \ldots, v_n}$

By the definition of Triangle Law of Vector Addition, it follows that $\vec {OB}$ can be represented as:

$\vec {OB} = \vec{OA} + \vec{AB}$

From Equivalence of Definitions of Vector Sum, it follows that:

$\tuple {b_1 , b_2, \ldots, b_n} = \tuple {a_1 , a_2, \ldots, a_n} + \tuple {v_1 , v_2, \ldots, v_n}$

By the definition of vector addition of components, it follows that:

$\tuple {b_1 - a_1, b_2 - a_2, \ldots, b_n - a_n} = \tuple {v_1 , v_2, \ldots, v_n}$

Hence the result.
$\blacksquare$





