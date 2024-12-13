# 

Source: https://proofwiki.org/wiki/Inverse_in_Group_is_Unique



Theorem
Let $\struct {G, \circ}$ be a group.

Then every element $x \in G$ has exactly one inverse:

$\forall x \in G: \exists_1 x^{-1} \in G: x \circ x^{-1} = e^{-1} = x^{-1} \circ x$
where $e$ is the identity element of $\struct {G, \circ}$.


Proof 1
By the definition of a group, $\struct {G, \circ}$ is a monoid each of whose elements has an inverse.
The result follows directly from Inverse in Monoid is Unique.
$\blacksquare$


Proof 2
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


Proof 3
Let $x, y \in G$.
We already have, from the definition of inverse element, that:

$\forall x \in G: \exists x^{-1} \in G: x \circ x^{-1} = e = x^{-1} \circ x$
By Group has Latin Square Property, there exists exactly one $a \in G$ such that $a \circ x = y$.
Similarly, there exists exactly one $b \in G$ such that $x \circ b = y$.
Substituting $e$ for $y$, it follows that $x^{-1}$ as defined above is unique.
$\blacksquare$


Also see
Inverse in Monoid is Unique


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $1$: The definition of a ring: Definitions $1.1 \ \text{(b)}$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $5$




