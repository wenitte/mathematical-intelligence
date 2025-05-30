# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle/Strict/Proof_2


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: It's hard to see the forest for the trees.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $S$ be a set.
Let $\prec$ be a strict ordering on $S$.

Then there exists a strict total ordering $<$ on $S$ such that:

$\forall a, b \in S: a \prec b \implies a < b$


Finite Set
Let $T$ be a finite set.
Let $\prec$ be a strict ordering on $T$.

Then there exists a strict total ordering $<$ on $T$ such that:

$\forall a, b \in T: \paren {a \prec b \implies a < b}$


Proof
For the purposes of this proof, a relation $<_U$ on a subset $U$ of $S$ will be considered compatible with $\prec$ if and only if:

$\forall a, b \in U: a \prec b \implies a < b$
Let $M$ be the set of partial mappings $f$ from $S \times S$ to $\left\{ {0, 1}\right\}$ such that for all $x, y, z \in S$:

$(a): \quad \left({x, y}\right), \left({y, z}\right), \left({x, z}\right) \in \operatorname{Dom} \left({f}\right) \implies \left({f \left({x, y}\right) = 1 \land f \left({y, z}\right) = 1 \implies f \left({x, z}\right) = 1}\right)$
$(b): \quad \left({x, y}\right), \left({y, x}\right) \in \operatorname{Dom} \left({f}\right) \implies \left({f \left({x, y}\right) = 1 \iff f \left({y, x}\right) = 0}\right)$
$(c): \quad \left({x,y}\right) \in \operatorname{Dom} \left({f}\right) \implies \left({x \prec y \implies f \left({x, y}\right) = 1}\right)$

This article, or a section of it, needs explaining.In particular: Is it worth extracting this definition and setting it up in its own definition page?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We will first show that for some $\phi \in M$, the domain of $f$ is $S \times S$.
We will then show that $\phi$ is the characteristic function of a strict total ordering on $S$ that extends $\prec$.
We will apply the Cowen-Engeler Lemma to show that $\phi$ exists, so we must show that $M$ satisfies the premises of that theorem.
Specifically, we must show that:

$(1): \quad \left\{{f \left({x, y}\right): f \in M}\right\}$ is finite for each $\left({x, y}\right) \in S \times S$
$(2): \quad$ For each finite subset $F$ of $S \times S$, there exists an element $f \in M$ such that the domain of $f$ is $F$
$(3): \quad  M$ has finite character.


$M$ satisfies premise $(1)$
For each $g \in M$ and each $x \in \operatorname{Dom} \left({g}\right)$, $g \left({x}\right) \in \left\{{0, 1}\right\}$, so requirement $(1)$ is trivially satisfied.
$\Box$


$M$ satisfies premise $(2)$
Let $F$ be a finite subset of $S \times S$.
Let $S_F = \operatorname{Dom} \left({F}\right) \cup \operatorname{Img} \left({F}\right)$.

Since $F$ is finite, so is $S_F$.


This article, or a section of it, needs explaining.In particular: Trivial, I know, but express it formally: it rests on (a) $\operatorname{Dom} \left({F}\right)$ being finite (needs to be formally established), $\operatorname{Img} \left({F}\right)$ being finite (also needs to be formally established) and their union being finite.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus by the Order-Extension Principle for Finite Sets there is a strict total ordering $<_F$ on $S_F$ which is compatible with $\prec$.
Let $f_F$ be the restriction of the characteristic function of $<_F$ to $F$.
Then since $F \subseteq S_F \times S_F$, $\operatorname{Dom} \left({f_F}\right) = F$ by the definition of restriction.
Then $f_F \in M$:
Let:

$\left({x, y}\right), \left({y, z}\right), \left({x, z}\right) \in \operatorname{Dom} \left({f_F}\right) = F$
$f_F \left({x, y}\right) = 1 \land f_F \left({y, z}\right) = 1$
Then $x <_F y \land y <_F z$.
Thus since $<_F$ is transitive:

$x <_F z$
Thus:

$f_F \left({x, z}\right) = 1$
Similarly, let $\left({x, y}\right), \left({y, x}\right) \in \operatorname{Dom} \left({f_F}\right) = F$.
Then since $<_F$ is asymmetric and connected:

