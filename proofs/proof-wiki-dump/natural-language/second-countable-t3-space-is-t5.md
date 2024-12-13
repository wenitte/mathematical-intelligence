# 

Source: https://proofwiki.org/wiki/Second-Countable_T3_Space_is_T5

Theorem
Let $T = \struct {S, \tau}$ be a $T_3$ space which is also second-countable.

Then $T$ is a $T_5$ space.


Proof
Let $A, B \subseteq S$ with $A^- \cap B = A \cap B^- = \O$.
For each $x \in A$, since $T$ is $T_3$:

$\exists P, Q \in \tau: x \in P, B^- \subseteq Q, P \cap Q = \O$
Let $\BB$ be a basis for $T$.
Then:

$\exists U \in \BB: x \in U \subseteq P$
Notice that:














\(\ds \)

\(\)







\(\ds U^- \cap B\)




















\(\ds \)

\(\subseteq\)







\(\ds U^- \cap B^-\)





Set Intersection Preserves Subsets; Set is Subset of its Topological Closure














\(\ds \)

\(\subseteq\)







\(\ds P^- \cap Q\)





Set Intersection Preserves Subsets; Topological Closure of Subset is Subset of Topological Closure














\(\ds \)

\(=\)







\(\ds \O\)





Open Set Disjoint from Set is Disjoint from Closure



By Subset of Empty Set, $U^-$ and $B$ are disjoint.

Since $T$ is second-countable, $\BB$ is countable.
Doing the above process for each $x \in A$ yields a subset $\set {U_n}_{n \mathop \in \N}$ of $\BB$.
Doing a similar process for each $y \in B$ yields another subset $\set {V_n}_{n \mathop \in \N}$ of $\BB$.
These sets are open sets by definition.

Define $\ds U'_n = U_n \setminus \bigcup_{i \mathop \le n} V_i^-$ and $\ds V'_n = V_n \setminus \bigcup_{i \mathop \le n} U_i^-$.
Define $\ds U' = \bigcup_{n \mathop \in \N} U'_n$ and $\ds V' = \bigcup_{n \mathop \in \N} V'_n$.
We show that $U'$ and $V'$ are disjoint open sets containing $A$ and $B$ respectively.

For any $n \in \N$, we have that $U_n$ is open.
From Topological Closure is Closed:

$V_i^-$ is closed for each $i \le n$.
From Finite Union of Closed Sets is Closed in Topological Space:

$\ds \bigcup_{i \mathop \le n} V_i^-$ is closed.
By Open Set minus Closed Set is Open:

$\ds U'_n = U_n \setminus \bigcup_{i \mathop \le n} V_i^-$ is open.
By Definition of Topological Space:

$\ds U' = \bigcup_{n \mathop \in \N} U'_n$ is open.
Similarly, $V'$ is open.

Let $y \in B$.
By construction, there is some $k \in \N$ where $y \in V_k$.
From above we see that $U_i^-$ and $B$ are disjoint for all $i \in \N$.
So $y \notin U_i^-$ for every $i \le k$.
Hence $y \in V_k \setminus \bigcup_{i \mathop \le k} U_i^- = V'_k \subseteq V'$.
By Definition of Subset, $B \subseteq V'$.
Similarly, $A \subseteq U'$.

Let $i, j \in \N$.
We show that $U'_i, V'_j$ are disjoint.
Without loss of generality suppose $i \le j$.
Then:














\(\ds U'_i\)

\(=\)







\(\ds U_i \setminus \bigcup_{k \mathop \le i} V_k^-\)




















\(\ds \)

\(\subseteq\)







\(\ds U_i\)





Set Difference is Subset














\(\ds \)

\(\subseteq\)







\(\ds U_i^-\)





Set is Subset of its Topological Closure














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{k \mathop \le j} U_k^-\)





Set is Subset of Union of Family








\(\ds \leadsto \ \ \)





\(\ds U'_i \cap V'_j\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Relative Complement



Now:














\(\ds U' \cap V'\)

\(=\)







\(\ds \paren {\bigcup_{i \mathop \in \N} U'_i} \cap \paren {\bigcup_{j \mathop \in \N} V'_j}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{\tuple {i, j} \mathop \in \N \times \N} \paren {U'_i \cap V'_j}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \bigcup_{\tuple {i, j} \mathop \in \N \times \N} \O\)




















\(\ds \)

\(=\)







\(\ds \O\)





Union is Empty iff Sets are Empty



Hence $U'$ and $V'$ are disjoint.
Since $A, B$ are arbitrary, $T$ is a $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Compactness Properties and the $T_i$ Axioms




