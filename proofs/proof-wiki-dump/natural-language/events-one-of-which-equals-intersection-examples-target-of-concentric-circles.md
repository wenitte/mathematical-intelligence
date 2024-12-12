# 

Source: https://proofwiki.org/wiki/Events_One_of_Which_equals_Intersection/Examples/Target_of_Concentric_Circles

Examples of Use of Events One of Which equals Union
Let $T$ be a target which consists of $10$ concentric circles $C_1$ to $C_{10}$ whose radii are respectively $r_k$ for $k = 1, 2, \ldots, 10$.
Let $r_k < r_{k + 1}$ for all $k = 1, 2, \ldots, 9$.
That is, let $C_1$ be the innermost and $C_{10}$ be the outermost.
Let $A_k$ denote the event of hitting $T$ inside the circle of radius $r_k$.

Let $C$ denote the event:

$C = \ds \bigcap_{k \mathop = 5}^{10} A_k$

Then $C$ is the event of hitting $T$ inside circle $C_5$.


Proof
By the geometry of the situation:

$C_5 \subseteq C_6 \subseteq \cdots \subseteq C_{10}$
By Events One of Which equals Intersection:














\(\ds A_5 \cap A_{10} = A_5\)

\(\iff\)







\(\ds A_5 \subseteq A_{10}\)




















\(\ds A_5 \cap A_9 = A_5\)

\(\iff\)







\(\ds A_5 \subseteq A_9\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds A_5 \cap A_6 = A_5\)

\(\iff\)







\(\ds A_5 \subseteq A_6\)









The result follows.
$\blacksquare$


Sources
1968: A.A. Sveshnikov: Problems in Probability Theory, Mathematical Statistics and Theory of Random Functions (translated by Richard A. Silverman) ... (previous) ... (next): $\text I$: Random Events: $1$. Relations among Random Events: Problem $3$
Note that the question does not state whether $r_k < r_{k + 1}$ for all $k = 1, 2, \ldots, 9$ or $r_k > r_{k + 1}$ for all $k = 1, 2, \ldots, 9$. The interpretation made here is the one which provides the correct answer.




