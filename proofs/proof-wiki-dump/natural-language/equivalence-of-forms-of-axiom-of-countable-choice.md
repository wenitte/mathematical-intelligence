# 

Source: https://proofwiki.org/wiki/Equivalence_of_Forms_of_Axiom_of_Countable_Choice



Theorem
The following forms of the Axiom of Countable Choice are equivalent in $\mathrm{ZF}^-$:


This article, or a section of it, needs explaining.In particular: $\mathrm{ZF}^-$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Form 1
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of non-empty sets.
The axiom of countable choice states that there exists a sequence:

$\sequence {x_n}_{n \mathop \in \N}$
such that $x_n \in S_n$ for all $n \in \N$.


Form 2
Let $S$ be a countable set of non-empty sets.

Then $S$ has a choice function.


Proof
Form 1 implies Form 2
Suppose that Axiom of Countable Choice: Form 1 holds.
Let $S$ be a countable set of non-empty sets.
Then $S$ is either finite or countably infinite.
If $S$ is finite, then it has a choice function by the Principle of Finite Choice.
Suppose instead that $S$ is countably infinite.
Then there exists a bijection $f: \N \to S$.
Thus by Form 1, there exists a mapping $g: \N \to \bigcup S$ such that:

$\forall n \in \N: g \left({n}\right) \in f \left({n}\right)$
Then $g \circ f^{-1}: S \to \bigcup S$ is a choice function for $S$.
As every countable set has a choice function, Axiom of Countable Choice: Form 2 holds.
$\Box$


Form 2 implies Form 1
Suppose that Axiom of Countable Choice: Form 2 holds.
Let $\langle x_n \rangle_{n \mathop \in \N}$ be a sequence of non-empty sets.
By the Axiom of Replacement:

$I = \left\{{x_n: n \in \N}\right\}$
is a set.
By Surjection from Natural Numbers iff Countable, $I$ is countable.
By Axiom of Countable Choice: Form 2, $I$ has a choice function $h: I \to \bigcup I$.
Define a sequence in $\bigcup I$ by letting $y_n = h \left({x_n}\right)$.
Then by the definition of choice function:

$\forall n \in \N: y_n \in x_n$
As this holds for all such sequences, Axiom of Countable Choice: Form 1 holds.
$\blacksquare$





