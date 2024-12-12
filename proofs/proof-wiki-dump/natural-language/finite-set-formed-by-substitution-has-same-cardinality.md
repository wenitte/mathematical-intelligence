# 

Source: https://proofwiki.org/wiki/Finite_Set_Formed_by_Substitution_has_Same_Cardinality


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ and $T$ be finite sets.

Let $x \in S \setminus T$.
Let $y \in T \setminus S$.

Let $R$ be the set formed by substituting $x$ for $y$ in $T$, that is:

$R = \paren{T \setminus \set y} \cup \set x$

Then:

$\card R = \card T$


Proof
We have:














\(\ds \card R\)

\(=\)







\(\ds \card{\paren{T \setminus \set y} \cup \set x}\)




















\(\ds \)

\(=\)







\(\ds \card{T \setminus \set y} + \card{\set x}\)





Cardinality of Pairwise Disjoint Set Union














\(\ds \)

\(=\)







\(\ds \paren{\card T - \card{\set y} } + \card{\set x}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \paren{\card T - 1 } + 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \card T\)





Canceling terms



$\blacksquare$





