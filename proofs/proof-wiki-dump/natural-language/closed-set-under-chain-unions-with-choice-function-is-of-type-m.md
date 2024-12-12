# 

Source: https://proofwiki.org/wiki/Closed_Set_under_Chain_Unions_with_Choice_Function_is_of_Type_M

Theorem
Let $S$ be a set which is closed under chain unions.
Let there exist a choice function for $S$.

Then $S$ is of type $M$, that is:

every element of $S$ is a subset of a maximal element of $S$ under the subset relation.


Proof
Let $S$ be closed under chain unions.
Let $C$ be a choice function for $S$.
For $x \in S$, let $x^*$ be defined as the set of all elements $y$ of $S$ such that $x$ is a proper subset of $y$:

$\forall x \in S: x^* := \set {y \in S: x \subsetneqq y}$
We have that $x^*$ is empty if and only if $x$ is a maximal element of $S$ under the subset relation.

Let us define a progressing mapping $g$ on $S$ as follows:

$\forall x \in S: \map g x = \begin{cases} x & : \text {$x$ is maximal} \\ \map C {x^*} & : \text {otherwise} \end{cases}$
Thus:

if $x$ is a maximal element of $S$, then $\map g x = x$
if $x$ is not a maximal element of $S$, then $x$ is a proper subset of $\map g x$.
By Set which is Superinductive under Progressing Mapping has Fixed Point: Corollary:

for all $b \in S$, $b$ is a subset of some $x \in S$ such that $x = \map g x$.
This element $x$ is then a maximal element of $S$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles: Theorem $5.3$




