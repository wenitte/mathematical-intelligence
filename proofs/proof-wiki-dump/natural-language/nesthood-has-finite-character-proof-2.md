# 

Source: https://proofwiki.org/wiki/Nesthood_has_Finite_Character/Proof_2



Theorem
Let $P$ be the property of sets defined as:

$\forall x: \map P x$ denotes that $x$ is a nest.
Then $P$ is of finite character.
That is:

$x$ is a nest
if and only if:

every finite subset of $x$ is a nest.


Proof
By definition, a nest is a class on which $\subseteq$ is a total ordering.


Sufficient Condition
Let $x$ be a nest.
Let $y \subseteq x$.
From Restriction of Total Ordering is Total Ordering it follows that $y$ is also a nest.
This holds in particular if $y$ is a finite set.
Hence the result.
$\Box$


Necessary Condition
Suppose that every finite subset of $x$ is a nest.

We have that Subset Relation is Ordering.
It remains to show that $\subseteq$ is total.

Let $y, y' \in x$ be arbitrary.
Since $\set {y, y'}$ is a finite subset of $x$, it is a nest.
Therefore, either $y \subseteq y'$ or $y' \subseteq y$.
Since $y, y'$ were arbitrary, it follows that $x$ is also a nest.
$\blacksquare$





