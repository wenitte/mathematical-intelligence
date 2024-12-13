# 

Source: https://proofwiki.org/wiki/Open_Balls_form_Local_Basis_for_Point_of_Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x \in A$.
Let $\BB_x$ be the set of all open balls of $M$ centered on $x$.
That is:

$\BB_x = \set {\map {B_\epsilon} x : \epsilon \in \R_{>0}}$

Then $\BB$ is a local basis of $x$.


Proof
Let $U$ be an open set of $M$ which has $x$ as an element.
Then by definition of an open set:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subseteq U$
From Open Ball of Metric Space is Open Set, $\BB_x$ is a set of open set which have $x$ as an element.
By definition of a local basis, $\BB_x$ is a local basis of $x$.
$\blacksquare$





