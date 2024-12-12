# 

Source: https://proofwiki.org/wiki/Cantor_Space_is_Nowhere_Dense



Theorem
Let $T = \struct {\CC, \tau_d}$ be the Cantor space.

Then $T$ is nowhere dense in $\closedint 0 1$.


Proof 1
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


Proof 2
Let $S_n$ and $C_n$ be as in the definition of the Cantor set as a limit of a decreasing sequence.
Then the length of every interval in $S_n$ is seen to be $\dfrac 1 {3^n} = 3^{-n}$.

Let $0 \le a < b \le 1$.
Then $\openint a b \subseteq \closedint 0 1$ is an open interval.
Let $n \in \N$ such that $3^{-n} < b - a$, so that the length of every interval in $S_n$ is $3^{-n} < b - a$.

Therefore, as the intervals in $S_n$ do not overlap, no interval of length $b - a$ is contained in $C_n = \ds \bigcup S_n$. 
Consequently, as $\CC \subseteq C_n$, no interval of length $b - a$ is contained in $\CC$.
Since the interval $\openint a b$ was of arbitrary length, there do not exist any open intervals in $\CC$.
Hence the result, by definition of nowhere dense.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $10 \ \text{(v)}$




