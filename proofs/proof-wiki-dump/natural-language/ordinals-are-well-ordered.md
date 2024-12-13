# 

Source: https://proofwiki.org/wiki/Ordinals_are_Well-Ordered



Theorem
The ordinals are well-ordered.


Corollary
Let $A$ be a set of ordinals.
Let $\Epsilon {\restriction_A}$ denote the epsilon restriction on $A$.

Then $A$ is strictly well-ordered by $\Epsilon {\restriction_A}$.


Proof 1
Recall that the Ordinals are Totally Ordered.
Let $A$ be a non-empty set of ordinals.
Let $\alpha \in A$.
Let $B = \alpha^+ \cap A$, where $\alpha^+$ denotes the successor set of $\alpha$.
Recall that $\alpha^+$ is an ordinal.
Note that $\alpha \in B$, so $B$ is non-empty.
By Intersection is Subset, $B \subseteq \alpha^+$.
It follows that there exists a smallest element $\kappa$ of $B$.

We claim that $\kappa$ is the smallest element of $A$.
So let $\beta \in A$. We need to show that $\kappa = \beta$ or $\kappa \in \beta$.
By Ordinal Membership is Trichotomy, either $\beta \in \alpha^+$, $\alpha^+ = \beta$, or $\alpha^+ \in \beta$.
If $\beta \in \alpha^+$, then $\beta \in B$; it follows by the definition of $\kappa$ that $\kappa = \beta$ or $\kappa \in \beta$.
If $\alpha^+ = \beta$ or $\alpha^+ \in \beta$, then it follows by the transitivity of $\beta$ that $\alpha^+ \subseteq \beta$.
Since $\kappa \in \alpha^+$, it follows that $\kappa \in \beta$.
$\blacksquare$


Proof 2
By Ordinals are Totally Ordered, the ordinals are totally ordered by $\subseteq$:














\(\ds X\)

\(\subsetneqq\)







\(\ds Y\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists a \in Y: \, \)



\(\ds X\)

\(=\)







\(\ds Y_a\)





where $Y_a$ denotes the initial segment of $Y$ determined by $a$








\(\ds \leadstoandfrom \ \ \)





\(\ds X\)

\(=\)







\(\ds a\)





since $Y_a = a$








\(\ds \leadstoandfrom \ \ \)





\(\ds X\)

\(\in\)







\(\ds Y\)









Thus:

the strict ordering $\subsetneqq$ on ordinals
and

the strict ordering $\in$ on ordinals
are the same.

Aiming for a contradiction, suppose the ordinals were not well-ordered by $\subsetneqq$.
Then we could find a sequence $\sequence {X_n}_{n \mathop = 0}^\infty$ of ordinals such that:

$X_0 \supsetneqq X_1 \supsetneqq X_2 \cdots$
So for all $n > 0$:

$X_n \subsetneqq X_0$
so:

$X_n \in X_0$
Thus $\sequence {X_{n + 1} }_{n \mathop = 0}^\infty$ is a decreasing sequence under $\subsetneqq$ of elements of $\sequence {X_n}$.
But since $X_0$ is an ordinal it is well-ordered by $\subsetneqq$.
From Infinite Sequence Property of Well-Founded Relation, this demonstrates a contradiction.
$\blacksquare$





