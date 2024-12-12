# 

Source: https://proofwiki.org/wiki/Finite_Class_is_Set



Theorem
Let $A$ be a finite class.
Then $A$ is a set.


Proof
Let it be assumed that all classes are subclasses of a basic universe $V$.

The proof proceeds by induction.
For all $n \in \N$, let $\map P n$ be the proposition:

If $A$ is a finite class with $n$ elements, then $A$ is a set.

The Axiom of the Empty Set gives that the empty class $\O$ is a set.
From Empty Set is Unique, $\O$ is the only set (and hence class) with $0$ elements.
Thus $\map P 0$ is seen to hold.


Basis for the Induction
Let $A$ be a singleton class.
Thus by definition it has $1$ element, which we will call $x$.

Aiming for a contradiction, suppose $x$ is a class containing $1$ or more elements, one of which we may call $y$.
We have that $A$ is a subclass of $V$.
As $V$ is a basic universe, the Axiom of Transitivity holds.
Hence:

$y \in x \land x \in A \implies y \in A$
But then $x \in A$ and $y \in A$ where $x \ne y$.
This contradicts our assertion that $A$ is a singleton class.
Hence:

$x = \O$

It has been established that $\O$ is a set.
Hence $A$ is a class whose $1$ element is a set.
From Singleton Class of Set is Set, it follows that $A$ is a set.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

If $A$ is a finite class with $k$ elements, then $A$ is a set.

from which it is to be shown that:

If $A$ is a finite class with $k + 1$ elements, then $A$ is a set.


Induction Step
This is the induction step:
Let $A$ have $k + 1$ elements.
Let each of those elements be assigned a label:

$a_1, a_2, \ldots, a_{k + 1}$
according to a bijection $\phi: A \to k$:

$\map \phi {a_k} = k - 1$
This bijection $\phi$ is guaranteed to exist by definition of finite class.
Consider $A$ as the union of the classes:

$\set {a_1, a_2, \ldots, a_k} \cup \set {a_{k + 1} }$
By the basis for the induction:

$\set {a_{k + 1} }$ is a set.
By the induction hypothesis:

$\set {a_1, a_2, \ldots, a_k}$ is a set.
By the Axiom of Unions:

$\set {a_1, a_2, \ldots, a_k} \cup \set {a_{k + 1} }$ is a set.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for all $\forall n \in \N$:

If $A$ is a finite class with $n$ elements, then $A$ is a set.
That is, all finite classes are sets.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 6$ Finite Sets: Exercise $6.1 \ (1)$




