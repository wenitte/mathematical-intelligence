# 

Source: https://proofwiki.org/wiki/Cyclotomic_Ring/Examples/5th

Examples of Cyclotomic Rings
The $5$th cyclotomic ring is the algebraic structure:

$\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$
where $\Z \sqbrk {i \sqrt 5}$ is the set $\set {a + i b \sqrt 5: a, b \in \Z}$.
$\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ is a ring.


Proof
We have that $\Z \sqbrk {i \sqrt 5}$ is a subset of the Field of Complex Numbers $\struct {\C, +, \times}$.
So to prove that $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ is a ring it is sufficient to demonstrate that $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ fulfils the conditions of the Subring Test.

First we note that setting $a = 1, b = 0$ we have that $1 + 0 i \in \Z \sqbrk {i \sqrt 5}$ and so $\Z \sqbrk {i \sqrt 5} \ne \O$.

Let $z_1 = a_1 + i b_1 \sqrt 5$ and $z_2 = a_2 + i b_2 \sqrt 5$ be arbitrary elements of $\Z \sqbrk {i \sqrt 5}$
Then:














\(\ds z_1 - z_2\)

\(=\)







\(\ds \paren {a_1 + i b_1 \sqrt 5} - \paren {a_2 + i b_2 \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 - a_2} + i \paren {b_1 - b_2} \sqrt 5\)





Definition of Complex Addition














\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {i \sqrt 5}\)





as $a_1 - a_2$ and $b_1 - b_2$ are both integers




and:














\(\ds z_1 z_2\)

\(=\)







\(\ds \paren {a_1 + i b_1 \sqrt 5} \paren {a_2 + i b_2 \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 a_2 - 5 b_1 b_2} + i \sqrt 5 \paren {a_1 b_2 + a_2 b_1}\)





Definition of Complex Multiplication














\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {i \sqrt 5}\)





as $a_1 a_2 - 5 b_1 b_2$ and $a_1 b_2 + a_2 b_1$ are both integers



The Subring Test is satisfied, and so $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ is a ring.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $19$




