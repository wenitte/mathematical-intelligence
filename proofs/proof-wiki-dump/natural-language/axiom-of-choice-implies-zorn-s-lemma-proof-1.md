# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Zorn%27s_Lemma/Proof_1

Theorem
Let the Axiom of Choice be accepted.
Then Zorn's Lemma holds.


Proof

This page has been identified as a candidate for refactoring of medium complexity.In particular: towerUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
For each $x \in X$, consider the lower closure $x^\preceq$:

$x^\preceq = \set {y \in X: y \preceq x}$
Let $\mathbb S \subseteq \powerset X$ be the image of $\cdot^\preceq$ considered as a mapping from $X$ to $\powerset X$, where $\powerset X$ is the power set of $X$.
From Ordering is Equivalent to Subset Relation:

$\forall x, y \in X: x^\preceq \subseteq y^\preceq \iff x \preceq y$
Thus the task of finding a maximal element of $X$ is equivalent to finding a maximal set in $\mathbb S$.

Thus the statement of the result is equivalent to a statement about chains in $\mathbb S$:

Let $\mathbb S$ be a non-empty subset of $\powerset X, X \ne \O$ such that every non-empty chain in $\mathbb S$, ordered by $\subseteq$, has an upper bound in $\mathbb S$.
Then $\mathbb S$ has at least one maximal set.

Let $\mathbb X$ be the set of all chains in $\struct {X, \preceq}$.
Every element of $X$ is included in $\map {s^\preceq} x$ for some $x \in X$.
$\mathbb X$ is a non-empty set of sets which are ordered (perhaps partially) by subset relation.
If $\CC$ is a chain in $\mathbb X$, then:

$\ds \bigcup_{A \mathop \in \CC} A \in \mathbb X$
Since each set in $\mathbb X$ is dominated by some set in $\mathbb S$, going from $\mathbb S$ to $\mathbb X$ can not introduce any new maximal elements.

The main advantage of using $\mathbb X$ is that the chain hypothesis is in a slightly more specific form.
Instead of saying that each chain in $\CC$ has an upper bound in $\mathbb S$, we can explicitly state that the union of the sets of $\CC$ is an element of $\mathbb X$.
This union of the sets of $\CC$ is clearly an upper bound of $\CC$.
Another advantage of $\mathbb X$ is that, from Subset of Toset is Toset, it contains all the subsets of each of its sets.
Thus we can enlarge non-maximal sets in $\mathbb X$ one element at a time.

So, from now on, we need consider only this non-empty collection $\mathbb X$ of subsets of a non-empty set $X$.
$\mathbb X$ is subject to two conditions:

$(1): \quad$ Every subset of each set in $\mathbb X$ is in $\mathbb X$.
$(2): \quad$ The union of each chain of sets in $\mathbb X$ is in $\mathbb X$.
It follows from $(1)$ that $\O \in \mathbb X$.
We need to show that there exists a maximal set in $\mathbb X$.

Let $f$ be a choice function for $X$:

$\forall A \in \powerset X \setminus \O: \map f A \in A$
For each $A \in \mathbb X$, let $\hat A$ be defined as:

$\hat A := \set {x \in X: A \cup \set x \in \mathbb X}$
That is, $\hat A$ consists of all the elements of $X$ which, when added to $A$, make a set which is also in $\mathbb X$.

From its definition:

$\ds \hat A = \bigcup_{x \mathop \in \hat A} \paren {A \cup \set x}$
where each of $A \cup \set x$ are chains in $X$ and so elements of $\mathbb X$.
Suppose there exists a maximal set $M$ in $\mathbb X$.
Then, by definition of maximal, there are no elements in $x \in X \setminus M$ which can be added to $M$ to make $M \cup \set x$ another element of $\mathbb X$.
Thus it follows that $\hat M = M$.
From Set Difference with Self is Empty Set it then follows that if $A$ is maximal, then $\hat A \setminus A = \O$.

The mapping $g: \mathbb X \to \mathbb X$ can now be defined as:

$\forall A \in \mathbb X: \map g A = \begin{cases}
A \cup \set {\map f {\hat A \setminus A} } & : \hat A \setminus A \ne \O \\
A & : \text{otherwise} \end{cases}$
Thus what we now have to prove is that:

$\exists A \in \mathbb X: \map g A = A$

Note that from the definition of $g$:

