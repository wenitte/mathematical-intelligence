# 

Source: https://proofwiki.org/wiki/Deterministic_Time_Hierarchy_Theorem


This article needs to be linked to other articles.In particular: worst-case det. time; in the proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\map f n$ be a time-constructible function.
Then there exists a decision problem which:

can be solved in worst-case deterministic time $\map f {2 n + 1}^3$
but:

cannot be solved in worst-case deterministic time $\map f n$.
In other words, the complexity class $\map {\mathsf {DTIME} } {\map f n} \subsetneq \map {\mathsf {DTIME} } {\map f {2 n + 1}^3}$.


Proof
Let $H_f$ be a set defined as follows:

$H_f = \set {\tuple {\sqbrk M, x}: \text {$M$ accepts $x$ in $\map f {\size x}$ steps} }$
where:

$M$ is a (deterministic) Turing machine
$x$ is its input (the initial contents of its tape)
$\sqbrk M$ denotes an input that encodes the Turing machine $M$

Let $m$ be the size of $\tuple {\sqbrk M, x}$.
We know that we can decide membership of $H_f$ by way of a (deterministic) Turing machine that:

$(1): \quad$ calculates $f \left({\size x}\right)$
$(2): \quad$ writes out a row of $0$s of that length
$(3): \quad$ uses this row of $0$s as a counter to simulate $M$ for at most that many steps.

At each step, the simulating machine needs to look through the definition of $M$ to decide what the next action would be.
It is safe to say that this takes at most $\map f m^3$ operations, so:

$ H_f \in \map {\mathsf{DTIME} } {\map f m^3}$

This article contains statements that are justified by handwavery.In particular: "We know that ...", "It is safe to say ..."You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Aiming for a contradiction, suppose:

$H_f \in \map {\mathsf{DTIME} } {\map f {\floor {\dfrac m 2} } }$
Then we can construct some machine $K$ which:

given some machine description $\sqbrk {M_K}$ and input $x$
decides within $\map {\mathsf{DTIME} } {\map f {\floor {\dfrac m 2} } }$ whether $\tuple {\sqbrk {M_K}, x} \in H_f$.
Construct another machine $N$ which:

takes a machine description $\sqbrk {M_N}$
runs $K$ on $\left({ \sqbrk {M_N}, \sqbrk {M_N} }\right)$
accepts only if $K$ rejects, and rejects if $K$ accepts.

Let $m_n$ be the length of $\sqbrk {M_N}$.
Then $m$ (the length of the input to $K$) is twice $m_n$ plus some delimiter symbol, so:

$m = 2m_n + 1$
$N$'s running time is thus:














\(\ds \map {\mathsf{DTIME} } {\map f {\floor {\frac m 2} } }\)

\(=\)







\(\ds \map {\mathsf{DTIME} } {\map f {\floor {\frac {2 m_n + 1} 2} } }\)




















\(\ds \)

\(=\)







\(\ds \map {\mathsf{DTIME} } {\map f {m_n} }\)










Now consider the case $M_N = N$.
That is we feed $\sqbrk N$ as input into $N$ itself).
In this case $m_n$ is the length of $\sqbrk N$.


If $N$ accepts $\sqbrk N$ (which we know it does in at most $\map f {m_n}$ operations):
By the definition of $N$, $K$ rejects $\tuple {\sqbrk N, \sqbrk N}$
Therefore, by the definition of $K$, $\tuple {\sqbrk N, \sqbrk N} \notin H_f$
Therefore, by the definition of $H_f$, $N$ does not accept $\sqbrk N$ in $\map f {m_n}$ steps -- a contradiction.


If $N$ rejects $\sqbrk N$ (which we know it does in at most $\map f {m_n}$ operations):
By the definition of $N$, $K$ accepts $\tuple {\sqbrk N, \sqbrk N}$
Therefore, by the definition of $K$, $\tuple {\sqbrk N, \sqbrk N} \in H_f$
Therefore, by the definition of $H_f$, $N$ does accept $\sqbrk N$ in $\map f {m_n}$ steps -- a contradiction.

Therefore, $K$ does not exist.
So, by Proof by Contradiction:

$H_f \notin \map {\mathsf{DTIME} } {\map f {\floor {\dfrac m 2} } }$

Substituting $2 n + 1$ for $m$, we get:

$H_f \notin \map {\mathsf{DTIME} } {\map f n}$
and, from the earlier result:

$H_f \in \map {\mathsf{DTIME} } {\map f {2 n + 1}^3}$
$\blacksquare$





