# 

Source: https://proofwiki.org/wiki/Positive_Infinity_is_Maximal

Theorem
Let $\struct {\overline \R, \le}$ be the extended real numbers with the usual ordering.

Then $+\infty$ is a maximal element of $\overline \R$.


Proof
By the definition of the usual ordering on the extended real numbers:

${\le} = {\le_\R} \cup \set {\tuple {x, +\infty}: x \in \overline \R} \cup \set {\tuple {-\infty, x}: x \in \overline \R}$
Suppose $x \in \overline \R$ and $+\infty \le x$.
That is:

$\tuple {+\infty, x} \in {\le}$
By the definition of union, $\tuple {+\infty, x}$ must lie in one of the three sets whose union forms $\le$.
Since ${\le_\R} \subseteq \R \times \R$ and $+\infty \notin \R$:

$\tuple {+\infty, x} \notin {\le_\R}$
Since $+\infty \ne -\infty$ by the definition of the extended real numbers:

$\tuple {+\infty, x} \notin \set {\tuple {-\infty, x}: x \in \overline \R}$
Therefore:

$\tuple {+\infty, x} \in \set {\tuple {x, +\infty}: x \in \overline \R}$
and we conclude that $x = +\infty$.
That is, $+\infty$ is a maximal element of $\overline \R$.
$\blacksquare$


Also see
Negative Infinity is Minimal




