# 

Source: https://proofwiki.org/wiki/Second_Sylow_Theorem



Theorem
Let $P$ be a Sylow $p$-subgroup of the finite group $G$.
Let $Q$ be any $p$-subgroup of $G$.

Then $Q$ is a subset of a conjugate of $P$. 


Proof
Let $P$ be a Sylow $p$-subgroup of $G$.
Let $\mathbb S$ be the set of all distinct $G$-conjugates of $P$:

$\mathbb S = \set {g P g^{-1}: g \in G}$

Let $h * S$ be the conjugacy action:

$\forall h \in P, S \in \mathbb S: h * S = h S h^{-1}$
From Conjugacy Action on Subgroups is Group Action, this is a group action for $S \le G$.
To show it is closed for $S \in \mathbb S$:














\(\ds S\)

\(\in\)







\(\ds \mathbb S\)














\(\ds \leadsto \ \ \)

\(\ds \exists g \in G: \, \)



\(\ds S\)

\(=\)







\(\ds g P g^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds h * S\)

\(=\)







\(\ds h \paren {g P g^{-1} } h^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {h g} P \paren {h g}^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds h * S\)

\(\in\)







\(\ds \mathbb S\)










So, consider the orbits and stabilizers of $\mathbb S$ under this group action.
Since $\forall S \in \mathbb S: \Stab S \le P$, we have that:

$\size {\Stab S} \divides \order P$
Therefore, by the Orbit-Stabilizer Theorem, these orbit lengths are all congruent to either $0$ or $1$ modulo $p$, since $P$ is a Sylow $p$-subgroup of $G$.
Note that this will imply, as we shall mark later on:

$\size {\mathbb S} \equiv 1 \pmod p$

Now, $h * P = h P h^{-1} = P$, so:

$\Orb P = \set P$

We now show that $P$ is the only element of $\mathbb S$ such that $\size {\Orb S} = 1$.
If $g P g^{-1}$ has one element in its orbit, then:

$\forall x \in P: x \paren {g P g^{-1} } x^{-1} = g P g^{-1}$
Thus $\forall x \in P$ we have that:

$g^{-1} x g \in \map {N_G} P$
From Order of Conjugate Element equals Order of Element, we have that:

$\order {g^{-1} x g} = \order x$
Thus $P_1 = g^{-1} P g$ is a $p$-subgroup of $\map {N_G} P$.

As $P$ and $P_1$ have the same number of elements, $P_1$ is a Sylow $p$-subgroup of $\map {N_G} P$.
Hence $P_1 = P$ by Normalizer of Sylow p-Subgroup, so $g P g^{-1} = P$.
Thus $P$ is the only element of $\mathbb S$ whose orbit has length $1$.
From Stabilizer of Coset Action on Set of Subgroups, $P = \map {N_G} P$.
Thus, for any $g \notin P$, $\size {\Orb {g P g^{-1} } }$ under conjugation by elements of $P$ has orbit greater than $1$.
Hence:

$\size {\mathbb S} \equiv 1 \pmod p$
as promised.

Next we consider orbits of $\mathbb S$ under conjugation by elements of $Q$.
Since every orbit has length a power of $p$, the above conclusion shows there is at least one orbit of length $1$.
So there is an element $g$ such that:

$\forall x \in Q: x \paren {g P g^{-1} } x^{-1} = g P g^{-1}$
As previously:

$g^{-1} Q g \subseteq \map {N_G} P$
So by Normalizer of Sylow p-Subgroup:

$g^{-1} Q g \subseteq P$
Thus $Q \subseteq g P g^{-1}$ as required.
$\blacksquare$


Also known as
Some sources call this the third Sylow theorem.


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


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Theorem $11.10$




