# 

Source: https://proofwiki.org/wiki/Power_Set_of_Sample_Space_is_Event_Space/Proof_2

Theorem
Let $\EE$ be an experiment whose sample space is $\Omega$.
Let $\powerset \Omega$ be the power set of $\Omega$.

Then $\powerset \Omega$ is an event space of $\EE$.


Proof
For $\powerset \Omega$ to be an event space of $\EE$, it needs to fulfil the following properties:

$(1): \quad \powerset \Omega \ne \O$, that is, an event space can not be empty.
$(2): \quad$ If $A \in \powerset \Omega$, then $\relcomp \Omega A \in \powerset \Omega$, that is, the complement of $A$ relative to $\Omega$, is also in $\powerset \Omega$.
$(3): \quad$ If $A_1, A_2, \ldots \in \powerset \Omega$, then $\ds \bigcup_{i \mathop = 1}^\infty A_i \in \powerset \Omega$, that is, the union of any countable collection of elements of $\powerset \Omega$ is also in $\powerset \Omega$.

These all follow directly from Power Set is Sigma-Algebra.
$\blacksquare$





