# 

Source: https://proofwiki.org/wiki/Half-Open_Real_Interval_is_Closed_in_some_Open_Intervals

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $\hointr a b \subset \R$ be a half-open interval of $\R$.

Let $c < a$.
Then $\hointr a b$ is a closed set of $\openint c b$.

Similarly, let $d > b$.
Then the half-open interval $\hointl a b$ is a closed set of $\openint a d$.


Proof
Consider:

$A := \openint c b \setminus \hointr a b = \openint c a$
Then $A$ is an open interval.
By Open Real Interval is Open Set, $A$ is open in $\R$.
By the definition of the subspace topology it follows that $A$ is open in $\openint c b$.
Thus by the definition of closed set, $\openint c b \setminus A = \hointr a b$ is closed in $\openint c b$.

Mutatis mutandis, the argument also shows that $\hointl a b \subset \R$ is a closed set of $\openint a d$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.2$




