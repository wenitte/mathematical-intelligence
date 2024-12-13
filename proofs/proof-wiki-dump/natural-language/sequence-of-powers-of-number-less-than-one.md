# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One



Theorem
Let $x \in \R$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then:

$\size x < 1$ if and only if $\sequence {x_n}$ is a null sequence.


Rational Numbers
Let $x \in \Q$.
Let $\sequence {x_n}$ be the sequence in $\Q$ defined as $x_n = x^n$.

Then:

$\size x < 1$ if and only if $\sequence {x_n}$ is a null sequence.


Complex Numbers
Let $z \in \C$.
Let $\sequence {z_n}$ be the sequence in $\C$ defined as $z_n = z^n$.

Then:

$\size z < 1$ if and only if $\sequence {z_n}$ is a null sequence.


Normed Division Ring
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring
Let $x \in R$.
Let $\sequence {x_n}$ be the sequence in $R$ defined as $x_n = x^n$.

Then:

$\norm x < 1$ if and only if $\sequence {x_n}$ is a null sequence.


Proof
Necessary Condition

This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
[For other proofs of the Necessary Condition visit here.]

Without loss of generality, assume that $x \ne 0$.
Observe that by hypothesis:

$0 < \size x < 1$
Thus by Ordering of Reciprocals:

$\size x^{-1} > 1$
Define:

$h = \size x^{-1} - 1 > 0$
Then:

$x = \dfrac 1 {1 + h}$
By the binomial theorem, we have that:

$\paren {1 + h}^n = 1 + n h + \cdots + h^n > n h$
because $h > 0$.

By Absolute Value Function is Completely Multiplicative, it follows that:

$0 \le \size {x^n} = \size x^n = \dfrac 1 {\paren {1 + h}^n} < \dfrac 1 {n h}$
From Sequence of Reciprocals is Null Sequence:

$\dfrac 1 n \to 0$ as $n \to \infty$
By the Multiple Rule for Real Sequences:

$\dfrac 1 {n h} \to 0$ as $n \to \infty$
By the Squeeze Theorem for Real Sequences: Corollary:

$\size {x^n} \to 0$
as $n \to \infty$.

Hence the result, by the definition of a limit.
$\Box$


Sufficient Condition
By Reciprocal of Null Sequence:

$\sequence {x_n}$ converges to $0$ if and only if $\sequence {\dfrac 1 {x_n} }$ diverges to $\infty$.
By the definition of divergence to $\infty$:

$\exists N \in \N: \forall n \ge N: \size {\dfrac 1 {x_n} } > 1$
In particular:

$\size {\dfrac 1 {x_N} } > 1$
By Ordering of Reciprocals:

$\size {x_N} < 1$
That is:

$\size {x_N} = \size {x^N} = \size x^N < 1$

Aiming for a contradiction, suppose $\size x \ge 1$.
By Inequality of Product of Unequal Numbers:

$\size x^N \ge 1^N = 1$
This is a contradiction.

So $\size x < 1$ as required.
$\blacksquare$





