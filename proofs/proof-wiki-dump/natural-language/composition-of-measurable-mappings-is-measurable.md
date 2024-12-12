# 

Source: https://proofwiki.org/wiki/Composition_of_Measurable_Mappings_is_Measurable

Theorem
Let $\struct {X_1, \Sigma_1}$, $\struct {X_2, \Sigma_2}$ and $\struct {X_3, \Sigma_3}$ be measurable spaces.
Let $f: X_1 \to X_2$ be a $\Sigma_1 \, / \, \Sigma_2$-measurable mapping.
Let $g: X_2 \to X_3$ be a $\Sigma_2 \, / \, \Sigma_3$-measurable mapping.

Then their composition $g \circ f: X_1 \to X_3$ is $\Sigma_1 \, / \, \Sigma_3$-measurable.


Proof
Let $E_3 \in \Sigma_3$.
Then $\map {g^{-1} } {E_3} \in \Sigma_2$, and $\map {f^{-1} } {\map {g^{-1} } {E_3} } \in \Sigma_1$ as $f, g$ are measurable.

That is, $\map {\paren {g \circ f}^{-1} } {E_3} \in \Sigma_1$ for all $E_3 \in \Sigma_3$.
Hence, $g \circ f$ is $\Sigma_1 \, / \, \Sigma_3$-measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.4$




