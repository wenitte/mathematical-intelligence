# 

Source: https://proofwiki.org/wiki/Reflexive_Euclidean_Relation_is_Equivalence



Theorem
A relation is an equivalence if and only if it is either left-Euclidean or right-Euclidean, and also reflexive.


Proof
Sufficient Condition
Let $\RR$ be an equivalence relation.
Then by definition it is reflexive.

It is also transitive and symmetric.

So, let $x, y, z \in \RR$ such that $x \mathrel \RR y$ and $x \mathrel \RR z$.
From symmetry, we have $y \mathrel \RR x$, and by transitivity it follows that $y \mathrel \RR z$.
Hence $\RR$ is right-Euclidean.

Now let $x, y, z \in \RR$ such that $x \mathrel \RR z$ and $y \mathrel \RR z$.
From symmetry, we have $z \mathrel \RR y$, and by transitivity it follows that $x \mathrel \RR y$.
Hence $\mathrel \RR$ is left-Euclidean.

So $\mathrel \RR$ is both left-Euclidean and right-Euclidean.
We know by definition that it is reflexive.
Thus an equivalence relation is both left-Euclidean and right-Euclidean and also reflexive.


Necessary Condition
Let $\RR$ be a relation which is both left-Euclidean and reflexive.
Checking in turn each of the criteria for equivalence:


Reflexive
By definition, $\RR$ has been defined as a relation which is reflexive.


Symmetric
Suppose $x \mathrel \RR y$.
We have that $y \mathrel \RR y$ from the reflexivity of $\RR$.
So we have $y \mathrel \RR y$ and $x \mathrel \RR y$, and so $y \mathrel \RR x$ from the fact that $\RR$ is left-Euclidean.
Hence $\RR$ is symmetric.


Transitive
Suppose $x \mathrel \RR y$ and $y \mathrel \RR z$.
As $\RR$ is symmetric (from above), we have that $z \mathrel \RR y$.
So we have $x \mathrel \RR y$ and $z \mathrel \RR y$, and by the fact that $\RR$ is left-Euclidean, we have that $x \mathrel \RR z$.

So, if $\RR$ be a relation which is both left-Euclidean and reflexive, it is also an equivalence relation.

A similar argument shows that if $\RR$ be a relation which is both right-Euclidean and reflexive, it is also an equivalence relation.
$\blacksquare$





