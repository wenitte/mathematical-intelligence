# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice/Formulation_2_implies_Formulation_1



Theorem
The following formulation of the Axiom of Choice:

Formulation 2
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of sets all of which are non-empty, indexed by $I$ which is also non-empty.
Then there exists an indexed family $\family {x_i}_{i \mathop \in I}$ such that:

$\forall i \in I: x_i \in X_i$

That is, the Cartesian product of a non-empty family of sets which are non-empty is itself non-empty.

implies the following formulation of the Axiom of Choice:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.


Proof
Suppose that Formulation 2 holds.
That is, the Cartesian product of a non-empty family of non-empty sets is non-empty.
Let $\CC$ be a non-empty set of non-empty sets.
$\CC$ may be converted into an indexed set by using $\CC$ itself as the indexing set and using the identity mapping on $\CC$ to do the indexing.
Then the Cartesian product of all the sets in $\CC$ has at least one element.
An element of such a Cartesian product is a mapping, that is a family whose domain is the indexing set which in this context is $\CC$.
The value of this mapping at each index is an element of the set which bears that index.
So we have a mapping $f$ whose domain is $\CC$ such that:

$A \in \CC \implies \map f A \in A$

Now let $\CC$ be the set of all non-empty subsets of some set $X$.
Then the assertion means that there exists a mapping $f$ whose domain is $\powerset X \setminus \set \O$ such that:

$A \in \powerset X \setminus \set \O \implies \map f A \in A$
That is, Formulation 1 holds.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 15$: The Axiom of Choice




