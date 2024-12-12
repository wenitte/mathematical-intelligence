# 

Source: https://proofwiki.org/wiki/Cyclic_Group/Group_Presentation

Generator of the Cyclic Group of Order $n$
The presentation of a finite cyclic group of order $n$ is:

$C_n = \gen {a: a^n = e}$


Proof
The elements of $\gen {a: a^n = e}$ are:

$a, a^2, a^3, \ldots, a^{n - 1}, a^n, a^{n + 1}, a^{n + 2}, \ldots$
However, we have that:

$a^n = e$
and so the elements of $\gen {a: a^n = e}$ are:

$a, a^2, a^3, \ldots, a^{n - 1}, e, e a, e a^2, \ldots$
That is:

$C_n = \set {a, a^2, \ldots, a^{n - 1}, e}$
and the result follows by definition of cyclic group.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Example $4.10$