$x <_F y \iff \neg (y <_F x)$
Thus:

$f_F \left({x, y}\right) = 1 \iff f_F \left({y, x}\right) = 0$.
If $\left({x, y}\right) \in \operatorname{Dom}(f_F)$, then since $<_F$ is compatible with $\prec$:

$x \prec y \implies f \left({x, y}\right) = 1$
So $f_F \in M$.
As such an $f_F$ exists for each such $F$, $M$ satisfies premise $(2)$.
$\Box$


$M$ satisfies premise $(3)$
We must show that $M$ has finite character.
That is, a mapping $f$ from some subset of $S \times S$ to $\left\{{0, 1}\right\}$ is an element of $M$ if and only if:

its restriction to each finite subset of $\operatorname{Dom} \left({f}\right)$ is in $M$.
Let $f$ be a partial mapping from $S \times S$ to $\left\{{0, 1}\right\}$.
Suppose that $f \in M$.
Let $F$ be a finite subset of $\operatorname{Dom} \left({f}\right)$.
Let $x, y, z \in S$.
Let $\left({x, y}\right), \left({y, z}\right), \left({x, z}\right) \in \operatorname{Dom}(f \restriction F)$.
Then:

$\left({x, y}\right), \left({y, z}\right), \left({x, z}\right) \in \operatorname{Dom} \left({f}\right)$
Thus since $f \in M$:

$f \left({x, y}\right) = 1 \land f \left({y, z}\right) = 1 \implies f \left({x, z}\right) = 1$
But by the definition of restriction:

$f \restriction F \left({x, y}\right) = f \left({x, y}\right)$
$f \restriction F \left({y, z}\right) = f \left({y, z}\right)$
$f \restriction F \left({x, z}\right) = f \left({x, z}\right)$
Thus:

$f \restriction F \left({x, y}\right) = 1 \land f \restriction F \left({y, z}\right) = 1 \implies f \restriction F \left({x, z}\right) = 1$
So $f \restriction F$ satisfies $(a)$.
A similar argument shows that $f \restriction F$ satisfies $(b)$ and $(c)$, so $f \restriction F \in M$.

Suppose instead that for every finite subset $F$ of $\operatorname{Dom} \left({f}\right)$, $f \restriction F \in M$.
Let $x, y \in S$.
Suppose that $\left({x, y}\right), \left({y, x}\right) \in \operatorname{Dom} \left({f}\right)$.
Then $K = \left\{ {\left({x, y}\right), \left({y, x}\right)}\right\}$ is a finite subset of $\operatorname{Dom} \left({f}\right)$.
Thus $f \restriction K \in M$.
So:

$f \restriction K \left({x, y}\right) = 1 \iff f \restriction K \left({y, x}\right) = 0$
Since $f \restriction K \left({x, y}\right) = f \left({x, y}\right)$ and $f \restriction K \left({y, x}\right) = f \left({y, x}\right)$:

$f \left({x, y}\right) = 1 \iff f \left({y, x}\right) = 0$
Thus $f$ satisfies $(b)$ for all pairs.
A similar argument shows that $f$ satisfies $(a)$ for all pairs.
Thus $f \in M$.
$\Box$

Since $M$ satisfies $(1)$, $(2)$, and $(3)$, by the Cowen-Engeler Lemma there is a $\phi \in M$ whose domain is $S \times S$.


$\phi$ is Characteristic Function which is Compatible with $\prec$
Since $\operatorname{Dom} \left({\phi}\right) = S \times S$ and $\phi \in M$, for all $x, y, z \in S$:

$(a): \quad \phi \left({x, y}\right) = 1 \land \phi \left({y, z}\right) = 1 \implies \phi \left({x, z}\right) = 1$
$(b): \quad \phi \left({x, y}\right) = 1 \iff \phi \left({y, x}\right) = 0$
$(c): \quad x \prec y \implies \phi \left({x, y}\right) = 1$
By an argument similar to that given for premise $(2)$, above, $\phi$ is the characteristic function of a strict total ordering on $S$ compatible with $\prec$.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Cowen-Engeler Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





