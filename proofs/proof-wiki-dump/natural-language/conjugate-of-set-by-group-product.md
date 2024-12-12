# 

Source: https://proofwiki.org/wiki/Conjugate_of_Set_by_Group_Product



Theorem
Let $\struct {G, \circ}$ be a group.
Let $S \subseteq G$.

Let $S^a$ denote the $G$-conjugate of $S$ by $a$ as:

$S^a := \set {y \in G: \exists x \in S: y = a \circ x \circ a^{-1} } = a \circ S \circ a^{-1}$

Then:

$\paren {S^a}^b = S^{b \circ a}$


Also defined as
The concept of set conjugate can be defined in a different way:
Let $S^a$ denote the $G$-conjugate of $S$ by $a$ as:

$S^a := \set {y \in G: \exists x \in S: y = a^{-1} \circ x \circ a} = a^{-1} \circ S \circ a$

Then:

$\paren {S^a}^b = S^{a \circ b}$


Proof
$S^a$ is defined as $a \circ S \circ a^{-1}$ from the definition of the conjugate of a set.
From the definition of subset product with a singleton, this can be seen to be the same thing as:

$S^a = \set a \circ S \circ \set {a^{-1} }$.

Thus we can express $\paren {S^a}^b$ as $b \circ \paren {a \circ S \circ a^{-1} } \circ b^{-1}$, and understand that the right hand side refers to subset products.

From Subset Product within Semigroup is Associative (which applies because $\circ$ is associative), it then follows directly that:














\(\ds \paren {S^a}^b\)

\(=\)







\(\ds b \circ \paren {a \circ S \circ a^{-1} } \circ b^{-1}\)





from above














\(\ds \)

\(=\)







\(\ds \paren {b \circ a} \circ S \circ \paren {a^{-1} \circ b^{-1} }\)





Subset Product within Semigroup is Associative














\(\ds \)

\(=\)







\(\ds \paren {b \circ a} \circ S \circ \paren {b \circ a}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds S^{b \circ a}\)





Definition of Conjugate of Group Subset



$\blacksquare$


Proof for Alternative Definition
Using the same preliminary argument as above, we then follow:














\(\ds \paren {S^a}^b\)

\(=\)







\(\ds b^{-1} \circ \paren {a^{-1} \circ S \circ a} \circ b\)





from above














\(\ds \)

\(=\)







\(\ds \paren {b^{-1} \circ a^{-1} } \circ S \circ \paren {a \circ b}\)





Subset Product within Semigroup is Associative














\(\ds \)

\(=\)







\(\ds \paren {a \circ b}^{-1} \circ S \circ \paren {a \circ b}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds S^{a \circ b}\)





Definition of Conjugate of Group Subset



$\blacksquare$


Comment
This is not always correct in the literature.
For example, 1971: Allan Clark: Elements of Abstract Algebra defines set conjugate as:

$S^a := a \circ S \circ a^{-1}$
but then states (without proof) the assertion:

$\paren {S^a}^b = S^{a \circ b}$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 45$




