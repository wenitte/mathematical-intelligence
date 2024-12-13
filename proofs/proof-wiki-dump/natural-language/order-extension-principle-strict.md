# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle/Strict



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


Proof 1
Let $\AA$ be the set of relations $A$ on $S$ with the property that the transitive closure $A^+$ of $A$ is a strict ordering of $S$.
For each $\tuple {x, y} \in S \times S$, let $\tuple {x, y}' = \tuple {y, x}$.

Let $A \in \AA$.
Let $\tuple {x, y} \in S \times S$.
Let $\tuple {x, y} \in A^+$.
Then:

$\paren {A \cup \set {\tuple {x, y} } }^+ = A^+$
so:

$A \cup \set {\tuple {x, y} } \in \AA$

Let $\tuple {y, x} \in A^+$.
Then:

$\paren {A \cup \set {\tuple {y, x} } }^+ = A^+$
so:

$A \cup \set {\tuple {x, y}'} = A \cup \set {\tuple {y, x} } \in \AA$

Otherwise, $x$ and $y$ are non-comparable by $A^+$.
So by Strict Ordering can be Expanded to Compare Additional Pair:

$A \cup \set {\tuple {x, y} } \in \AA$
Thus it has been shown that for each $A \in \AA$ and each $\tuple {x, y} \in S$, either:

$A \cup \set {\tuple {x, y} } \in \AA$
or:

$A \cup \set {\tuple {x, y}'} \in \AA$
$\Box$

Let $A \subseteq S \times S$.
Let $A \in \AA$.
Let $F$ be a finite subset of $A$.
Since $A^+$ is a strict ordering, it is asymmetric.
Since Transitive Closure is Closure Operator, $F^+ \subseteq A^+$.
So $F^+$ is also asymmetric.
Since $F^+$ is also transitive, it is a strict ordering.
So $F \in \AA$.

Suppose instead that each finite subset of $A$ is in $\AA$.
We must show that $A^+$ is antireflexive.
Aiming for a contradiction, suppose that for some $x \in S$, $\tuple {x, x} \in A^+$.
Then by the definition of transitive closure, there are elements $y_0, \dots, y_n$ such that $x = y_0 = y_n$ and:

$\tuple {y_0, y_1}, \tuple {y_1, y_2}, \dotsc, \tuple {y_{n - 1}, y_n} \in A$
Let $F = \set {\tuple {y_0, y_1}, \tuple {y_1, y_2}, \dotsc, \tuple {y_{n - 1}, y_n} }$.
Then $F$ is a finite subset of $A$.
But $\tuple {x, x} \in F^+$, contradicting the fact that $F \in \AA$.
Thus we see that $A^+$ is antireflexive, and thus a strict ordering of $S$.
Therefore, $\AA$ has finite character.
$\Box$

Note that ${\prec} = {\prec^+}$, so ${\prec} \in \AA$.
By the Restricted Tukey's Theorem (Strong Form), there exists an $R \in \AA$ such that:

${\prec} \subseteq R$
For each $\tuple {m, n} \in S \times S$, either $\tuple {m, n} \in R$ or $\tuple {n, m} = \tuple {m, n}' \in R$.
Then:

$R^+$ is a strict total ordering of $S$.
$\forall a, b \in S: a \prec b \implies a < b$
$\blacksquare$


Proof 2
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





