# 

Source: https://proofwiki.org/wiki/Fourth_Sylow_Theorem



Theorem
The number of Sylow $p$-subgroups of a finite group is congruent to $1 \pmod p$.


Proof 1
Let $G$ be a finite group such that $\order G = k p^n$ where $p \nmid k$ and $n > 0$.
Let $r$ be the number of Sylow $p$-subgroups of $G$.

We want to show that $r \equiv 1 \pmod p$.

Let $\mathbb S = \set {S \subseteq G: \card S = p^n}$, that is, the set of all of subsets of $G$ which have exactly $p^n$ elements.
From the reasoning in the First Sylow Theorem, we have:

$\size {\mathbb S} = \dbinom {p^n k} {p^n}$

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements::

$\forall S \in \mathbb S: g \wedge S = g S = \set {x \in G: x = g s: s \in S}$
From Orbits of Group Action on Sets with Power of Prime Size:

there are exactly as many Sylow $p$-subgroups as there are orbits whose length is not divisible by $p$.
Also by Orbits of Group Action on Sets with Power of Prime Size:

all the terms in the Partition Equation are divisible by $k$, perhaps also divisible by $p$.

We can write the Partition Equation as:

$\size {\mathbb S} = \size {\Orb {S_1} } + \size {\Orb {S_2} } + \cdots + \size {\Orb {S_r} } + \size {\Orb {S_{r + 1} } } + \cdots + \size {\Orb {S_s} }$
where the first $r$ terms are the orbits containing the Sylow $p$-subgroups:

$\Stab {S_i}$
For each of these:

$\order G = \size {\Orb {S_i} } \times \size {\Stab {S_i} } = p^n \size {\Orb {S_i} }$
Thus:

$\size {\Orb {S_i} } = k$
for $1 \le i \le r$.
Each of the rest of the orbits are divisible by both $p$ and $k$, as we have seen.
So:

$\size {\mathbb S} = k r + m p k$
where:

the first term corresponds to the $r$ orbits containing the Sylow $p$-subgroups
the second term corresponds to all the rest of the orbits
$m$ is some unspecified integer.
That is, there exists some integer $m$ such that:

$\size {\mathbb S} = \dbinom {p^n k} {p^n} = k r + m p k$
Now this of course applies to the special case of the cyclic group $C_{p^n k}$.
In this case, there is exactly one subgroup for each divisor of $p^n k$.
In particular, there is exactly one subgroup of order $p^n$.
Hence, in this case:

$r = 1$

So we have an integer $m'$ such that $\dbinom {p^n k} {p^n} = k + m' p k$.
We can now equate these expressions:














\(\ds k r + m p k\)

\(=\)







\(\ds k + m' p k\)














\(\ds \leadsto \ \ \)





\(\ds r + m p\)

\(=\)







\(\ds 1 + m' p\)





dividing by $k$








\(\ds \leadsto \ \ \)





\(\ds r - 1\)

\(=\)







\(\ds p \paren {m' - m}\)














\(\ds \leadsto \ \ \)





\(\ds r - 1\)

\(\equiv\)







\(\ds 0 \pmod p\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(\equiv\)







\(\ds 1 \pmod p\)










and the proof is complete.
$\blacksquare$


Proof 2
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


Also known as
Some sources call this the second Sylow theorem.
Others merge this result with what we call the Fifth Sylow Theorem and call it the third Sylow theorem.


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





