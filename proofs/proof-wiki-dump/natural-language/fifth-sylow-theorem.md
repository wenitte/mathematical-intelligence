# 

Source: https://proofwiki.org/wiki/Fifth_Sylow_Theorem



Theorem
The number of Sylow $p$-subgroups of a finite group is a divisor of their common index.


Proof 1
By the Orbit-Stabilizer Theorem, the number of conjugates of $P$ is equal to the index of the normalizer $\map {N_G} P$.
Thus by Lagrange's Theorem, the number of Sylow $p$-subgroups divides $\order G$.
Let $m$ be the number of Sylow $p$-subgroups, and let $\order G = k p^n$.
From the Fourth Sylow Theorem, $m \equiv 1 \pmod p$.
So it follows that $m \nmid p \implies m \nmid p^n$.
Thus $m \divides k$ which is the index of the Sylow $p$-subgroups in $G$.
$\blacksquare$


Proof 2
Let $G$ be a finite group of order $p^n m$, where $p \nmid m$ and $n > 0$.
Let $r$ be the number of Sylow $p$-subgroups of $G$.
It is to be shown that $r \divides m$.

Let $H$ be a Sylow $p$-subgroup of $G$.
We have that:

$\order H = p^n$
$\index G H = m$
Let $S_1, S_2, \ldots, S_m$ denote the elements of the left coset space of $G / H$.
We have that $G$ acts on $G / H$ by the rule:

$g * S_i = g S_i$
for $S_i \in G / H$.

There is only one orbit under this action, namely the whole of $G / H$.


This article, or a section of it, needs explaining.In particular: Why? See Orbits of Group Action on Sets with Power of Prime SizeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore the stabilizer of each $S_i$ is a subgroup of $G$ of index $m$ and order $p^n$.
In other words, each $S_i$ has a Sylow $p$-subgroup as a stabilizer.

Now it is shown that each Sylow $p$-subgroup is the stabilizer of one or more of the cosets $S_1, S_2, \ldots, S_m$.

We have that $H$ is the stabilizer of the coset $H$, which must be one of $S_1, S_2, \ldots, S_m$.
Let $S_1, S_2, \ldots, S_k$ be the elements of $G / H$ whose stabilizer is $H$.
By the Third Sylow Theorem, any other Sylow $p$-subgroup of $H$ is a conjugates $g H g^{-1}$ of $H$.
Thus it is seen that $g H g^{-1}$ is a stabilizer of the cosets $g S_1, g S_2, \ldots, g S_k$.
So each of the $r$ distinct Sylow $p$-subgroups of $G$ is the stabilizer of exactly $k$ elements of $G / H$.
Thus:

$m = k r$
and so:

$r \divides m$
as required.
$\blacksquare$


Also known as
Some sources call this the fourth Sylow theorem and merge it with what we call the Fourth Sylow Theorem.
Others merge this result with what we call the Fourth Sylow Theorem and call it the third Sylow theorem.
Others merge this with what we call the Third Sylow Theorem and call it the third Sylow theorem.


Also see
Sylow Theorems


Source of Name
This entry was named for Peter Ludwig Mejdell Sylow.


Historical Note
When cracking open the structure of a group, it is a useful plan to start with investigating the prime subgroups.
The Sylow Theorems are a set of results which provide us with just the sort of information we need.
Ludwig Sylow was a Norwegian mathematician who established some important facts on this subject.
He published what are now referred to as the Sylow Theorems in $1872$.
The name is pronounced something like Soolof.

There is no standard numbering for the Sylow Theorems.
Different authors use different labellings.
Therefore, the nomenclature as defined on $\mathsf{Pr} \infty \mathsf{fWiki}$ is to a greater or lesser extent arbitrary.





