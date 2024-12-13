# 

Source: https://proofwiki.org/wiki/Numbers_of_form_1_%2B_2m_over_1_%2B_2n_form_Infinite_Abelian_Group_under_Multiplication

Theorem
Let $S$ be the set of integers defined as:

$S = \set {\dfrac {1 + 2 m} {1 + 2 n}: m, n \in \Z}$
Then $\struct {S, \times}$ is an infinite abelian group.


Proof
Let $k \in \Z$.
Then $1 + 2 k \ne 0$.
Thus:

$\forall x \in S: x \in \Q_{\ne 0}$
Thus by definition of subset:

$S \subseteq \Q_{\ne 0}$

From Non-Zero Rational Numbers under Multiplication form Infinite Abelian Group:

$\struct {\Q_{\ne 0}, \times}$ is an infinite abelian group.
It is noted that $S$ is an infinite set and so trivially $S \ne \O$.
Consider $a = \dfrac {1 + 2 m} {1 + 2 n} \in S$.
We have that:

$\dfrac {1 + 2 m} {1 + 2 n} \times \dfrac {1 + 2 n} {1 + 2 m} = 1$
and so $\dfrac {1 + 2 n} {1 + 2 m}$ is the inverse of $b \in \struct {\Q_{>0}, \times}$.
By inspection it can be seen that $b^{-1} \in S$.

Let $a, b \in S$.
Then:

$\exists m_1, n_1 \in \Z: a = \dfrac {1 + 2 m_1} {1 + 2 n_1}$
$\exists m_2, n_2 \in \Z: b = \dfrac {1 + 2 m_2} {1 + 2 n_2}$

Then we have:














\(\ds a \times b\)

\(=\)







\(\ds \dfrac {1 + 2 m_1} {1 + 2 n_1} \dfrac {1 + 2 m_2} {1 + 2 n_2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 + 2 m_1} \paren {1 + 2 m_2} } {\paren {1 + 2 n_1} \paren {1 + 2 n_2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + 2 m_1 + 2 m_2 + 4 m_1 m_2} {1 + 2 n_1 + 2 n_2 + 4 n_1 n_2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + 2 \paren {m_1 + m_2 + 2 m_1 m_2} } {1 + 2 \paren {n_1 + n_2 + 2 n_1 n_2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + 2 m} {1 + 2 n}\)





where $m = m_1 + m_2 + 2 m_1 m_2, n = n_1 + n_2 + 2 n_1 n_2$




Hence by the Two-Step Subgroup Test, $\struct {S, \times}$ is a subgroup of $\struct {\Q_{>0}, \times}$.
It has been established that $S$ is an infinite set.
Hence by definition $\struct {S, \times}$ is an infinite group.
Finally, from Subgroup of Abelian Group is Abelian, $\struct {S, \times}$ is an abelian group.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(1) \ \text {(b)}$




