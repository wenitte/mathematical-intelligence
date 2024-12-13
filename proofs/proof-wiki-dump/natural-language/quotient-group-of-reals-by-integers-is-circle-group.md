# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Reals_by_Integers_is_Circle_Group

Theorem
Let $\struct {\Z, +}$ be the additive group of integers.
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $K$ be the circle group.

Then the quotient group of $\struct {\R, +}$ by $\struct {\Z, +}$ is isomorphic to $K$.


Proof
Define $\phi: \R / \Z \to K$ by:

$\map \phi {x + \Z} = \map \exp {2 \pi i x}$
Then $\phi$ is well-defined.
For, if $x + \Z = y + \Z$, then $y = x + n$ for some $n \in \Z$, and:

$\map \exp {2 \pi i \paren {x + n} } = \map \exp {2 \pi i x}$
by Complex Exponential Function has Imaginary Period.

Moreover, by Exponential of Sum:

$\map \exp {x + y + \Z} = \map \exp {2 \pi i \paren {x + y} } = \map \exp {2 \pi i x} \, \map \exp {2 \pi i y}$
meaning $\phi$ is a group homomorphism.

By Euler's Formula:

$\map \exp {2 \pi i x} = \map \cos {2 \pi i x} + i \, \map \sin {2 \pi i x}$
so that, by Sine and Cosine are Periodic on Reals:

$\map \phi x = 1$ if and only if $x + \Z = 0 + \Z$

Hence, by Kernel is Trivial iff Group Monomorphism, $\phi$ is a monomorphism.
From polar form for complex numbers, it follows that all $z \in \C$ with $\cmod z = 1$ are of the form:

$z = \map \exp {2 \pi i x}$
for some $x \in \R$.
Hence $\phi$ is also an epimorphism.

Thus $\phi: \R / \Z \to K$ is a group isomorphism.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \beta$
1974: Robert Gilmore: Lie Groups, Lie Algebras and Some of their Applications ... (previous) ... (next): Chapter $1$: Introductory Concepts: $1$. Basic Building Blocks: $2$. GROUP: Example $3$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 52$. The first isomorphism theorem




