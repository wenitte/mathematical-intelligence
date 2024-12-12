# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Family/Examples/1_and_2

Example of Cartesian Product of Family
Let $A_\O := \set \O$ and $A_{\set \O} := \set {\O, \set \O}$.
Thus $A_\O$ and $A_{\set \O}$ are the numbers $1$ and $2$ as defined by the Von Neumann construction.

Then:

$A_\O \times A_{\set \O} = \set {\tuple {\O, \O}, \tuple {\O, \set \O} }$
while:

$\ds \prod_{i \mathop \in A_{\set \O} } A_i = \set {\set {\tuple {\O, \O}, \tuple {\set \O, \O} }, \set {\tuple {\O, \O}, \tuple {\set \O, \set \O} } }$


Proof
First we have:














\(\ds A_\O \times A_{\set \O}\)

\(=\)







\(\ds \set \O \times \set {\O, \set \O}\)





Definition of $A_\O$ and $A_{\set \O}$














\(\ds \)

\(=\)







\(\ds \set {\tuple {\O, \O}, \tuple {\O, \set \O} }\)





Definition of Cartesian Product




Then:














\(\ds \prod_{i \mathop \in A_{\set \O} } A_i\)

\(=\)







\(\ds \prod_{i \mathop \in \set {\O, \set \O} } A_i\)




















\(\ds \)

\(=\)







\(\ds \set {f \in \paren {\bigcup_{i \mathop \in A_{\set \O} } A_i}^{A_{\set \O} }: \forall i \in A_{\set \O}: \paren {\map f i \in A_i} }\)





Definition 2 of Cartesian Product of Family




The above is deconstructed as follows.
We have that:














\(\ds \bigcup_{i \mathop \in A_{\set \O} } A_i\)

\(=\)







\(\ds \bigcup_{i \mathop \in \set {\O, \set \O} } A_i\)





Definition of $A_{\set \O}$














\(\ds \)

\(=\)







\(\ds \bigcup \set {A_\O, A_{\set \O} }\)





Definition of Union of Family














\(\ds \)

\(=\)







\(\ds \bigcup \set {\set \O, \set {\O, \set \O} }\)





Definition of $A_\O$ and $A_{\set \O}$














\(\ds \)

\(=\)







\(\ds \set \O \cup \set {\O, \set \O}\)





Union of Doubleton




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \set {\O, \set \O}\)





Definition of Set Union




Hence we have that:














\(\ds \paren {\bigcup_{i \mathop \in A_{\set \O} } A_i}^{A_{\set \O} }\)

\(=\)







\(\ds \paren {\set {\O, \set \O} }^{A_{\set \O} }\)





from above














\(\ds \)

\(=\)







\(\ds \paren {\set {\O, \set \O} }^{\set {\O, \set \O} }\)





Definition of $A_{\set \O}$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \set {\set {\tuple {\O, \O}, \tuple {\set \O, \O} }, \set {\tuple {\O, \O}, \tuple {\set \O, \set \O} }, \set {\tuple {\O, \set \O}, \tuple {\set \O, \O} }, \set {\tuple {\O, \set \O}, \tuple {\set \O, \set \O} } }\)





Definition of Set of All Mappings




Note that $(2)$ above is the set of all mappings from $\set {\O, \set \O}$ to $\set {\O, \set \O}$ as follows:

Each such mapping is a set of $2$ ordered pairs of which the first coordinates are the elements of $\set {\O, \set \O}$
From Cardinality of Set of All Mappings there are $2^2 = 4$ set of $2$ such ordered pairs.

Now we have to select the elements $f$ of $\ds \paren {\bigcup_{i \mathop \in A_{\set \O} } A_i}^{A_{\set \O} }$ such that:

$\map f i \in A_i$
for all $i \in \set {\O, \set \O}$.

We have that:














\(\ds \map f \O\)

\(\in\)







\(\ds A_\O\)














\(\ds \leadsto \ \ \)





\(\ds \map f \O\)

\(\in\)







\(\ds \set \O\)














\(\ds \leadsto \ \ \)





\(\ds \map f \O\)

\(=\)







\(\ds \O\)










Then:














\(\ds \map f {\set \O}\)

\(\in\)







\(\ds A_{\set \O}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {\set \O}\)

\(\in\)







\(\ds \set {\O, \set \O}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {\set \O}\)

\(=\)







\(\ds \O\)


















\(\, \ds \text {or} \, \)

\(\ds \map f {\set \O}\)

\(=\)







\(\ds \set \O\)










Hence:

$\ds \prod_{i \mathop \in A_{\set \O} } A_i = \set {\set {\tuple {\O, \O}, \tuple {\set \O, \O} }, \set {\tuple {\O, \O}, \tuple {\set \O, \set \O} } }$
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $8$




