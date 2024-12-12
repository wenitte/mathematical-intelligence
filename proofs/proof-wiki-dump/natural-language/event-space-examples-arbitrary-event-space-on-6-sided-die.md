# 

Source: https://proofwiki.org/wiki/Event_Space/Examples/Arbitrary_Event_Space_on_6-Sided_Die

Example of Event Space
Let $\EE$ be the experiment of throwing a standard $6$-sided die.
The sample space of $\EE$ is $\Omega = \set {1, 2, 3, 4, 5, 6}$.
Let $\FF$ be the arbitrary set of subsets of $\Omega$ defined as:

$\FF = \set {\O, \set {1, 2}, \set {3, 4}, \set {5, 6}, \set {1, 2, 3, 4}, \set {3, 4, 5, 6}, \set {1, 2, 5, 6}, \Omega}$
Then $E$ is an event space of $\EE$.


Proof
Event Space Axiom $(\text {ES} 1)$

It is specified that $\O \in \FF$.
Thus axiom $(\text {ES} 1)$ is fulfilled.
$\Box$


Event Space Axiom $(\text {ES} 2)$

It is specified that $\Omega \in \FF$.
Thus axiom $(\text {ES} 2)$ is fulfilled.
$\Box$


Event Space Axiom $(\text {ES} 3)$

We investigate the unions of elements of $\Omega$.
From Union with Superset is Superset, it is unnecessary to investigate the union of any element of $\Omega$ with a subset of it.
We continue:














\(\ds \set {1, 2} \cup \set {3, 4}\)

\(=\)







\(\ds \set {1, 2, 3, 4}\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2} \cup \set {5, 6}\)

\(=\)







\(\ds \set {1, 2, 5, 6}\)

\(\ds \in \Omega\)


















\(\ds \set {3, 4} \cup \set {5, 6}\)

\(=\)







\(\ds \set {3, 4, 5, 6}\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2} \cup \set {3, 4} \cup \set {5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2, 3, 4} \cup \set {1, 2, 5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2, 3, 4} \cup \set {3, 4, 5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2, 5, 6} \cup \set {3, 4, 5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {1, 2} \cup \set {3, 4, 5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {3, 4} \cup \set {1, 2, 5, 6}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)


















\(\ds \set {5, 6} \cup \set {1, 2, 3, 4}\)

\(=\)







\(\ds \set {1, 2, 3, 4, 5, 6} = \Omega\)

\(\ds \in \Omega\)







$\Box$

All the event space axioms are seen to be fulfilled by $\powerset \Omega$.
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Example $6$




