# 

Source: https://proofwiki.org/wiki/Gelfand_Transform_is_Continuous_Function_Vanishing_at_Infinity

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a commutative Banach algebra over $\C$ such that:

the spectrum $\Phi_A$ of $A$ is non-empty.
Let $\hat a$ be the Gelfand transform of $a$.
Let $\struct {\map {\CC_0} {\Phi_A}, \norm {\, \cdot \,}_\infty}$ be the set of complex-valued functions vanishing at infinity with the supremum norm.

Then $\hat a \in \map {\CC_0} {\Phi_A}$.


Proof
From Characterization of Continuity of Linear Functional in Weak-* Topology:

the map $\iota a : \struct {A^{\ast \ast}, w^\ast} \to \C$ defined by $\map {\iota a} \phi = \map \phi a$ for each $\phi \in A^{\ast \ast}$ is continuous.
The spectrum $\Phi_A$ is given the subspace topology inherited from $\struct {A^{\ast \ast}, w^\ast}$. 
Hence $\hat a$ is continuous from Restriction of Continuous Mapping is Continuous: Topological Spaces.
We show that $\hat a$ complex-valued functions vanishes at infinity.
Let $\epsilon > 0$. 
We have that:

$\set {z \in \C : \cmod z \ge \epsilon}$ is closed.
Hence:

$\paren {\hat a}^{-1} \sqbrk {\set {z \in \C : \cmod z \ge \epsilon} }$ is weak-$\ast$ closed
from the continuity of $\hat a$.
That is: 

$\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ is weak-$\ast$ closed in $\Phi_A$.

If $A$ is unital, then from Spectrum of Banach Algebra is Weak-* Locally Compact Hausdorff Space: Corollary $\Phi_A$ is a compact Hausdorff space.
Then from Complex-Valued Function on Compact Hausdorff Space Vanishes at Infinity, we have that $\hat a$ vanishes at infinity.

If $A$ is not unital, then from  then from Spectrum of Banach Algebra is Weak-* Locally Compact Hausdorff Space: Corollary $\Phi_A^+ = \Phi_A \cup \set { {\mathbf 0}_{A^{\ast \ast} } }$ is weak-$\ast$ closed in $B_{A^{\ast \ast} }$.
Since $\epsilon > 0$ we have:

$\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} = \set {\phi \in \Phi_A^+ : \cmod {\map \phi a} \ge \epsilon}$
From Set is Closed iff Equals Topological Closure we have:

$\map {\cl_{\Phi_A} } {\set {\phi \in \Phi_A^+ : \cmod {\map \phi a} \ge \epsilon} } = \set {\phi \in \Phi_A^+ : \cmod {\map \phi a} \ge \epsilon}$
while:

$\map {\cl_{\Phi_A} } {\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} } = \Phi_A \cap \map {\cl_{\Phi_A^+} } {\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} }$
by Closure of Subset in Subspace. 
Hence:

$\set {\phi \in \Phi_A^+ : \cmod {\map \phi a} \ge \epsilon} \subseteq \map {\cl_{\Phi_A^+} } {\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} } \subseteq \set {\phi \in \Phi_A^+ : \cmod {\map \phi a} \ge \epsilon} \cup \set { {\mathbf 0}_{A^{\ast \ast} } }$
Hence to determine that $\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ remains closed in $\Phi_A^+$, we just need to establish:

${\mathbf 0}_{A^{\ast \ast} } \not \in \map {\cl_{\Phi_A^+} } {\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} }$
Suppose otherwise, then there exists a directed set $\tuple {\Lambda, \preceq}$ and a net $\sequence {\phi_\lambda}_{\lambda \mathop \in \Lambda}$ in $\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ such that:

$\phi_\lambda \to {\mathbf 0}_{A^{\ast \ast} }$
From Characterization of Convergent Net in Weak-* Topology, we then have:

$\map {\phi_\lambda} a \to 0$
This contradicts the fact that $\cmod {\map {\phi_\lambda} a} \ge \epsilon > 0$ for each $\lambda \in \Lambda$.
So we have that:

$\map {\cl_{\Phi_A^+} } {\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon} } = \set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$
So from Set is Closed iff Equals Topological Closure we have:

$\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ is weak-$\ast$ closed in $\Phi_A \cup \set { {\mathbf 0}_{A^{\ast \ast} } }$.
By the Banach-Alaoglu Theorem, $B_{A^{\ast \ast} }$ is weak-$\ast$ compact, hence $\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ is then weak-$\ast$ compact from Closed Subspace of Compact Space is Compact.
We then have:

$\cmod {\map {\hat a} \phi} < \epsilon$ for $\phi \in \Phi_A \setminus \set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$
with $\set {\phi \in \Phi_A : \cmod {\map \phi a} \ge \epsilon}$ weak-$\ast$ compact.
So $\hat a$ vanishes at infinity.
$\blacksquare$





