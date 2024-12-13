# 

Source: https://proofwiki.org/wiki/Sequential_Compactness_is_Preserved_under_Continuous_Surjection



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a continuous surjection.

If $T_A$ is sequentially compact, then $T_B$ is also sequentially compact.


Proof
Let $T_A$ be a sequentially compact space.
Take an infinite sequence $\sequence {x_n} \subseteq S_B$.
From the surjectivity of $\phi$, there exists another infinite sequence $\sequence {y_n} \subseteq S_A$ such that $\map \phi {y_n} = x_n$.
By the definition of sequential compactness, there exists a subsequence of $\sequence {y_n}$
Let this subsequence be named $\sequence {y_{n_k} }$.
Let $\sequence {y_{n_k} }$ converge to $y \in S_A$ with respect to $T_A$.
From the continuity of $\phi$, it is concluded that $\map \phi {y_{n_k} } = x_{n_k}$ converges to $\map \phi y \in S_B$.
Thus, $\sequence {x_n}$ has a subsequence that converges.
By definition, $T_B$ is sequentially compact.
$\blacksquare$


Also see
Compactness Properties Preserved under Continuous Surjection


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




