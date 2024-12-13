# 

Source: https://proofwiki.org/wiki/Invertible_Elements_of_Monoid_form_Subgroup

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
Let $U \subseteq S$ be the subset of $S$ consisting of the invertible elements of $S$.

Then $\struct {U, \circ}$ forms a subgroup of $S$.


Proof
We have from Inverse of Identity Element is Itself that $e$ is invertible.
Hence $e \in U$ and so $U \ne \O$.

Let $x, y \in U$.
As $x$ and $y$ are invertible, it follows that $x^{-1}$ and $y^{-1}$ both exist in $S$.
Both $x^{-1}$ and $y^{-1}$ also have inverses $x$ and $y$ respectively, and so themselves are invertible.
Hence both $x^{-1} \in U$ and $y^{-1} \in U$.
Then we have:














\(\ds \paren {x \circ y} \circ \paren {y^{-1} \circ x^{-1} }\)

\(=\)







\(\ds x \circ \paren {y \circ y^{-1} } \circ x^{-1}\)





$\circ$ is associative in $S$














\(\ds \)

\(=\)







\(\ds x \circ e \circ x^{-1}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x \circ x^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





Definition of Inverse Element



and similarly for $\paren {y^{-1} \circ x^{-1} } \circ \paren {x \circ y}$
Hence $x \circ y$ is invertible.
The result follows by the Two-Step Subgroup Test.
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $2$: Examples of Groups and Homomorphisms: $2.3$




