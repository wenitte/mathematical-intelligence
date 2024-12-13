# 

Source: https://proofwiki.org/wiki/Number_of_Hamilton_Cycles_in_Complete_Graph

Theorem
For all $n \ge 3$, the number of distinct Hamilton cycles in the complete graph $K_n$ is $\dfrac {\left({n-1}\right)!} 2$.


Proof
In a complete graph, every vertex is adjacent to every other vertex.
Therefore, if we were to take all the vertices in a complete graph in any order, there will be a path through those vertices in that order.
Joining either end of that path gives us a Hamilton cycle.

From Cardinality of Set of Bijections, there are $n!$ different ways of picking the vertices of $G$ in some order.
Hence there are $n!$ ways of building such a Hamilton cycle.

Not all these are different, though.
On any such cycle, there are:

$n$ different places you can start
$2$ different directions you can travel.
So any one of these $n!$ cycles is in a set of $2 n$ cycles which all contain the same set of edges.
So there are $\dfrac {n!} {2 n} = \dfrac {\paren {n - 1}!} 2$ distinct Hamilton cycles.
$\blacksquare$





