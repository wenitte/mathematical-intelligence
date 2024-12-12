# 

Source: https://proofwiki.org/wiki/Direct_Image_of_Intersection_with_Inverse_Image

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let:

$f^\to: \powerset S \to \powerset T$ denote the direct image mapping of $f$
$f^\gets: \powerset T \to \powerset S$ denote the inverse image mapping of $f$
where $\powerset S$ denotes the power set of $S$.

Then:

$\forall A \in \powerset S, B \in \powerset T: \map {f^\to} {A \cap \map {f^\gets} B} = \map {f^\to} A \cap B$


Proof
Let $A \in \powerset S, B \in \powerset T$ be arbitrary.
Then:














\(\ds \map {f^\to} {A \cap \map {f^\gets} B}\)

\(\subseteq\)







\(\ds \map {f^\to} A \cap \map {f^\to} {\map {f^\gets} B}\)





Image of Intersection under Mapping














\(\ds \)

\(\subseteq\)







\(\ds \map {f^\to} A \cap B\)





Subset of Codomain is Superset of Image of Preimage




Let $x \in \map {f^\to} A \cap B$.














\(\ds x\)

\(\in\)







\(\ds \map {f^\to} A\)





Definition of Set Intersection




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \map f a\)





for some $a \in A$




and:












\(\ds x\)

\(\in\)







\(\ds B\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \map f a\)

\(\in\)







\(\ds B\)





from $(1)$ above








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds \map {f^\gets} B\)





Definition of Inverse Image Mapping








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds A \cap \map {f^\gets} B\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \map f a\)

\(\in\)







\(\ds \map {f^\to} {A \cap \map {f^\gets} B}\)





Definition of Direct Image Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {f^\to} {A \cap \map {f^\gets} B}\)





as $x = \map f a$








\(\ds \leadsto \ \ \)





\(\ds \map {f^\to} A \cap B\)

\(\subseteq\)







\(\ds \map {f^\to} {A \cap \map {f^\gets} B}\)





Definition of Subset




Thus we have:

$\map {f^\to} {A \cap \map {f^\gets} B} \subseteq \map {f^\to} A \cap B$
and:

$\map {f^\to} A \cap B \subseteq \map {f^\to} {A \cap \map {f^\gets} B}$
and so:

$\forall A \in \powerset S, B \in \powerset T: \map {f^\to} {A \cap \map {f^\gets} B} = \map {f^\to} A \cap B$
by definition of set equality.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $5$




