# 

Source: https://proofwiki.org/wiki/Countable_Product_of_Second-Countable_Spaces_is_Second-Countable

Theorem
Let $I$ be an indexing set with countable cardinality.
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be a family of topological spaces indexed by $I$.
Let $\ds \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let each of $\struct {S_\alpha, \tau_\alpha}$ be second-countable.

Then $\struct {S, \tau}$ is also second-countable.


Proof
Let $\BB_\alpha = \set {N^\alpha_i : i \in \N}$ be a countable basis for $\tau_\alpha$ for each $\alpha \in I$.
Let $\pr_\alpha$ denote the projection of $S$ onto $S_\alpha$.

Let $\LL_\alpha = \set {\map {\pr_\alpha^{-1} } {N^\alpha_i}: N^\alpha_i \in B_\alpha}$.
Let $\ds \KK_J = \set {\bigcap_{\alpha \mathop \in J} L_\alpha : \forall \alpha \in J: L_\alpha \in \LL_\alpha}$ for $J \subset I$, $\size J < \infty$.
From Product Space Basis Induced from Factor Space Bases:

$\ds \BB = \bigcup_{J \mathop \subset I \mathop , \size J \mathop < \infty} \KK_J$ forms a basis of the product space.

Now, each of the $\LL_\alpha$'s is countable. 
Since the $\KK_J$'s can be identified with a finite product of countable sets, they are each countable
From Countable Union of Countable Sets is Countable, $\BB$ forms a countable basis of $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




