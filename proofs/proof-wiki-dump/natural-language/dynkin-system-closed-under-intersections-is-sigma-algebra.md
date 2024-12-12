# 

Source: https://proofwiki.org/wiki/Dynkin_System_Closed_under_Intersections_is_Sigma-Algebra



Theorem
Let $X$ be a set, and let $\DD$ be a Dynkin system on $X$.
Suppose that $\DD$ satisfies the following condition:

$(1):\quad \forall D, E \in \DD: D \cap E \in \DD$
That is, $\DD$ is closed under intersection.

Then $\DD$ is a $\sigma$-algebra.


Proof
The first two conditions for a Dynkin system are identical to those for a $\sigma$-algebra.
Hence it is only required to verify that $(1)$ implies that $\DD$ is closed under arbitrary countable unions.

So let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence in $\DD$.
Now define the sequence $\sequence {E_n}_{n \mathop \in \N}$ by:

$\ds E_n := D_n \cap \paren {X \setminus \bigcup_{m \mathop < n} D_m}$
By Dynkin System Closed under Union and $(1)$, it follows that $E_n \in \DD$ for all $n \in \N$.


Lemma
For all $n \in \N$, it holds that:

$\ds \bigcup_{k \mathop = 0}^n E_k = \bigcup_{k \mathop = 0}^n D_k$
Proof of Lemma

This needs considerable tedious hard slog to complete it.In particular: tedium, best postponed until after the implementation of the new extensionTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The lemma, combined with the definition of the $E_n$, gives immediately that for all $n \in \N$:

$\ds E_n \in X \setminus \bigcup_{m \mathop < n} D_m = X \setminus \bigcup_{m \mathop < n} E_m$
whence the $E_n$ are pairwise disjoint.
Another consequence is that:

$\ds \bigcup_{n \mathop \in \N} D_n = \bigcup_{n \mathop \in \N} E_n$

Now since the $E_n$ are pairwise disjoint, it follows that:

$\ds \bigcup_{n \mathop \in \N} E_n \in \DD$
which, combined with above equality, concludes in:

$\ds \bigcup_{n \mathop \in \N} D_n \in \DD$
Therefore, $\DD$ is closed under countable unions, making it a $\sigma$-algebra.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $5.4$




