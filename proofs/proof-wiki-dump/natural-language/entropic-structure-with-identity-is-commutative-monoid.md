# 

Source: https://proofwiki.org/wiki/Entropic_Structure_with_Identity_is_Commutative_Monoid

Theorem
Let $\struct {S, \odot}$ be a magma.
Let $\struct {S, \odot}$ be an entropic structure:

$\forall a, b, c, d \in S: \paren {a \odot b} \odot \paren {c \odot d} = \paren {a \odot c} \odot \paren {b \odot d}$

Let $\struct {S, \odot}$ have an identity element $e$.
Then $\struct {S, \odot}$ is a commutative monoid.


Proof
We have that $\struct {S, \odot}$ is a magma.
Thus a fortiori $\struct {S, \odot}$ is closed, and Monoid Axiom $\text S 0$: Closure is fulfilled.

Then:










\(\ds \forall a, b, c \in S: \, \)



\(\ds \paren {a \odot b} \odot c\)

\(=\)







\(\ds \paren {a \odot b} \odot \paren {e \odot c}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {a \odot e} \odot \paren {b \odot c}\)





Definition of Entropic Structure














\(\ds \)

\(=\)







\(\ds a \odot \paren {b \odot c}\)





Definition of Identity Element



Thus $\odot$ is an associative operation and Monoid Axiom $\text S 1$: Associativity is fulfilled.

We are given that $e$ is an identity element for $\struct {S, \odot}$.
Hence Monoid Axiom $\text S 2$: Identity is fulfilled by hypothesis.

Thus we have that $\struct {S, \odot}$ is a monoid.

Then:










\(\ds \forall a, b \in S: \, \)



\(\ds a \odot b\)

\(=\)







\(\ds \paren {e \odot a} \odot \paren {b \odot e}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {e \odot b} \odot \paren {a \odot e}\)





Definition of Entropic Structure














\(\ds \)

\(=\)







\(\ds b \odot a\)





Definition of Identity Element



Thus $\struct {S, \odot}$ is a commutative monoid.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.12 \ \text{(e)}$




