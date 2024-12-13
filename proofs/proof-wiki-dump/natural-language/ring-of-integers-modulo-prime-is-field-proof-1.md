# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Prime_is_Field/Proof_1



Theorem
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is a field.


Proof
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


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $5$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 89$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.2$: Properties of $\Z_m$ as an algebraic system




