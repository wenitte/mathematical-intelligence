# 

Source: https://proofwiki.org/wiki/Hall%27s_Marriage_Theorem/General_Set


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\SS = \family {S_k}_{k \mathop \in I}$ be an indexed family of finite sets.
For each $F \subseteq I$, let $\ds Y_F = \bigcup_{k \mathop \in F} S_k$.
Let $Y = Y_I$.

Then the following are equivalent:

$(1): \quad \SS$ satisfies the marriage condition: for each finite subset $F \subseteq I : \card F \le \card {Y_F}$.
$(2): \quad$ There exists an injection $f: I \to Y$ such that $\forall k \in I: \map f k \in S_k$.


Proof
$(2)$ implies $(1)$
Suppose that for some finite $F \subseteq I$, $\card F > \card {Y_F}$.
Then $\card F \not \le \card {Y_F}$.
By contrapositive of Injection implies Cardinal Inequality, there can be no injection from $F$ to $Y_F$.
Thus there can be no injection from $I$ to $Y$ satisfying the requirements.
$\Box$


$(1)$ implies $(2)$
Let $\map \Phi x$ be the set of all elements of $y$ in the expression of $x$.


This article, or a section of it, needs explaining.In particular: Explain what that means: what $x$ is and what the "expression of $x$" is.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\FF$ be the set of all partial functions $g$ from $I$ to $Y$ such that:

$g$ is one-to-one.
If $\tuple {k, y} \in g$, then $y \in S_k$.
Then for any $k \in I$, $\set {\map g x: g \in \FF \land k \in \Dom g}$ is finite.
$\FF$ has finite character:
Let $g \in \FF$.
Let $F$ be a finite subset of $I$.
Then $g \restriction F$ is obviously in $\FF$.
Suppose instead that $g$ is a partial function from $I$ to $Y$.
Let the restriction of $g$ to each finite subset of $\Dom g$ be in $\FF$.
Then $g$ is one-to-one, as follows:
Let $p, q \in \Dom g$ with $p \ne q$.
Then $\set {p, q}$ is a finite subset of $\Dom g$.
Thus:

$g \restriction \set {p, q} \in \FF$
Thus:

$\map g p \ne \map g q$
Let $\tuple {k, y} \in g$.
Then:

$\tuple {k, y} \in g \restriction \set k$
So:

$y \in S_k$
Thus:

$g \in \FF$
So we see that $\FF$ has finite character.

Let $F$ be a finite subset of $I$.
By the finite case, there is an element of $\FF$ with domain $F$.
By the Cowen-Engeler Lemma, $\FF$ has an element $\phi$ whose domain is $I$.
That is, $\phi$ is a mapping from $I$ to $Y$.
But a one-to-one mapping is an injection, so $\phi$ is an injection from $X$ to $Y$.
By the definition of $\FF$:

$\forall k \in I: \map \phi k \in S_k$
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Cowen-Engeler Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Explanation
This Hall's Marriage Theorem is so called for the following reason:
Let $I$ be a set of women.
Suppose that each woman $k$ is romantically interested in a finite set $S_k$ of men.
Suppose also that:

each woman would like to marry exactly one of these men
and:

each man in $\ds \bigcup_{k \mathop \in I} S_k$ would like to marry at most one woman in $I$.
Then this theorem gives a condition under which it is possible to match every woman to a man.


Source of Name
This entry was named for Philip Hall.





