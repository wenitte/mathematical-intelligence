# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Reflexive_Closure



Theorem
The following definitions of the concept of Reflexive Closure are equivalent:
Let $\RR$ be a relation on a set $S$.

Definition 1
Let $\RR$ be a relation on a set $S$.

The reflexive closure of $\RR$ is denoted $\RR^=$, and is defined as:

$\RR^= := \RR \cup \set {\tuple {x, x}: x \in S}$
That is:

$\RR^= := \RR \cup \Delta_S$
where $\Delta_S$ is the diagonal relation on $S$.


Definition 2
Let $\RR$ be a relation on a set $S$.

The reflexive closure of $\RR$ is defined as the smallest reflexive relation on $S$ that contains $\RR$ as a subset.

The reflexive closure of $\RR$ is denoted $\RR^=$.


Definition 3
Let $\RR$ be a relation on a set $S$.
Let $\QQ$ be the set of all reflexive relations on $S$ that contain $\RR$.
The reflexive closure of $\RR$ is denoted $\RR^=$, and is defined as:

$\RR^= := \bigcap \QQ$
That is:

$\RR^=$ is the intersection of all reflexive relations on $S$ containing $\RR$.


Proof
Let $\RR$ be a relation on a set $S$.

Union with Diagonal is Smallest Reflexive Superset
Let $\Delta_S$ be the diagonal relation on $S$.
Let $\RR^= = \RR \cup \Delta_S$
By Smallest Element is Unique, at most one relation on $S$ can be the smallest reflexive superset of $\RR$.

From Subset of Union:

$\RR \subseteq \RR^=$
$\Delta_S \subseteq \RR^=$
By Relation Contains Diagonal Relation iff Reflexive, $\RR^=$ is reflexive.
Thus $\RR^=$ is a reflexive relation containing $\RR$.

Again by Relation Contains Diagonal Relation iff Reflexive, every reflexive relation containing $\RR$ must also contain $\Delta_S$.
From Union is Smallest Superset, it follows that $\RR^=$ is the smallest reflexive relation on $S$ which contains $\RR$.
$\Box$


Intersection of Reflexive Supersets is Union with Diagonal
Let $\QQ$ be the set of all reflexive relations containing $\RR$ as a subset.
Let $\RR^= = \bigcap \QQ$.
By the above proof that $\RR \cup \Delta_S$ is a reflexive relation containing $\RR$:

$\RR \cup \Delta_S \in \QQ$
By Intersection is Subset:

$\RR^= \subseteq \RR \cup \Delta_S$
By the above proof that $\RR \cup \Delta_S$ is the smallest reflexive relation containing $\RR$:

$\forall \PP \in \QQ: \RR \cup \Delta_S \subseteq \PP$
By Intersection is Largest Subset:

$\RR \cup \Delta_S \subseteq \RR^=$
Thus by definition of set equality:

$\RR^= = \RR \cup \Delta_S$
$\blacksquare$





