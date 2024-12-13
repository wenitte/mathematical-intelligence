# 

Source: https://proofwiki.org/wiki/Homomorphic_Image_of_Group_Element_is_Coset

Theorem
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Let $\map \ker \phi$ be the kernel of $\phi$.
Let $h \in H$.

Then $\Preimg h$ is either the empty set or a coset of $\map \ker \phi$.


Proof
There are two possibilities for any $h \in H$.

$(1): \quad \Preimg h = \O$
$(2): \quad \Preimg h \ne \O$
If $(1)$, then the first disjunct of the result is satisfied.

Now suppose $(2)$ holds.
Let $e_G$ and $e_H$ be the identity elements of $G$ and $H$ respectively.
Let $K = \map \ker \phi$.
Let $x, y \in G$ such that $\map \phi x = \map \phi y$.
Then:














\(\ds e_H\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi x * \map \phi {y^{-1} }\)





Homomorphism to Group Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y^{-1} }\)





$\phi$ is a homomorphism








\(\ds \leadsto \ \ \)





\(\ds x \circ y^{-1}\)

\(\in\)







\(\ds K\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds y K\)





Element in Left Coset iff Product with Inverse in Subgroup



Thus:

$\set {x: \map \phi x = \map \phi y}$ is a subset of $y K$.
From Kernel is Normal Subgroup of Domain we have that $y K = K y$.

Now suppose $x \in K y$.
Then, by definition, $x = k y$ for some $k \in K$.
Thus:














\(\ds x\)

\(=\)







\(\ds k y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi k * \map \phi y\)





$\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds e_H * \map \phi y\)





Definition of Kernel of Group Homomorphism: $k \in K$














\(\ds \)

\(=\)







\(\ds \map \phi y\)





Definition of Identity Element



A similar process gives that $x \in y K \implies \map \phi x = \map \phi y$.
Hence the result.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $22 \ (2)$




