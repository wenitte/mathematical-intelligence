# 

Source: https://proofwiki.org/wiki/Inverse_Image_of_Direct_Image_of_Inverse_Image_equals_Inverse_Image_Mapping



Theorem
Let $f: S \to T$ be a mapping.
Let:

$f^\to: \powerset S \to \powerset T$ denote the direct image mapping of $f$
$f^\gets: \powerset T \to \powerset S$ denote the inverse image mapping of $f$
where $\powerset S$ denotes the power set of $S$.

Then:

$f^\gets \circ f^\to \circ f^\gets = f^\gets$
where $\circ$ denotes composition of mappings.


Proof









\(\ds \forall A \in \powerset S: \, \)



\(\ds A\)

\(\subseteq\)







\(\ds \map {\paren {f^\gets \circ f^\to} } A\)





Subset of Domain is Subset of Preimage of Image








\(\ds \leadsto \ \ \)

\(\ds \forall B \in \powerset T: \, \)



\(\ds \map {f^\gets} B\)

\(\subseteq\)







\(\ds \map {\paren {f^\gets \circ f^\to} } {\map {f^\gets} B}\)





Image of Subset under Mapping is Subset of Image, setting $A = \map {f^\gets} B \in \powerset S$




and:








\(\ds \forall B \in \powerset T: \, \)



\(\ds \map {\paren {f^\to \circ f^\gets} } B\)

\(\subseteq\)







\(\ds B\)





Subset of Codomain is Superset of Image of Preimage








\(\ds \leadsto \ \ \)

\(\ds \forall A \in \powerset S: \, \)



\(\ds \map {\paren {f^\gets \circ f^\to \circ f^\gets} } B\)

\(\subseteq\)







\(\ds \map {f^\gets} B\)





Image of Subset under Mapping is Subset of Image




Thus we have:

$\forall B \in \powerset T: \map {f^\gets} B \subseteq \map {\paren {f^\gets \circ f^\to \circ f^\gets} } B \subseteq \map {f^\gets} B$
and the result follows.
$\blacksquare$


Also see
Direct Image of Inverse Image of Direct Image equals Direct Image Mapping


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $4$




