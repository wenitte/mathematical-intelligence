# 

Source: https://proofwiki.org/wiki/Relationship_between_Limit_Point_Types


This page has been identified as a candidate for refactoring of medium complexity.In particular: Separate out into its various parts. There are in fact $6$ separate items to be proved.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $T = \struct {X, \tau}$ be a topological space.
Let $A \subseteq X$.

Let:

$C$ be the set of condensation points of $A$
$W$ be the set of $\omega$-accumulation points of $A$
$L$ be the set of limit points of $A$
$D$ be the set of adherent points of $A$.

Then:

$C \subseteq W \subseteq L \subseteq D$

That is:

Every condensation point is an $\omega$-accumulation point
Every $\omega$-accumulation point is a limit point
Every limit point is an adherent point.

In general, the inclusions do not hold in the other direction.


Proof
Let $x \in C$.
By definition of condensation point, every open set of $T$ containing $x$ also contains an uncountable number of points of $A$.
As an uncountable number is also an infinite number, we could also say that every open set of $T$ containing $x$ also contains an infinite number of points of $A$.
That is, $x$ is also by definition an $\omega$-accumulation point.
So $x \in W$ and by definition of subset:

$C \subseteq W$

Note that if $x \in W$ then it could be that there exists an open set $U$ of $T$ containing $x$ with a countably infinite number of points of $A$.
In that case $x \notin C$.

That is, not every $\omega$-accumulation point is necessarily a condensation point.
$\Box$

Let $x \in W$.
By definition of $\omega$-accumulation point, every open set $U$ of $T$ containing $x$ also contains an infinite number of points of $A$.
So every open set $U$ of $T$ such that $x \in U$ contains some point of $A$ other than $x$ (an infinite number, indeed).

That is, $x$ is also by definition a limit point.
So $x \in L$ and by definition of subset:

$W \subseteq L$

Let $T = \struct {S, \tau_p}$ be a particular point space.
From Limit Points in Particular Point Space, every point $x \ne p$ is a limit point of $T$.
From Point in Particular Point Space is not Omega-Accumulation Point, $x$ is not an definition of $\omega$-accumulation point of $T$. 
So it is seen that not every limit point is necessarily an $\omega$-accumulation point.
$\Box$

Let $x \in L$.
By definition of limit point, every open set $U$ of $T$ containing $x$ also contains some point of $A$ other than $x$.
So every open set $U$ of $T$ such that $x \in U$ contains some point of $A$.

That is, $x$ is also by definition an adherent point.
So $x \in L$ and by definition of subset:

$L \subseteq D$

Note that if $x \in D$ then it could be that there exists an open set $U$ of $T$ containing $x$ in which the only point of $A$ is $x$ itself.
In that case $x \notin L$.

That is, not every adherent point is necessarily a limit point.
$\Box$

Hence the result.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Decide where it ought to fit in the flowIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points




