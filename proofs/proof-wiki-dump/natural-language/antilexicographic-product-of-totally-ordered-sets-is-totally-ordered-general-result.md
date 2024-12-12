# 

Source: https://proofwiki.org/wiki/Antilexicographic_Product_of_Totally_Ordered_Sets_is_Totally_Ordered/General_Result

Theorem
Let $S_1, S_2, \ldots, S_n$ all be totally ordered sets.
Let $T_n$ be the antilexicographic product of $S_1, S_2, \ldots, S_n$:

$\forall n \in \N_{>0}: T_n = \begin {cases}
S_1 & : n = 1 \\
T_{n - 1} \otimes^a S_n & : n > 1
\end {cases}$
Then $T_n$ is a totally ordered set.


Proof
From Antilexicographic Product of Totally Ordered Sets is Totally Ordered, $S_1 \otimes^a S_2$ is a totally ordered set.
Suppose $T_{n - 1}$ is a totally ordered set.
Given that $S_n$ is a totally ordered set, it follows from Antilexicographic Product of Totally Ordered Sets is Totally Ordered that $T_{n - 1} \otimes^a S_n$ is also a totally ordered set.
The result follows by induction.
$\blacksquare$


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




