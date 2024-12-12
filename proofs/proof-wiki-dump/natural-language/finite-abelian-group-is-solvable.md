# 

Source: https://proofwiki.org/wiki/Finite_Abelian_Group_is_Solvable



Theorem
Let $G$ be a finite abelian group.

Then $G$ is solvable.


Proof
Proof by strong induction on the order of $G$:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

All abelian groups of order $n$ and below are solvable.


Basis for the Induction
$\map P 1$ is true, as the trivial group is trivially solvable.
From Prime Group is Simple‎, both $\map P 2$ and $\map P 3$ hold.

This is the basis for the induction.


Induction Hypothesis
It remains to be shown that, if $\map P j$ holds, for all $j$ such that $1 \le j \le k$, where $k \ge 3$, then it logically follows that $\map P {k + 1}$ holds.

So this is our induction hypothesis:

All abelian groups of order $k$ and below are solvable.

Then we need to show:

All abelian groups of order $k+1$ and below are solvable.


Induction Step
This is our induction step:
Let $G$ be an abelian group such that:

$\order G = k + 1$
where $\order G$ denotes the order of $G$.
Then from Positive Integer Greater than 1 has Prime Divisor, there exists some prime $p$ which divides $k + 1$.
From Cauchy's Lemma (Group Theory), $G$ has an element of order $p$.
Since $G$ is abelian, this element generates a subgroup of $G$ which is normal by Subgroup of Abelian Group is Normal.
If $p = n$ and $H = G$ the proof is finished, from Prime Power Group is Solvable.
If $p < n$, then $H$ and $G / H$ (which has order $n / p$) are both solvable from the induction hypothesis.
It follows from Group is Solvable iff Normal Subgroup and Quotient are Solvable‎ that $G$ is solvable.

The result follows by the strong principle of mathematical induction.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 75$. Solvable Groups




