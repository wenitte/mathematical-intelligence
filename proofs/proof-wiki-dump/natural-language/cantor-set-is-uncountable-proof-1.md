# 

Source: https://proofwiki.org/wiki/Cantor_Set_is_Uncountable/Proof_1

Theorem
The Cantor set $\CC$ is uncountable.


Proof
From the definition as a ternary representation, $\CC$ consists of all the elements of $\closedint 0 1$ which can be written without using a $1$.
So let $x \in \CC$. Then in base $3$ notation, we have (as $0 \le x \le 1$):

$\ds x = \sum_{i \mathop = 1}^\infty r_j 3^{-j}$
From the definition of the Cantor set, we have $\forall j: r_j \in \set {0, 2}$.
Furthermore, from Representation of Ternary Expansions, the $r_j$ are unique.

Now define the following function:

$\ds f: \CC \to \closedint 0 1, \quad \map f {\sum_{i \mathop = 1}^\infty r_j 3^{-j} } = \sum_{i \mathop = 1}^\infty \frac {r_j} 2 2^{-j}$
Observe that $\forall j: \dfrac {r_j} 2 \in \set {0, 1}$.
That the right hand side expression is in fact an element of $\closedint 0 1$ now follows from binary notation.

Furthermore by Existence of Base-N Representation, any element $y$ of $\closedint 0 1$ may be written in the following form (where $\forall j: b_j \in \set {0, 1}$):

$\ds y = \sum_{i \mathop = 1}^\infty b_j 2^{-j}$
Obviously, $y = \map f x$, where $x \in \CC$ is defined as follows:

$\ds x = \sum_{i \mathop = 1}^\infty 2 b_j 3^{-j}$

It follows that $f$ is surjective.
From Closed Interval in Reals is Uncountable, the closed interval $\closedint 0 1$ is uncountable.

The result follows.


This article, or a section of it, needs explaining.In particular: it is obvious, but most likely there is some result that could be referred toYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set: $5$




