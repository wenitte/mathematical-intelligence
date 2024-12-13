# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Inversion_Formula



Theorem
Let $f$ and $g$ be arithmetic functions.

Then:

$(1): \quad \ds \map f n = \sum_{d \mathop \divides n} \map g d$
if and only if:

$(2): \quad \ds \map g n = \sum_{d \mathop \divides n} \map f d \, \map \mu {\frac n d}$
where:

$d \divides n$ denotes that $d$ is a divisor of $n$
$\mu$ is the Möbius function.


Abelian Group
Let $G$ be an abelian group.
Let $f, g: \N \to G$ be mappings.

Then

$\ds \map f n = \prod_{d \mathop \divides n} \map g d$
if and only if:

$\ds \map g n = \prod_{d \mathop \divides n} \map f d^{\mu \paren {\frac n d} }$


Proof
Let $u$ be the unit arithmetic function and $\iota$ the identity arithmetic function.
Let $*$ denote Dirichlet convolution.
Then equation $(1)$ states that $f = g * u$ and  $(2)$ states that $g = f * \mu$.
The proof rests on the following facts:
By Sum of Möbius Function over Divisors:

$\mu * u = \iota$
By Properties of Dirichlet Convolution, Dirichlet convolution is commutative, associative and $h * \iota = h$ for all $h$.

We have:














\(\ds f = g * u\)

\(\leadsto\)







\(\ds f * \mu = \paren {g * u} * \mu\)




















\(\ds \)

\(\leadsto\)







\(\ds f * \mu = g * \paren {u * \mu}\)




















\(\ds \)

\(\leadsto\)







\(\ds f * \mu = g\)










Conversely:














\(\ds g = f * \mu\)

\(\leadsto\)







\(\ds g * u = \paren {f * \mu} * u\)




















\(\ds \)

\(\leadsto\)







\(\ds g * u = f * \paren {\mu * u}\)




















\(\ds \)

\(\leadsto\)







\(\ds g * u = f\)









Hence the result.
$\blacksquare$


Source of Name
This entry was named for August Ferdinand Möbius.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Möbius inversion formula
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Möbius inversion formula




