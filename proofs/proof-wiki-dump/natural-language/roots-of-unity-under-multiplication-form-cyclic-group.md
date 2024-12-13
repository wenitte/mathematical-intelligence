# 

Source: https://proofwiki.org/wiki/Roots_of_Unity_under_Multiplication_form_Cyclic_Group


This article is complete as far as it goes, but it could do with expansion.In particular: Expand scope for general Field, and include the Complex Numbers as a corollary or example. This will require careful checking of the sources so as to separate out which apply to general fields and which to the complex numbers alone.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $n \in \Z$ be an integer such that $n > 0$.
The $n$th complex roots of unity under the operation of multiplication form the cyclic group which is isomorphic to $C_n$.


Proof
From Complex Roots of Unity in Exponential Form:

$U_n = \set {e^{2 i k \pi / n}: k \in \N_n}$
where $U_n$ is the set of complex $n$th roots of unity.
Let $\omega = e^{2 i \pi / n}$.
Then we have:

$U_n = \set {\omega^k: k \in \N_n}$
that is:

$U_n = \set {\omega^0, \omega^1, \omega^2, \ldots, \omega^{n - 1} }$
Let $\omega^a, \omega^b \in U_n$.
Then $\omega^a \omega^b = \omega^{a + b} \in U_n$.
Either $a + b < n$, in which case $\omega^{a + b} \in U_n$, or $a + b \ge n$, in which case:














\(\ds \omega^a \omega^b\)

\(=\)







\(\ds \omega^{a + b}\)




















\(\ds \)

\(=\)







\(\ds \omega^{n + t}\)





for some $t < n$














\(\ds \)

\(=\)







\(\ds \omega^n \omega^t\)




















\(\ds \)

\(=\)







\(\ds \omega^t\)





as $\omega^n = 1$



So $U_n$ is closed under multiplication.
We have that $\omega_0 = 1$ is the identity and that $\omega^{n - t}$ is the inverse of $\omega^t$.
Finally we note that $U_n$ is generated by $\omega$.
Hence the result, by definition of cyclic group, and from Cyclic Groups of Same Order are Isomorphic:

$U_n = \gen \omega \cong C_n$.
$\blacksquare$


Also see
Definition:Multiplicative Group of Complex Roots of Unity


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 9$: Cyclic Groups: Example $1$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.09$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 44$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(1)$
1992: William A. Adkins and Steven H. Weintraub: Algebra: An Approach via Module Theory ... (previous) ... (next): $\S 1.1$: Example $4$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $1$: Definitions and Examples: Example $1.6$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Example $4.8$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): group



