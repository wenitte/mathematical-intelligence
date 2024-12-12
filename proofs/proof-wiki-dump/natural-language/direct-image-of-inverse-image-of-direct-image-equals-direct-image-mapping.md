# 

Source: https://proofwiki.org/wiki/Direct_Image_of_Inverse_Image_of_Direct_Image_equals_Direct_Image_Mapping



Theorem
Let $f: S \to T$ be a mapping.
Let:

$f^\to: \powerset S \to \powerset T$ denote the direct image mapping of $f$
$f^\gets: \powerset T \to \powerset S$ denote the inverse image mapping of $f$
where $\powerset S$ denotes the power set of $S$.

Then:

$f^\to \circ f^\gets \circ f^\to = f^\to$
where $\circ$ denotes composition of mappings.


Proof









\(\ds \forall A \in \powerset S: \, \)



\(\ds A\)

\(\subseteq\)







\(\ds \map {\paren {f^\gets \circ f^\to} } A\)





Subset of Domain is Subset of Preimage of Image








\(\ds \leadsto \ \ \)

\(\ds \forall A \in \powerset S: \, \)



\(\ds \map {f^\to} A\)

\(\subseteq\)







\(\ds \map {\paren {f^\to \circ f^\gets \circ f^\to} } A\)





Image of Subset under Mapping is Subset of Image




and:








\(\ds \forall B \in \powerset T: \, \)



\(\ds \map {\paren {f^\to \circ f^\gets} } B\)

\(\subseteq\)







\(\ds B\)





Subset of Codomain is Superset of Image of Preimage








\(\ds \leadsto \ \ \)

\(\ds \forall A \in \powerset S: \, \)



\(\ds \map {\paren {f^\to \circ f^\gets} } {\map {f^\to} A}\)

\(\subseteq\)







\(\ds \map {f^\to} A\)





Image of Subset under Mapping is Subset of Image, setting $B = \map {f^\to} A \in \powerset T$




Thus we have:

$\forall A \in \powerset S: \map {f^\to} A \subseteq \map {\paren {f^\to \circ f^\gets \circ f^\to} } A \subseteq \map {f^\to} A$
and the result follows.
$\blacksquare$


Also see
Inverse Image of Direct Image of Inverse Image equals Inverse Image Mapping


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $4$




