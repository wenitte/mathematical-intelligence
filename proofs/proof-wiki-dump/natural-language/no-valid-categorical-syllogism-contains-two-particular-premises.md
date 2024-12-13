# 

Source: https://proofwiki.org/wiki/No_Valid_Categorical_Syllogism_contains_two_Particular_Premises

Theorem
Let $Q$ be a valid categorical syllogism.

Then at least one of the premises of $Q$ is universal.


Proof
Suppose both premises of $Q$ are particular.
Then the pattern of $Q$ is one of $\text{II}x$, $\text{IO}x$, $\text{OI}x$ or $\text{OO}x$, where $x$ is the conclusion.

$\text{I}$ is neither universal nor negative.
Thus the $\text{II}x$ pattern does not distribute the middle term of $Q$.
So $\text{II}x$ violates the rule Middle Term of Valid Categorical Syllogism is Distributed at least Once.

$\text{O}$ is negative.
Thus $\text{OO}x$ violates the rule No Valid Categorical Syllogism contains two Negative Premises.

It remains to investigate $\text{IO}x$ and $\text{OI}x$.
By Conclusion of Valid Categorical Syllogism is Negative iff one Premise is Negative, the conclusion of $Q$ is negative, either $\text{E}$ or $\text{O}$.
By the definition of Distributed Predicate of Categorical Syllogism, the predicate of the conclusion of $Q$ is distributed.
Thus, by construction, the primary term $P$ of $Q$ is distributed.
By Distributed Term of Conclusion of Valid Categorical Syllogism is Distributed in Premise, it follows that $P$ is distributed in the major premise of $Q$.
This eliminates $\text{IO}x$ as the particular affirmative $\text{I}$ distributes neither its subject nor its predicate.

The final pattern to be investigated is $\text{OI}x$.
By definition, $\text{O}$ distributes only its predicate.
As $\text{O}$ needs to distribute the primary term $P$, it cannot also distribute the middle term $M$ of $Q$.
But the particular affirmative $\text{I}$ (as has been seen above) also does not distribute $M$.
Thus $M$ remains undistributed, so violating the rule Middle Term of Valid Categorical Syllogism is Distributed at least Once.
This eliminates $\text{OI}x$.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism: Exercise $\text{(a)}$




