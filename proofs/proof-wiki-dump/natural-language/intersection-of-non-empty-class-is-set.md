# 

Source: https://proofwiki.org/wiki/Intersection_of_Non-Empty_Class_is_Set



Theorem
Let $A$ be a non-empty class.
Let $\bigcap A$ denote the intersection of $A$.

Then $\bigcap A$ is a set.


Corollary
Let $x$ be a non-empty set.
Let $\bigcap x$ denote the intersection of $x$.

Then $\bigcap x$ is a set.


Proof 1
Let $V$ denote the basic universe such that $A \subseteq V$.
We are given that $A$ is non-empty.
Then $\exists x \in A$ where $x$ is a set.
By definition of intersection of class, every element of $\bigcap A$ is an element of all elements of $A$.
Thus:

$\bigcap A \subseteq x$
We are given that $A$ is a subclass of the basic universe $V$.
Thus $x \in V$ by definition of basic universe.

By the Axiom of Swelledness, $V$ is a swelled class.
By definition of swelled class, every subclass of a set $x \in V$ is a set.
It follows $\bigcap A$ is a set.
$\blacksquare$


Proof 2
Since $A$ is a non-empty class, there exists $S \in A$.
Since $S$ is an element of a class, it is not a proper class, and is thus a set.
By definition of class intersection:

$x \in \bigcap A \implies x \in S$
By the subclass definition:

$\bigcap A \subseteq S$
By Subclass of Set is Set, $\bigcap A$ is a set.
$\blacksquare$





