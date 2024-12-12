# 

Source: https://proofwiki.org/wiki/Existence_of_Domain_of_Class_Relation

Theorem
Let $X$ be a class.
Then there is a unique class $Z$ such that:

$\forall u: u \in Z \iff \exists v: \tuple {u, v} \in X$
where $\tuple {\cdot, \cdot}$ represents the Kuratowski formalization of ordered pairs.
That is, $Z$ is the class of all $z$ which appear as the first coordinate of an ordered pair in $X$.


Proof
Let $X$ be arbitrary.
By Axiom $\text B 4$, there is a class $Z$ such that:

$\forall u: u \in Z \iff \exists v: \tuple {u, v} \in X$
This satisfies the existence portion of the theorem.
$\Box$
Let $Z'$ be a class such that:

$\forall u: u \in Z' \iff \exists v: \tuple {u, v} \in X$
Then, for every set $u$:

$u \in Z \iff \paren {\exists v: \tuple {u, v} \in X} \iff u \in Z'$
Therefore, by Axiom of Extension:

$Z = Z'$
satisfying the uniqueness portion of the theorem.
$\blacksquare$





