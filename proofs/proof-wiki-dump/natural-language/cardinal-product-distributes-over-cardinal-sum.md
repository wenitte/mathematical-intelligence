# 

Source: https://proofwiki.org/wiki/Cardinal_Product_Distributes_over_Cardinal_Sum

Theorem
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be cardinals.

Then:

$\mathbf a \paren {\mathbf b + \mathbf c} = \mathbf a \mathbf b + \mathbf a \mathbf c$
where:

$\mathbf a + \mathbf b$ denotes the sum of $\mathbf a$ and $\mathbf b$.
$\mathbf a \mathbf b$ denotes the product of $\mathbf a$ and $\mathbf b$.


Proof
Let $\mathbf a = \card A$, $\mathbf b = \card B$ and $\mathbf c = \card C$ for some sets $A$, $B$ and $C$.
Let $B$ and $C$ be pairwise disjoint, that is:

$B \cap C = \O$
Then we can define:

$B \sqcup C := B \cup C$
where $B \sqcup C$ denotes the disjoint union of $B$ and $C$.

Then we have:

$\mathbf b + \mathbf c = \card {B \sqcup C} = \card {B \cup C}$

Then:














\(\ds \paren {A \times B} \cap \paren {A \times C}\)

\(=\)







\(\ds A \times \paren {B \cap C}\)





Cartesian Product of Intersections/Corollary 1














\(\ds \)

\(=\)







\(\ds A \times \O\)





as $B \cap C = \O$














\(\ds \)

\(=\)







\(\ds \O\)





Cartesian Product is Empty iff Factor is Empty




Then:














\(\ds \card {\paren {A \times B} \cup \paren {A \times C} }\)

\(=\)







\(\ds \card {A \times B} + \card {A \times C}\)





as $A \times B$ and $A \times C$ are disjoint from above














\(\ds \)

\(=\)







\(\ds \mathbf a \mathbf b + \mathbf a \mathbf c\)





Definition of Product of Cardinals




Then:














\(\ds \card {\paren {A \times B} \cup \paren {A \times C} }\)

\(=\)







\(\ds \card {A \times \paren {B \cup C} }\)





Cartesian Product Distributes over Union














\(\ds \)

\(=\)







\(\ds \mathbf a \paren {\mathbf b + \mathbf c}\)





Definition of Product of Cardinals and Definition of Sum of Cardinals



$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.6$




