# 

Source: https://proofwiki.org/wiki/Product_of_Projections



Theorem
Let $H$ be a Hilbert space.
Let $P, Q$ be projections.

Then the following are equivalent:

$(1): \quad P Q$ is a projection
$(2): \quad P Q = Q P$
$(3): \quad P + Q - P Q$ is a projection

This article needs to be linked to other articles.In particular: Provide proper linking to the def of addition and multiplication of operatorsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Proof
The proof proceeds by first showing that $(1)$ is equivalent to $(2)$.
Then, these are combined and shown equivalent to $(3)$.


$(1)$ implies $(2)$
Let $P Q$ be a projection. 
Then by Characterization of Projections, statement $(4)$, one has:

$P Q = \paren {P Q}^* = Q^* P^* = Q P$
where the penultimate equality follows from Adjoint of Composition of Linear Transformations is Composition of Adjoints.
$\Box$


$(2)$ implies $(1)$
Let $P Q = Q P$.
Then:

$\paren {P Q}^2 = P Q P Q = P^2 Q^2 = P Q$
as $P, Q$ are projections.
Hence $P Q$ is an idempotent.
Also from Adjoint of Composition of Linear Transformations is Composition of Adjoints:

$\paren {P Q}^* = Q^* P^* = Q P = P Q$.
Hence, by Characterization of Projections, statement $(4)$, $P Q$ is a projection.
$\Box$


$(1), (2)$ imply $(3)$
The above establishes that assuming either of $(1)$ and $(2)$ yields both to hold.
So assuming $(1)$, $P, Q$ and $P Q$ are all projections, and $P Q = Q P$.
Now compute:














\(\ds \paren {P + Q - P Q}^2\)

\(=\)







\(\ds P^2 + Q^2 + \paren {P Q}^2 + P Q + Q P - P P Q - P Q P - Q P Q - P Q Q\)




















\(\ds \)

\(=\)







\(\ds P + Q - P Q + P Q + P Q - P Q - P Q - P Q - P Q\)





$P, Q, P Q$ projections, $P Q = Q P$














\(\ds \)

\(=\)







\(\ds P + Q - P Q\)










It follows that $P + Q - P Q$ is an idempotent.
From:

Adjoining is Linear
Adjoint of Composition of Linear Transformations is Composition of Adjoints:
$\paren {P + Q - P Q}^* = P^* + Q^* - Q^* P^* = P + Q - QP = P + Q - P Q$
Now applying Characterization of Projections, statement $(4)$, conclude that $P + Q - P Q$ is a projection.
$\Box$


$(3)$ implies $(2)$
Let $P + Q - P Q$ be a projection.
Then by Characterization of Projections, statement $(4)$, compute:














\(\ds P + Q - P Q\)

\(=\)







\(\ds \paren {P + Q - P Q}^*\)




















\(\ds \)

\(=\)







\(\ds P^* + Q^* - Q^* P^*\)





Adjoining is Linear, Adjoint of Composition of Linear Transformations is Composition of Adjoints














\(\ds \)

\(=\)







\(\ds P + Q - Q P\)










Hence necessarily $P Q = Q P$.
$\blacksquare$


Also see
Sum of Projections
Difference of Projections


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.3$ Exercises $4, 7$




