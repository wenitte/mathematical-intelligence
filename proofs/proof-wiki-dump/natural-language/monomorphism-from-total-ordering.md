# 

Source: https://proofwiki.org/wiki/Monomorphism_from_Total_Ordering

Theorem
Let the following conditions hold:

$(1): \quad$ Let $\struct {S, \circ, \preceq}$ and $\struct {T, *, \preccurlyeq}$ be ordered semigroups.
$(2): \quad$ Let $\phi: S \to T$ be a mapping.
$(3): \quad$ Let $\preceq$ be a total ordering on $S$.

Then $\phi \struct {S, \circ, \preceq} \to \struct {T, *, \preccurlyeq}$ is a (structure) monomorphism if and only if:

$(1): \quad \phi$ is strictly increasing from $\struct {S, \preceq}$ into $\struct {T, \preccurlyeq}$
$(2): \quad \phi$ is a homomorphism from $\struct {S, \circ}$ into $\struct {T, *}$.


Proof
This follows:

$(1): \quad$ As a direct consequence of Mapping from Totally Ordered Set is Order Embedding iff Strictly Increasing
$(2): \quad$ From the definition of monomorphism as a homomorphism which is an injection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Theorem $15.4$




