# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Unions



Theorem
$\paren {A \cup B} \times \paren {C \cup D} = \paren {A \times C} \cup \paren {B \times D} \cup \paren {A \times D} \cup \paren {B \times C}$


Corollary
Cartesian product is distributive over union:

$A \times \paren {B \cup C} = \paren {A \times B} \cup \paren {A \times C}$
$\paren {B \cup C} \times A = \paren {B \times A} \cup \paren {C \times A}$


General Result
Let $I$ and $J$ be indexing sets.
Let $\family {A_i}_{i \mathop \in I}$ and $\family {B_j}_{j \mathop \in J}$ be families of sets indexed by $I$ and $J$ respectively.
Then:

$\ds \paren {\bigcup_{i \mathop \in I} A_i} \times \paren {\bigcup_{j \mathop \in J} B_j} = \bigcup_{\tuple {i, j} \mathop \in I \times J} \paren {A_i \times B_j}$
where:

$\ds \bigcup_{i \mathop \in I} A_i$ denotes the union of $\family {A_i}_{i \mathop \in I}$ and so on
$\times$ denotes Cartesian product.


Proof













\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \paren {A \cup B} \times \paren {C \cup D}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in A \lor x \in B}\)




















\(\ds \)

\(\land\)







\(\ds \paren {y \in C \lor y \in D}\)





Definition of Cartesian Product and Definition of Set Union








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {\paren {x \in A \lor x \in B} \land y \in C}\)




















\(\ds \)

\(\lor\)







\(\ds \paren {\paren {x \in A \lor x \in B} \land y \in D}\)





Rule of Distribution








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in A \land y \in C}\)




















\(\ds \)

\(\lor\)







\(\ds \paren {x \in B \land y \in C}\)




















\(\ds \)

\(\lor\)







\(\ds \paren {x \in A \land y \in D}\)




















\(\ds \)

\(\lor\)







\(\ds \paren {x \in B \land y \in D}\)





Rule of Distribution








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \paren {A \times C} \cup \paren {B \times D} \cup \paren {A \times D} \cup \paren {B \times C}\)





Definition of Cartesian Product and Definition of Set Union



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 9 \alpha$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets: Exercise $3 \ (4)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Sets and Logic: Exercise $15$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 7$ Cartesian products: Exercise $7.1$




