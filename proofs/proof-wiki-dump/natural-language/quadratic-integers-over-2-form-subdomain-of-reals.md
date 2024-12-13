# 

Source: https://proofwiki.org/wiki/Quadratic_Integers_over_2_form_Subdomain_of_Reals



Theorem
Let $\Z \sqbrk {\sqrt 2}$ denote the set of quadratic integers over $2$:

$\Z \sqbrk {\sqrt 2} := \set {a + b \sqrt 2: a, b \in \Z}$
That is, all numbers of the form $a + b \sqrt 2$ where $a$ and $b$ are integers.

Then the algebraic structure:

$\struct {\Z \sqbrk {\sqrt 2}, +, \times}$
where $+$ and $\times$ are conventional addition and multiplication on real numbers, form an integral subdomain of the real numbers $\R$.


Proof 1
$\Z \sqbrk {\sqrt 2} \subseteq \R$ where $\R$ is the set of real numbers, so we immediately have that addition and multiplication are well-defined.


Closure
Let $a_1 + b_1 \sqrt 2, a_2 + b_2 \sqrt 2 \in \Z \sqbrk {\sqrt 2}$.
Then:














\(\ds \paren {a_1 + b_1 \sqrt 2} + \paren {a_2 + b_2 \sqrt 2}\)

\(=\)







\(\ds \paren {a_1 + a_2} + \paren {b_1 + b_2} \sqrt 2\)




















\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {\sqrt 2}\)
























\(\ds \paren {a_1 + b_1 \sqrt 2} \times \paren {a_2 + b_2 \sqrt 2}\)

\(=\)







\(\ds \paren {a_1 \times a_2 + 2 \times b_1 \times b_2} + \paren {a_1 \times b_2 + b_1 \times a_2} \sqrt 2\)




















\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {\sqrt 2}\)









So both the operations $+$ and $\times$ are closed on $\Z \sqbrk {\sqrt 2}$.
$\Box$


Associativity
We have that addition and multiplication are associative on $\R$.
Therefore it follows from Restriction of Associative Operation is Associative that they are also associative on $\Z \sqbrk {\sqrt 2}$.
$\Box$


Commutativity
We have that addition and multiplication are commutative on $\R$.
Therefore it follows from Restriction of Commutative Operation is Commutative that they are also commutative on $\Z \sqbrk {\sqrt 2}$.
$\Box$


Identities
We have:














\(\ds \paren {a + b \sqrt 2} + \paren {0 + 0 \sqrt 2}\)

\(=\)







\(\ds \paren {a + 0} + \paren {b + 0} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds a + b \sqrt 2\)









and similarly for $\paren {0 + 0 \sqrt 2} + \paren {a + b \sqrt 2}$.
So $\paren {0 + 0 \sqrt 2}$ is the identity for $+$ on $\Z \sqbrk {\sqrt 2}$.

Then:














\(\ds \paren {a + b \sqrt 2} \times \paren {1 + 0 \sqrt 2}\)

\(=\)







\(\ds \paren {a \times 1 + 2 \times b \times 0} + \paren {b \times 1 + a \times 0} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds a + b \sqrt 2\)









and similarly for $\paren {a + b \sqrt 2} \times \paren {1 + 0 \sqrt 2}$.
So $\paren {1 + 0 \sqrt 2}$ is the identity for $\times$ on $\Z \sqbrk {\sqrt 2}$.
$\Box$


Inverses
We have:














\(\ds \paren {a + b \sqrt 2} + \paren {-a + \paren {-b} \sqrt 2}\)

\(=\)







\(\ds \paren {a - a} + \paren {b - b} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds 0 + 0 \sqrt 2\)









and similarly for $\paren {-a + \paren {-b} \sqrt 2} + \paren {a + b \sqrt 2}$.
So $\paren {-a + \paren {-b} \sqrt 2}$ is the inverse of $\paren {a + b \sqrt 2}$ for $+$ on $\Z \sqbrk {\sqrt 2}$.

We have no need to investigate inverses for $\times$ (which is convenient as $\times$ happens not to be closed for inverses on $\Z \sqbrk {\sqrt 2}$).
$\Box$


Distributivity
We have that Real Multiplication Distributes over Addition, so by Restriction of Operation Distributivity, $\times$ is distributive over $+$ on $\Z \sqbrk {\sqrt 2}$.
$\Box$


Divisors of Zero
By Real Numbers form Field, $\R$ is a field and so by Field is Integral Domain is itself an integral domain.
Hence it has no proper zero divisors.
$\Box$

The result follows by putting all the pieces together.
$\blacksquare$


Proof 2
From Integers form Subdomain of Reals, $\struct {\Z, +, \times}$ is an integral subdomain of the real numbers $\R$.
We have that $\sqrt 2 \in \R$.
Every expression of the form:

$a_0 + a_1 \sqrt 2 + a_2 \paren {\sqrt 2}^2 + \cdots + a_n \paren {\sqrt 2}^n$
can be simplified to a number of the form $a + b \sqrt 2$, where $a, b \in \Z$.
The result follows from Set of Polynomials over Integral Domain is Subring.


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): integral domain




