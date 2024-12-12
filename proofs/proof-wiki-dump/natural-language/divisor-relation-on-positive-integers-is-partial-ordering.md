# 

Source: https://proofwiki.org/wiki/Divisor_Relation_on_Positive_Integers_is_Partial_Ordering



Theorem
The divisor relation is a partial ordering of $\Z_{>0}$.


Proof
Checking in turn each of the criteria for an ordering:


Divisor Relation is Reflexive
From Integer Multiplication Identity is One:

$\forall n \in \Z: 1 \cdot n = n = n \cdot 1$
thus demonstrating that $n$ is a divisor of itself.
$\blacksquare$


Divisor Relation is Transitive
$\forall x, y, z \in \Z: x \divides y \land y \divides z \implies x \divides z$:













\(\ds x\)

\(\divides\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists q_1 \in \Z: \, \)



\(\ds q_1 x\)

\(=\)







\(\ds y\)





Definition of Divisor of Integer














\(\ds y\)

\(\divides\)







\(\ds z\)














\(\ds \leadsto \ \ \)

\(\ds \exists q_2 \in \Z: \, \)



\(\ds q_2 y\)

\(=\)







\(\ds z\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds q_2 \paren {q_1 x}\)

\(=\)







\(\ds z\)





substituting for $y$








\(\ds \leadsto \ \ \)





\(\ds \paren {q_2 q_1} x\)

\(=\)







\(\ds z\)





Integer Multiplication is Associative








\(\ds \leadsto \ \ \)

\(\ds \exists q \in \Z: \, \)



\(\ds q x\)

\(=\)







\(\ds z\)





where $q = q_1 q_2$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\divides\)







\(\ds z\)





Definition of Divisor of Integer



$\blacksquare$


Divisor Relation is Antisymmetric
Let $a, b \in \Z_{> 0}$ such that $a \divides b$ and $b \divides a$.
Then:














\(\ds a \divides b\)

\(\implies\)







\(\ds \size a \le \size b\)





Absolute Value of Integer is not less than Divisors














\(\ds b \divides a\)

\(\implies\)







\(\ds \size b \le \size a\)





Absolute Value of Integer is not less than Divisors














\(\ds \)

\(\leadsto\)







\(\ds \size a = \size b\)










If we restrict ourselves to the domain of positive integers, we can see:

$\forall a, b \in \Z_{>0}: a \divides b \land b \divides a \implies a = b$
$\blacksquare$


Divisor Ordering is Partial
Let $a = 2$ and $b = 3$.
Then neither $a \divides b$ nor $b \divides a$.
Thus, while the divisor relation is an ordering, it is specifically a partial ordering
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Example $14.4$
1967: Garrett Birkhoff: Lattice Theory (3rd ed.) ... (previous) ... (next): $\S \text I.1$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 3.1$: Partially ordered sets: Example $4$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Example $7.2$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.5$: Ordered Sets: $\text{(ii)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: $(2)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): partial order
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): partial order




