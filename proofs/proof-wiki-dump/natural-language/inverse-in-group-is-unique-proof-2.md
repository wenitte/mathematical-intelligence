# 

Source: https://proofwiki.org/wiki/Inverse_in_Group_is_Unique/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group.

Then every element $x \in G$ has exactly one inverse:

$\forall x \in G: \exists_1 x^{-1} \in G: x \circ x^{-1} = e^{-1} = x^{-1} \circ x$
where $e$ is the identity element of $\struct {G, \circ}$.


Proof
Let $\struct {G, \circ}$ be a group whose identity element is $e$.
By Group Axiom $\text G 3$: Existence of Inverse Element, every element of $G$ has at least one inverse.

Suppose that:

$\exists b, c \in G: a \circ b = e, a \circ c = e$
that is, that $b$ and $c$ are both inverse elements of $a$.

Then:














\(\ds b\)

\(=\)







\(\ds b \circ e\)





as $e$ is the identity element














\(\ds \)

\(=\)







\(\ds b \circ \paren {a \circ c}\)





as $c$ is an inverse of $a$














\(\ds \)

\(=\)







\(\ds \paren {b \circ a} \circ c\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ c\)





as $b$ is an inverse of $a$














\(\ds \)

\(=\)







\(\ds c\)





as $e$ is the identity element



So $b = c$ and hence the result.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Lemma $5$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: The Group Property
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.2$




