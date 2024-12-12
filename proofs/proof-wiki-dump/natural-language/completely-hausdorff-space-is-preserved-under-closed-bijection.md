# 

Source: https://proofwiki.org/wiki/Completely_Hausdorff_Space_is_Preserved_under_Closed_Bijection

Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a closed bijection.

If $T_A$ is a $T_{2 \frac 1 2}$ (completely Hausdorff) space, then so is $T_B$.


Proof
Let $T_A$ be a $T_{2 \frac 1 2}$ (completely Hausdorff) space.
Then:

$\forall x, y \in S_A, x \ne y: \exists U_A, V_A \in \tau_A: x \in U_A, y \in V_A: U_A^- \cap V_A^- = \O$
where $U_A^-$ signifies the closure of $U_A$.

Suppose that $T_B$ is not completely Hausdorff.
Then:

$\exists a, b \in S_B: a \ne b: \forall U_B, V_B \in \tau_B: a \in U_B, b \in V_B \implies U_B^- \cap V_B^- \ne \O$
That is, there exists at least one pair of points $a$ and $b$ for which the closures of all the open sets containing $a$ and $b$ are not disjoint.
From Topological Closure is Closed, both $U_B^-$ and $V_B^-$ are closed.
From Topology Defined by Closed Sets, it follows that $W_B = U_B^- \cap V_B^-$ is also a closed set.

From Preimage of Intersection under Mapping, we have:

$\phi^{-1} \sqbrk {U_B^- \cap V_B^-} = \phi^{-1} \sqbrk {U_B^-} \cap \phi^{-1} \sqbrk {V_B^-}$
Let $H_A = \phi^{-1} \sqbrk {U_B^-}, K_A = \phi^{-1} \sqbrk {V_B^-}, W_A = \phi^{-1} \sqbrk {W_B}$.
Then we have:

$H_A \cap K_A = W_A \ne \O$

By Bijection is Open iff Closed, $\phi$ is an open bijection.
By Bijection is Open iff Inverse is Continuous, it follows that $\phi^{-1}$ is continuous.

From Continuity Defined from Closed Sets, we have that $H_A$, $K_A$ and $W_A$ are all closed.
Also, let $U_A = \phi^{-1} \sqbrk {U_B}$ and $V_A = \phi^{-1} \sqbrk {V_B}$.
From Continuity Defined by Closure, we have that:

$\phi^{-1} \sqbrk {U_B^-} \subseteq \paren {\phi^{-1} \sqbrk {U_B} }^-$
$\phi^{-1} \sqbrk {V_B^-} \subseteq \paren {\phi^{-1} \sqbrk {V_B} }^-$
that is:

$H_A \subseteq U_A^-$
$K_A \subseteq V_A^-$
As $H_A \cap K_A \ne \O$ it follows that $U_A^- \cap V_A^- \ne \O$.

From the bijective nature of $\phi$, we have that:

$a \in U_B \implies \map {\phi^{-1} } a \in U_A$
$b \in V_B \implies \map {\phi^{-1} } b \in V_A$
Let $x = \map {\phi^{-1} } a, y = \map {\phi^{-1} } b$.
Thus we have that:

$\exists x, y \in X_A: x \ne y: \forall U_A, V_A \in \tau_A: x \in U_A, y \in V_A \implies U_A^- \cap V_A^- \ne \O$
contradicting the fact that $T_A$ is a $T_{2 \frac 1 2}$ (completely Hausdorff) space.
Hence $T_B$ must after all be a $T_{2 \frac 1 2}$ (completely Hausdorff) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




