# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Algebras_is_Algebra

Theorem
Let $K$ be a field.
Let $A$ and $B$ be algebras over $K$. 
Let $\tuple {A \times B, +_{A \times B}, \cdot_{A \times B} }$ be the direct product of $A$ and $B$ as vector spaces.
Define $\cdot_{A \times B} : A \times B \to A \times B$ by:

$\tuple {a, b} \tuple {a', b'} = \tuple {a a', b b'}$
for each $\tuple {a, b}, \tuple {a', b'} \in A \times B$. 

Then $\tuple {A \times B, +_{A \times B}, \cdot_{A \times B}, \circ_{A \times B} }$ is an algebra.


Proof
We show that $\circ_{A \times B}$ is bilinear.
Let $\lambda \in K$ and $\tuple {a_1, b_1}, \tuple {a_2, b_2}, \tuple {a_3, b_3} \in A \times B$ .
We have:














\(\ds \paren {\tuple {a_1, b_1} +_{A \times B} \lambda \tuple {a_2, b_2} } \circ_{A \times B} \tuple {a_3, b_3}\)

\(=\)







\(\ds \tuple {a_1 + \lambda a_2, b_1 + \lambda b_2} \circ_{A \times B} \tuple {a_3, b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a_1 + \lambda a_2} a_3, \paren {b_1 + \lambda b_2} b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_3 + \lambda a_2 a_3, b_1 b_3 + \lambda b_2 b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_3, b_1 b_3} +_{A \times B} \lambda \tuple {a_2 a_3, b_2 b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1, b_1} \circ_{A \times B} \tuple {a_3, b_3} +_{A \times B} \lambda \paren {\tuple {a_2, b_2} \circ_{A \times B} \tuple {a_3, b_3} }\)









We also have:














\(\ds \tuple {a_1, b_1} \circ_{A \times B} \paren { \tuple {a_2, b_2} +_{A \times B} \lambda \tuple {a_3, b_3} }\)

\(=\)







\(\ds \tuple {a_1, b_1} \circ_{A \times B} \tuple {a_2 + \lambda a_3, b_2 + \lambda b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 \paren {a_2 + \lambda a_3}, b_1 \paren {b_2 + \lambda b_3} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_2 + \lambda a_1 a_3, b_1 b_2 + \lambda b_1 b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_2, b_1 b_2} +_{A \times B} \lambda \tuple {a_1 a_3, b_1 b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1, b_1} \circ_{A \times B} \tuple {a_2, b_2} +_{A \times B} \lambda \paren {\tuple {a_1, b_1} \circ_{A \times B} \tuple {a_3, b_3} }\)









So $\circ_{A \times B}$ is bilinear and $\tuple {A \times B, +_{A \times B}, \cdot_{A \times B}, \circ_{A \times B} }$ is an algebra.
$\blacksquare$





