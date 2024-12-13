# 

Source: https://proofwiki.org/wiki/Principle_of_Definition_by_Structural_Induction

Theorem
Let $\LL$ be a formal language.
Let the formal grammar of $\LL$ be a bottom-up grammar with unique parsability.

A definition $\map D \phi$ (in the metalanguage of $\LL$) for all well-formed formulas $\phi$ of $\LL$ is uniquely specified by:

$(1): \quad$ A definition $\map D a$ for each letter $a$ of $\LL$
$(2): \quad$ For each rule of formation for $\LL$, a definition $\map D \phi$ of the resultant WFF $\phi$ in terms of the constituent WFFs' definitions $\map D {\phi_1}, \ldots, \map D {\phi_n}$.


Proof
We apply the Principle of Structural Induction on the following statement $\map P \phi$:

The definition is specified for $\phi$

The given hypotheses verify the conditions for the Principle of Structural Induction.
It follows that $\map D \phi$ is specified for each WFF $\phi$.

Moreover, by virtue of the unique parsability, it is ensured that each WFF $\phi$ has a unique definition $\map D \phi$.
$\blacksquare$





