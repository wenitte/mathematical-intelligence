# 

Source: https://proofwiki.org/wiki/Meet-Irreducible_Open_Set_iff_Complement_is_Closed_Irreducible_Subspace/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{S, \tau}$ be a topological space.
Let $U \in \tau$.
Let $F = S \setminus U$.
Let $F$ be a closed irreducible subspace.

Then:

$U$ is a meet-irreducible open set
Proof
By definition of closed set:

$F$ is a closed set
By definition of closed irreducible subspace there exists proper closed subsets $F_1, F_2$ of $F$:

$F = F_1 \cup F_2$
$F_1 \subsetneq F$
$F_2 \subsetneq F$

From Set Complement inverts Subsets and Equal Relative Complements iff Equal Subsets:

$S \setminus F \subsetneq S \setminus F_1$
$S \setminus F \subsetneq S \setminus F_2$
From De Morgan's Laws (Set Theory):

$S \setminus F = S \setminus F_1 \cap S \setminus F_2$

Consider:

$U_1 = S \setminus F_1$
$U_2 = S \setminus F_2$
From Complement of Closed Set is Open Set:

$U_1, U_2 \in \tau$

We have:

$U \subsetneq U_1$
$U \subsetneq U_2$
$U = U_1 \cap U_2$

Hence:

$U_1 \nsubseteq U$
$U_2 \nsubseteq U$
$U = U_1 \cap U_2$

From Characterization of Meet-Irreducible Open Set $U$ is not a meet-irreducible open set.
$\blacksquare$





