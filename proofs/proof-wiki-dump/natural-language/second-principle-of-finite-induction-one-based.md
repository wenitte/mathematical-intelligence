# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Finite_Induction/One-Based

Theorem
Let $S \subseteq \N_{>0}$ be a subset of the $1$-based natural numbers.

Suppose that:

$(1): \quad 1 \in S$
$(2): \quad \forall n \in \N_{>0}: \paren {\forall k: 1 \le k \le n \implies k \in S} \implies n + 1 \in S$

Then:

$S = \N_{>0}$


Proof
Define $T$ as:

$T = \set {n \in \N_{>0}: \forall k: 1 \le k \le n: k \in S}$
Since $n \le n$, it follows that $T \subseteq S$.
Therefore, it will suffice to show that:

$\forall n \ge 1: n \in T$

Firstly, we have that $1 \in T$ if and only if the following condition holds:

$\forall k: 1 \le k \le 1 \implies k \in S$
Since $1 \in S$, it thus follows that $1 \in T$.

Now suppose that $n \in T$; that is:

$\forall k: 1 \le k \le n \implies k \in S$
By $(2)$, this implies:

$n + 1 \in S$
Thus, we have:

$\forall k: 1 \le k \le n + 1 \implies k \in S$

This article needs to be linked to other articles.In particular: Closed Interval of Naturally Ordered Semigroup with Successor equals Union with Successor for $\N$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore, $n + 1 \in T$.

Hence, by the Principle of Finite Induction:

$\forall n \ge 1: n \in T$
That is:

$T = \N_{>0}$
and as $S \subseteq \N_{>0}$ it follows that:

$S = N_{>0}$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 20 \alpha$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf{I}'$




