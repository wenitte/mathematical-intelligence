# 

Source: https://proofwiki.org/wiki/Inverse_Morphism_is_Unique

Theorem
Let $\mathbf C$ be a metacategory.
Let $f: C \to D$ be an isomorphism of $\mathbf C$.

Then $f$ admits a unique inverse morphism $g: D \to C$.


Proof
Since $f$ is an isomorphism, it admits at least one inverse morphism.
Now let $g, g': D \to C$ be two inverse morphisms for $f$.

Then:














\(\ds g\)

\(=\)







\(\ds g \circ \operatorname{id}_D\)





Axiom $(C2)$ for metacategories














\(\ds \)

\(=\)







\(\ds g \circ \left({f \circ g'}\right)\)





$g'$ is an inverse morphism for $f$














\(\ds \)

\(=\)







\(\ds \left({g \circ f}\right) \circ g'\)





Axiom $(C3)$ for metacategories














\(\ds \)

\(=\)







\(\ds {\operatorname{id}_C} \circ g'\)





$g$ is an inverse morphism for $f$














\(\ds \)

\(=\)







\(\ds g'\)





Axiom $(C2)$ for metacategories



In conclusion, $g = g'$.
Hence the result.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 2.8$: Exercise $2.3$




