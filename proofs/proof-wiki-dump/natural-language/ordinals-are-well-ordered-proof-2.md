# 

Source: https://proofwiki.org/wiki/Ordinals_are_Well-Ordered/Proof_2

Theorem
The ordinals are well-ordered.


Proof
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


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals




