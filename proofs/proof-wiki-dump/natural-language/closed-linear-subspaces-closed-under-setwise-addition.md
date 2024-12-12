# 

Source: https://proofwiki.org/wiki/Closed_Linear_Subspaces_Closed_under_Setwise_Addition

Theorem
Let $H$ be a Hilbert space.
Let $M, N$ be closed linear subspaces of $H$.

Then $M + N$ is also a closed linear subspace of $H$, where $+$ denotes setwise addition.


Proof
By Linear Subspaces Closed under Setwise Addition, $M + N$ is a linear subspace of $H$.

Now to show that it is closed.
Let $P: H \to H$ denote the orthogonal projection on $M$.

Denote by $I - P$ the complementary projection of $P$.

Define $N' := \set {n - P n: n \in N}$.
$N'$ is a closed linear subspace of $H$.


This article, or a section of it, needs explaining.In particular: prove the above claimYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Observe $m + n = \paren {m + P n} + \paren {n - P n} \in M + N'$; hence, $M + N \subseteq M + N'$. 
By $m + \paren {n - P n} = \paren {m - P n} + n \in M + N$, conclude that $M + N' \subseteq M + N$, hence equality.

Furthermore, $N' \subseteq \map {\operatorname{ran} } {I - P} = \map \ker P$ by Range of Idempotent is Kernel of Complementary Idempotent.
That is, $N' \subseteq M^\perp$ by Properties of Orthogonal Projection, and hence $M \perp N'$.

Denote by $P'$ the orthogonal projection on $N'$.
Suppose now that $h \in M + N'$. Then:














\(\ds h\)

\(=\)







\(\ds \paren {P + \paren {I - P} } h\)





Definition of Identity Operator














\(\ds \)

\(=\)







\(\ds \paren {P + \paren {I - P} } \paren {P' + \paren {I - P'} } h\)





Definition of Identity Operator














\(\ds \)

\(=\)







\(\ds P P' h + \paren {I - P} P' h + P \paren {I - P'} h \paren {I - P} \paren {I - P'} h\)




















\(\ds \)

\(=\)







\(\ds 0 + P'h + P h + 0\)










For this last equality, observe $M \perp N'$, hence $M \subseteq N'^\perp$, $N' \subseteq M^\perp$ and $\paren {M + N'}^\perp \subseteq M^\perp \cup N'^\perp$.


This needs considerable tedious hard slog to complete it.In particular: link to results establishing the implications of these relations for the associated projections. These results don't exist at the momentTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The conclusion is that every $h \in M + N'$ can be uniquely decomposed as $P' h + P h$, with $P' h \in N', P h \in M$. 
So suppose there is a sequence $h_n \to h$ in $M + N'$. Then $P h_n$ and $P' h_n$ are sequences in $M, N'$, respectively.
As those are closed linear subspaces of $H$, there are $m \in M, n \in N'$ with $P h_n \to m, P' h_n \to n$.
It follows that $h = m + n \in M + N'$.

That is, $M + N' = M + N$ is a closed linear subspace of $H$.
$\blacksquare$





