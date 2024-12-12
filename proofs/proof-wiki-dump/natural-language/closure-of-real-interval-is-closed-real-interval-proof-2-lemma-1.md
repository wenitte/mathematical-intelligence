# 

Source: https://proofwiki.org/wiki/Closure_of_Real_Interval_is_Closed_Real_Interval/Proof_2/Lemma_1



Lemma for Closure of Real Interval is Closed Real Interval
Let $I$ be a non-empty real interval such that one of these holds:

$I = \openint a b$
$I = \hointr a b$
$I = \hointl a b$
$I = \closedint a b$

Let $I^-$ denote the closure of $I$.
Then:

$x \in \closedint a b \implies x \in I^-$


Proof
Let $x \in \closedint a b$.
Let $\openint c d$ be an open interval in $\R$ such that $x \in \openint c d$.
We must show that $\openint c d$ contains a point in $I$.

One of the following three possibilities holds:

$a < x < b$
$x = a$
$x = b$


Case: $a < x < b$
In this case, $x \in I$ and $x \in \openint c d$.
Therefore $\openint c d$ contains a point in $I$.
$\Box$


Case: $x = a$
If $I$ contains $a$, then this means $x \in I$, and the proof is complete.

So, assume that $a \notin I$.
Since $I$ is nonempty but does not contain $a$, we must have $a < b$.
Let $r$ be the minimum of $d$ and $b$, so that $r \le d$ and $r \le b$.
Since $a = x < d$ by choice of $d$ and since $a < b$ by assumption, we must have $a < r$.
Thus, by Real Numbers are Densely Ordered, there exists some $s \in \R$ such that $a < s < r$.
To summarize, we have $c < x = a < s < r$, where $r \le d$ and $r \le b$.
This means that $s$ satisfies both $c < s < d$ and $a < s < b$.
Hence, $s$ is a point in $\openint c d$ which is also in $I$.
The existence of such a point is what we wanted to show.
$\Box$


Case: $x = b$
This case is analogous to case when $x = a$.
Here we instead let $l$ be the maximum of $c$ and $a$, and select an $s$ such that $l < s < x = b < d$, where $c \le l$ and $a \le l$.
$\blacksquare$





