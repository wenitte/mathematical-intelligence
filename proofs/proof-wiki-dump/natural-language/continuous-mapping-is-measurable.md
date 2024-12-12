# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_is_Measurable

Theorem
Let $\struct {X, \tau}$ and $\struct {X', \tau'}$ be topological spaces.
Denote with $\map \BB {X, \tau}$ and $\map \BB {X', \tau'}$ their respective Borel $\sigma$-algebras.
Let $f: X \to X'$ be a continuous mapping.

Then $f$ is $\map \BB {X, \tau} \, / \, \map \BB {X', \tau'}$-measurable.


Proof
As $f$ is a continuous mapping, by definition, it holds that:

$\forall S' \in \tau': \map {f^{-1} } {S'} \in \tau$
Now, by definition, $\map \BB {X, \tau} = \map \sigma \tau$, and so $\tau \subseteq \map \BB {X, \tau}$.
Also, $\map \BB {X', \tau'} = \map \sigma {\tau'}$.

Hence Mapping Measurable iff Measurable on Generator applies.
Therefore, $f$ is $\map \BB {X, \tau} \, / \, \map \BB {X', \tau'}$-measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.3$
2005: René L. Schilling: Measures, Integrals and Martingales: $\S 8$: Problem $8$




