# 

Source: https://proofwiki.org/wiki/Finite_Set_Formed_by_Substitution_has_Larger_Intersection


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ and $T$ be finite sets.

Let $x \in S \setminus T$.
Let $y \in T \setminus S$.

Let $R$ be the set formed by substituting $x$ for $y$ in $T$, that is:

$R = \paren{T \setminus \set y} \cup \set x$

Then:

$\card{R \cap S} = \card{T \cap S} + 1$


Proof
We have:














\(\ds \card{R \cap S}\)

\(=\)







\(\ds \card{\paren{\paren{T \setminus \set y} \cup \set x} \cap S}\)




















\(\ds \)

\(=\)







\(\ds \card{\paren{\paren{T \setminus \set y} \cap S } \cup \paren{ \set x \cap S} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \card{\paren{\paren{T \setminus \set y} \cap S } \cup \set x}\)





As $x \in S$














\(\ds \)

\(=\)







\(\ds \card{\paren{\paren{T \cap S} \setminus \paren{\set y \cap S} } \cup \set x}\)





Set Intersection Distributes over Set Difference














\(\ds \)

\(=\)







\(\ds \card{\paren{\paren{T \cap S} \setminus \O } \cup \set x}\)





As $y \notin S$














\(\ds \)

\(=\)







\(\ds \card{\paren{T \cap S} \cup \set x}\)





Set Difference with Empty Set is Self














\(\ds \)

\(=\)







\(\ds \card{T \cap S} +  \card {\set x}\)





Cardinality of Pairwise Disjoint Set Union and $x \notin T$














\(\ds \)

\(=\)







\(\ds \card{T \cap S} +  1\)





Cardinality of Singleton



$\blacksquare$





