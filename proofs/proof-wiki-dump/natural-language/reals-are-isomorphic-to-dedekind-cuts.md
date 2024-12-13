# 

Source: https://proofwiki.org/wiki/Reals_are_Isomorphic_to_Dedekind_Cuts


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\mathscr D$ be the set of all Dedekind cuts of the totally ordered set $\struct {\Q, \le}$.
Define a mapping $f: \R \to \mathscr D$ as:

$\forall x \in \R: \map f x = \set {y \in \Q: y < x}$
Then $f$ is a bijection.


Proof
First, we will prove that:

$\forall x \in \R: \map f x \in \mathscr D$
Let $x \in \R$.
It is to be proved that $\map f x$ is a proper subset of $\Q$ such that:

$(1): \quad \forall z \in \map f x: \forall y \in \Q: y < z \implies y \in \map f x$
$(2): \quad \forall z \in \map f x: \exists y \in \map f x: z < y$
We have that:

$x \notin \map f x$
Therefore by definition $\map f x$ is a proper subset of $\Q$.

$(1): \quad$ Let $z \in \map f x, y \in \Q$ such that:

$y < z$
By definition of $\map f x$:

$z < x$
Then:

$y < x$
Thus by definition of $\map f x$:

$y \in \map f x$
$\Box$

$(2): \quad$ Let $z \in \map f x$.
By definition of $\map f x$:

$z < x$
By Between two Real Numbers exists Rational Number:

$\exists r \in \Q: z < r < x$
Then by definition of $\map f x$:

$r \in \map f x$
Thus:

$\exists r \in \map f x: z < r$
$\Box$

By definition of bijection it suffices to prove that $f$ is an injection and a surjection.
We will show by definition that $f: \R \to \mathscr D$ is an injection.
Let $x_1, x_2 \in \R$ such that

$\map f {x_1} = \map f {x_2}$
Aiming for a contradiction, suppose $x_1 \ne x_2$.
Without loss of generality suppose $x_1 < x_2$.
By Between two Real Numbers exists Rational Number:

$\exists r \in \Q: x_1 < r < x_2$
Then by definition of $\map f x$:

$r \notin \map f {x_1}$
and

$r \in \map f {x_2}$
This contradicts $\map f {x_1} = \map f {x_2}$.

We will prove by definition that $f: \R \to \mathscr D$ is a surjection.
Let $L \in \mathscr D$.
By definition of Dedekind cut:

$L$ is a proper subset of $\Q$.
By definition of proper subset:

$\exists r \in \Q: r \notin L$
By definition of Dedekind cut:

$(3): \quad \forall x \in L: \forall y \in \Q: y < x \implies y \in L$
Then

$\forall x \in L: r \not < x \land r \ne x$
Hence

$\forall x \in L: r > x$
Then $L$ is bounded above by definition.
By definition of supremum:

$\map \sup L \le r$
Hence:

$\map \sup L \in \R$
By definition of supremum:

$\map \sup L$ is an upper bound of $L$.
Then by definition of upper bound:

$\forall x \in L: x < \map \sup L$
We will prove that:

$\forall x \in \Q: x < \map \sup L \implies x \in L$
Let $x \in \Q$ such that:

$x < \map \sup L$
Aiming for a contradiction, suppose $x \notin L$.
By $(3)$:

$\forall x \in L: r \ge x$
By definition:

$r$ is an upper bound of $L$.
By definition of supremum:

$r \ge \map \sup L$
This contradicts $x < \map \sup L$.
Thus:

$L = \map f {\map \sup L}$
$\blacksquare$





