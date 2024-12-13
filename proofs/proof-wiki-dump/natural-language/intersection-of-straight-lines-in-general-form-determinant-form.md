# 

Source: https://proofwiki.org/wiki/Intersection_of_Straight_Lines_in_General_Form/Determinant_Form

Theorem
Let $\LL_1$ and $\LL_2$ be straight lines embedded in a cartesian plane $\CC$, given by the equations:






\(\ds \LL_1: \ \ \)







\(\ds l_1 x + m_1 y + n_1\)

\(=\)







\(\ds 0\)












\(\ds \LL_2: \ \ \)







\(\ds l_2 x + m_2 y + n_2\)

\(=\)







\(\ds 0\)










The point of intersection of $\LL_1$ and $\LL_2$ has coordinates given by:

$\dfrac x {\begin {vmatrix} m_1 & n_1 \\ m_2 & n_2 \end {vmatrix} } = \dfrac y {\begin {vmatrix} n_1 & l_1 \\ n_2 & l_2 \end {vmatrix} } = \dfrac 1 {\begin {vmatrix} l_1 & m_1 \\ l_2 & m_2 \end {vmatrix} }$
where $\begin {vmatrix} \cdot \end {vmatrix}$ denotes a determinant.

This point exists and is unique if and only if $\begin {vmatrix} l_1 & m_1 \\ l_2 & m_2 \end {vmatrix} \ne 0$.


Proof
From Intersection of Straight Lines in General Form, the point of intersection of $\LL_1$ and $\LL_2$ has coordinates given by:

$\dfrac x {m_1 n_2 - m_2 n_1} = \dfrac y {n_1 l_2 - n_2 l_1} = \dfrac 1 {l_1 m_2 - l_2 m_1}$
which exists and is unique if and only if $l_1 m_2 \ne l_2 m_1$.
The result follows by Determinant of Order 2.
$\blacksquare$





