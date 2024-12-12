# 

Source: https://proofwiki.org/wiki/Friendship_Theorem/Proof_2

Theorem
Let there be a group of $6$ people.
The traditional setting is that these $6$ people are at a party.

Then (at least) one of the following $2$ statements is true:

$(1): \quad$ At least $3$ of these $6$ people have all met each other before
$(2): \quad$ At least $3$ of these $6$ people have never met each other before.

That is, either there exists a set of $3$ mutual acquaintances, or there exists a set of $3$ mutual strangers.


Proof
This can be expressed in graph theoretical language as:
Let the edges of $K_6$, the complete graph of $6$ vertices be edge-colored using $2$ colors.
Then there will be a triangle subgraph of $K_6$ whose edges all have the same color.

Let the colors be red and blue.
Choose any one vertex $P$.
There are $5$ edges incident to $P$.
They are each colored red or blue.
By the Pigeonhole Principle, at least $3$ of them must be of the same color.
Without loss of generality, suppose that less than $3$ are red.
Then the others, $3$ or more, must be blue.
Let $A$, $B$, $C$ be the other vertices incident to these $3$ edges, all of which are blue.

There are $2$ cases:

$(1): \quad$ Let any one of $AB$, $BC$ and $CA$ be blue.
Then that edge, together with the $2$ edges to $P$ forms a blue triangle.

$(2): \quad$ Let none of $AB$, $BC$ and $CA$ be blue.
Then all three edges are red.
Thus $AB$, $BC$ and $CA$ form a red triangle.
Hence the result.
$\blacksquare$





