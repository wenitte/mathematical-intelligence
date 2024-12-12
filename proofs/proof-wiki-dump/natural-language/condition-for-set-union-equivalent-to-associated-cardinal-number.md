# 

Source: https://proofwiki.org/wiki/Condition_for_Set_Union_Equivalent_to_Associated_Cardinal_Number



Theorem
Let $S$ and $T$ be sets.
Let $\left|{S}\right|$ denote the cardinal number of $S$.
Let $\sim$ denote set equivalence.

Then:

$S \cup T \sim \left|{S \cup T}\right| \iff S \sim \left|{S}\right| \land T \sim \left|{T}\right|$


Proof
Necessary Condition
Let $S \cup T \sim \left|{S \cup T}\right|$.
By definition of set equivalence, there exists a bijection:

$f: S \cup T \to \left|{S \cup T}\right|$

Since $f$ is a bijection, it follows that:

$S$ is equivalent to the image of $S$ under $f$.

This article, or a section of it, needs explaining.In particular: Link to a result proving the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
This, in turn, is a subset of the ordinal $\left|{S \cup T}\right|$.


This article, or a section of it, needs explaining.In particular: Link to a result proving the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\left|{S \cup T}\right|$ is an ordinal by Cardinal Number is Ordinal.

By Condition for Set Equivalent to Cardinal Number, it follows that:

$S \sim \left|{S}\right|$
Similarly:

$T \sim \left|{T}\right|$
$\Box$


Sufficient Condition
Suppose $S \sim \left|{S}\right|$ and $T \sim \left|{T}\right|$.
Let $f: S \to \left|{S}\right|$ and $g: T \to \left|{T}\right|$ be bijections.
By definition of set equivalence, these bijections are known to exist.

Define the mapping $F : S \cup T \to \left|{S}\right| + \left|{T}\right|$ to be:

$F \left({x}\right) = \begin{cases}
f \left({x}\right) & : x \in S \\
\left|{S}\right| + g \left({x}\right) & : x \notin S
\end{cases}$
Suppose $F \left({x}\right) = F \left({y}\right)$.
Let $x, y \in S$.
Then:

$f \left({x}\right) = f\left({y}\right)$
Since $f$ is a bijection, it follows that:

$x = y$

Let $x \in S, y \in T$.
Then:

$f \left({x}\right) = \vert S \vert + g\left({x}\right)$
But this is a contradiction, since $f\left({x}\right)$ has to be an element of $\left\vert{S}\right\vert$.

Finally, let $x, y \in T$.
Then:

$\left\vert{S}\right\vert + g \left({x}\right) = \left\vert{S}\right\vert + g\left({y}\right)$
From Ordinal Addition is Left Cancellable:

$g \left({x}\right) = g\left({y}\right)$
By the definition of a bijection:

$x = y$

It follows that $F: S \cup T \to \left|{S}\right| + \left|{T}\right|$ is an injection, where $\left|{S}\right| + \left|{T}\right|$ denotes ordinal addition.

Therefore, $S \cup T$ is equivalent to some subset of the ordinal $\left|{S}\right| + \left|{T}\right|$.
By Condition for Set Equivalent to Cardinal Number, it follows that $S \cup T \sim \left|{S \cup T}\right|$.
$\blacksquare$


Also see
Set Equivalent to Cardinal, which requires the axiom of choice.


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.15 \ (1)$




