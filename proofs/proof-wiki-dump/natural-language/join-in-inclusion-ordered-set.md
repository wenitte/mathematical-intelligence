# 

Source: https://proofwiki.org/wiki/Join_in_Inclusion_Ordered_Set

Theorem
Let $P = \left({X, \subseteq}\right)$ be an inclusion ordered set.
Let $A, B \in X$ such that

$A \cup B \in X$

Then $A \vee B = A \cup B$


Proof
By Set is Subset of Union:

$A \subseteq A \cup B$ and $B \subseteq A \cup B$
By definition:

$A \cup B$ is upper bound for $\left\{ {A, B}\right\}$
We will prove that

$\forall C \in X: C$ is upper bound for $\left\{ {A, B}\right\} \implies A \cup B \subseteq C$
Let $C \in X$ such that

$C$ is upper bound for $\left\{ {A, B}\right\}$.
By definition of upper bound:

$A \subseteq C$ and $B \subseteq C$
Thus by Union is Smallest Superset:

$A \cup B \subseteq C$
$\Box$
By definition of supremum:

$\sup \left\{ {A, B}\right\} = A \cup B$
Thus by definition of join:

$A \vee B = A \cup B$
$\blacksquare$


Sources
Mizar article YELLOW_1:9




