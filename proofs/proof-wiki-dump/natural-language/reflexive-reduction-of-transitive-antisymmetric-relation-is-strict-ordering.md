# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Transitive_Antisymmetric_Relation_is_Strict_Ordering



Theorem
Let $S$ be a set.
Let $\RR$ be a transitive, antisymmetric relation on $S$.
Let $\RR^\ne$ denote the reflexive reduction of $\RR$.

Then $\RR^\ne$ is a strict ordering.


Proof
To show that $\RR^\ne$ is a strict ordering, it is sufficient to show that $\RR^\ne$ is antireflexive and transitive.


Antireflexive
Follows from Reflexive Reduction is Antireflexive.
$\Box$


Transitive
Let $a, b, c \in S$.
Let $a \mathrel {\RR^\ne} b$ and $b \mathrel {\RR^\ne} c$.
By the definition of reflexive reduction:

$a \ne b$ and $a \mathrel \RR b$
$b \ne c$ and $b \mathrel \RR c$
Since $\mathrel \RR$ is transitive:

$a \mathrel \RR c$

Aiming for a contradiction, suppose $a = c$.
Since $a \mathrel \RR b$ it follows that $c \mathrel \RR b$.
Since $c \mathrel \RR b$, $b \mathrel \RR c$, and $\mathrel \RR$ is antisymmetric, $b = c$.
But this contradicts $b \ne c$.
The conclusion is that $a \ne c$.

Recall that $a \mathrel \RR c$.
By the definition of reflexive reduction:

$a \mathrel {\RR^\ne} c$
$\blacksquare$





