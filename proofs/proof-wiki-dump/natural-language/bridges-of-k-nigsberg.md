# 

Source: https://proofwiki.org/wiki/Bridges_of_K%C3%B6nigsberg



Problem
Through the city of Königsberg flowed the Pregel River. In this river were two large islands, which were part of the city.
Joining the mainland either side of the river and those two islands there stood seven bridges.


It was a popular exercise among the citizens to take a pleasure stroll across the bridges.
The question naturally arose: was it possible to cross each bridge once and once only during the course of a single walk?
More to the point: could this be done such that the walkers end up back at their starting point?


Solution
The shape of the land and the positions of the bridges are irrelevant.
What is important is the relationships between the land and the bridges.
We can represent each of the landmasses as the vertices and the bridges as the edges of a multigraph:


The question now evolves into: does this graph allow the construction of an Eulerian circuit, or failing that, an Eulerian trail?

It can be seen that this is a graph in which there are four vertices, each of which is odd.
From Characteristics of Eulerian Graph, it is clear that the walkers can not cross all the bridges once each and return to their starting point, as all the vertices would need to be even for that.

From Characteristics of Traversable Graph, it also follows that this graph is not traversable, as it has more than two odd vertices.

The answer to both questions is, therefore: No.
$\blacksquare$


Also see
This problem does not relate, in any way, to graph theoretic bridges.


Historical Note
The solution of the Bridges of Königsberg problem, in a rather different form, was first given by Leonhard Euler in his $1736$ paper Solutio problematis ad geometriam situs pertinentis.
This is widely considered as the first ever paper in the field of graph theory.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.1$: The Königsberg Bridge Problem: An Introduction to Eulerian Graphs: Theorem $3.1$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Bridges of Königsberg: $133$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Eulerian graph
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Königsberg bridge problem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Eulerian graph
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Königsberg bridge problem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): bridges of Königsberg
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Königsberg




