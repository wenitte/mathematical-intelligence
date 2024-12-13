# 

Source: https://proofwiki.org/wiki/Meet-Irreducible_Open_Set_iff_Complement_is_Closed_Irreducible_Subspace/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{S, \tau}$ be a topological space.
Let $U \in \tau$ not be a meet-irreducible open set.
Let $F = S \setminus U$.

Then:

$F$ is not a  closed irreducible subspace
Proof
From Characterization of Meet-Irreducible Open Set there exists $V_1, V_2\in \tau$:

$V_1 \nsubseteq U$
$V_2 \nsubseteq U$
$V_1 \cap V_2 \subseteq U$

Let:

$U_1 = V_1 \cup U$
$U_2 = V_2 \cup U$

From Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$U_1, U_2 \in \tau$

From Set is Subset of Union:

$U \subsetneq U_1$
$U \subsetneq U_2$

We have:














\(\ds U_1 \cap U_2\)

\(=\)







\(\ds \paren{V_1 \cup U} \cap \paren{V_2 \cup U}\)




















\(\ds \)

\(=\)







\(\ds \paren{U \cap V_1} \cup \paren{U \cap U} \cup \paren{V_2 \cap U} \cup \paren{V_2 \cap V_1}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren{U \cap V_1} \cup U \cup \paren{V_2 \cap U} \cup \paren{V_2 \cap V_1}\)





Set Intersection is Idempotent














\(\ds \)

\(=\)







\(\ds U\)





Union with Superset is Superset




From Set Complement inverts Subsets and Equal Relative Complements iff Equal Subsets:

$S \setminus U_1 \subsetneq S \setminus U$
$S \setminus U_2 \subsetneq S \setminus U$

From De Morgan's Laws (Set Theory):

$S \setminus U = S \setminus U_1 \cup S \setminus U_2$

Consider:

$F_1 = S \setminus U_1$
$F_2 = S \setminus U_2$
By definition of closed set:

$F_1, F_2$ and $F$ are closed sets

We have:

$F_1 \subsetneq F$
$F_2 \subsetneq F$
$F_1 \cup F_2 = F$

It follows that $F$ is not a closed irreducible subspace by definition.
$\blacksquare$




