# 

Source: https://proofwiki.org/wiki/Operation_is_Isomorphic_to_Power_Structure_Operation_on_Set_of_Singleton_Subsets

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\struct {\powerset S, \circ_\PP}$ be the power structure of $\struct {S, \circ}$.
Let $S'$ denote the set of singleton elements of $\powerset S$.

Then $\struct {S, \circ}$ is isomorphic to $\struct {S', \circ_\PP}$.


Proof
Let $\phi: S \to S'$ be the mapping defined as:

$\forall x \in S: \map \phi x = \set x$
We have that:










\(\ds \forall a, b \in S: \, \)



\(\ds \map \phi a\)

\(=\)







\(\ds \map \phi b\)














\(\ds \leadsto \ \ \)





\(\ds \set a\)

\(=\)







\(\ds \set b\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Singleton Equality



demonstrating that $\phi$ is an injection.
Then we have:










\(\ds \forall A \in S': \exists a \in S: \, \)



\(\ds A\)

\(=\)







\(\ds \set a\)





Definition of Singleton








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \map \phi a\)





Definition of $\phi$



demonstrating that $\phi$ is a surjection.
Hence by definition $\phi$ is a bijection.

By the definition of a magma, $S$ is closed under $\circ$.
That is:

$\forall a, b \in S, a \circ b \in S$
Hence:

$a \circ b \in \Dom \phi$
Also, by Power Structure of Magma is Magma, $S'$ is closed under $\circ_\PP$.
Hence:

$\set a \circ_\PP \set b \in S'$

Now:










\(\ds \forall a, b \in S: \, \)



\(\ds \map \phi {a \circ b}\)

\(=\)







\(\ds \set {a \circ b}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \set a \circ_\PP \set b\)





Definition of Subset Product














\(\ds \)

\(=\)







\(\ds \map \phi a \circ_\PP \map \phi b\)





Definition of $\phi$



That is, $\phi$ is a homomorphism.

So $\phi$ is a bijective homomorphism.
Hence the result by definition of isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.5$




