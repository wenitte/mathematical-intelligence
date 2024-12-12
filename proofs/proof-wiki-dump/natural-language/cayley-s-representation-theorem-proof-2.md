# 

Source: https://proofwiki.org/wiki/Cayley%27s_Representation_Theorem/Proof_2



Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Every finite group is isomorphic to a subgroup of $S_n$ for some $n \in \Z$.


Proof
Let $G$ be any arbitrary finite group whose identity is $e_G$.
Let $S$ be the symmetric group on the elements of $G$, where $e_S$ is the identity of $S$.
For any $x \in G$, let $\lambda_x$ be the left regular representation of $G$ with respect to $x$.
From Regular Representations in Group are Permutations, $\forall x \in G: \lambda_x \in S$.
So, we can define a mapping $\theta: G \to S$ as:

$\forall x \in G: \map \theta x = \lambda_x$
From Composition of Regular Representations, we have:

$\forall x, y \in G: \lambda_x \circ \lambda_y = \lambda_{x y}$
where in this context $\circ$ denotes composition of mappings.
Thus by definition of $\theta$:

$\map \theta x \circ \map \theta y = \map \theta {x y}$
demonstrating that $\theta$ is a homomorphism.

Having established that fact, we can now consider $\map \ker \theta$, where $\ker$ denotes the kernel of $\theta$.
Let $x \in G$.
We have that:














\(\ds x\)

\(\in\)







\(\ds \map \ker \theta\)














\(\ds \leadsto \ \ \)





\(\ds \map \theta x\)

\(=\)







\(\ds e_S\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds \lambda_x\)

\(=\)







\(\ds I_G\)





where $I_G$ is the identity mapping of $G$








\(\ds \leadsto \ \ \)





\(\ds \map {\lambda_x} {e_G}\)

\(=\)







\(\ds \map {I_G} {e_G}\)





Definition of Identity Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e_G\)





Definitions of $\lambda_x$ and $I_G$



So $\map \ker \theta$ can contain no element other than $e_G$.
So, since clearly $e_G \in \map \ker \theta$, it follows that:

$\map \ker \theta = \set {e_G}$
By Kernel is Trivial iff Monomorphism, it follows that $\theta$ is a monomorphism.
By Monomorphism Image is Isomorphic to Domain, we have that:

$\theta \sqbrk G \cong \Img \theta$
that is, $\theta$ is isomorphic to its image.
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Arthur Cayley.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image: Example $143$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.7$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.9$ Homomorphisms and their elementary properties




