# 

Source: https://proofwiki.org/wiki/Invariance_of_Pseudoinverse_under_Addition_of_Degenerate_Transformation

Theorem
Let $U, V$ be vector spaces over a field $K$.
Let $S: U \to V$ be a linear transformation.
Let $T: V \to U$ be a linear transformation.
Let $S$ and $T$ are pseudoinverse to each other.

Then $S + G_1$ and $T + G_2$ are pseudoinverse to each other, where:

$G_1: U \to V$ is an arbitrary degenerate linear transformation
$G_2: V \to U$ is an arbitrary degenerate linear transformation


Proof
Let:




\(\text {(1)}: \quad\)









\(\ds G_3\)

\(:=\)







\(\ds T \circ S - I_U\)










\(\text {(2)}: \quad\)









\(\ds G_4\)

\(:=\)







\(\ds S \circ T - I_V\)









By Definition of Pseudoinverse of Linear Transformation, $G_3, G_4$ are degenerate.

Then:














\(\ds \paren {T + G_2} \circ \paren {S + G_1} - I_U\)

\(=\)







\(\ds T \circ S + T \circ G_1 + G_2 \circ \paren {S + G_1} - I_U\)




















\(\ds \)

\(=\)







\(\ds \paren {T \circ S - I_U} + T \circ G_1 + G_2 \circ \paren {S + G_1}\)




















\(\ds \)

\(=\)







\(\ds G_3 +  T \circ G_1 + G_2 \circ \paren {S + G_1}\)





by $\paren 1$



which is degenerate in view of:

Product with Degenerate Linear Transformation is Degenerate
Right Product with Degenerate Linear Transformation is Degenerate
Product with Degenerate Linear Transformation is Degenerate

Similarly:














\(\ds \paren {S + G_1} \circ \paren {T + G_2} - I_V\)

\(=\)







\(\ds S \circ T + S \circ G_2 + G_1 \circ \paren {T + G_2} - I_V\)




















\(\ds \)

\(=\)







\(\ds \paren {S \circ T - I_V} + S \circ G_2 + G_1 \circ \paren {T + G_2}\)




















\(\ds \)

\(=\)







\(\ds G_4 + S \circ G_2 + G_1 \circ \paren {T + G_2}\)





by $\paren 2$



which is degenerate.
$\blacksquare$


Sources
2002: Peter D. Lax: Functional Analysis: $2.2$: Index of a Linear Map




