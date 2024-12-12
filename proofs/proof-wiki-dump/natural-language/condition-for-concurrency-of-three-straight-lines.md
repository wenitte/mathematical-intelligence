# 

Source: https://proofwiki.org/wiki/Condition_for_Concurrency_of_Three_Straight_Lines



Theorem
Let $3$ straight lines $\LL_1$, $\LL_2$ and $\LL_3$ be embedded in a cartesian plane $\CC$, expressed using the general equations:














\(\ds l_1 x + m_1 y + n_1\)

\(=\)







\(\ds 0\)




















\(\ds l_2 x + m_2 y + n_2\)

\(=\)







\(\ds 0\)




















\(\ds l_3 x + m_3 y + n_3\)

\(=\)







\(\ds 0\)










Then $\LL_1$, $\LL_2$ and $\LL_3$ are concurrent if and only if:

$\begin {vmatrix} l_1 & m_1 & n_1 \\ l_2 & m_2 & n_2 \\ l_3 & m_3 & n_3 \end {vmatrix} = 0$
where $\begin {vmatrix} \cdot \end {vmatrix}$ denotes a determinant.


Proof
Necessary Condition
Let $\LL_1$, $\LL_2$ and $\LL_3$ be concurrent.
From Equation of Straight Line through Intersection of Two Straight Lines, $\LL_1$, $\LL_2$ and $\LL_3$ are concurrent if and only if $\LL_3$ has an equation of the form:

$\paren {l_1 x + m_1 y + n_1} - k \paren {l_2 x + m_2 y + n_2} = 0$
That is:

$\paren {l_1 - k l_2} x + \paren {m_1 - k m_2} y + \paren {n_1 - k n_2} = 0$

Hence:














\(\ds \begin {vmatrix} l_1 & m_1 & n_1 \\ l_2 & m_2 & n_2 \\ l_3 & m_3 & n_3 \end {vmatrix}\)

\(=\)







\(\ds \begin {vmatrix} l_1 & l_2 & l_3 \\ m_1 & m_2 & m_3 \\ n_1 & n_2 & n_3 \end {vmatrix}\)





Determinant of Transpose














\(\ds \)

\(=\)







\(\ds \begin {vmatrix} l_1 & l_2 & \paren {l_1 - k l_2} \\ m_1 & m_2 & \paren {m_1 - k m_2} \\ n_1 & n_2 & \paren {n_1 - k n_2} \end {vmatrix}\)





Definition of $\LL_3$














\(\ds \)

\(=\)







\(\ds \begin {vmatrix} l_1 & l_2 & l_1 \\ m_1 & m_2 & m_1 \\ n_1 & n_2 & n_1 \end {vmatrix}\)





Multiple of Column Added to Column of Determinant: adding $k$ times column $2$ to column $3$














\(\ds \)

\(=\)







\(\ds 0\)





Square Matrix with Duplicate Columns has Zero Determinant



$\Box$


Sufficient Condition
Suppose $\begin {vmatrix} l_1 & m_1 & n_1 \\ l_2 & m_2 & n_2 \\ l_3 & m_3 & n_3 \end {vmatrix} = 0$
Then the rows of this matrix are linearly dependent.


Work In ProgressIn particular: see talkYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
That is, there exists $a_1, a_2, a_3 \in \R_{\ne 0}$ such that:














\(\ds a_1 \tuple {l_1, m_1, n_1} + a_2 \tuple {l_2, m_2, n_2} + a_3 \tuple {l_3, m_3, n_3}\)

\(=\)







\(\ds \bf 0\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {l_1, m_1, n_1} + \dfrac {a_2} {a_1} \tuple {l_2, m_2, n_2}\)

\(=\)







\(\ds - \dfrac {a_3} {a_1} \tuple {l_3, m_3, n_3}\)









$\blacksquare$
$\LL_3: l_3 x + m_3 y + n_3 = 0$ is equivalent to $- \dfrac {a_3} {a_1} l_3 x - \dfrac {a_3} {a_1} m_3 y - \dfrac {a_3} {a_1} n_3 = 0$,
which, from above, is in turn equivalent to:

$\paren {l_1 x + m_1 y + n_1} - k \paren {l_2 x + m_2 y + n_2} = 0$
with $k = -\dfrac {a_2} {a_1}$.
Hence from Equation of Straight Line through Intersection of Two Straight Lines, $\LL_1$, $\LL_2$ and $\LL_3$ are concurrent.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $11$. Condition for concurrency




