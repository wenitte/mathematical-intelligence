# 

Source: https://proofwiki.org/wiki/Intersection_of_Straight_Lines_in_Homogeneous_Cartesian_Coordinate_Form

Theorem
Let $\LL_1$ and $\LL_2$ be straight lines embedded in a cartesian plane $\CC$.
Let $\LL_1$ and $\LL_2$ be given in homogeneous Cartesian coordinates by the equations:






\(\ds \LL_1: \ \ \)







\(\ds l_1 X + m_1 Y + n_1 Z\)

\(=\)







\(\ds 0\)












\(\ds \LL_2: \ \ \)







\(\ds l_2 X + m_2 Y + n_2 Z\)

\(=\)







\(\ds 0\)










The point of intersection of $\LL_1$ and $\LL_2$ is unique and has homogeneous Cartesian coordinates given by:

$\tuple {X, Y, Z} = \tuple {m_1 n_2 - m_2 n_1, n_1 l_2 - n_2 l_1, l_1 m_2 - l_2 m_1}$
or any multiple of these.

This can also be expressed as:

$\tuple {X, Y, Z} = \tuple {\begin {vmatrix} m_1 & n_1 \\ m_2 & n_2 \end {vmatrix}, \begin {vmatrix} n_1 & l_1 \\ n_2 & l_2 \end {vmatrix} , \begin {vmatrix} l_1 & m_1 \\ l_2 & m_2 \end {vmatrix} }$


Proof
First note that by the parallel postulate $\LL_1$ and $\LL_2$ have a unique point of intersection if and only if they are not parallel.
So, first let it be the case that $\LL_1$ and $\LL_2$ are not parallel.

Let the equations for $\LL_1$ and $\LL_2$ be given.
Let $P = \tuple {X, Y, Z}$ be the point on both $\LL_1$ and $\LL_2$ expressed in homogeneous Cartesian coordinates.
By definition:














\(\ds x\)

\(=\)







\(\ds \dfrac X Z\)




















\(\ds y\)

\(=\)







\(\ds \dfrac Y Z\)









where $P = \tuple {x, y}$ described in conventional Cartesian coordinates.
From Intersection of Straight Lines in General Form:

$\dfrac x {m_1 n_2 - m_2 n_1} = \dfrac y {n_1 l_2 - n_2 l_1} = \dfrac 1 {l_1 m_2 - l_2 m_1}$
Hence:

$\dfrac X Z \dfrac 1 {m_1 n_2 - m_2 n_1} = \dfrac Y Z \dfrac 1 {n_1 l_2 - n_2 l_1} = \dfrac 1 {l_1 m_2 - l_2 m_1}$
and so multiplying by $Z$:

$\dfrac X {m_1 n_2 - m_2 n_1} = \dfrac Y {n_1 l_2 - n_2 l_1} = \dfrac Z {l_1 m_2 - l_2 m_1}$

Hence we have:














\(\ds X\)

\(=\)







\(\ds \dfrac Z {l_1 m_2 - l_2 m_1} \paren {m_1 n_2 - m_2 n_1}\)




















\(\ds Y\)

\(=\)







\(\ds \dfrac Z {l_1 m_2 - l_2 m_1} \paren {n_1 l_2 - n_2 l_1}\)









for arbitrary $Z \in \R$ such that $Z \ne 0$.
So, let $Z = l_1 m_2 - l_2 m_1$.
Thus we have:














\(\ds X\)

\(=\)







\(\ds m_1 n_2 - m_2 n_1\)




















\(\ds Y\)

\(=\)







\(\ds n_1 l_2 - n_2 l_1\)




















\(\ds Z\)

\(=\)







\(\ds l_1 m_2 - l_2 m_1\)










From Condition for Straight Lines in Plane to be Parallel, $\LL_1$ and $\LL_2$ are parallel if and only if $l_1 m_2 = l_2 m_1$.
So, let $l_1 m_2 = l_2 m_1$.
Hence:

$Z = 0$
and it is seen that the point of intersection is now the point at infinity.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $9$. Parallel lines. Points at infinity




