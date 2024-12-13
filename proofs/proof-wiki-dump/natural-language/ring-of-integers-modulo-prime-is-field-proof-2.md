# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Prime_is_Field/Proof_2

Theorem
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is a field.


Proof
Let $p$ be prime.
From Irreducible Elements of Ring of Integers, we have that $p$ is irreducible in the ring of integers $\struct {\Z, +, \times}$.
From Ring of Integers is Principal Ideal Domain, $\struct {\Z, +, \times}$ is a principal ideal domain.
Thus by Principal Ideal of Principal Ideal Domain is of Irreducible Element iff Maximal, $\ideal p$ is a maximal ideal of $\struct {\Z, +, \times}$.
Hence by Maximal Ideal iff Quotient Ring is Field, $\Z / \ideal p$ is a field.
But $\Z / \ideal p$ is exactly $\struct {\Z_p, +, \times}$.
$\Box$

Let $p$ be composite.
Then $p$ is not irreducible in $\struct {\Z, +, \times}$.
Thus by Principal Ideal of Principal Ideal Domain is of Irreducible Element iff Maximal, $\ideal p$ is not a maximal ideal of $\struct {\Z, +, \times}$.
Hence by Maximal Ideal iff Quotient Ring is Field, $\Z / \ideal p$ is not a field.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 63$. Construction of fields as factor rings




