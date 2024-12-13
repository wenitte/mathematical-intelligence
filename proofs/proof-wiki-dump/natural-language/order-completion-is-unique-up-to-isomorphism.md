# 

Source: https://proofwiki.org/wiki/Order_Completion_is_Unique_up_to_Isomorphism

Theorem
Let $\struct {S, \preceq_S}$ be an ordered set.
Suppose that both $\struct {T, \preceq_T}$ and $\struct {T', \preceq_{T'} }$ are order completions for $\struct {S, \preceq_S}$.

Then there exists a unique order isomorphism $\psi: T \to T'$.
In particular, $\struct {T, \preceq_T}$ and $\struct {T', \preceq_{T'} }$ are isomorphic.


Proof
Both $\struct {T, \preceq_T}$ and $\struct {T', \preceq_{T'} }$ are order completions for $\struct {S, \preceq_S}$.
Hence they both satisfy condition $(4)$ (and also $(1)$, $(2)$ and $(3)$).

Thus, applying condition $(4)$ to $\struct {T, \preceq_T}$ (with respect to $\struct {T', \preceq_{T'} }$), obtain a unique increasing mapping $\phi: T' \to T$.
Applying $(4)$ to $\struct {T', \preceq_{T'} }$ (with respect to $\struct {T, \preceq_T}$) gives also a unique increasing mapping $\psi: T \to T'$.

By Composite of Increasing Mappings is Increasing, their composites $\psi \circ \phi: T' \to T'$ and $\phi \circ \psi: T \to T$ are also increasing.

Now applying $(4)$ to $\struct {T, \preceq_T}$ (with respect to itself), it follows that $\phi \circ \psi$ is unique.
Now from Identity Mapping is Order Isomorphism, the identity mapping $I_T: T \to T$ is also increasing.
Thus, uniqueness of $\phi \circ \psi$ implies that $\phi \circ \psi = I_T$.

Similarly, it follows that $\psi \circ \phi = I_{T'}$.
It follows that $\psi: T \to T'$ is a bijection from Bijection iff Left and Right Inverse.

Thus, $\psi$ is an order-preserving bijection whose inverse is also increasing.
That is, $\psi$ is an order isomorphism.
Its uniqueness was already remarked above.
$\blacksquare$





