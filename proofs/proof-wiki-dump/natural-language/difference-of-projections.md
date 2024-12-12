# 

Source: https://proofwiki.org/wiki/Difference_of_Projections



Theorem
Let $H$ be a Hilbert space.
Let $P, Q$ be projections.

Then the following are equivalent:

$(1): \quad P - Q$ is a projection
$(2): \quad P Q = Q$
$(3): \quad Q P = Q$

This article needs to be linked to other articles.In particular: Provide proper linking to the def of addition of operatorsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Proof
First it is shown that $(2)$ is equivalent to $(3)$.
Then, equivalence to $(1)$ is shown.


$(2)$ iff $(3)$
Suppose $P Q = Q$.
Then $P = P + Q - P Q$, and by Product of Projections, necessarily $P Q = Q P$.
That is, $Q P = P Q = Q$.
The converse is obtained by swapping the rôles of $P$ and $Q$ in Product of Projections.
$\Box$


$(2), (3)$ imply $(1)$
Suppose $P Q = Q P = Q$. Then as $P, Q$ are projections:

$\paren {P - Q}^2 = P^2 + Q^2 - P Q - Q P = P - Q$
That is, $P - Q$ is idempotent.
From Adjoining is Linear, $\paren {P - Q}^* = P^* - Q^* = P - Q$.
An application of Characterization of Projections, statement $(4)$ shows that $P - Q$ is a projection.
$\Box$


$(1)$ implies $(2)$
Let $P - Q$ be a projection.
Then by Characterization of Projections, statement $(6)$, one has:

$\innerprod {P h} h_H - \innerprod {Q h}, h_H \ge 0$
Applying this statement on $P, Q$ also, one obtains that:

$P h = 0 \implies Q h = 0$
that is:

$\ker P \subseteq \ker Q$
Orthocomplement Reverses Subset and that $P, Q$ are projections combine to state $\Rng Q \subseteq \Rng P$.
So for every $h \in H$, there is a $p \in H$ with $Q h = P p$.
It follows that:

$P Q h = P P p = P p = Q h$
Hence $PQ = Q$.
$\blacksquare$


Also see
Sum of Projections
Product of Projections


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $II.3 \text{ Exercise } 6$




