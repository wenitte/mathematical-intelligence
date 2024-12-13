# 

Source: https://proofwiki.org/wiki/Interior_of_Set_of_Real_Numbers_in_Complex_Numbers_is_Empty

Theorem
Let $\tuple {\C, d}$ be the complex Euclidean space.
Let $\R$ be the subspace of real numbers.

Then the interior of $\R$ in $\C$ is the empty set $\O$.


Corollary
Let $\tuple {\C, d}$ be the complex Euclidean space.
Consider $S \subseteq \R$ as a topological subspace of $\tuple {\C, d}$.

Then the interior of $S$ in $\C$ is the empty set $\O$.


Proof
Aiming for a contradiction, suppose that: 

$\R^\circ \ne \O$
Let $x \in \R^\circ$.
From the definition of an open subset of $\C$, there exists $\epsilon > 0$ such that:

$\set {z \in \C : \cmod {z - x} < \epsilon} \subseteq \R^\circ$
Consider:

$\ds z = x + \frac \epsilon 2 i \in \C \setminus \R$
Then, we have:

$\ds \cmod {z - x} = \cmod {x + \frac \epsilon 2 i - x} = \frac \epsilon 2 < \epsilon$
Hence $z \in \R^\circ$.
But by the definition of interior, we have $\R^\circ \subseteq \R$. 
This contradicts the fact that $z \in \C \setminus \R$.
$\blacksquare$





