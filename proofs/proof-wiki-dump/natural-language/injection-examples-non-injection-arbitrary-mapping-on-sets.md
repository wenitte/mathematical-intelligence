# 

Source: https://proofwiki.org/wiki/Injection/Examples/Non-Injection/Arbitrary_Mapping_on_Sets

Example of Mapping which is Not an Injection
Let $A = \set {a, b, c, d}$.
Let $B = \set {1, 2, 3, 4, 5}$.
Let $f \subseteq {A \times B}$ be the mapping defined as:

$f = \set {\tuple {a, 1}, \tuple {b, 4}, \tuple {c, 5}, \tuple {d, 4} }$
Then $f$ is not a injection.


Proof
For $f$ to be an injection, it would be necessary that:

$\forall x_1, x_2 \in A: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
By definition of the squaring operation, we have:

$\map f b = \map f d$
But unless $b \ne d$.
Hence $f$ is not an injection.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions




