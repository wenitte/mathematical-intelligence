# 

Source: https://proofwiki.org/wiki/Nesthood_has_Finite_Character



Theorem
Let $P$ be the property of sets defined as:

$\forall x: \map P x$ denotes that $x$ is a nest.
Then $P$ is of finite character.
That is:

$x$ is a nest
if and only if:

every finite subset of $x$ is a nest.


Proof 1
By definition, a nest $N$ is a class on which $\subseteq$ is a total ordering.
Here we are given that $N$ is a set.
The result follows from Property of being Totally Ordered is of Finite Character.
$\blacksquare$


Proof 2
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


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles




