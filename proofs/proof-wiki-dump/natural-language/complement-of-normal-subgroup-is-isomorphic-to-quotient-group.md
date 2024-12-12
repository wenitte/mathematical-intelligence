# 

Source: https://proofwiki.org/wiki/Complement_of_Normal_Subgroup_is_Isomorphic_to_Quotient_Group

Definition
Let $G$ be a group with identity $e$.
Let $N$ be a normal subgroup of $G$.
Let $K$ be a complement of $N$.

Then the quotient group $G / N$ is isomorphic to $K$.


Proof
Let $\phi: K \to G / N$ be the mapping defined as:

$\forall k \in K: \map \phi k = k N$

We have:










\(\ds \forall x, y \in K: \, \)



\(\ds \map \phi {x y}\)

\(=\)







\(\ds \paren {x y} N\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds x N y N\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds \map \phi x \, \map \phi y\)





Definition of $\phi$



Thus $\phi$ is shown to be a homomorphism.

By definition of $K$ and $N$ we have that:

$\forall g \in G: \exists k \in K, n \in N: g = k n$
That is, every element of $g$ is the product of an element of $K$ with an element of $N$.

Let $x N, y N \in G / N$.
Then:














\(\ds x N\)

\(=\)







\(\ds y N\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds k_1 n_1 N\)

\(=\)







\(\ds k_2 n_2 N\)





for some $k_1, k_2 \in K$, $n_1 n_2 \in N$








\(\ds \leadsto \ \ \)





\(\ds k_1 N\)

\(=\)







\(\ds k_2 N\)





as $n_1 N = N$ and $n_2 N = N$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {k_1}\)

\(=\)







\(\ds \map \phi {k_2}\)





Definition of $\phi$



demonstrating that $\phi$ is an injection.

Then we have:














\(\ds x N\)

\(\in\)







\(\ds G / N\)














\(\ds \leadsto \ \ \)





\(\ds k n N\)

\(\in\)







\(\ds G / N\)





for some $k \in K$, $n \in N$








\(\ds \leadsto \ \ \)





\(\ds k N\)

\(\in\)







\(\ds G / N\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in K: \, \)



\(\ds k N\)

\(=\)







\(\ds \map \phi k\)





Definition of $\phi$



demonstrating that $\phi$ is a surjection.

Thus $\phi$ is an injective and surjective homomorphism.
Hence, by definition, $\phi$ is an isomorphism.
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $22$




