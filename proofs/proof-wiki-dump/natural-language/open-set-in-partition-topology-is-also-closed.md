# 

Source: https://proofwiki.org/wiki/Open_Set_in_Partition_Topology_is_also_Closed



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Then $T$ is a partition space if and only if:

$\forall U \subseteq S: U \in \tau \iff \relcomp S U \in \tau$
That is, a topological space is a partition space if and only if all open sets are closed, and all closed sets are also open.


Proof
Let $T = \struct {S, \tau}$ be a topological space.


Necessary Condition
Let $T$ be a partition space.
Then there exists a partition $\PP$ which forms the basis for $T$.
Let $U \in \tau$.
Then $U$ is the union of elements of $\PP$.
Then by definition $\relcomp S U$ is closed in $T$.
Then $\relcomp S U$ is the union of all the other elements of $\PP$.
That is, $\relcomp S U$ is also open in $T$.
By definition, then, $\relcomp S {\relcomp S U} = U$ is closed in $T$.
$\Box$


Sufficient Condition
Now suppose that every open set in $T$ is closed, and every closed set in $T$ is open.
For each $x \in S$, define:

$\ds U_x := \bigcap_{x \mathop \in U \mathop \in \tau} U$
We claim that $\Bbb S = \set {U_x: x \in S}$ is a partition of $S$.
To show that this is true, we have to check the following:

$(1): \quad \Bbb S$ is pairwise disjoint: $\forall S_1, S_2 \in \Bbb S: S_1 \cap S_2 = \O$ when $S_1 \ne S_2$
$(2): \quad$ The union of $\Bbb S$ forms the whole set $S$: $\ds \bigcup \Bbb S = S$
$(3): \quad$ None of the elements of $\Bbb S$ is empty: $\forall A \in \Bbb S: A \ne \O$.
Clearly $x \in U_x \ne \O$ and $\ds S \subseteq \bigcup \Bbb S \subseteq S$, so we only need to show that $\Bbb S$ is pairwise disjoint.

Since each $U \in \tau$ is closed, each $U_x$ is an intersection of closed sets.
By Intersection of Closed Sets is Closed in Topological Space, each $U_x$ is also closed.
Since every closed set in $T$ is open, we have $U_x \in \tau$.

Pick any $a, b \in S$.
Suppose $U_a \ne U_b$.
Note that $U_a \cap U_b$ is also closed, so $U_a \cap U_b \in \tau$.

If $a \notin U_a \cap U_b$, we have $a \in U_a \setminus \paren {U_a \cap U_b}$.
By Open Set minus Closed Set is Open, $U_a \setminus \paren {U_a \cap U_b} \in \tau$.
By Intersection is Subset and Set Difference is Subset:

$\ds U_a = \bigcap_{a \mathop \in U \mathop \in \tau} U \subseteq U_a \setminus \paren {U_a \cap U_b} \subseteq U_a$
so we have $U_a = U_a \setminus \paren {U_a \cap U_b}$ by definition of set equality .
By Set Difference Equals First Set iff Empty Intersection, we have $U_a \cap U_b = \O$.
We get a similar result if $b \notin U_a \cap U_b$.

Now suppose $a, b \in U_a \cap U_b$.
By Intersection is Subset:

$\ds U_a = \bigcap_{a \mathop \in U \mathop \in \tau} U \subseteq U_a \cap U_b \subseteq U_a$
so we have $U_a \cap U_b = U_a$ by definition of set equality.
Similarly we have $U_a \cap U_b = U_b$.
Hence $U_a = U_b$, which is a contradiction.

Therefore:

$U_a \ne U_b \implies U_a \cap U_b = \O$
and thus $\Bbb S$ is a partition of $S$.

Finally we need to show that each $V \in \tau$ is a union of sets in $\Bbb S$.
In particular, we will show:

$\ds V = \bigcup_{x \mathop \in V} U_x$
Clearly:

$\ds V \subseteq \bigcup_{x \mathop \in V} U_x$
For the other inclusion, by Intersection is Subset we have:

$\ds \forall x \in V: U_x = \bigcap_{x \mathop \in U \mathop \in \tau} U \subseteq V$
By Union of Subsets in Subset:

$\ds \bigcup_{x \mathop \in V} U_x \subseteq V$
Hence by definition of set equality:

$\ds V = \bigcup_{x \mathop \in V} U_x$

And thus $T$ is a partition space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $1$




