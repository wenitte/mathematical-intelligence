# 

Source: https://proofwiki.org/wiki/Closed_Intervals_form_Neighborhood_Basis_in_Real_Number_Line

Theorem
Let $\R$ be the real number line with the usual (Euclidean) metric.
Let $a \in \R$ be a point in $\R$.

Let $\BB_a$ be defined as:

$\BB_a := \set {\closedint {a - \epsilon} {a + \epsilon}: \epsilon \in \R_{>0} }$
that is, the set of all closed intervals of $\R$ with $a$ as a midpoint.

Then $\BB_a$ is a basis for the neighborhood system of $a$.


Proof
Let $N$ be a neighborhood of $a$ in $M$.
Then by definition:

$\exists \epsilon' \in \R_{>0}: \map {B_{\epsilon'} } a \subseteq N$
where $\map {B_{\epsilon'} } a$ is the open $\epsilon'$-ball at $a$.
From Open Ball in Real Number Line is Open Interval:

$\map {B_{\epsilon'} } a = \openint {a - \epsilon'} {a + \epsilon'}$

Let $\epsilon \in \R_{>0}: \epsilon < \epsilon'$.
Then by definition of closed interval and open interval:

$\closedint {a - \epsilon} {a + \epsilon} \subseteq \openint {a - \epsilon'} {a + \epsilon'}$
From Subset Relation is Transitive:

$\closedint {a - \epsilon} {a + \epsilon} \subseteq N$

Also by definition of closed interval and open interval:

$\openint {a - \epsilon} {a + \epsilon} \subseteq \closedint {a - \epsilon} {a + \epsilon}$
From Open Real Interval is Open Ball, $\openint {a - \epsilon} {a + \epsilon}$ is the open $\epsilon$-ball at $a$.
Thus by definition, $\closedint {a - \epsilon} {a + \epsilon}$ is a neighborhood of $a$ in $M$.

Hence there exists a neighborhood $\closedint {a - \epsilon} {a + \epsilon}$ of $a$ which is a subset of $N$.
Hence the result by definition of basis for the neighborhood system of $a$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $4 \ \text{i)}$




