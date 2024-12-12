# 

Source: https://proofwiki.org/wiki/Event_Space_from_Single_Subset_of_Sample_Space

Theorem
Let $\EE$ be an experiment whose sample space is $\Omega$.
Let $\O \subsetneqq A \subsetneqq \Omega$.

Then $\Sigma := \set {\O, A, \Omega \setminus A, \Omega}$ is an event space of $\EE$.


Proof
Event Space Axiom $(\text {ES} 1)$

From its definition:

$\Sigma \ne \O$
thus fulfilling axiom $(\text {ES} 1)$.
$\Box$


Event Space Axiom $(\text {ES} 2)$

From Set Difference with Empty Set is Self:

$\Omega \setminus \O = \Omega \in \Sigma$
From Set Difference with Self is Empty Set:

$\Omega \setminus \Omega = \O \in \Sigma$
By definition:

$\Omega \setminus A \in \Sigma$
From Relative Complement of Relative Complement:

$\Omega \setminus \paren {\Omega \setminus A} = A \in \Sigma$
Thus axiom $(\text {ES} 2)$ is fulfilled.
$\Box$


Event Space Axiom $(\text {ES} 3)$

From Union with Empty Set:

$\forall X \in \Sigma: X \cup \O = X \in \Sigma$
From Union with Superset is Superset:

$\forall X \in \Sigma: X \cup \Sigma = \Sigma \in \Sigma$
From Set Union is Idempotent:

$\forall X \in \Sigma: X \cup X = X \in \Sigma$
From Union with Relative Complement:

$A \cup \paren {\Omega \setminus A} = \Sigma \in \Sigma$
It follows that axiom $(\text {ES} 3)$ is fulfilled.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Example $5$




