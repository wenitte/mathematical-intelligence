# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Mapping_are_Inverse_Mapping/Proof_2

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad \exists g_1: T \to S: g_1 \circ f = I_S$
$(2): \quad \exists g_2: T \to S: f \circ g_2 = I_T$
Then:

$g_1 = g_2 = f^{-1}$
where $f^{-1}$ is the inverse of $f$.


Proof
From Left and Right Inverse Mappings Implies Bijection, we have that $f$ is a bijection.
Let $y \in T$ and let $x = \map {f^{-1} } y$.
Such an $x$ exists because $f$ is surjective, and unique within $S$ as $f$ is injective.

Then $y = \map f x$ and so:














\(\ds \map {f^{-1} } y\)

\(=\)







\(\ds x\)




















\(\ds \)

\(=\)







\(\ds \map {I_S} x\)





$I_S$ is the identity mapping on $S$














\(\ds \)

\(=\)







\(\ds \map {g_1 \circ f} x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {g_1} y\)





from above: $y = \map f x$



So $f^{-1} = g_1$.

Also:














\(\ds \map f x\)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds \map {I_T} y\)





$I_T$ is the identity mapping on $T$














\(\ds \)

\(=\)







\(\ds \map {f \circ g_2} y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map {f^{-1} } y\)

\(=\)







\(\ds x\)





as $f$ is injective














\(\ds \)

\(=\)







\(\ds \map {g_2} y\)









So $f^{-1} = g_2$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.4$




