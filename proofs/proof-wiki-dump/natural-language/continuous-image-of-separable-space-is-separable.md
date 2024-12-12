# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Separable_Space_is_Separable

Definition
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a continuous mapping.

If $T_1$ is separable, then so is the image $f \sqbrk {T_1}$.

That is, separability is a continuous invariant.


Proof
By definition, $T_1 = \struct {S_1, \tau_1}$ is separable if and only if there exists a countable subset $D \subset S_1$ which is (everywhere) dense in $T_1$.
We need to show that if there exists a continuous mapping $f: T_1 \to T_2$, then $f \sqbrk {T_1}$ is also separable.
That is, that there exists a countable subset of $f \sqbrk {S_1}$ which is dense in $T_2$.

Let $x_2$ be any point in the image $f \sqbrk {S_1}$ of $S_1$ under $f$.
Let $U \in \tau_2$ be an arbitrary open set such that $x_2 \in U$.
By definition of image set, there exists some $x_1 \in S_1$ with $\map f {x_1} = x_2$.
Since $f$ is continuous, $f^{-1} \sqbrk U$ is open in $T_1$.
By definition of preimage, $x_1$ is in this set.

We are given that $D$ is a countable subset of $S_1$ which is dense in $T_1$.
By definition of dense, $D \cap f^{-1} \sqbrk U \ne \O$
Thus there exists some $d \in D$ such that $d \in f^{-1} \sqbrk U$.
Therefore $\map f d \in U$.
Since $U$ was arbitrary, it follows that $f \sqbrk D$ is dense in $T_2$.
By Image of Countable Set under Mapping is Countable, $f \sqbrk D$ is countable.
Hence $T_2$ is separable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




