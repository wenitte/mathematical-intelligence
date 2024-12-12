# 

Source: https://proofwiki.org/wiki/Closure_of_Real_Interval_is_Closed_Real_Interval



Theorem
Let $I$ be a non-empty real interval such that one of these holds:

$I = \openint a b$
$I = \hointr a b$
$I = \hointl a b$
$I = \closedint a b$
Let $I^-$ denote the closure of $I$.

Then $I^-$ is the closed real interval $\closedint a b$.


Proof 1
There are four cases to cover:

$(1): \quad$ Let $I = \openint a b$.
From Closure of Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(2): \quad$ Let $I = \hointr a b$.
From Closure of Half-Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(3): \quad$ Let $I = \hointl a b$.
From Closure of Half-Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(4): \quad$ Let $I = \closedint a b$.
From Closed Real Interval is Closed in Real Number Line:

$I$ is closed in $\R$.
From Set is Closed iff Equals Topological Closure:

$I^- = \closedint a b$
$\Box$

Thus all cases are covered.
The result follows by Proof by Cases.
$\blacksquare$


Proof 2
Let $I$ be one of the intervals as specified in the exposition.

Note that:

$(1): \quad$ By Condition for Point being in Closure, $x \in I^-$ if and only if every open set in $\R$ containing $x$ contains a point in $I$.
$(2): \quad$ From Union of Open Sets of Metric Space is Open, every open set in $\R$ is a union of open intervals.
Thus we also have that $x \in I^-$ if and only if every open interval containing $x$ also contains a point in $I$.

This equivalence will be made use of throughout.


Lemma 1
$x \in \closedint a b \implies x \in I^-$
$\Box$


Lemma 2
$x \notin \closedint a b \implies x \notin I^-$
$\Box$

By the two lemmas proven above:

$\closedint a b = I^-$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.13$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): closure
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): closure




