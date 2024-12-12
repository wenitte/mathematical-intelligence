# 

Source: https://proofwiki.org/wiki/Condition_for_Equivalence_Relation_for_Max_Operation_on_Natural_Numbers_to_be_Congruence



Theorem
Let $\RR$ be an equivalence relation on the set of natural numbers $\N$.
Let $\vee$ denote the max operation on $\N$:

$\forall a, b \in \N: a \vee b := \max \set {a, b}$

Then:

$\RR$ is a congruence relation for $\vee$ on $\N$
if and only if:

every equivalence class under $\RR$ is a convex subset of $\N$.


Proof
Necessary Condition
Suppose every equivalence class under $\RR$ is a convex subset of $\N$.
Let $x_1, x_2, y_1, y_2 \in \N$ such that $x_1 \mathrel \RR x_2$ and $y_1 \mathrel \RR y_2$.
Without loss of generality, suppose:

$x_1 \le x_2$
$y_1 \le y_2$
$x_1 \le y_1$
Then we have two cases:

Case $1$: $y_1 \le x_2$
In this case we have $x_1 \le y_1 \le x_2$.
Since $\eqclass {x_1} \RR$ is a convex subset of $\N$ and $x_1, x_2 \in \eqclass {x_1} \RR$, we must have:

$y_1 \in \eqclass {x_1} \RR$
Thus, by Equivalence Class Equivalent Statements $(2)$ and $(5)$:

$\eqclass {x_1} \RR = \eqclass {y_1} \RR$.
So $x_1, x_2, y_1, y_2$ all belongs to the same equivalence class, and so does $x_1 \vee y_1$ and $x_2 \vee y_2$.
Therefore $\paren {x_1 \vee y_1} \mathrel \RR \paren {x_2 \vee y_2}$.


Case $2$: $x_2 \le y_1$
In this case we have $x_1 \le x_2 \le y_1 \le y_2$.
Thus:

$x_1 \vee y_1 = y_1$
$x_2 \vee y_2 = y_2$
Since $y_1 \mathrel \RR y_2$:

$\paren {x_1 \vee y_1} \mathrel \RR \paren {x_2 \vee y_2}$

In both cases we have $\paren {x_1 \vee y_1} \mathrel \RR \paren {x_2 \vee y_2}$.
Therefore $\RR$ is a congruence relation for $\vee$ on $\N$.
$\Box$


Sufficient Condition
Suppose that $\RR$ is a congruence relation for $\vee$ on $\N$.
Let $x, y, z \in \N$ and suppose that $x, z \in \eqclass z \RR$ and $x \le y \le z$.
Then:














\(\ds x\)

\(\RR\)







\(\ds z\)





Definition of Equivalence Class














\(\ds y\)

\(\RR\)







\(\ds y\)





Definition of Equivalence Relation: $\RR$ is Reflexive








\(\ds \leadsto \ \ \)





\(\ds \paren {x \vee y}\)

\(\RR\)







\(\ds \paren {z \vee y}\)





Definition of Congruence Relation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\RR\)







\(\ds z\)





Definition of Max Operation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \eqclass z \RR\)





Definition of Equivalence Class



Therefore $\eqclass z \RR$ is a convex subset of $\N$.
As the choice of $x, y, z$ is arbitrary, every equivalence class under $\RR$ is a convex subset of $\N$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.20 \ \text {(a)}$




