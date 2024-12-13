# 

Source: https://proofwiki.org/wiki/Image_of_Preimage_of_Subset_under_Surjection_equals_Subset



Theorem
Let $f: S \to T$ be a surjection.

Then:

$\forall B \subseteq T: B = \paren {f \circ f^{-1} } \sqbrk B$
where:

$f \sqbrk B$ denotes the image of $B$ under $f$
$f^{-1}$ denotes the inverse of $f$
$f \circ f^{-1}$ denotes composition of $f$ and $f^{-1}$.


Proof
Let $g$ be a surjection.
Let $B \subseteq T$.
Let $b \in B$.
Then:










\(\ds \exists a \in S: \, \)



\(\ds b\)

\(=\)







\(\ds \map f a\)





Definition of Surjection








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds f^{-1} \sqbrk B\)





Definition of Preimage of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\in\)







\(\ds f \sqbrk {f^{-1} \sqbrk B}\)





Definition of Image of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds B\)

\(\subseteq\)







\(\ds f \sqbrk {f^{-1} \sqbrk B}\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds B\)

\(\subseteq\)







\(\ds \paren {f \circ f^{-1} } \sqbrk B\)





Definition of Composition of Mappings




From Subset of Codomain is Superset of Image of Preimage, we already have that:

$\paren {f \circ f^{-1} } \sqbrk B \subseteq B$
So:

$B \subseteq \paren {f \circ f^{-1} } \sqbrk B \subseteq B$
and by definition of set equality:

$B = \paren {f \circ f^{-1} } \sqbrk B$
$\blacksquare$


Also see
Subset equals Image of Preimage implies Surjection
Subset equals Image of Preimage iff Mapping is Surjection
Subset of Domain is Subset of Preimage of Image


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.8$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $1 \ \text{(d})$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions




