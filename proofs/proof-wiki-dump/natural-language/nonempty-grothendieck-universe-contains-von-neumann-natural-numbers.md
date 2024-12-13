# 

Source: https://proofwiki.org/wiki/Nonempty_Grothendieck_Universe_contains_Von_Neumann_Natural_Numbers



Theorem
Let $\mathbb U$ be a non-empty Grothendieck universe.
Let $\N$ denote the set of von Neumann natural numbers.

Then $\N$ is a subset of $\mathbb U$.


Proof
We prove the claim by induction.


Basis for the Induction
By Empty Set is Element of Nonempty Grothendieck Universe $\O \in \mathbb U$.
$\Box$


Induction hypothesis
For some fixed $n \in \N$, we have $n \in \mathbb U$.


Induction Step
We have to show, that $n + 1 \in \mathbb U$.














\(\ds n\)

\(\in\)







\(\ds \mathbb U\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \powerset n\)

\(\in\)







\(\ds \mathbb U\)





Grothendieck Universe: Axiom $(3)$








\(\ds \leadsto \ \ \)





\(\ds \set n \cup n\)

\(\in\)







\(\ds \mathbb U\)





Grothendieck Universe is Closed under Subset and $\set n \cup n \subseteq \powerset n$














\(\ds n + 1\)

\(=\)







\(\ds \set n \cup n\)





Definition of Von Neumann Construction of Natural Numbers








\(\ds \leadsto \ \ \)





\(\ds n + 1\)

\(\in\)







\(\ds \mathbb U\)









$\blacksquare$





