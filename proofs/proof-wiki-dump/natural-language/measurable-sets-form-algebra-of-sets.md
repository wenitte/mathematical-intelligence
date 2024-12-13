# 

Source: https://proofwiki.org/wiki/Measurable_Sets_form_Algebra_of_Sets

Theorem
Let $\mu^*$ be an outer measure on a set $X$.
Then the set of $\mu^*$-measurable sets is an algebra of sets.


Proof
For a subset $S \subseteq X$, let $\relcomp X S$ denote the relative complement of $S$ in $X$.
We first prove the second property of an algebra of sets, as described on that page.
Let $S$ be $\mu^*$-measurable. For any subset $A \subseteq X$:














\(\ds \map {\mu^*} A\)

\(=\)







\(\ds \map {\mu^*} {A \cap S} + \map {\mu^*} {A \cap \relcomp X S}\)




















\(\ds \)

\(=\)







\(\ds \map {\mu^*} {A \cap \relcomp X {\relcomp X S} } + \map {\mu^*} {A \cap \relcomp X S}\)





Complement of Complement



as desired.

Now we prove the first property.
Suppose that $S_1$ and $S_2$ are $\mu^*$-measurable sets.
Let $A$ be any subset of $X$.  
Since:














\(\ds A \cap \paren {S_1 \cup S_2}\)

\(=\)







\(\ds \paren {\paren {A \cap \paren {S_1 \cup S_2} } \cap S_1} \cup \paren {\paren {A \cap \paren {S_1 \cup S_2} } \setminus S_1}\)





Set Difference Union Intersection and Union is Commutative














\(\ds \)

\(=\)







\(\ds \paren {A \cap \paren {\paren {S_1 \cup S_2} \cap S_1} } \cup \paren {\paren {\paren {S_1 \cup S_2} \cap A} \setminus S_1}\)





Intersection is Associative and Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {A \cap \paren {\paren {S_1 \cup S_2} \cap S_1} } \cup \paren {\paren {\paren {S_1 \cup S_2} \setminus S_1} \cap A}\)





Intersection with Set Difference is Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {A \cap S_1} \cup \paren {\paren {S_2 \setminus S_1} \cap A}\)





Intersection Absorbs Union and Set Difference with Union is Set Difference














\(\ds \)

\(=\)







\(\ds \paren {A \cap S_1} \cup \paren {\paren {S_2 \cap A} \setminus S_1}\)





Intersection with Set Difference is Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {A \cap S_1} \cup \paren {\paren {A \cap S_2} \setminus S_1}\)





Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {A \cap S_1} \cup \paren {\paren {A \setminus S_1} \cap S_2}\)





Intersection with Set Difference is Set Difference with Intersection




Work In ProgressIn particular: I'm pretty sure the above, or at least significant parts of the above, have/has already been posted up as proofs in their own right. If I remember, or rather, when I'm in the mood, I may go through and find them.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
By subadditivity of an outer measure:

$\map {\mu^*} {A \cap \paren {S_1 \cup S_2} } \le \map {\mu^*} {A \cap S_1} + \map {\mu^*} {\paren {A \setminus S_1} \cap S_2}$
Thus:














\(\ds \)

\(=\)







\(\ds \map {\mu^*} {A \cap \paren {S_1 \cup S_2} } + \map {\mu^*} {A \setminus \paren {S_1 \cup S_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\mu^*} {A \cap \paren {S_1 \cup S_2} } + \map {\mu^*} {\paren {A \setminus S_1} \setminus S_2}\)





Set Difference with Union














\(\ds \)

\(\le\)







\(\ds \map {\mu^*} {A \cap S_1} + \map {\mu^*} {\paren {A \setminus S_1} \cap S_2} + \map {\mu^*} {\paren {A \setminus S_1} \setminus S_2}\)





by the above argument














\(\ds \)

\(=\)







\(\ds \map {\mu^*} {A \cap S_1} + \map {\mu^*} {A \setminus S_1}\)





Definition of Measurability of $S_2$














\(\ds \)

\(=\)







\(\ds \map {\mu^*} A\)





Definition of Measurability of $S_1$



The result follows by the subadditivity of an outer measure.


This page has been identified as a candidate for refactoring of medium complexity.In particular: Create separate proofUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Alternatively, one could use the equality














\(\ds \map {\mu^*} {A \cap \paren {S_1 \cup S_2} }\)

\(=\)







\(\ds \map {\mu^*} {A \cap \paren {S_1 \cup S_2} \cap S_1} + \map {\mu^*} {A \cap \paren {S_1 \cup S_2} \setminus S_1}\)




















\(\ds \)

\(=\)







\(\ds \map {\mu^*} {A \cap S_1} + \map {\mu^*} {A \cap S_2 \setminus S_1}\)









to prove the result directly without the use of subadditivity.
$\blacksquare$





