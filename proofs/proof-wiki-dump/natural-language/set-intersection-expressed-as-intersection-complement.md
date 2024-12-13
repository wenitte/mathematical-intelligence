# 

Source: https://proofwiki.org/wiki/Set_Intersection_expressed_as_Intersection_Complement

Theorem
Let $A$ and $B$ be subsets of a universal set $\Bbb U$.
Let $\uparrow$ denote the operation on $A$ and $B$ defined as:

$\paren {A \uparrow B} \iff \paren {\relcomp {\Bbb U} {A \cap B} }$
where $\relcomp {\Bbb U} A$ denotes the complement of $A$ in $\Bbb U$.

Then:

$A \cap B = \paren {A \uparrow B} \uparrow \paren {A \uparrow B}$


Proof













\(\ds A \cap B\)

\(=\)







\(\ds \relcomp {\Bbb U} {\relcomp {\Bbb U} {A \cap B} }\)





Relative Complement of Relative Complement














\(\ds \)

\(=\)







\(\ds \relcomp {\Bbb U} {A \uparrow B}\)





Intersection Complement of Set with Itself is Complement














\(\ds \)

\(=\)







\(\ds \paren {A \uparrow B} \uparrow \paren {A \uparrow B}\)





Intersection Complement of Set with Itself is Complement



$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $16$




