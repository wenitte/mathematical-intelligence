# 

Source: https://proofwiki.org/wiki/Cayley%27s_Representation_Theorem

This proof is about Cayley's Representation Theorem in the context of finite groups. For other uses, see Cayley's Theorem.


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page. 


Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Every finite group is isomorphic to a subgroup of $S_n$ for some $n \in \Z$.


General Case
Let $\struct {G, \cdot}$ be a group.

Then there exists a permutation group $P$ on some set $S$ such that:

$G \cong P$
That is, such that $G$ is isomorphic to $P$.


Proof 1
Let $H = \set e$.
We can apply Permutation of Cosets to $H$ so that:

$\mathbb S = G$
and:

$\map \ker \theta = \set e$
The result follows by the First Isomorphism Theorem for Groups.
$\blacksquare$


Proof 2
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


Also known as
Cayley's Representation Theorem is also known as the Representation Theorem for Groups.
Some present it as the Cayley Representation Theorem.
Some sources refer to it as just Cayley's Theorem, but as there is more than one result so named, it is better to use the more specific form.


Also see
What this theorem tells us is that in order to study finite groups, it is necessary only to study subgroups of the symmetric groups on $n$ letters.


Source of Name
This entry was named for Arthur Cayley.


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{EE}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 77 \alpha$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cayley representation theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cayley's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cayley's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cayley's Representation Theorem




