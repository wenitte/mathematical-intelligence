# 

Source: https://proofwiki.org/wiki/Closure_of_Real_Interval_is_Closed_Real_Interval/Proof_2



Theorem
Let $I$ be a non-empty real interval such that one of these holds:

$I = \openint a b$
$I = \hointr a b$
$I = \hointl a b$
$I = \closedint a b$
Let $I^-$ denote the closure of $I$.

Then $I^-$ is the closed real interval $\closedint a b$.


Proof
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





