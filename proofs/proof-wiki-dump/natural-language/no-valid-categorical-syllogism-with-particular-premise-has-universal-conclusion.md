# 

Source: https://proofwiki.org/wiki/No_Valid_Categorical_Syllogism_with_Particular_Premise_has_Universal_Conclusion

Theorem
Let $Q$ be a valid categorical syllogism.
Let one of the premises of $Q$ be particular.

Then the conclusion of $Q$ is also particular.


Proof
Let the major premise of $Q$ be denoted $\text{Maj}$.
Let the minor premise of $Q$ be denoted $\text{Min}$.
Let the conclusion of $Q$ be denoted $\text{C}$.

From No Valid Categorical Syllogism contains two Particular Premises, either $\text{Maj}$ or $\text{Min}$ has to be universal.
Let the other premise of $Q$ be particular.

Suppose $\text{C}$ is the universal affirmative $\map {\mathbf A} {S, P}$.
From Conclusion of Valid Categorical Syllogism is Negative iff one Premise is Negative it follows that $\text{Maj}$ and $\text{Min}$ are also both affirmative.
The only patterns fitting the criteria are $\text{AI}x$ and $\text{IA}x$, both of which distribute only one term in $Q$.
We have that $\text{C}$ distributes $S$.
From Distributed Term of Conclusion of Valid Categorical Syllogism is Distributed in Premise, $S$ must also be distributed in $\text{Min}$.
From Middle Term of Valid Categorical Syllogism is Distributed at least Once, the middle term $M$ of $Q$ needs to be distributed.
Thus we require two distributed terms in the premises for $\text{C}$ to be the universal affirmative.
So if $\text{C}$ is affirmative, neither premise of $Q$ can be particular.
From this contradiction it follows that $\text{C}$ is not $\map {\mathbf A} {S, P}$.

Suppose $\text{C}$ is the universal negative $\map {\mathbf E} {S, P}$.
In this case, both $S$ and $P$ are distributed in $C$, as the universal negative distributes both $S$ and $P$.
By Middle Term of Valid Categorical Syllogism is Distributed at least Once, the middle term $M$ of $Q$ needs to be distributed.
Thus there are three terms needing to be distributed in two premises.
So at least one premises needs to be the universal negative.
The other premise is not $\mathbf O$ as this violates No Valid Categorical Syllogism contains two Negative Premises.
But it also is not $\mathbf I$, as $\mathbf I$ does not distribute any terms.
So if $\text{C}$ is the universal negative, neither premise can be particular.
From this contradiction it follows that $\text{C}$ is not $\map {\mathbf E} {S, P}$.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism: Exercise $\text{(b)}$




