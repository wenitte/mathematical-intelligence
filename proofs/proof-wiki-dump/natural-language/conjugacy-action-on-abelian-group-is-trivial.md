# 

Source: https://proofwiki.org/wiki/Conjugacy_Action_on_Abelian_Group_is_Trivial

Theorem
Let $\struct {G, \circ}$ be an abelian group whose identity is $e$.
Let $*: G \times G \to G$ be the conjugacy group action:

$\forall g, h \in G: g * h = g \circ h \circ g^{-1}$

Then $*$ is a trivial group action.


Proof
For $G$ to be a trivial group action, the orbit of any element of $G$ is a singleton containing only that element.
Take $h \in G$.
Then:










\(\ds \forall g \in G: \, \)



\(\ds g * h\)

\(=\)







\(\ds g \circ h \circ g^{-1}\)




















\(\ds \)

\(=\)







\(\ds h \circ g \circ g^{-1}\)





Definition of Abelian Group: $g$ commutes with $h$














\(\ds \)

\(=\)







\(\ds h \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds h\)





Group Axiom $\text G 2$: Existence of Identity Element



Thus by definition of orbit:

$\Orb h = \set h$
Hence the result by definition of trivial group action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(v)}$




