# 

Source: https://proofwiki.org/wiki/Countable_Product_of_First-Countable_Spaces_is_First-Countable

Theorem
Let $I$ be an indexing set with countable cardinality.
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be a family of topological spaces indexed by $I$.
Let $\ds \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let each of $\struct {S_\alpha, \tau_\alpha}$ be first-countable.

Then $\struct {S, \tau}$ is also first-countable.


Proof
Let $x = \family {x_\alpha} \in S$.
Let $\BB_\alpha = \set {N^\alpha_i : i \in \N}$ be a countable local basis for $x_\alpha$ in $\struct {S_\alpha, \tau_\alpha}$ for each $\alpha \in I$.
Let $\pr_\alpha$ denote the projection of $S$ onto $S_\alpha$.

Let $\LL_\alpha = \set {\map {\pr_\alpha^{-1} } {N^\alpha_i}: N^\alpha_i \in B_\alpha}$.
Let $\KK_J = \ds \set {\bigcap_{\alpha \mathop \in J} L_\alpha : \forall \alpha \in J: L_\alpha \in \LL_\alpha}$ for $J \subset I$, $\size J < \infty$.
From Product Space Local Basis Induced from Factor Spaces Local Bases:

$\ds \BB_x = \bigcup_{J \mathop \subset I \mathop , \size J \mathop < \infty} \KK_J$ forms a local basis of $x$ in the product space $\struct {S_\alpha, \tau_\alpha}$

Now, each of the $\LL_\alpha$'s is countable. 
Since the $\KK_J$'s can be identified with a finite product of countable sets, they are each countable
From Countable Union of Countable Sets is Countable, $\BB_x$ forms a countable local basis of $x$ in the product space $\struct {S_\alpha, \tau_\alpha}$.
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




