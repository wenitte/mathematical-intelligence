# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Prime_is_Field



Theorem
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is a field.


Corollary
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is an integral domain.


Proof 1
Prime Modulus
$\struct {\Z_m, +, \times}$‎ is a commutative ring with unity by definition.
From Reduced Residue System under Multiplication forms Abelian Group, $\struct {\Z'_m, \times}$ is an abelian group.
$\Z'_m$ consists of all the elements of $\Z_m$ coprime to $m$.

Now when $m$ is prime, we have, from Reduced Residue System Modulo Prime:

$\Z'_m = \set {\eqclass 1 m, \eqclass 2 m, \ldots, \eqclass {m - 1} m}$
That is:

$\Z'_m = \Z_m \setminus \set {\eqclass 0 m}$
where $\setminus$ denotes set difference.
Hence the result.
$\Box$


Composite Modulus
Now suppose $m \in \Z: m \ge 2$ is composite.
From Ring of Integers Modulo Composite is not Integral Domain, $\struct {\Z_m, +, \times}$ is not an integral domain.
From Field is Integral Domain $\struct {\Z_m, +, \times}$ is not a field.
$\blacksquare$


Proof 2
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


Proof 3
Let $m$ be prime.
From Ring of Integers Modulo Prime is Integral Domain, $\struct {\Z_m, +, \times}$ is an integral domain.
Let $\eqclass a m \ne \eqclass 0 m$ be a residue class modulo $m$.
We need to find a residue class modulo $m$ $\eqclass x m$ such that $\eqclass a m \eqclass x m = \eqclass 1 m$.
Because $m$ is prime and $m \nmid a$, we have:

$\gcd \set {a, m} = 1$
Hence from Bézout's Identity:

$1 = x a + y m$
for some $x, y \in \Z$.
Thus we have:














\(\ds \eqclass a m \eqclass x m\)

\(=\)







\(\ds \eqclass {a x} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {1 - y m} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 m\)









So every non-zero residue class modulo $m$ has an inverse.
So by definition $\struct {\Z_m, +, \times}$ is a field.
$\Box$

Now suppose $m \in \Z: m \ge 2$ is composite.
From Ring of Integers Modulo Composite is not Integral Domain, $\struct {\Z_m, +, \times}$ is not an integral domain.
From Field is Integral Domain $\struct {\Z_m, +, \times}$ is not a field.
$\blacksquare$


Proof 4
Let $m$ be prime.
From Ring of Integers Modulo Prime is Integral Domain, $\struct {\Z_m, +, \times}$ is an integral domain.
From Finite Integral Domain is Galois Field, $\struct {\Z_m, +, \times}$ is a field.
$\Box$

Now suppose $m \in \Z: m \ge 2$ is composite.
From Ring of Integers Modulo Composite is not Integral Domain, $\struct {\Z_m, +, \times}$ is not an integral domain.
From Field is Integral Domain $\struct {\Z_m, +, \times}$ is not a field.
$\blacksquare$


Also see
Definition:Field of Integers Modulo Prime
Definition:Galois Field


Sources
1967: John D. Dixon: Problems in Group Theory ... (previous) ... (next): Introduction: Notation
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 55$. Special types of ring and ring elements: $(4)$




