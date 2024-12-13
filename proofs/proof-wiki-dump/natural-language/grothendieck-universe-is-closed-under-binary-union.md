# 

Source: https://proofwiki.org/wiki/Grothendieck_Universe_is_Closed_under_Binary_Union

Theorem
Let $\mathbb U$ be a Grothendieck universe.
Let $u, v \in \mathbb U$.

Then $u \cup v \in \mathbb U$.


Proof
If $\mathbb U = \O$, the claim is true.
Assume $\mathbb U \ne \O$.
By Nonempty Grothendieck Universe contains Von Neumann Natural Numbers, every von Neumann natural number is an element of $\mathbb U$.
In particular:

$2 = \set {\O, \set \O} \in \mathbb U$
Using $2$ as an indexing set, we remember that $0 = \O$ and $1 = \set \O$, and define:














\(\ds w_0\)

\(:=\)







\(\ds u\)




















\(\ds w_1\)

\(:=\)







\(\ds v\)









This sets up the structures needed to exploit Grothendieck Universe: Axiom $(4)$ below.

Then:














\(\ds u, v\)

\(\in\)







\(\ds \mathbb U\)














\(\ds \leadsto \ \ \)





\(\ds \set {u, v}\)

\(\in\)







\(\ds \mathbb U\)





Grothendieck Universe: Axiom $(2)$








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{i \mathop \in 2} w_i = u \cup v\)

\(\in\)







\(\ds \mathbb U\)





Grothendieck Universe: Axiom $(4)$



$\blacksquare$





