# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Antisymmetric_Relation_is_Asymmetric

Theorem
Let $S$ be a set.
Let $\RR$ be an antisymmetric relation on $S$.
Let $\RR^\ne$ be the reflexive reduction of $\RR$.

Then $\RR^\ne$ is asymmetric.


Proof
Aiming for a contradiction, suppose $\RR^\ne$ is not asymmetric.
That is:

$\exists a, b \in S: a \mathrel {\RR^\ne} b$ and $b \mathrel {\RR^\ne} a$
Then by the definition of reflexive reduction:

$a \mathrel \RR b$, $b \mathrel \RR a$
and $a \ne b$.
But this contradicts the antisymmetry of $\RR$.
Thus, by definition, $\RR^\ne$ is an asymmetric relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.7: 2^\circ$




