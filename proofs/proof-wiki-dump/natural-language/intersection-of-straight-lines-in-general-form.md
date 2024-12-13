# 

Source: https://proofwiki.org/wiki/Intersection_of_Straight_Lines_in_General_Form



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

$\dfrac x {m_1 n_2 - m_2 n_1} = \dfrac y {n_1 l_2 - n_2 l_1} = \dfrac 1 {l_1 m_2 - l_2 m_1}$

This point exists and is unique if and only if $l_1 m_2 \ne l_2 m_1$.


Determinant Form
This result can also be expressed in the form:

$\dfrac x {\begin {vmatrix} m_1 & n_1 \\ m_2 & n_2 \end {vmatrix} } = \dfrac y {\begin {vmatrix} n_1 & l_1 \\ n_2 & l_2 \end {vmatrix} } = \dfrac 1 {\begin {vmatrix} l_1 & m_1 \\ l_2 & m_2 \end {vmatrix} }$
where $\begin {vmatrix} \cdot \end {vmatrix}$ denotes a determinant.


Proof
First note that by the parallel postulate $\LL_1$ and $\LL_2$ have a unique point of intersection if and only if they are not parallel.
From Condition for Straight Lines in Plane to be Parallel, $\LL_1$ and $\LL_2$ are parallel if and only if $l_1 m_2 = l_2 m_1$.
$\Box$

Let the equations for $\LL_1$ and $\LL_2$ be given.
Let $\tuple {x, y}$ be the point on both $\LL_1$ and $\LL_2$.
We have:














\(\ds l_1 x + m_1 y + n_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\dfrac {l_1} {m_1} x - \dfrac {n_1} {m_1}\)




















\(\ds l_2 x + m_2 y + n_2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\dfrac {l_2} {m_2} x - \dfrac {n_2} {m_2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {l_1} {m_1} x + \dfrac {n_1} {m_1}\)

\(=\)







\(\ds \dfrac {l_2} {m_2} x + \dfrac {n_2} {m_2}\)





substituting for $y$








\(\ds \leadsto \ \ \)





\(\ds l_1 m_2 x + n_1 m_2\)

\(=\)







\(\ds l_2 m_1 x + n_2 m_1\)





multiplying by $m_1 m_2$








\(\ds \leadsto \ \ \)





\(\ds x \paren {l_1 m_2 - l_2 m_1}\)

\(=\)







\(\ds n_2 m_1 - n_1 m_2\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac x {m_1 n_2 - m_2 n_1}\)

\(=\)







\(\ds \dfrac 1 {l_1 m_2 - l_2 m_1}\)





dividing by $\paren {l_1 m_2 - l_2 m_1} \paren {m_1 n_2 - m_2 n_1}$




Similarly:














\(\ds l_1 x + m_1 y + n_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\dfrac {m_1} {l_1} y - \dfrac {n_1} {l_1}\)




















\(\ds l_2 x + m_2 y + n_2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\dfrac {m_2} {l_2} y - \dfrac {n_2} {l_2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {m_1} {l_1} y + \dfrac {n_1} {l_1}\)

\(=\)







\(\ds \dfrac {m_2} {l_2} y + \dfrac {n_2} {l_2}\)





substituting for $x$








\(\ds \leadsto \ \ \)





\(\ds m_1 l_2 y + n_1 l_2\)

\(=\)







\(\ds m_2 l_1 y + n_2 l_1\)





multiplying by $m_1 m_2$








\(\ds \leadsto \ \ \)





\(\ds y \paren {m_2 l_1 - m_1 l_2}\)

\(=\)







\(\ds n_1 l_2 - n_2 l_1\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac y {n_1 l_2 - n_2 l_1}\)

\(=\)







\(\ds \dfrac 1 {l_1 m_2 - l_2 m_1}\)





dividing by $\paren {l_1 m_2 - l_2 m_1} \paren {n_1 l_2 - n_2 l_1}$



$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $8$. Intersection of two lines




