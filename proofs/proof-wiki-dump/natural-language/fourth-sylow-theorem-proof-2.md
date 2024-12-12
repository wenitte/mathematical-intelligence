# 

Source: https://proofwiki.org/wiki/Fourth_Sylow_Theorem/Proof_2

Theorem
The number of Sylow $p$-subgroups of a finite group is congruent to $1 \pmod p$.


Proof
Let $G$ be a finite group of order $p^n m$, where $p \nmid m$ and $n > 0$.
Let $r$ be the number of Sylow $p$-subgroups of $G$.

Let $H$ be a Sylow $p$-subgroup of $G$.
We have that:

$\order H = p^n$
$\index G H = m$
Let $S_1, S_2, \ldots, S_m$ denote the elements of the left coset space of $G / H$.
We have that $H$ acts on $G / H$ by the rule:

$g * S_i = g S_i$
for $S_i \in G / H$.
Unless $H = G$ and $r = 1$, there is more than $1$ orbit.



This article, or a section of it, needs explaining.In particular: Why? See Orbits of Group Action on Sets with Power of Prime SizeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We have that $H$ is the stabilizer of the coset $H$, which must be one of $S_1, S_2, \ldots, S_m$.
Let $S_1, S_2, \ldots, S_k$ be the elements of $G / H$ whose stabilizer is $H$.
From the Orbit-Stabilizer Theorem and from $\order H = p^n$ we see there are $2$ cases:

$(1): \quad$ The orbit of $S_i$ contains $p^t$ elements where $0 < t < n$
$(2): \quad$ The orbit of $S_i$ contains only the element $S_i$.

$(2)$ occurs if and only if $S_i$ is one of the cosets $S_1, S_2, \ldots, S_k$ whose stabilizer is $H$.
So counting the elements of $G / H$, we see that:

$m = k + u p$
or:

$m \equiv k \pmod p$
From the Fifth Sylow Theorem, we have:

$m \equiv k r \pmod p$
and so:

$k r \equiv k \pmod p$
from which it follows:

$r \equiv 1 \pmod p$
because $k \not \equiv 0 \pmod p$.
Hence the result.
$\blacksquare$



Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Much of the first part of Fifth Sylow Theorem/Proof 2 can be extracted as a lemma, as it is used as the initial basis of this proof.Examine this proof carefully and see whether there are points of commonality with the other Sylow theorems so as to genuinely extract some building blocks.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 58$: Third Sylow Theorem




