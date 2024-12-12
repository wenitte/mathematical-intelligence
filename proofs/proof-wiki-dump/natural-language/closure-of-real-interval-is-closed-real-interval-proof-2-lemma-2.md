# 

Source: https://proofwiki.org/wiki/Closure_of_Real_Interval_is_Closed_Real_Interval/Proof_2/Lemma_2



Lemma for Closure of Real Interval is Closed Real Interval
Let $I$ be a non-empty real interval such that one of these holds:

$I = \openint a b$
$I = \hointr a b$
$I = \hointl a b$
$I = \closedint a b$

Let $I^-$ denote the closure of $I$.
Then:

$x \notin \closedint a b \implies x \notin I^-$


Proof
Suppose $x \notin \notin \closedint a b$.
We must find an open interval containing $x$ which does not contain an elements in $I$.
There are two possibilities:

$x < a$
or:

$x > b$


Case: $x < a$
By Real Numbers are Densely Ordered, there exists $r \in \R$ such that $x < r < a$.
Thus $\openint {x - 1} r$ is an open interval, all of whose elements are less than $a$, and hence not in $I$.


Case: $x > b$
This is similarly to the case when $x < a$.
Here instead we pick $r$ such that $b < r < x$, and consider the open interval $\openint r {x + 1}$.
$\blacksquare$





