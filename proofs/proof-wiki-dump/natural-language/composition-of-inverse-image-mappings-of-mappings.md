# 

Source: https://proofwiki.org/wiki/Composition_of_Inverse_Image_Mappings_of_Mappings

Theorem
Let $A, B, C$ be non-empty sets.
Let $f: A \to B, g: B \to C$ be mappings.

Let:

$f^\gets: \powerset B \to \powerset A$
and

$g^\gets: \powerset C \to \powerset B$
be the inverse image mappings of $f$ and $g$.

Then:

$\paren {g \circ f}^\gets = f^\gets \circ g^\gets$


Proof
Let $T \subseteq C$.
We have:














\(\ds \map {\paren {f \circ g}^\gets} T\)

\(=\)







\(\ds \begin {cases} \set {x \in A: \map g {\map f x} \in T} & : \Img {g \circ f} \cap T \ne \O \\ \O & : \Img {g \circ f} \cap T = \O \end {cases}\)










and












\(\ds \map {f^\gets \circ g^\gets} T\)

\(=\)







\(\ds \begin {cases} \set {x \in A: \map f x \in \map {g^\gets} T} & : \Img f \cap \map {g^\gets} T \ne \O \\ \O & : \Img f \cap \map {g^\gets} T = \O \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} \set {x \in A: \map g {\map f x} \in T} & : \Img f \cap \map {g^\gets} T \ne \O \\ \O & : \Img f \cap \map {g^\gets} T = \O \end {cases}\)










It remains to be shown that:

$\Img f \cap \map {g^\gets} T = \O \iff \Img {g \circ f} \cap T = \O$
So:














\(\ds \Img f \cap \map {g^\gets} T\)

\(=\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \Img f\)

\(\subseteq\)







\(\ds \relcomp B {\map {g^\gets} T}\)





Empty Intersection iff Subset of Complement














\(\ds \)

\(=\)







\(\ds \map {g^\gets} {\relcomp C T}\)





Complement of Preimage equals Preimage of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \Img {g \circ f}\)

\(=\)







\(\ds \map {g^\gets} {\Img f}\)





Intersection with Complement is Empty iff Subset














\(\ds \)

\(\subseteq\)







\(\ds \relcomp C T\)





Subset of Preimage under Relation is Preimage of Subset: Corollary








\(\ds \leadstoandfrom \ \ \)





\(\ds \Img {g \circ f} \cap T\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Complement



$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.7$




