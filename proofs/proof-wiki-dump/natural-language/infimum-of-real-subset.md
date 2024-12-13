# 

Source: https://proofwiki.org/wiki/Infimum_of_Real_Subset

Lemma
Let $S$ be a set of extended real numbers.
Let $S$ be bounded below in $\R$.
Let $T = S \cap \R$.

Then:

$S$ admits an infimum in $\R$ if and only if $T$ admits an infimum in $\R$
and, if $\inf S$ and $\inf T$ exist as real numbers:

$\inf S = \inf T$


Proof
We observe that $T$ constitutes the real numbers of $S$.
Since there is a real number that is a lower bound for $S$, $-\infty$ is not an element of $S$.
Accordingly, $\infty$ is the only possible element of $S \setminus T$.
Therefore:

$S$ is a subset of $T \cup \set \infty$

First, we show that $S$ and $T$ have the same set of lower bounds.

Let $b$ be a lower bound in $\R$ for $S$.
Then $b$ is a lower bound for $T$ as $T$ is a subset of $S$.
Therefore:

the set of lower bounds for $S$ is a subset of the set of lower bounds for $T$

Assume that $c$ is a lower bound in $\R$ for $T$.
Then $c$ is a lower bound for $T \cup \set \infty$ as well since $c < \infty$.
Accordingly, $c$ is a lower bound for $S$ since $S$ is a subset of $T \cup \set \infty$.
Therefore:

the set of lower bounds for $T$ is a subset of the set of lower bounds for $S$

We have:

the set of lower bounds for $T$ is a subset of the set of lower bounds for $S$
the set of lower bounds for $S$ is a subset of the set of lower bounds for $T$
Therefore:

the set of lower bounds for $T$ equals the set of lower bounds for $S$ by definition

Next, we show that $S$ and $T$ have the same infima.

We have that $S$ and $T$ have the same set of lower bounds.
Therefore, $S$ and $T$ have the same greatest lower bound in $\overline \R$.
Accordingly, as a corollary, if one of the sets $S$ and $T$ admits an infimum in $\R$, so does the other.
Furthermore, these infima are equal.
$\blacksquare$





