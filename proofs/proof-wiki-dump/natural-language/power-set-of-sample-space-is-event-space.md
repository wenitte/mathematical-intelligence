# 

Source: https://proofwiki.org/wiki/Power_Set_of_Sample_Space_is_Event_Space



Theorem
Let $\EE$ be an experiment whose sample space is $\Omega$.
Let $\powerset \Omega$ be the power set of $\Omega$.

Then $\powerset \Omega$ is an event space of $\EE$.


Proof 1
Let $\powerset \Omega := \Sigma$.


Event Space Axiom $(\text {ES} 1)$

From Empty Set is Subset of All Sets we have that $\O \subseteq \Omega$.
By the definition of power set:

$\O \in \Sigma$
thus fulfilling axiom $(\text {ES} 1)$.
$\Box$


Event Space Axiom $(\text {ES} 2)$

Let $A \in \Sigma$.
Then by the definition of power set:

$A \subseteq \Omega$
From Set with Relative Complement forms Partition:

$\Omega \setminus A \subseteq \Omega$
and so by the definition of power set:

$\Omega \setminus A \in \Sigma$
thus fulfilling axiom $(\text {ES} 2)$.
$\Box$


Event Space Axiom $(\text {ES} 3)$

Let $\sequence {A_i}$ be a countably infinite sequence of sets in $\Sigma$.
Then from Power Set is Closed under Countable Unions:

$\ds \bigcup_{i \mathop \in \N} A_i \in \Sigma$
thus fulfilling axiom $(\text {ES} 3)$.
$\Box$

All the event space axioms are seen to be fulfilled by $\powerset \Omega$.
Hence the result.
$\blacksquare$


Proof 2
For $\powerset \Omega$ to be an event space of $\EE$, it needs to fulfil the following properties:

$(1): \quad \powerset \Omega \ne \O$, that is, an event space can not be empty.
$(2): \quad$ If $A \in \powerset \Omega$, then $\relcomp \Omega A \in \powerset \Omega$, that is, the complement of $A$ relative to $\Omega$, is also in $\powerset \Omega$.
$(3): \quad$ If $A_1, A_2, \ldots \in \powerset \Omega$, then $\ds \bigcup_{i \mathop = 1}^\infty A_i \in \powerset \Omega$, that is, the union of any countable collection of elements of $\powerset \Omega$ is also in $\powerset \Omega$.

These all follow directly from Power Set is Sigma-Algebra.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Example $4$




