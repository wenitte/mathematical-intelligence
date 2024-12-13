# 

Source: https://proofwiki.org/wiki/Interior_of_Closed_Real_Interval_is_Open_Real_Interval

Theorem
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.
Let $\closedint a b$ be a closed interval of $\R$.

Then the interior of $\closedint a b$ is the open interval $\openint a b$.


Proof
By definition, the interior of $\closedint a b$ is the largest open set contained in $\closedint a b$.
From Open Sets in Real Number Line it follows that $\openint a b$ is an open set of $\struct {\R, \tau_d}$.
By definition of open interval, $\openint a b$ is contained in $\closedint a b$.

Suppose $U$ is an open set of $\struct {\R, \tau_d}$ which is contained in $\closedint a b$.
The only way $U$ could be bigger than $\openint a b$ is if either $a \in U$ or $b \in U$ or both.
Suppose $a \in U$.
Then by Open Sets in Real Number Line it follows that $a \in \openint p q$ for some $p, q \in \R$ such that $\openint p q \subseteq U$.
From Real Numbers are Densely Ordered:

$\exists r \in \R: p < r < a$
and so:

$\exists r \in U: r < a$
which means:

$r \notin \openint a b$
That is, $a$ is not in an open set of $\struct {\R, \tau_d}$ which is contained in $\closedint a b$.
Thus $a$ is not in the interior of $\closedint a b$.

By a similar argument it is shown that neither is $b$ in the interior of $\closedint a b$.

Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.25$




