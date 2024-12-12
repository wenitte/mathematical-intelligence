# 

Source: https://proofwiki.org/wiki/Friendship_Theorem



Theorem
Let there be a group of $6$ people.
The traditional setting is that these $6$ people are at a party.

Then (at least) one of the following $2$ statements is true:

$(1): \quad$ At least $3$ of these $6$ people have all met each other before
$(2): \quad$ At least $3$ of these $6$ people have never met each other before.

That is, either there exists a set of $3$ mutual acquaintances, or there exists a set of $3$ mutual strangers.


Proof 1
This is a simple example of Ramsey's Theorem.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
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


Also known as
This theorem has many names and guises; $\mathsf{Pr} \infty \mathsf{fWiki}$ has adopted the name the friendship theorem as it is short.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3$




