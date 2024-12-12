# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Upper_Section



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $U \subseteq S$.

The following definitions of the concept of Upper Section are equivalent:

Definition 1
$U$ is an upper section in $S$ if and only if:

$\forall u \in U: \forall s \in S: u \preceq s \implies s \in U$
Definition 2
$U$ is an upper section in $S$ if and only if:

$U^\succeq \subseteq U$
where $U^\succeq$ is the upper closure of $U$.

Definition 3
$U$ is an upper section in $S$ if and only if:

$U^\succeq = U$
where $U^\succeq$ is the upper closure of $U$.


Proof
Definition 1 implies Definition 2
Suppose that:

$\forall u \in U: \forall s \in S: u \preceq s \implies s \in U$
Let $k \in U^\succeq$.
Then by the definition of upper closure, there is some $u \in U$ such that $u \preceq k$.
Since $k \in U^\succeq \subseteq S$, the premise proves that $k \in U$.
Since this holds for all $k \in U^\succeq$, it follows that:

$U^\succeq \subseteq U$
$\Box$


Definition 2 implies Definition 3
Suppose that $U^\succeq \subseteq U$.
Let $u \in U$.
Then since $U \subseteq S$, $u \in S$ by the definition of subset.
Since $\preceq$ is reflexive:

$u \preceq u$
Thus by the definition of upper closure:

$u \in U^\succeq$.
Since this holds for all $u \in U$:

$U \subseteq U^\succeq$
Thus by definition of set equality:

$U^\succeq = U$
$\Box$


Definition 3 implies Definition 1
Suppose that $U^\succeq = U$.
Let $u \in U$.
Let $s \in S$.
Let $u \preceq s$.
Then by the definition of upper closure, $s \in U$.
Thus we have shown that:

$\forall u \in U: \forall s \in S: u \preceq s \implies s \in U$
$\blacksquare$





