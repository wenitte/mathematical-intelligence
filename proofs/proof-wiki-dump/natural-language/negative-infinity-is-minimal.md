# 

Source: https://proofwiki.org/wiki/Negative_Infinity_is_Minimal

Theorem
Let $\struct {\overline \R, \le}$ be the extended real numbers with the usual ordering.
Then $-\infty$ is a minimal element of $\overline \R$.


Proof
By the definition of the usual ordering on the extended real numbers:

${\le} = {\le_\R} \cup \set {\tuple {x, +\infty}: x \in \overline \R} \cup \set {\tuple {-\infty, x}: x \in \overline \R}$
Suppose $x \in \overline \R$ and $x \le -\infty$.
That is:

$\tuple {x, -\infty} \in {\le}$
By the definition of union, $\tuple {x, -\infty}$ must lie in one of the three sets whose union forms $\le$.
Since ${\le_\R} \subseteq \R \times \R$ and $-\infty \notin \R$:

$\tuple {x, -\infty} \notin {\le_\R}$
Since $+\infty \ne -\infty$ by the definition of the extended real numbers:

$\tuple {x, -\infty} \notin \set {\tuple {x, +\infty}: x \in \overline \R}$
Therefore:

$\tuple {x, -\infty} \in \set {\tuple {-\infty, x}: x \in \overline \R}$
and we conclude that $x = -\infty$.
That is, $-\infty$ is a minimal element of $\overline \R$.
$\blacksquare$


Also see
Positive Infinity is Maximal




