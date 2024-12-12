# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Cardinality_of_Finite_Class



Theorem
The following definitions of the concept of Cardinality of Finite Class are equivalent:

Definition 1
Let $A$ be such that:

there exists a bijection $\phi$ from $A$ to $n$
where $n$ is a natural number as defined by the von Neumann construction.
Then $A$ has cardinality $n$.

Definition 2
Let $A$ be such that:

there exists a bijection $\phi$ from $A$ to the set $\set {1, 2, \dotsc, n} = n^+ \setminus \set 0$
where:

$n$ is a natural number as defined by the von Neumann construction
$n^+$ is the successor of $n$.
Then $A$ has cardinality $n$.


Proof
Let $A_1$ be the class which has a bijection $\phi_1$ from $A_1$ to $n$.
Let $A_2$ be the class which has a bijection $\phi_2$ from $A_2$ to $n^+ \setminus \set 0$.
Consider the mapping $\phi: A_1 \to A_2$ defined as:

$\forall k \in n: \map {\phi_1} k = k^+$
$\phi$ is trivially a bijection.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 6$ Finite Sets




