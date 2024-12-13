# 

Source: https://proofwiki.org/wiki/Relational_Closure_Exists_for_Set-Like_Relation


This page has been identified as a candidate for refactoring of medium complexity.In particular: Split it upUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $A$ be a class.
Let $\prec$ be a relation on $A$.
Furthermore, let $\map {\prec^{-1} } a$ be a small class for each $a \in A$.

Let $S$ be a small class that is a subset of the class $A$.
Let $G$ be a mapping such that:

$\map G x = A \cap \paren {\map {\prec^{-1} } x}$
Let $F$ be defined using the Principle of Recursive Definition:

$\map F 0 = S$
$\map F {n^+} = \map F n \cup \map G {\map F n}$

Let $\ds T = \bigcup_{n \mathop \in \omega} \map F n$.

Then:

$(1): \quad T$ is a set and satisfies:
$\forall x \in A: \forall y \in T: \paren {x \prec y \implies x \in T}$
In other words, $T$ is $\prec$-transitive.
$(2): \quad S \subseteq T$
$(3): \quad$ If $R$ is $\prec$-transitive and $S \subseteq R$, then $T \subseteq R$.
That is, given any set $S$, there is an explicit construction for its relational closure.


Proof
Proof of $(1)$
Let $x \in A$ and $y \in T$ such that $x \prec y$.
Then by definition:

$x \in \map {\prec^{-1} } y$
Moreover, since $y \in T$:

$\exists n \in \omega: y \in \map F n$
Therefore:

$x \in \map F {n + 1}$
and so:

$x \in T$
$\Box$


Proof of $(2)$
Let $x \in S$.
We have that:

$\map F 0 = S$
Therefore:

$\exists n \in \omega: x \in \map F n$
It follows that $x \in T$.
By the definition of subset, it follows that:

$S \subseteq T$
$\Box$


Proof of $(3)$
Let $R$ be $\prec$-transitive.
Let $S \subseteq R$.
Then:

$\map F n \subseteq R$ shall be proved by finite induction.

For all $n \in \omega$, let $\map P n$ be the proposition:

$\map F n \subseteq R$


Basis for the Induction
$\map P 0$ is the case:

$\map F 0 \subseteq R$
which has been proved above.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map F k \subseteq R$

Then we need to show:

$\map F {k + 1} \subseteq R$


Induction Step
This is our induction step:














\(\ds \map F k\)

\(\subseteq\)







\(\ds R\)





Hypothesis $(1)$








\(\ds \leadsto \ \ \)





\(\ds \map {\prec^{-1} } {\map F k}\)

\(\subseteq\)







\(\ds \map {\prec^{-1} } R\)





Image Preserves Subsets














\(\ds A \cap \map {\prec^{-1} } R\)

\(\subseteq\)







\(\ds R\)





Definition of $\prec$-Transitive (2)








\(\ds \leadsto \ \ \)





\(\ds \map F k \cup \paren {A \cap \map {\prec^{-1} } {\map F k} }\)

\(\subseteq\)







\(\ds R\)





$(1)$, $(2)$, Set Union Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds \map F {k + 1}\)

\(\subseteq\)







\(\ds R\)





Definition of $\map F {k + 1}$



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \omega: \map F n \subseteq R$
Then by Indexed Union Subset:

$T \subseteq R$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.3$




