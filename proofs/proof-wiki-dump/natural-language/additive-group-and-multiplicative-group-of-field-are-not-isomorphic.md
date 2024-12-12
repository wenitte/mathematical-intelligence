# 

Source: https://proofwiki.org/wiki/Additive_Group_and_Multiplicative_Group_of_Field_are_not_Isomorphic

Theorem
Let $\struct {F, +, \times}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $\struct {F, +}$ denote the additive group of $F$.
Let $\struct {F_{\ne 0_F}, \times}$ denote the multiplicative group of $F$.

Then $\struct {F, +}$ and $\struct {F_{\ne 0_F}, \times}$ are not isomorphic to each other.


Proof
Aiming for a contradiction, suppose $\phi: \struct {F_{\ne 0_F}, \times} \to \struct {F, +}$ is an isomorphism.
By definition:

$0_F$ is the identity of $\struct {F, +}$
and

$1_F$ is the identity of $\struct {F_{\ne 0_F}, \times}$.

We have that:














\(\ds 0_F\)

\(=\)







\(\ds \map \phi {1_F}\)





Epimorphism Preserves Identity














\(\ds \)

\(=\)







\(\ds \map \phi {\paren {-1_F} \times \paren {-1_F} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {-1_F} + \map \phi {-1_F}\)





Definition of Group Isomorphism



and so by definition $F$ has characteristic $2$.

Let $x \in \struct {F_{\ne 0_F}, \times}$.
Then:














\(\ds \map \phi {x^2}\)

\(=\)







\(\ds \map \phi x + \map \phi x\)





Definition of Group Isomorphism














\(\ds \)

\(=\)







\(\ds 0_F\)





as $F$ has characteristic $2$




As $\phi$ is an isomorphism, it is also a monomorphism.
From Kernel is Trivial iff Monomorphism:

$\map \ker \phi = \set {1_F}$
and so $x^2 = 1$.
Thus $x = 1$ and so $\order F = 2$.
Thus $\order {F_{\ne 0_F} } = 1$.
So $\phi$ is a bijection from a set of cardinality $1$ to a set of cardinality $2$.
So $\phi$ cannot be a bijection and so cannot be an isomorphism.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $16$




