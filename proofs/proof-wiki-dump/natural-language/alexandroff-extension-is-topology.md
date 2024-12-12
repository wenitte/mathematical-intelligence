# 

Source: https://proofwiki.org/wiki/Alexandroff_Extension_is_Topology



Theorem
Let $T = \struct {S, \tau}$ be a non-empty topological space.
Let $p$ be a new element not in $S$.
Let $S^* := S \cup \set p$.
Let $T^* = \struct {S^*, \tau^*}$ be the Alexandroff extension on $S$.

Then $\tau^*$ is a topology on $S^*$.


Proof
Recall the definition of the Alexandroff extension on $S$:
$U$ is open in $T^*$ if and only if:

$U$ is an open set of $T$
or

$U$ is the complement in $T^*$ of a closed and compact subset of $T$.
Each of the open set axioms is examined in turn:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {U_i}_{i \mathop \in I}$ be an indexed family of open sets of $T^*$.
Some (perhaps all, perhaps none) of the $U_i$ are open sets of $T$.
The rest of them are each the complement of a closed and compact subset of $T$.

Let $J \subseteq I$ be the subset of $I$ consisting of the indices of the former open sets of $T^*$.
Let $K = I \setminus J$ be the subset of $I$ consisting of the indices of the latter open sets of $T^*$.

Let $\ds \UU_J = \bigcup_{j \mathop \in J} U_j$ be the union of $\family {U_j}_{j \mathop \in J}$.
By definition, each $S \setminus U_j$ is closed in $T$.
From Intersection of Closed Sets is Closed in Topological Space:

$\ds \VV_J := \bigcap_{j \mathop \in J} \paren {S \setminus U_j}$ is closed in $T$
By De Morgan's Laws:

$\ds S \setminus \UU_J = \VV_J = \bigcap_{j \mathop \in J} \paren {S \setminus U_j}$
By definition of closed set it follows that $\UU_J$ is open in $T$.
By definition of the Alexandroff extension on $S$, it follows that $\UU_J$ is open in $T^*$.

Let $\ds \UU_K = \bigcup_{k \mathop \in K} U_k$ be the union of $\family {U_k}_{k \mathop \in K}$.
Let $m \in J$ be arbitrary.
Let $\ds \UU_K' = \bigcup_{\substack {k \mathop \in K \\ k \mathop \ne m} } U_k$.
Then by De Morgan's Laws:

$\ds S \setminus \UU_K' = \bigcap_{\substack {k \mathop \in K \\ k \mathop \ne m} } \paren {S \setminus U_k}$
Let:

$\ds \VV_K' := S \setminus \UU_K' = \bigcap_{\substack {k \mathop \in K \\ k \mathop \ne m} } \paren {S \setminus U_k}$
Each of $S \setminus U_k$ is closed and compact in $T$.

From Intersection of Closed Sets is Closed in Topological Space:

$\VV_K'$ is closed in $T$.
But $S \setminus U_m$ is also closed in $T$.
$S \setminus U_m$ is also compact in $T$.
Let $\VV_K := \VV_K' \cap \paren {S \setminus U_m}$.
So from Intersection of Closed Sets is Closed in Topological Space:

$\VV_K$ is closed in $T$
and from Intersection of Closed Set with Compact Subspace is Compact:

$\VV_K$ is compact in $T$.

But:

$\UU_K = S \setminus \VV_K$
and so by definition $\UU_K$ is open in $T^*$.
Finally:














\(\ds \UU = \bigcup_{i \mathop \in I} U_i\)

\(=\)







\(\ds \UU_J \cup \UU_K\)





Definition of $\UU_J$ and $\UU_K$








\(\ds \leadsto \ \ \)





\(\ds S \setminus \UU\)

\(=\)







\(\ds S \setminus \paren {\UU_J \cup \UU_K}\)




















\(\ds \)

\(=\)







\(\ds \paren {S \setminus \UU_J} \cap \paren {S \setminus \UU_K}\)









By definition, both $\paren {S \setminus \UU_J}$ and $\paren {S \setminus \UU_K}$ have been demonstrated to be closed in $T^*$.
So by Intersection of Closed Sets is Closed in Topological Space:

$\paren {S \setminus \UU_J} \cap \paren {S \setminus \UU_K}$ is closed in $T^*$.
Thus $\UU = \UU_J \cup \UU_K$ is an open set of $T^*$.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U_1$ and $U_2$ be open sets of $T^*$.

$(1): \quad$ Suppose $U_1$ and $U_2$ are both open sets of $T$.
Then as $T$ is a topological space, $U_1 \cap U_2$ is open in $T$.
By definition of the Alexandroff extension on $S$, it follows that $U_1 \cap U_2$ is open in $T^*$.

$(2): \quad$ Suppose that neither $U_1$ and $U_2$ is an open set of $T$.
Then both of their complements $S \setminus U_1$ and $S \setminus U_2$ in $S$ are both closed and compact in $T$.
From Finite Union of Compact Sets is Compact, $\paren {S \setminus U_1} \cup \paren {S \setminus U_2}$ is compact in $T$.
From Finite Union of Closed Sets is Closed in Topological Space, $\paren {S \setminus U_1} \cup \paren {S \setminus U_2}$ is closed in $T$.
But by De Morgan's Laws:

$S \setminus \paren {U_1 \cap U_2} = \paren {S \setminus U_1} \cup \paren {S \setminus U_2}$
Thus $S \setminus \paren {U_1 \cap U_2}$ is both closed and compact in $T$.
Hence by definition $U_1 \cap U_2$ is an open set in $T^*$.

$(3): \quad$ Suppose that either $U_1$ or $U_2$ (but not both) is an open set of $T$.
Without loss of generality, suppose $U_1$ is an open set of $T$ and $U_2$ is not.
As $U_1$ is an open set of $T$ it follows that $p \notin U_1$.
Thus it follows that $p \notin U_1 \cap U_2$.

We have that $S^* \setminus U_2$ is not an open set of $T$.
Thus $S^* \setminus U_2$ is both closed and compact in $T$.

From Finite Union of Closed Sets is Closed in Topological Space, $\paren {S \setminus U_1} \cup \paren {S \setminus U_2}$ is closed in $T$.
But by De Morgan's Laws:

$S \setminus \paren {U_1 \cap U_2} = \paren {S \setminus U_1} \cup \paren {S \setminus U_2}$
Thus $S \setminus \paren {U_1 \cap U_2}$ is closed in $T$.
But as $p \notin S_1 \cap S^2$ it follows that $U_1 \cap U_2$ is an open set of $T$.
Hence by definition $U_1 \cap U_2$ is an open set of $T^*$.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
From Relative Complement with Self is Empty Set:

the complement of $S^*$ relative to $S^*$ is $\O$.
From Empty Set is Compact Space‎, $\O$ is a compact subspace of $T^*$.
Hence by definition of the Alexandroff extension, $S^*$ is open in $T^*$.
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $34$. One Point Compactification Topology




