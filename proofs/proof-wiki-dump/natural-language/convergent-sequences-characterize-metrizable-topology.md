# 

Source: https://proofwiki.org/wiki/Convergent_Sequences_Characterize_Metrizable_Topology

Theorem
Let $X$ be a set. 
Let $\tau_1$ and $\tau_2$ be metrizable topologies induced by metrics $d_1$ and $d_2$ respectively.
Suppose that:

a sequence $\sequence {x_n}_{n \in \N} \subseteq X$ converges to $x \in X$ in $\struct {X, d_1}$ if and only if it converges to $x$ in $\struct {X, d_2}$.

Then $\tau_1 = \tau_2$. 


Proof
Let $U$ be open in $\struct {X, d_1}$. 
Then $X \setminus U$ is closed in $\struct {X, d_1}$.
That is, from the definition of closedness in a metric space, for each $x \in X \setminus U$ there exists a sequence $\sequence {x_n}_{n \in \N}$ in $X \setminus U$ converging to $x$ in $\struct {X, d_1}$.
By hypothesis, each such $\sequence {x_n}_{n \in \N}$ also converges to $x$ in $\struct {X, d_2}$.
Hence $X \setminus U$ is also cloesd in $\struct {X, d_2}$.
Hence $U$ is open in $\struct {X, d_2}$.
So $\tau_1 \subseteq \tau_2$.
Swapping $d_1$ and $d_2$ in the above we get $\tau_2 \subseteq \tau_1$ and hence $\tau_1 = \tau_2$. 
$\blacksquare$





