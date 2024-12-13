# 

Source: https://proofwiki.org/wiki/Prime_Ideal_in_Lattice



Theorem
Let $\struct {L, \le}$ be a lattice.
Let $I$ be an ideal in $L$.

Then $I$ is a prime ideal if and only if:

$\forall a, b \in L: a \wedge b \in I \implies a \in I \text{ or } b \in I$
where $a \wedge b$ denotes $\min \set {a, b}$, the meet of $a$ and $b$.


Proof
Necessary Condition
Let $I$ be a prime ideal.
Let $a, b \in L$ such that $a, b \notin I$.
Then $a, b \in L \setminus I$.
By the definition of prime ideal $L \setminus I$ is a filter.
By the definition of a filter:

$\exists c \in L \setminus I: c \le a, c \le b$
By the definition of meet:

$c \le a \wedge b$
Since $c \in L \setminus I$, the definition of a filter implies that

$a \wedge b \in L \setminus I$

This page has been identified as a candidate for refactoring of medium complexity.In particular: The above argument should be extracted into a separate page which may or may not be instantiated as a separate definition of a filter. As it is, we haven't even got the definition of "meet" written yet - although whether there is any point in doing so as $a \wedge b := \inf \set {a, b}$ should be sufficient.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Thus $a \wedge b \notin I$.
By contraposition it follows that $a \wedge b \in I$ implies that $a \in I$ or $b \in I$.
$\Box$


Sufficient Condition
For all $a$ and $b$ in $L$, let $a \wedge b \in I$ imply that $a \in I$ or $b \in I$.
Let $x, y \in L \setminus I$.
Then $x, y \notin I$.
By supposition, $x \wedge y \notin I$, so:

$x \wedge y \in L \setminus I$
Let $p \in L \setminus I, q \in L$ such that $p \le q$.
Let $q \in I$.
Then by definition of ideal, $p \in I$.
This contradicts $p \in L \setminus I$.
Thus $q \notin I$.
Thus $q \in L \setminus I$.
Therefore, $L \setminus I$ is a filter.
$\blacksquare$





