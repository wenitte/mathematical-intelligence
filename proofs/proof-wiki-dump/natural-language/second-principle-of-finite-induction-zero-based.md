# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Finite_Induction/Zero-Based

Theorem
Let $S \subseteq \N$ be a subset of the natural numbers.

Suppose that:

$(1): \quad 0 \in S$
$(2): \quad \forall n \in \N: \paren {\forall k: 0 \le k \le n \implies k \in S} \implies n + 1 \in S$

Then:

$S = \N$


Proof
Define $T$ as:

$T = \set {n \in \N : \forall k: 0 \le k \le n: k \in S}$
Since $n \le n$, it follows that $T \subseteq S$.
Therefore, it will suffice to show that:

$\forall n \ge 0: n \in T$

Firstly, we have that $0 \in T$ if and only if the following condition holds:

$\forall k: 0 \le k \le 0 \implies k \in S$
Since $0 \in S$, it thus follows that $0 \in T$.

Now suppose that $n \in T$; that is:

$\forall k: 0 \le k \le n \implies k \in S$
By $(2)$, this implies:

$n + 1 \in S$
Thus, we have:

$\forall k: 0 \le k \le n + 1 \implies k \in S$

This article needs to be linked to other articles.In particular: Closed Interval of Naturally Ordered Semigroup with Successor equals Union with Successor for $\N$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore, $n + 1 \in T$.

Hence, by the Principle of Finite Induction:

$\forall n \ge 0: n \in T$
That is:

$T = \N$
and as $S \subseteq \N$ it follows that:

$S = N$
$\blacksquare$





