# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_is_Transitive

Theorem
Let $\struct {S_1, \preccurlyeq_1}$, $\struct {S_2, \preccurlyeq_2}$ and $\struct {S_3, \preccurlyeq_3}$ be ordered sets.
Let $\struct {S_1, \preccurlyeq_1}$ be isomorphic to $\struct {S_2, \preccurlyeq_2}$.
Let $\struct {S_2, \preccurlyeq_2}$ be isomorphic to $\struct {S_3, \preccurlyeq_3}$.

Then $\struct {S_1, \preccurlyeq_1}$ is isomorphic to $\struct {S_3, \preccurlyeq_3}$.


Proof
Let $\phi: S_1 \to S_2$ be an order isomorphism from $\struct {S_1, \preccurlyeq_1}$ to $\struct {S_2, \preccurlyeq_2}$.
Let $\psi: S_2 \to S_3$ be an order isomorphism from $\struct {S_2, \preccurlyeq_2}$ to $\struct {S_3, \preccurlyeq_3}$.
From Composite of Order Isomorphisms is Order Isomorphism, $\psi \circ \phi: S_1 \to S_3$ is an order isomorphism from $\struct {S_1, \preccurlyeq_1}$ to $\struct {S_3, \preccurlyeq_3}$.
The result follows.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $24 \ \text {(c)}$




