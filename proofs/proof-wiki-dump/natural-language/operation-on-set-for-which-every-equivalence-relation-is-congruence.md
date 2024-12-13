# 

Source: https://proofwiki.org/wiki/Operation_on_Set_for_which_Every_Equivalence_Relation_is_Congruence

Theorem
Let $S$ be a set with at least $3$ elements.
Let $\circ$ be an operation on $S$ such that every equivalence relation on $S$ is a congruence relation for $\circ$.

Then $\circ$ is one of the following:

the right operation $\to$
the left operation $\gets$
the constant operation $\sqbrk c$ for some $c \in S$.


Proof
First we note that from:

Equivalence Relation is Congruence for Constant Operation
Equivalence Relation is Congruence for Left Operation
Equivalence Relation is Congruence for Right Operation
every equivalence relation on $S$ is a congruence relation for the right operation, the left operation and the constant operation.
Let $\circ$ be an operation on $S$ which is not one of those three.


The validity of the material on this page is questionable.In particular: It is not a given that these three conditions hold at the same time. It also seems overly strong for the conclusion. But an immediate fix eludes meYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then there exists $x_1, x_2, y_1, y_2 \in S$ such that:

$x_1 \circ y_1 = z_1$
$x_2 \circ y_2 = z_2$
where:

$z_1 \ne z_2$
$\map \lnot {z_1 = x_1 \land z_2 = x_2}$
$\map \lnot {z_1 = y_1 \land z_2 = y_2}$
The above are possible only if there are more than $3$ elements in $S$.

Let $\RR$ be an equivalence relation on $S$ such that:

$x_1 \mathrel \RR x_2$
$y_1 \mathrel \RR y_2$
but that:

$\map \lnot {z_1 \mathrel \RR z_2}$
Then $\RR$ is not a congruence relation.
The result follows from the Rule of Transposition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.14$




