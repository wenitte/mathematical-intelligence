# 

Source: https://proofwiki.org/wiki/Open_Set_Characterization_of_Denseness



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $S \subseteq X$.

Then $S$ is (everywhere) dense in $X$ if and only if every non-empty ($\tau$-)open set contains an element of $S$.


Analytic Basis
Let $\BB \subseteq \tau$ be an analytic basis for $\tau$.

Then $S$ is (everywhere) dense in $X$ if and only if every non-empty open set of $\BB$ contains an element of $S$.


Open Ball
Let $\struct {X, d}$ be a metric space.
Let $\tau_d$ be the topology induced by the metric $d$.
Let $S \subseteq X$.

Then $S$ is (everywhere) dense in $\struct {X, \tau_d}$ if and only if every open ball contains an element of $S$.


Proof
Necessary Condition
Let $S$ be everywhere dense in $X$.
Let $U$ be open and non-empty.
Then $U$ has an element $x$.
Since $S$ is everywhere dense in $X$, $x \in S^-$, the closure of $S$.
By Equivalence of Definitions of Adherent Point, every open neighborhood of $x$ contains an element of $S$.
Thus in particular, $U$ contains an element of $S$.
$\Box$


Sufficient Condition
Suppose that every non-empty open set in $X$ contains an element of $S$.
Let $x \in X$.
Let $U$ be an open neighborhood of $x$.
Then $U$ contains an element $s$ of $S$.
As this holds for all open neighborhoods of $x$, Equivalence of Definitions of Adherent Point shows that $x \in S^-$.
As this holds for all $x \in X$, $S$ is everywhere dense in $X$.
$\blacksquare$





