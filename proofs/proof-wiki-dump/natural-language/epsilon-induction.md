# 

Source: https://proofwiki.org/wiki/Epsilon_Induction


This page has been identified as a candidate for refactoring of medium complexity.In particular: UsualUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: usualPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Formulation 1
Let $A$ be a class.
Let $\Bbb U$ denote the universe.

$\paren {\forall x: \paren {x \subseteq A \implies x \in A} } \implies A = \Bbb U$


Formulation 2
Let $\map P x$ be a well-formed formula containing $x$ as a free variable.
Suppose that, from the truth of $\map P x$ for every member of a set $a$, the truth of $\map P a$ follows.
That is:

$\paren {\forall x \in a : \map P x} \implies \map P a$
Then $\map P x$ is true for every set.


Proof of Formulation 1
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Suppose that

$\forall x: \paren {x \subseteq A \implies x \in A}$

This article needs to be linked to other articles.In particular: to results, although most are up only for setsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Consider $\Bbb U \setminus A$.
Aiming for a contradiction, suppose:

$\Bbb U \setminus A \ne \O$
Then by Axiom of Foundation (Strong Form), we have that:

$\exists x \notin A: x \cap \paren {\Bbb U \setminus A} = \O$
But:














\(\ds x \cap \paren {\Bbb U \setminus A}\)

\(=\)







\(\ds \paren {x \cap \Bbb U} \setminus A\)




















\(\ds \)

\(=\)







\(\ds x \setminus A\)









Thus:

$x \setminus A = \O$
So from Set Difference with Superset is Empty Set:

$x \subseteq A$
Thus by hypothesis:

$x \in A$
contradicting the fact that $x \notin A$.
Therefore we can conclude that

$\Bbb U \setminus A = \O$
and so from Set Difference with Superset is Empty Set:

$\Bbb U \subseteq A$
Furthermore, by definition of universe:

$A \subseteq \Bbb U$
so by definition of set equality:

$A = \Bbb U$
$\blacksquare$


Proof of Formulation 2
Aiming for a contradiction, suppose there is a set $b$ for which $\neg \map P b$.
Define:

$\map f x = \set {y \in x : \neg \map P y}$
From the contrapositive of the assumption:

$\neg \map P x \implies \exists y \in x : \neg \map P y$
it follows that $\map f x$ is non-empty whenever $\neg \map P x$.
Define:

$\map g p = \bigcup \set{f(q) : q \in p}$
Whenever $\exists x \in p : \neg \map P x$:

$\exists y \in \map g p : \neg \map P y$
By the Principle of Recursive Definition, define a sequence $c_n$ such that:

$c_0 = \set{b}$
$c_{n+1} = \map g {c_n}$
Let $c = \bigcup \set{c_n : n \in \omega}$.
$c$ is non-empty, as $b \in c_0 \subseteq c$.
By the Axiom of Foundation, $\exists x_0 \in c : \paren{\forall x \in d : x \notin c}$.
By construction of $c_n$:

$\neg \map P {x_0}$
so by the contrapositive of the assumption:

$\exists y_0 \in x_0 : \neg \map P {y_0}$
But:

$x_0 \in c_{n_0}$
for some natural number $n_0$.
Then:

$y_0 \in c_{n_0 + 1}$
Therefore:

$y_0 \in c$
a contradiction.
Thus, by Reductio ad Absurdum, $\map P x$ is true for all $x$.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 5.24$




