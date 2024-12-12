# 

Source: https://proofwiki.org/wiki/Cantor_Space_is_Nowhere_Dense/Proof_1

Theorem
Let $T = \struct {\CC, \tau_d}$ be the Cantor space.

Then $T$ is nowhere dense in $\closedint 0 1$.


Proof
From Cantor Set is Closed in Real Number Space, $\CC$ is closed.
So from Closed Set equals its Closure:

$\CC^- = \CC$
where $\CC^-$ denotes the closure of $\CC$.

Let $0 \le a < b \le 1$.
Then $I = \openint a b$ is an open interval of $\closedint 0 1$.
Let $\epsilon = b - a$.
Clearly $\epsilon > 0$.
Let $n \in \N$ such that $3^{-n} < \epsilon$.


This article, or a section of it, needs explaining.In particular: Need to fill in the details to show that between $a$ and $b$ there is an interval $3^{-\paren {n + 1} }$ wide that contains numbers with $1$ in its $n + 1$th digit in its ternary expansion (or something like that) - intuitively obvious but fiddly to prove.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So there exists an open interval of $\closedint 0 1$ which has been deleted from $\closedint 0 1$ during the process of creating $\CC$.
Thus no open interval of $\closedint 0 1$ is disjoint from all the open intervals deleted from $\closedint 0 1$.
So an open interval of $\closedint 0 1$ can not be a subset of $\CC = \CC^-$.
Hence the result, by definition of nowhere dense.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set: $4$