$\forall A \in \mathbb X: A \subseteq \map g A$
Also note that $\map f {\hat A \setminus A}$ is a single element of $\hat A \setminus A$.
Thus we obtain the crucial fact that $\map g A$ contains at most one more element than $A$.

We (temporarily) define a tower as being a subset $\TT$ of $\mathbb X$ such that:

$(1): \quad \O \in \TT$
$(2): \quad A \in \TT \implies \map g A \in \TT$
$(3): \quad$ If $\CC$ is a chain in $\TT$, then $\ds \bigcup_{A \mathop \in \CC} A \in \TT$

There is of course at least one tower in $\mathbb X$, as $\mathbb X$ itself is one.
It follows from its definition that the intersection of a collection of towers is itself a tower.
It follows in particular that if $\TT_0$ is the intersection of all towers in $\mathbb X$, then $\TT_0$ is the smallest tower in $\mathbb X$.
Next we demonstrate that $\TT_0$ is a chain.

We (temporarily) define a set $C \in \TT_0$ as comparable if it is comparable with every element of $\TT_0$.
That is, if $A \in \TT_0$ then $C \subseteq A$ or $A \subseteq C$.
To say that $\TT_0$ is a chain means that all sets of $\TT_0$ are comparable.
There is at least one comparable set in $\T T_0$, as $\O$ is one of them.

So, suppose $C \in \TT_0$ is comparable.
Let $A \in \TT_0$ such that $A \subsetneq C$.
Consider $\map g A$.
Because $C$ is comparable, either $C \subsetneq \map g A$ or $\map g A \subseteq C$.
In the former case $A$ is a proper subset of a proper subset of $\map g A$.
This contradicts the fact that $\map g A \setminus A$ can be no more than a singleton.
Thus if such an $A$ exists, we have that:

$(A): \quad \map g A \subseteq C$

Now let $\UU$ be the set defined as:

$\UU := \set {A \in \TT_0: A \subseteq C \lor \map g C \subseteq A}$
Let $\UU'$ be the set defined as:

$\UU' := \set {A \in \TT_0: A \subseteq \map g C \lor \map g C \subseteq A}$
That is, $\UU'$ is the set of all sets in $\TT_0$ which are comparable with $\map g C$.
If $A \in \UU$, then as $C \subseteq \map g C$, either $A \subseteq \map g C \lor \map g C \subseteq A$
So $\UU \subseteq \UU'$.

The aim now is to demonstrate that $\UU$ is a tower.
From Empty Set is Subset of All Sets, $\O \subseteq C$.
Hence condition $(1)$ is satisfied.

Now let $A \in \UU$.
As $C$ is comparable, there are three possibilities:

$(1'): \quad A \subsetneq C$
Then from $(A)$ above, $\map g A \subseteq C$.
Therefore $\map g A \in \UU$.

$(2'): \quad A = C$
Then $\map g A = \map g C$ and so $\map g C \subseteq \map g A$.
Therefore $\map g A \in \UU$.

$(3'): \quad \map g C \subseteq A$
Then $\map g C \subseteq \map g A$
Therefore $\map g A \in \UU$.
Hence condition $(2)$ is satisfied.

From the definition of $\UU$, it follows immediately that the union of a chain in $\UU$ is also in $\UU$.
Hence condition $(3)$ is satisfied.

The conclusion is that $\UU$ is a tower such that $\UU \subseteq \TT_0$.
But as $\TT_0$ is the smallest tower, $\TT_0 \subseteq \UU$.
It follows that $\UU = \TT_0$.

Consider some comparable set $C$, then.
From that $C$ we can form $\UU$, as above.
But as $\UU = \TT_0$:

$A \in \TT_0 \implies \paren {A \subseteq C \implies A \subseteq \map g C} \lor \map g C \subseteq A$
and so $\map g C$ is also comparable.

We now know that:

$\O$ is comparable
the mapping $g$ maps comparable sets to comparable sets.
Since the union of a chain of comparable sets is itself comparable, it follows that the comparable sets all form a tower $\TT_C$.
But by the nature of $\TT_0$ it follows that $\TT_0 \subseteq \TT_C$.
So the elements of $\TT_0$ must all be comparable.

Since $\TT_0$ is a chain, the union $M$ of all the sets in $\TT_0$ is itself a set in $\TT_0$.
Since the union includes all the sets of $\TT_0$, it follows that $\map g M \subseteq M$.
Since it is always the case that $M \subseteq \map g M$, it follows that $M = \map g M$.
The result follows.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 16$: Zorn's Lemma




