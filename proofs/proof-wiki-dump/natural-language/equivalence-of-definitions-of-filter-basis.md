# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Filter_Basis



Theorem
The following definitions of the concept of Filter Basis are equivalent:
Let $S$ be a set.
Let $\FF$ be a filter on $S$.

Definition 1
Let $\BB \subset \powerset S$ such that $\O \notin \BB$ and $\BB \ne \O$.
Then $\FF := \set {V \subseteq S: \exists U \in \BB: U \subseteq V}$ is a filter on $S$ if and only if:

$\forall V_1, V_2 \in \BB: \exists U \in \BB: U \subseteq V_1 \cap V_2$
Such a $\BB$ is called a filter basis of $\FF$.

Definition 2
Let $\BB$ be a subset of a filter $\FF$ on $S$ such that $\BB \ne \O$.
Then $\BB$ is a filter basis of $\FF$ if and only if:

$\forall U \in \FF: \exists V \in \BB: V \subseteq U$


Proof
$(1)$ implies $(2)$
Let $\BB$ be a filter basis of $\FF$ by definition $1$.
Then by definition:

$\BB \subset \powerset S$ such that $\O \notin \BB$ and $\BB \ne \O$
and $\FF := \set {V \subseteq S: \exists U \in \BB: U \subseteq V}$ is a filter on $S$ if and only if:

$\forall V_1, V_2 \in \BB: \exists U \in \BB: U \subseteq V_1 \cap V_2$

Let $U \in \FF$.
Then by definition of $\FF$:

$\exists V \in \BB: V \subseteq U$
Thus $\BB$ is a filter basis of $\FF$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\BB$ be a filter basis of $\FF$ by definition $2$.
By definition, $\BB$ is a filter basis of $\FF$ if and only if:

$\forall U \in \FF: \exists V \in \BB: V \subseteq U$

Let $V_1, V_2 \in \BB$.
Then:

$V_1, V_2 \in \FF$
By definition of filter:

$V_1 \cap V_2 \in \FF$
and so:

$\exists U \in \BB: U \subseteq V_1 \cap V_2$
Thus $\BB$ is a filter basis of $\FF$ by definition $1$.
$\blacksquare$





