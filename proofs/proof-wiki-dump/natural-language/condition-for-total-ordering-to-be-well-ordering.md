# 

Source: https://proofwiki.org/wiki/Condition_for_Total_Ordering_to_be_Well-Ordering



Theorem
Let $A$ be a non-empty class under a total ordering $\preccurlyeq$.

Then $\preccurlyeq$ is a well-ordering on $A$ if and only if the following $3$ conditions are fulfilled:

$(1): \quad A$ has a smallest element $x_0$
$(2): \quad$ Every element of $A$ except the greatest (if there is one) has an immediate successor
$(3): \quad$ For every proper lower section $L$ of $A$, if $L$ has no greatest element, then there is a smallest element of $A$ which is not in $L$.


Proof
Sufficient Condition
Let $\preccurlyeq$ be a well-ordering on $A$.
Then by definition of well-ordering, there exists a smallest element of $A$ which we may call $x_0$.
Hence condition $(1)$ is fulfilled.

Let there exist an element $x$ of $A$ such that $x$ has no immediate successor.
Let $S$ be the subclass of $A$ defined as:

$S = \set {y \in A: x \prec y}$
Suppose $S \ne \O$.
As $S \subset A$ it follows by definition of well-ordering that there exists a smallest element $z$ of $S$.
That is, there exists $z \in A$ such that $x \prec z$ but that there exists no $y \in A$ such that $x \prec y \prec z$.
Hence there can be no element $y \in A$ such that $x \prec y$ and so $S = \O$.
It follows that $x$ must be the greatest element of $A$.
Thus every element of $A$ except the greatest (if there is one) has an immediate successor.
That is, condition $(2)$ is fulfilled.

Let $L$ be a proper lower section of $A$ which has no greatest element.
As $L$ is a proper lower section of $A$, $L$ does not equal $A$.
Therefore the difference $A \setminus L \ne \O$.
But as $A \setminus L \subseteq A$ it follows by the fact that $\preccurlyeq$ is a well-ordering that $A \setminus L$ has a smallest element $z$.
This $z$ is the smallest element of $A$ which is not in $L$.
That is, condition $(3)$ is fulfilled.
$\Box$


Necessary Condition
Let $\preccurlyeq$ be a total ordering on $A$ which satisfies the following $3$ conditions:

$(1): \quad A$ has a smallest element $x_0$
$(2): \quad$ Every element of $A$ except the greatest (if there is one) has an immediate successor
$(3): \quad$ For every proper lower section $L$ of $A$, if $L$ has no greatest element, then there is a smallest element of $A$ which is not in $L$.

Aiming for a contradiction, suppose $S \subseteq A$ is a subclass of $A$ which does not have a smallest element.
We have from $(1)$ that $x_0 \in A$ is the smallest element of $A$.
Hence if $x_0 \in S$ then $x_0$ is also the smallest element of $S$.
Hence $x_0 \notin S$.
Let $T \subseteq A$ be the class defined as:

$T := \set {z \in A: \forall y \in S: z \prec y}$
Because $x_0 \in T$ we know that $T$ is non-empty.

Suppose $T$ has a greatest element $g$.
Then, by $(2)$, $g$ has an immediate successor $g'$.
By definition, $g' \in S$.
But by hypothesis $g'$ is not the smallest element of $S$, as $S$ does not have a smallest element.
Then:

$\exists g \in S: g \prec g'$
but that means:

$g \prec g \prec g'$ and so $g'$ is not the immediate successor of $g$.
From that contradiction it follows that $S$ has a smallest element.

Otherwise, suppose $T$ does not have a greatest element.
Then by condition $(3)$, $S$ has a smallest element.

Hence both cases contradict the assertion that $S$ has no smallest element.
Hence $S$ does have a smallest element.
As $S$ is arbitrary, it follows that $\preccurlyeq$ is a well-ordering.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.3$




