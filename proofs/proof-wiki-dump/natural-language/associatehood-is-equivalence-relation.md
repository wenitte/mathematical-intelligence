# 

Source: https://proofwiki.org/wiki/Associatehood_is_Equivalence_Relation



Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.
Let $\sim$ be the relation defined on $D$ as:

$\forall x, y \in D: x \sim y$ if and only if $x$ is an associate of $y$

Then $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive
Clearly $x \divides x$ as $x = 1_D \circ x$, so $x \sim x$.
Thus $\sim$ is reflexive.
$\Box$


Symmetric
By the definition:

$x \sim y \iff x \divides y \land y \divides x \iff y \sim x$
Thus $\sim$ is symmetric.
$\Box$


Transitive













\(\ds \)

\(\)







\(\ds x \sim y \land y \sim z\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {x \divides y \land y \divides x} \land \paren {y \divides z \land z \divides y}\)





Definition 1 of Associate














\(\ds \)

\(\leadsto\)







\(\ds \paren {x \divides y \land y \divides z} \land \paren {z \divides y \land y \divides x}\)





Rule of Association and Rule of Commutation














\(\ds \)

\(\leadsto\)







\(\ds x \divides z \land z \divides x\)





Divisor Relation in Integral Domain is Transitive














\(\ds \)

\(\leadsto\)







\(\ds x \sim z\)





Definition 1 of Associate



Thus $\sim$ is transitive.
$\Box$

All criteria are fulfilled for $\sim$ to be an equivalence relation.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Exercise $24.18 \ \text{(a)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 62.2$ Factorization in an integral domain




