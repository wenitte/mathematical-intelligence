# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Gaussian_Prime



Theorem
The following definitions of the concept of Gaussian Prime are equivalent:

Definition $1$
Let $x \in \Z \sqbrk i$ be a Gaussian integer.
$x$ is a Gaussian prime if and only if:

it cannot be expressed as the product of two Gaussian integers, neither of which is a unit of $\Z \sqbrk i$ (that is, $\pm 1$ or $\pm i$)
it is not itself a unit of $\Z \sqbrk i$.
Definition $2$
A Gaussian prime is a Gaussian integer which has exactly $8$ divisors which are themselves Gaussian integers.


Proof
Let $x = a + b i$ be a Gaussian integer.
We have:














\(\ds x\)

\(=\)







\(\ds 1 \times \paren {a + b i}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {-a - b i}\)




















\(\ds \)

\(=\)







\(\ds i \times \paren {b - a i}\)




















\(\ds \)

\(=\)







\(\ds -i \times \paren {-b + a i}\)









Thus it is seen that every Gaussian integer has $8$ divisors which are themselves Gaussian integers.


Definition $(1)$ implies Definition $(2)$
Let $x$ be a Gaussian prime by definition $1$.
Then by definition:

$x$ cannot be expressed as the product of two Gaussian integers, neither of which is a unit (that is, $\pm 1$ or $\pm i$).
That is, the only divisors of $x$ are those $8$ which have been identified above.
Thus $p$ is a Gaussian prime by definition $2$.
$\Box$


Definition $(2)$ implies Definition $(1)$
Let $p$ be a Gaussian prime by definition $2$.
Then by definition $p$ has exactly $8$ divisors which are Gaussian integers.
Those are the ones given above.
As those are the only ones, $p$ cannot be the product of two Gaussian integers such that both of them are not a unit.
Thus $p$ is a Gaussian prime by definition $1$.
$\blacksquare$





