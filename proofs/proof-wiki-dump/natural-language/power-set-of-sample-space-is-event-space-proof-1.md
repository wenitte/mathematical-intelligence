# 

Source: https://proofwiki.org/wiki/Power_Set_of_Sample_Space_is_Event_Space/Proof_1

Theorem
Let $\EE$ be an experiment whose sample space is $\Omega$.
Let $\powerset \Omega$ be the power set of $\Omega$.

Then $\powerset \Omega$ is an event space of $\EE$.


Proof
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





