# 

Source: https://proofwiki.org/wiki/Measurable_Sets_form_Sigma-Algebra


This article needs to be linked to other articles.In particular: Links may still be needed for some results and definitions.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mu^*$ be an outer measure on a set $X$.
Then the set $\map {\mathfrak M} {\mu^*}$ of all $\mu^*$-measurable subsets of $X$ is a $\sigma$-algebra.


Proof
First, note that $\map {\mathfrak M} {\mu^*}$ is an algebra (of sets).
It remains to be shown that $\map {\mathfrak M} {\mu^*}$ is closed under countable union.

Because $\map {\mathfrak M} {\mu^*}$ is an algebra (of sets), the union of any two $\mu^*$-measurable sets is $\mu^*$-measurable.
Using mathematical induction, it directly follows that the finite union of $\mu^*$-measurable sets is $\mu^*$-measurable.

Let $\sequence {S_n}$ be a sequence of $\mu^*$-measurable subsets of $X$.
Define $\ds S = \bigcup_{n \mathop = 1}^\infty S_n$.
We wish to prove that $S$ is $\mu^*$-measurable.
For all $n \in \N$, the set $T_n = S_1 \cup S_2 \cup \cdots \cup S_n$ is $\mu^*$-measurable.
By Subset of Union, the sequence $\sequence {T_n}$ is increasing.
Also, $T_n \uparrow S$ (as $n \to \infty$) where $\uparrow$ denotes the limit of an increasing sequence of sets.

Let $A$ be any subset of $X$.
By Set Difference Union Intersection:

$A = \paren {A \cap S} \cup \paren {A \setminus S}$
So by the subadditivity of $\mu^*$, it suffices to prove that $\map {\mu^*} A \ge \map {\mu^*} {A \cap S} + \map {\mu^*} {A \setminus S}$ for any subset $A \subseteq X$.
Then:














\(\ds \map {\mu^*} A\)

\(=\)







\(\ds \map {\mu^*} {A \cap T_n} + \map {\mu^*} {A \setminus T_n}\)





Definition of Measurability of $T_n$














\(\ds \)

\(\ge\)







\(\ds \map {\mu^*} {A \cap T_n} + \map {\mu^*} {A \setminus S}\)





Set Complement inverts Subsets and Monotonicity of $\mu^*$



Letting $n \to \infty$, the result follows by Outer Measure of Limit of Increasing Sequence of Sets.
$\blacksquare$


Sources
2006: J. Yeh: Real Analysis: Theory of Measure and Integration




