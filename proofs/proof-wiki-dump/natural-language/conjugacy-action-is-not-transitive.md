# 

Source: https://proofwiki.org/wiki/Conjugacy_Action_is_not_Transitive

Theorem
Let $\struct {G, \circ}$ be a non-trivial group whose identity is $e$.
Let $*: G \times G \to G$ be the conjugacy group action:

$\forall g, h \in G: g * h = g \circ h \circ g^{-1}$

Then $*$ is not a transitive group action.


Proof
Proof by Counterexample:
For $G$ to be a transitive group action, the orbit of any element of $G$ needs to be the whole of $G$.
Take $h = e$.
Then:










\(\ds \forall g \in G: \, \)



\(\ds g * e\)

\(=\)







\(\ds g \circ e \circ g^{-1}\)




















\(\ds \)

\(=\)







\(\ds g \circ g^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





Group Axiom $\text G 3$: Existence of Inverse Element



Thus by definition of orbit:

$\Orb e = \set e$
Only when $G$ is the trivial group, that is: $G = \set e$, does $\Orb e = G$.
Hence the result by definition of transitive group action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(v)}$




