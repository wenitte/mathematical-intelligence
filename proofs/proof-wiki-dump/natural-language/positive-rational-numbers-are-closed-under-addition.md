# 

Source: https://proofwiki.org/wiki/Positive_Rational_Numbers_are_Closed_under_Addition

Theorem
Let $\Q_{\ge 0}$ denote the set of positive rational numbers:

$\Q_{\ge 0} := \set {x \in \Q: x \ge 0}$
where $\Q$ denotes the set of rational numbers.

Then the algebraic structure $\struct {\Q_{\ge 0}, +}$ is closed in the sense that:

$\forall a, b \in \Q_{\ge 0}: a + b \in \Q_{\ge 0}$
where $+$ denotes rational addition.


Proof
Let $a$ and $b$ be expressed in canonical form:

$a = \dfrac {p_1} {q_1}, b = \dfrac {p_2} {q_2}$
where $p_1, p_2 \in \Z$ and $q_1, q_2 \in \Z_{>0}$.

As $\forall a, b \in \Q_{\ge 0}$ it follows that:

$p_1, p_2 \in \Z_{\ge 0}$

By definition of rational addition:

$\dfrac {p_1} {q_1} + \dfrac {p_2} {q_2} = \dfrac {p_1 q_2 + p_2 q_1} {q_1 q_2}$

From Integers form Ordered Integral Domain, it follows that:














\(\ds p_1 q_2\)

\(\ge\)







\(\ds 0\)




















\(\ds p_2 q_1\)

\(\ge\)







\(\ds 0\)




















\(\ds q_1 q_2\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds p_1 q_2 + p_2 q_1\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {p_1 q_2 + p_2 q_1} {q_1 q_2}\)

\(\ge\)







\(\ds 0\)









$\blacksquare$





