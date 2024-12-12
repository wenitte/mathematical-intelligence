# 

Source: https://proofwiki.org/wiki/Canonical_Order_Well-Orders_Ordered_Pairs_of_Ordinals


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The canonical order, $R_0$ strictly well-orders the ordered pairs of ordinal numbers.


Proof
Strict Ordering
Let $\tuple {x, y} \mathrel {R_0} \tuple {x, y}$.
Then:

$\map \max {x, y} < \map \max {x, y} \lor \tuple {x, y} \mathrel {\operatorname {Le} } \tuple {x, y}$

This article, or a section of it, needs explaining.In particular: Where is the construct $\operatorname{Le}$ defined, and why can $\le$ not be used instead?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Both lead to contradictions, so:

$\neg \tuple {x, y} \mathrel {R_0} \tuple {x, y}$
and $R_0$ is antireflexive.
$\Box$

Let:

$(1): \quad \tuple {\alpha, \beta} \mathrel {R_0} \tuple {\gamma, \delta}$
and:

$(2): \quad \tuple {\gamma, \delta} \mathrel {R_0} \tuple {\epsilon, \zeta}$

There are two cases:

$\map \max {\alpha, \beta} < \map \max {\gamma, \delta}$
or:

$\map \max {\alpha, \beta} = \map \max {\gamma, \delta}$















\(\ds \map \max {\alpha, \beta} < \map \max {\gamma, \delta}\)

\(\leadsto\)







\(\ds \map \max {\alpha, \beta} < \map \max {\epsilon, \zeta}\)





from $(2): \quad \map \max {\gamma, \delta} \le \map \max {\epsilon, \zeta}$














\(\ds \)

\(\leadsto\)







\(\ds \tuple {\alpha, \beta} \mathrel {R_0} \tuple {\epsilon, \zeta}\)





Definition of Canonical Order




This article, or a section of it, needs explaining.In particular: Where does it follow that $\map \max {\gamma, \delta} \le \map \max {\epsilon, \zeta}$? All we have to work on is the relation $R_0$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.













\(\ds \map \max {\alpha, \beta} = \map \max {\gamma, \delta}\)

\(\leadsto\)







\(\ds \tuple {\alpha, \beta} \mathrel {\operatorname {Le} } \tuple {\gamma, \delta}\)




















\(\ds \)

\(\leadsto\)







\(\ds \map \max {\alpha, \beta} < \max \map {\epsilon, \zeta} \lor \tuple {\alpha, \beta} \mathrel {\operatorname {Le} } \tuple {\epsilon, \zeta}\)





Transitivity of $\operatorname{Le}$














\(\ds \)

\(\leadsto\)







\(\ds \tuple {\alpha, \beta} \mathrel {R_0} \tuple {\epsilon, \zeta}\)





Definition of Canonical Order




In either case:

$\tuple {\alpha, \beta} \mathrel {R_0} \tuple {\epsilon, \zeta}$
and $R_0$ is transitive.
$\Box$


Strict Total Ordering
Suppose:

$\neg \tuple {\alpha, \beta} \mathrel {R_0} \tuple {\gamma, \delta}$
and:

$\neg \tuple {\gamma, \delta} \mathrel {R_0} \tuple {\alpha, \beta}$
Then:

$\map \max {\alpha, \beta} \le \map \max {\gamma, \delta}$
and:

$\map \max {\gamma, \delta} \le \map \max {\alpha, \beta}$
So:

$\map \max {\alpha, \beta} = \map \max {\gamma, \delta}$
Therefore:

$\neg \tuple {\alpha, \beta} \mathrel {\operatorname {Le} } \tuple {\gamma, \delta}$
and:

$\neg \tuple {\gamma, \delta} \mathrel {\operatorname {Le} } \tuple {\alpha, \beta}$
From Lexicographic Order forms Well-Ordering on Ordered Pairs of Ordinals:

$\tuple {\alpha, \beta} = \tuple {\gamma, \delta}$
$\Box$


Well-Ordering
Take any nonempty subset $A$ of $\paren {\On \times \On}$.
We shall allow $A$ to be any class.
This isn't strictly necessary, but it will not alter the proof.
The $\max$ mapping sends each element in $A$ to an element of $\On$.
Therefor the image of $\max$ has a minimal element, $N$.
Take $B$ to be the class of all ordered pairs $\tuple {x, y}$, such that $\map \max {x, y} = N$.
Let the $\operatorname {Le}$-minimal element of $B$ be denoted $C$.
Then:

$\map \max C = N$
and $C$ is seen to be $\operatorname {Le}$-minimal.
Therefore $C$ is the $R_0$-minimal element of $A$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.56 \ (1)$




