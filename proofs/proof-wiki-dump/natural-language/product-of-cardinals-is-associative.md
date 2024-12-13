# 

Source: https://proofwiki.org/wiki/Product_of_Cardinals_is_Associative

Theorem
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be cardinals.

Then:

$\mathbf a \paren {\mathbf {b c} } = \paren {\mathbf {a b} } \mathbf c$
where $\mathbf {a b}$ denotes the product of $\mathbf a$ and $\mathbf b$.


Proof
Let $\mathbf a = \card A$, $\mathbf b = \card B$ and $\mathbf c = \card C$ for some sets $A$, $B$ and $C$.
By definition of product of cardinals:

$\mathbf a \paren {\mathbf {b c} }$ is the cardinal associated with $A \times \paren {B \times C}$.

Consider the mapping $f: A \times \paren {B \times C} \to \paren {A \times B} \times C$ defined as:

$\forall a \in A, b \in B, c \in C: \map f {a, \tuple {b, c} } = \tuple {\tuple {a, b}, c}$
Let $a_1, a_2 \in A, b_1, b_2 \in B, c_1, c_2 \in C$ such that:

$\map f {a_1, \tuple {b_1, c_1} } = \map f {a_2, \tuple {b_2, c_2} }$
Then:














\(\ds \map f {a_1, \tuple {b_1, c_1} }\)

\(=\)







\(\ds \map f {a_2, \tuple {b_2, c_2} }\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {\tuple {a_1, b_1}, c_1}\)

\(=\)







\(\ds \tuple {\tuple {a_2, b_2}, c_2}\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a_1, b_1}\)

\(=\)







\(\ds \tuple {a_2, b_2}\)





Equality of Ordered Tuples












\(\, \ds \land \, \)

\(\ds c_1\)

\(=\)







\(\ds c_2\)














\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)





Equality of Ordered Tuples












\(\, \ds \land \, \)

\(\ds b_1\)

\(=\)







\(\ds b_2\)


















\(\, \ds \land \, \)

\(\ds c_1\)

\(=\)







\(\ds c_2\)














\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)





Equality of Ordered Tuples












\(\, \ds \land \, \)

\(\ds \tuple {b_1, c_1}\)

\(=\)







\(\ds \tuple {b_2, c_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a_1, \tuple {b_1, c_1} }\)

\(=\)







\(\ds \tuple {a_2, \tuple {b_2, c_2} }\)





Equality of Ordered Tuples



Thus $f$ is an injection.











\(\ds \forall x \in \paren {A \times B} \times C: \exists a \in A, b \in B, c \in C: \, \)



\(\ds x\)

\(=\)







\(\ds \tuple {\tuple {a, b}, c}\)




















\(\ds \)

\(=\)







\(\ds \map f {a, \tuple {b, c} }\)









Thus $f$ is a surjection.

So $f$ is both an injection and a surjection, and so by definition a bijection.

Thus a bijection has been established between $A \times \tuple {B \times C}$ and $\tuple {A \times B} \times C$.
It follows by definition that $A \times \tuple {B \times C}$ and $\tuple {A \times B} \times C$ are equivalent.

The result follows by definition of cardinal.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.4: \ (2)$




