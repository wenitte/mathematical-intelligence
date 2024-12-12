# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Cover_of_Set



Theorem
Let $S$ be a set.
The following definitions of the concept of Cover of Set are equivalent:

Definition 1
A cover of (or for) $S$ is a set of sets $\CC$ such that:

$\ds S \subseteq \bigcup \CC$
where $\bigcup \CC$ denotes the union of $\CC$.

Definition 2
A cover of (or for) $S$ is a set of sets $\CC$ such that:

$\forall s \in S : \exists C \in \CC : x \in C$


Proof
Definition 1 Implies Definition 2
Let $\CC$ be a set of sets such that:

$\ds S \subseteq \bigcup \CC$
where $\bigcup \CC$ denotes the union of $\CC$.
By definition of subset:

$\forall s \in S : s \in \ds \bigcup \CC$
By definition of set union:

$\forall s \in S : \exists C \in \CC : s \in C$
$\Box$


Definition 2 Implies Definition 1
Let $\CC$ be a set of sets such that:

$\forall s \in S : \exists C \in \CC : s \in C$
From Set is Subset of Union (General Result):

$\forall C \in \CC : C \subseteq \ds \bigcup \CC$
By definition of subset:

$\forall s \in S : s \in \ds \bigcup \CC$
By definition of subset:

$S \subseteq \ds \bigcup \CC$
$\blacksquare$





