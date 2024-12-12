# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Subgroup_of_Complex_Numbers_under_Addition

Theorem
The set of Gaussian integers $\Z \sqbrk i$, under the operation of complex addition, forms a subgroup of the set of additive group of complex numbers $\struct {\C, +}$.


Proof
We will use the One-Step Subgroup Test.
This is valid, as the Gaussian integers are a subset of the complex numbers.

We note that $\Z \sqbrk i$ is not empty, as (for example) $0 + 0 i \in \Z \sqbrk i$.

Let $a + b i, c + d i \in \Z \sqbrk i$.
Then we have $-\paren {c + d i} = -c - d i$, and so:














\(\ds \paren {a + b i} + \paren {-\paren {c + d i} }\)

\(=\)







\(\ds \paren {a + b i} + \paren {- c - d i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + \paren {-c} } + \paren {b + \paren {-d} } i\)




















\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b - d} i\)









We have that $a, b, c, d \in \Z$ and $\Z$ is an integral domain.
Therefore by definition $\Z$ is a ring.
So it follows that $a - c \in \Z$ and $b - d \in \Z$, and hence $\paren {a - c} + \paren {b - d} i \in \Z \sqbrk i$.

So by the One-Step Subgroup Test, $\Z \sqbrk i$ is a subgroup of $\struct {\C, +}$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




