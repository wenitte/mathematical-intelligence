# 

Source: https://proofwiki.org/wiki/Intersection_of_Nested_Closed_Subsets_of_Compact_Space_is_Non-Empty

Theorem
Let $\struct {T, \tau}$ be a compact topological space.
Let $\sequence {V_n}$ be a sequence of non-empty closed subsets of $T$ with:

$V_{i + 1} \subseteq V_i$
for each $i$.

Then:

$\ds \bigcap_{n \mathop = 1}^\infty V_n \ne \O$


Proof
From Closed Subspace of Compact Space is Compact:

$V_n$ is compact for each $n$.
Aiming for a contradiction, suppose that:

$\ds \bigcap_{n \mathop = 1}^\infty V_n = \O$
Then:














\(\ds V_1\)

\(=\)







\(\ds V_1 \setminus \paren {\bigcap_{n \mathop = 1}^\infty V_n}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty \paren {V_1 \setminus V_n}\)





De Morgan's Laws: Difference with Intersection



Since each $V_n$ is closed in $T$, from Closed Set in Topological Subspace: Corollary we have:

$V_n$ is closed in $V_1$.
So:

$V_1 \setminus V_n$ is open for each $n$.
So:

$\set {V_1 \setminus V_n : n \in \N}$
is a open cover of $V_1$.
Since $V_1$ is compact, there exists a finite subcover:

$\set {V_1 \setminus V_{n_1}, V_1 \setminus V_{n_2}, \cdots, V_1 \setminus V_{n_j} }$
with:

$n_1 < n_2 < \cdots < n_j$
so that:

$\ds \bigcup_{i \mathop = 1}^j \paren {V_1 \setminus V_{n_i} } = V_1$
We then have, by De Morgan's Laws: Difference with Intersection:

$\ds V_1 \setminus \paren {\bigcap_{i \mathop = 1}^j V_{n_i} } = V_1$
By construction we have:

$\ds \bigcap_{i \mathop = 1}^j V_{n_i} \subseteq V_{n_1} \subseteq V_1$
so:

$\ds \bigcap_{i \mathop = 1}^j V_{n_i} = \O$

Since each $V_{n_i}$ is non-empty, for every $x \in V_{n_j}$, there exists some $1 \le k < j$ such that: 

$x \notin V_{n_k}$
But this is impossible since $V_{n_j} \subseteq V_{n_k}$, and so we have reached a contradiction.
So, we must have: 

$\ds \bigcap_{n \mathop = 1}^\infty V_n \ne \O$
$\blacksquare$





