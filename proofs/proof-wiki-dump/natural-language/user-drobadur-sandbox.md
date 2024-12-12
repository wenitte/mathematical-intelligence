# 

Source: https://proofwiki.org/wiki/User:Drobadur/sandbox

Theorem
Let $\left (X, d\right)$ be a metric space and $G \subseteq X$.
Then the following are equivalent:

$(1):\quad$ $G \subseteq X$ is open.
$(2):\quad$ $\forall x \in G$ and $\forall \left (x_n\right) \in X:$ $ x_n \to x$, $\exists n_0 \in \N:$ $\left (x_n\right) \in G$ $\forall n \ge n_0$.
Proof
$(1)\quad \implies (2)\quad$:

Suppose $G \subseteq X$ is open. Let $x \in G$ and $\left (x_n\right)$ be a sequence in $X$ such that $x_n \to x$.
By the open set definition,  there exists $ε >0$ such that $B \left({x, ε}\right) \subseteq G$.
Since $x_n \to x$, there exists $n_0 \in \N$ such that $d\left (x_n, x\right) < ε$ for every $n \ge n_0$.
Thus $x_n \in B \left({x, ε}\right) \subseteq G$ for every $n \ge n_0$.

$\Box$

$(2)\quad \implies (1)\quad$:

Suppose that $G$ is $\textbf{not}$ open. Then there exists $x \in G$ such that for every $ε>0$ the open ball $B \left({x, ε}\right) \nsubseteq G$.
Therefore, for $n=1, 2, ...$ we can inductively find a sequence $x_n \in B\left({x, \frac{1}{n}}\right) \cap \left(X \setminus G\right) \implies x_n \notin G$ and $d\left (x_n, x\right) < \frac{1}{n}$ $\forall n \in \N$ $\implies$ $x_n \to x \in G$ and $x_n \notin G$ $\forall n \in \N$. This contradicts hypothesis $(2)$.
Thus $G$ $\textbf{is}$ open.

$\Box$

$\blacksquare$

Also see
Definition: Open Set
Definition: Open Ball




