# 

Source: https://proofwiki.org/wiki/Closed_Set_in_Coarser_Topology_is_Closed_in_Finer_Topology

Theorem
Let $X$ be a set. 
Let $\tau_1$ and $\tau_2$ be topologies on $X$ such that $\tau_1 \subseteq \tau_2$.
That is, $\tau_1$ is coarser than $\tau_2$. 
Let $C$ be a closed set in $\struct {X, \tau_1}$. 

Then $C$ is closed in $\struct {X, \tau_2}$. 


Proof
Let $C$ be a closed set in $\struct {X, \tau_1}$.
Then by definition of closed set:

$X \setminus C$ is open in $\struct {X, \tau_1}$.
Hence by definition of open set:

$X \setminus C \in \tau_1$
By definition of subset:

$X \setminus C \in \tau_2$
So by definition of open set:

$X \setminus C$ is open in $\struct {X, \tau_2}$.
So $C$ is closed in $\struct {X, \tau_2}$ by definition.
$\blacksquare$





