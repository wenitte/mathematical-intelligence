# 

Source: https://proofwiki.org/wiki/Coset_Product_of_Normal_Subgroup_is_Consistent_with_Subset_Product_Definition

Theorem
Let $\struct {G, \circ}$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $a, b \in G$.
Let $a \circ N$ and $b \circ N$ be the left cosets of $a$ and $b$ by $N$.

Then the coset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \paren {a \circ b} \circ N$
is consistent with the definition of the coset product as the subset product of $a \circ N$ and $b \circ  N$:

$\paren {a \circ N} \paren {b \circ N} = \set {x \circ y: x \in a \circ N, y \in b \circ N}$


Proof
Consider the set:

$\paren {a \circ N} \circ \paren {b \circ N} = \set {x \circ y: x \in a \circ N, y \in b \circ N}$

As $e \in N$, have:

$\paren {a \circ b} \circ N = \paren {a \circ e} \circ \paren {b \circ N} \subseteq \paren {a \circ N} \circ \paren {b \circ N}$
by Group Axiom $\text G 1$: Associativity of $\circ$.
Hence $\paren {a \circ b} \circ N \subseteq \paren {a \circ N} \circ \paren {b \circ N}$.

Now let $x \in a \circ N$ and $y \in b \circ N$.

Then by the definition of subset product:

$\exists n_1 \in N: x = a \circ n_1$
$\exists n_2 \in N: y = b \circ n_2$

It follows that:














\(\ds x \circ y\)

\(=\)







\(\ds \paren {a \circ n_1} \circ \paren {b \circ n_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ n_1} \circ \paren {n_3 \circ b}\)





for some $n_3 \in N$: Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds a \circ \paren {\paren {n_1 \circ n_3} \circ b}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ \paren {n_4 \circ b}\)





for some $n_4 \in N$: Definition of Subgroup














\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ n_5}\)





for some $n_5 \in N$: Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ n_5\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Definition of Subset Product




So the definition by subset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \set {x \circ y: x \in a \circ N, y \in b \circ N}$
leads to the definition of coset product as:

$\paren {a \circ N} \circ \paren {b \circ N} = \paren {a \circ b} \circ N$
$\blacksquare$





