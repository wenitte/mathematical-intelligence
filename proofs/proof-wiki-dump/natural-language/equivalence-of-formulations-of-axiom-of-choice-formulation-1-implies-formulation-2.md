# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice/Formulation_1_implies_Formulation_2



Theorem
The following formulation of the Axiom of Choice:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.

implies the following formulation of the Axiom of Choice:

Formulation 2
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of sets all of which are non-empty, indexed by $I$ which is also non-empty.
Then there exists an indexed family $\family {x_i}_{i \mathop \in I}$ such that:

$\forall i \in I: x_i \in X_i$

That is, the Cartesian product of a non-empty family of sets which are non-empty is itself non-empty.


Proof
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of sets all of which are non-empty, indexed by $I$ which is also non-empty.
By hypothesis, Formulation 1 holds.
That is, there exists a choice function on every set of non-empty sets.
Let $f$ be a choice function on $\set{X_i}$.
Let $x_i = \map f {X_i}$.
By definition of choice function, each $x_i \in X_i$.
Therefore, $\family {x_i}_{i \mathop \in I}$ satisfies Formulation 2.
$\blacksquare$





