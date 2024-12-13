# 

Source: https://proofwiki.org/wiki/Modified_Fort_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau_{a, b} }$  be a modified Fort space.

Then $\tau_{a, b}$ is a topology on $S$.


Proof
Recall the definition of a modified Fort space:
Let $N$ be an infinite set.
Let $\set a$ and $\set b$ be singleton sets such that $a \ne b$ and $a, b \notin N$.
Let $S = N \cup \set a \cup \set b$.

Let $\tau_{a, b}$ be the set of subsets of $S$ defined as:

$\tau_{a, b} = \set {H \subseteq N} \cup \set {H \subseteq S: \paren {a \in H \lor b \in H} \land N \setminus H \text { is finite} }$

That is, a subset $H$ of $S$ is in $\tau_{a, b}$ if and only if either:

$(1): \quad H$ is any subset of $N$
or:

$(2): \quad$ if $a$ or $b$ or both are in $H$, then $H$ is in $S$ only if it is cofinite in $S$, that is, that it contains all but a finite number of points of $S$ (or $N$, equivalently).

Then $\tau_{a, b}$ is a modified Fort topology on $a$ and $b$, and the topological space $T = \struct {S, \tau_{a, b} }$ is a modified Fort space.

Let $S = N \cup \set {a, b}$ where $N$ is infinite, $a \ne b$ and $a, b \notin N$.

We have that $\O \subseteq N$ so $\O \in \tau_{a, b}$.

We have that $a, b \in S, S \setminus S = \O$ and $\O$ is trivially finite, so $S \in \tau_{a, b}$.

Now consider $A, B \in \tau_{a, b}$, and let $H = A \cap B$.

Let either $A \subseteq N$ or $B \subseteq N$.
From Intersection is Subset we have that $A \cap B \subseteq N$ and $A \cap B \subseteq B$.
Hence $A \cap B \subseteq N$ from Subset Relation is Transitive.
So by definition $A \cap B \in \tau_{a, b}$

Now suppose $A \cap \set {a, b} \ne \O$ and $B \cap \set {a, b} \ne \O$.
Then:














\(\ds H\)

\(=\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds N \setminus H\)

\(=\)







\(\ds N \setminus \paren {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \paren {N \setminus A} \cup \paren {N \setminus B}\)





De Morgan's Laws: Difference with Intersection




In order for $A$ and $B$ to be open sets we have that $N \setminus A$ and $N \setminus B$ are both finite.
Hence their union is also finite and so $N \setminus \paren {A \cap B}$ is finite.
So $H = A \cap B \in \tau_{a, b}$ as its complement is finite.

Now let $\UU \subseteq \tau_{a, b}$.
Then from De Morgan's Laws: Difference with Union:

$\ds N \setminus \paren {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \paren {N \setminus U}$

We have either of two options:

$(1): \quad \forall U \in \UU: U \subseteq N$
in which case:

$\ds \bigcup \UU \subseteq N$

Or:

$(2): \quad \exists U \in \UU: N \setminus U$ is finite
in which case:

$\ds \bigcap_{U \mathop \in \UU} \paren {N \setminus U}$ is finite, from Intersection is Subset.

So in either case:

$\ds \bigcup \UU \in \tau_{a, b}$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space




