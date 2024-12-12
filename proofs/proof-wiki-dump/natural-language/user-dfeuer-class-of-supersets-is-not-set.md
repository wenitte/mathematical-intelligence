# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Class_of_Supersets_is_not_Set

Theorem
Let $x$ be a set.
Let $C$ be the class of all sets $y$ with the property that $x \subseteq y$.
Then $C$ is not a set.


Proof
Suppose for the sake of contradiction that $C$ is a set.
Then by the axiom of union, $\bigcup C$ is a set.
Let $p$ be a set.
By the axiom of union, $\{p\} \cup x$ is a set.
By User:Dfeuer/Subclass of Union, $x \subseteq \{ p \} \cup x$.
By the definition of $C$, $\{ p \} \cup x \in C$.
$p \in \{ p \} \cup x$ by User:Dfeuer/Subclass of Union
Thus $p \in \bigcup C$ by the definition of union.
Since this holds for all sets $p$, $\mathbb U \subseteq \bigcup C$.
Thus since User:Dfeuer/Subclass of Set is Set, $\mathbb U$ is a set.
But this contradicts User:Dfeuer/Universal Class is not Set.
So $C$ is not a set.
$\blacksquare$





