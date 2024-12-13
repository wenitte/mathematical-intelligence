# 

Source: https://proofwiki.org/wiki/Mapping_is_Idempotent_iff_Restriction_to_Image_is_Identity_Mapping



Theorem
Let $S$ be a set.
Let $S^S$ denote the set of mappings from $S$ to itself.
Let $f \in S^S$ be a mapping on $S$.

Then:

$f$ is idempotent
if and only if:

the restriction of $f$ to $\Img f$ is the identity mapping.


Proof
Recall the definitions:

$\Img f$ denotes the image set of $f$
The identity mapping $I_S$ is defined as:
$\forall x \in f: \map {I_S} x = x$
An idempotent mapping is a mapping with the property:
$f \circ f = f$
where $\circ$ denotes composition of mappings.


Necessary Condition
Let the restriction of $f$ to $\Img f$ be the identity mapping.
Then:










\(\ds \forall x \in \Img f: \, \)



\(\ds \map f x\)

\(=\)







\(\ds x\)





Definition of Identity Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f {\map f x}\)

\(=\)







\(\ds \map f x\)




















\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \map {\paren {f \circ f} } x\)

\(=\)







\(\ds x\)





Definition of Composition of Mappings



That is:

$f \circ f = f$
and by definition $f$ is idempotent.
$\blacksquare$


Sufficient Condition
Let $f$ be an idempotent mapping.
Let $y \in \Img f$ be arbitrary.
Then:










\(\ds \exists x \in S: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map f {\map f x}\)

\(=\)







\(\ds \map f x\)





Definition of Idempotent Mapping: $\map f {\map f x} =: \map {\paren {f \circ f} } x$














\(\ds \)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(=\)







\(\ds y\)





as $\map f x = y$



As $y \in \Img f$ is arbitrary, it follows $\map f y = y$ for all $y \in \Img f$.
The result follows by definition of the identity mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.10 \ \text{(b)}$




