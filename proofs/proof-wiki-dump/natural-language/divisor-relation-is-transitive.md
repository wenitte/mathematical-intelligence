# 

Source: https://proofwiki.org/wiki/Divisor_Relation_is_Transitive



Theorem
The divisibility relation is a transitive relation on $\Z$, the set of integers.
That is:

$\forall x, y, z \in \Z: x \divides y \land y \divides z \implies x \divides z$


Proof 1
We have that Integers form Integral Domain.
The result then follows directly from Divisor Relation in Integral Domain is Transitive.
$\blacksquare$


Proof 2













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


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 6$: The division process in $I$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 11.3$: The division algorithm
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.1$ Divisibility of integers
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 2 \ (4)$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: $\mathbf D. \, 1$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization: $\text {(iv)}$




