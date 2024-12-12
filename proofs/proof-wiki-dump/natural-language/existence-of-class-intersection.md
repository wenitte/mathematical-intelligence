# 

Source: https://proofwiki.org/wiki/Existence_of_Class_Intersection

Theorem
For any classes $X, Y$, the intersection $X \cap Y$ exists and is unique.
That is:

$\forall X, Y: \exists! Z: \forall u: u \in Z \iff u \in X \land u \in Y$
where $X \cap Y := Z$.


Proof
Let $X, Y$ be arbitrary.
By Axiom $\text B 2$, there is some class $Z$ such that:

$\forall u: u \in Z \iff u \in X \land u \in Y$
satisfying the existence portion of the theorem.
$\Box$
Now, let some $Z'$ satisfy:

$\forall u: u \in Z' \iff u \in X \land u \in Y$
For each set $u$:

$u \in Z \iff u \in X \land u \in Y \iff u \in Z'$
and thus:

$u \in Z \iff u \in Z'$
Thus, by Axiom of Extension:

$Z = Z'$
satisfying the uniqueness portion of the theorem.
$\blacksquare$





