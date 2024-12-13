# 

Source: https://proofwiki.org/wiki/User:Scshunt/Definitions_of_Graph_are_Equivalent

Theorem 1
Let $G = \struct {V, E}$ be a graph with edges as sets.
Then there exists an incidence function $\phi : V \times E \to \set {0, 1}$ such that $G' = \struct {V, E, \phi}$ is a graph.
Moreover, $v \in V$ and $e \in E$ are incident in $G$ if and only if they are incident in $G'$.

Proof of Theorem 1
Let:

$\map \phi {v, e} = \begin {cases} 1 & : v \in e \\ 0 & : v \notin e \end {cases}$

By the definition of incidence in $G$, $v$ and $e$ are incident in $G$ if and only if $v \in e$.
By the definition of $\phi$, $v \in e$ if and only if $\map \phi {v, e} = 1$.
By the definition of incidence in $G'$, $v$ and $e$ are incident in $G'$ if and only if $\map \phi {v, e} = 1$.

So $v$ and $e$ are incident in $G$ if and only if they are incident in $G'$.
$\blacksquare$





