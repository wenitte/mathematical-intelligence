# 

Source: https://proofwiki.org/wiki/Sequentially_Compact_Metric_Space_is_Compact



Theorem
A sequentially compact metric space is compact.


Proof using Lindelöf Property
Let $\struct {A, d}$ be a sequentially compact metric space.
From Sequentially Compact Metric Space is Lindelöf, every open cover of $A$ has a countable subcover.
Let $C$ be an open cover $A$.
Extract from it a countable subcover $\set {U_1, U_2, \ldots}$.

Aiming for a contradiction, suppose there exists no finite subcover of $C$.
Then, for all $n \in \N_{\ge 1}$, the set $\set {U_1, \ldots, U_n}$ does not cover $A$.
Hence it is possible to choose $x_n \in A$ such that:

$x_n \notin U_1 \cup \cdots \cup U_n$.
Thus we construct an infinite sequence $\sequence {x_n}_{n \mathop \ge 1}$ of points of $A$.
By assumption $A$ is sequentially compact.
Thus $\sequence {x_n}_{n \mathop \ge 1}$ has a subsequence which converges to some $x \in A$.
But because the $U_i: i \ge 1$ forms a cover for $A$, there exists some $U_m$ such that $x \in U_m$.
Hence by Limit of Sequence is Accumulation Point, there is an infinite number of terms in the sequence $\sequence {x_i}$ which are contained in $U_m$.
But from the method of construction of $\sequence {x_i}$, each $U_n$ can contain only points $x_i$ with $i < n$.
That is, each $U_n$ can only contain a finite number of the terms of $\sequence {x_i}$.
This is a contradiction.
Thus the supposition that there exists no finite subcover of $C$ was false.
Hence the result.
$\blacksquare$


Proof using Lebesgue Number
Let $M = \struct {A, d}$ be a sequentially compact metric space.
Let $\UU$ be any open cover of $M$.
By Lebesgue's Number Lemma, there exists a Lebesgue number for $\UU$.
Let $\set {x_1, x_2, \ldots, x_n}$ be a finite $\epsilon$-net for $M$, where $\epsilon$ is this same Lebesgue number.
This exists by Sequentially Compact Metric Space is Totally Bounded.

Let $\map {B_\epsilon} {x_i}$ be the open $\epsilon$-ball of $x_i$.
By definition of Lebesgue number, $\map {B_\epsilon} {x_i}$ is contained in some $U_i \in \UU$.
Since:

$\ds M \subseteq \bigcup_{i \mathop = 1}^n \map {B_\epsilon} {x_i} \subseteq \bigcup_{i \mathop = 1}^n U_i$
we have a finite subcover $\set {U_1, U_2, \ldots, U_n}$ of $\UU$ for $M$.
Hence the result.
$\blacksquare$


Proof 3
Follows directly from:

Sequentially Compact Space is Countably Compact
Countably Compact Metric Space is Compact
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





