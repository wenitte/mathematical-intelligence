# 

Source: https://proofwiki.org/wiki/Degree_of_Vertex/Examples/Impossible_Order_4_Graph

Examples of Degrees of Vertices
There exists no simple graph whose vertices have degrees $1, 3, 3, 3$.


Proof
Aiming for a contradiction, suppose there exists a simple graph $G = \struct {V, E}$ with $4$ vertices $v_1, v_2, v_3, v_4$ whose degrees are $1, 3, 3, 3$.
Without loss of generality, let $\map \deg {v_1} = 1$.
Then each of $v_2$, $v_3$ and $v_4$ are of degree $3$.
So each of $v_2$, $v_3$ and $v_4$ are joined to all the other vertices.
That includes $v_1$.
So that means $v_1$ is joined to each of $v_2$, $v_3$ and $v_4$
But that means $v_1$ is of degree $3$.
This contradicts the supposition that $\map \deg {v_1} = 1$.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Problem $4$




